import streamlit as st
import mysql.connector
connection = mysql.connector.connect(
    host='localhost',
    user='root',
    password='123456',
    database='tmsvit'
)
cursor = connection.cursor()
st.set_page_config(layout = "wide")

import pandas as pd
from datetime import datetime
from processJSON import processJSON

st.title("TT Manager")
username=st.text_input("Enter Username", type="default", placeholder=None)

if username:
    # Get Student_id
    cursor.execute('SELECT university_id FROM authentication WHERE username = %s', (username,))
    result = cursor.fetchone()
    university_id = result[0]
    st.write(university_id)
    # Get timetable data
    cursor.execute('SELECT * FROM enroll WHERE student_id = %s',(university_id,))
    res = cursor.fetchall()
    fetchJsonData = {"data": []}
    for i in res:
        singleData = {
            "sid": i[0],
            "section": i[2],
            "course": {
                "course_number": i[3],
                "course_name": i[4]
            },
            "room": i[5],
            "instructor": {
                "instructor_id": i[6],
                "instructor_name": i[7]
            },
            "meeting_time": {
                "pid": i[8],
                "time": i[9],
                "day": i[10]
            }
        }
        fetchJsonData["data"].append(singleData)
    
    cursor.close()
    connection.close()

    data = processJSON(fetchJsonData)

    st.markdown("# ")
    st.header("Time Table")

    questions = [
        "What is my next lecture?",
        "What's my schedule for today?",
        "What's my schedule on specific day?",
        "Give me a list of lectures taught by specific professor.",
        "Which rooms are assigned to a particular professor?"
    ]

    question = st.selectbox("Ask a Question", questions)
    index = questions.index(question)

    if index <= 1:
        _, _, day = datetime.today().isocalendar()

    if 3 <= index <= 4:
        profs = list(set(data["instructor_name"]))
        profs.sort()
        prof = st.selectbox("Select a Professor", profs)
        ans = data[data["instructor_name"] == prof]

    if index == 0:
        current_time = datetime.now().time()
        st.write(f"Current Time: {current_time}")
        st.markdown("## ")
        ans = data[(data["weekday"] == day) & (data["start_time"] >= current_time)]

    elif index == 1:
        ans = data[data["weekday"] == day]

    elif index == 2:
        date = st.date_input("Select a date")
        ans = data[data["weekday"] == (date.weekday())]

    elif index == 3:
        ans = ans.sort_values(by = ["course_name"])
        ans = ans[["course_name"]].drop_duplicates().reset_index(drop = True)
        
    elif index == 4:
        ans = ans.sort_values(by = ["room"])
        ans = ans[["room"]].drop_duplicates().reset_index(drop = True)


    if st.button("GET"):
        try:
            st.dataframe(ans.drop("weekday", 1), use_container_width = True)
        except Exception as e:
            print(e)
            st.dataframe(ans)
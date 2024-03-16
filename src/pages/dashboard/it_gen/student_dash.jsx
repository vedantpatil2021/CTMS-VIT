import {
  Button,
} from "@material-tailwind/react";
import React from "react";
import {
  Card,
  Typography,
} from "@material-tailwind/react";
import httpClient from "@/configs/httpClient";
import { useEffect, useState } from "react";

const TABLE_HEAD = [
  "Course No.",
  "Course Name",
  "Faculty",
  "Time Slot",
  "Day",
  "Enroll",
];

export function StudentDash() {
  const [ttData, setttData] = useState([]);
  const [user, setUser] = useState([]);

  const handleEnroll = async(data) => {
    try{
      const response = await httpClient.post('//localhost:5000/enroll',{
          "section":data.section,
          "course_number":data.course.course_number,
          "course_name": data.course.course_name,
          "room":data.room,
          "instructor_id":data.instructor.instructor_id,
          "instructor_name": data.instructor.instructor_name,
          "pid": data.meeting_time.pid,
          "time":data.meeting_time.time,
          "day" :data.meeting_time.day
        })
      window.location.href = "/dashboard/Timetable";
      console.log(response)
    }catch(error){
      alert("Something went wrong")
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const resp = await httpClient.get("//localhost:5000/@me");
        setUser(resp.data);
      } catch (error) {
        console.log("Not authenticated");
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const resp = await httpClient.get("//localhost:5000/public_tt");
        setttData(resp.data.timetable);
      } catch (error) {
        console.log("Not authenticated");
      }
    })();
  }, []);

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ttData
              .filter((data) => data.section === user.dept)
              .map((subdata, index) => {
                const { sid, course, room, instructor, meeting_time } =
                subdata;
                const isLast = index === ttData.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={sid}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {course.course_number}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {course.course_name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {instructor.instructor_name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {meeting_time.time}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {meeting_time.day}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        <Button color="blue" onClick={() => handleEnroll(subdata)}>
                          Enroll
                        </Button>
                      </Typography>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

export default StudentDash;

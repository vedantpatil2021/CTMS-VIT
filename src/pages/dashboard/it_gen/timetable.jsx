import React, { useEffect, useState } from "react";
import httpClient from "@/configs/httpClient";
import {
  Card,
  Button,
  Typography,
} from "@material-tailwind/react";
import SeInft from "@/pages/timetable/seinft";
import TeInft from "@/pages/timetable/teinft";
import BeInft from "@/pages/timetable/beinft";
import { useNavigate } from "react-router-dom";

function TimetableView() {
  const Navigate = useNavigate();
  const getTtId = window.location.search.split("?")[1];
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const [specificData, setSpecificData] = useState([])

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

  const changeStatus = async() => {
    try{
      const response = await httpClient.post(`//localhost:5000/update_tt/${getTtId}`)
      Navigate("/dashboard",{replace: true})
    }catch(error){
      alert("Something went wrong try again later")
    }
  }

  const makePublic = async() => {
    try{
      const response = await httpClient.post(`//localhost:5000/make_public/${getTtId}`)
      Navigate("/dashboard",{replace: true})
    }catch(error){
      alert("Something went wrong try again later")
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const resp = await httpClient.get(`//localhost:5000/get_tt/${getTtId}`);
        setData(resp.data.timetable);
      } catch (error) {
        console.log("Error");
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const resp = await httpClient.get(`//localhost:5000/get_specific_tt/${getTtId}`);
        setSpecificData(resp.data);
      } catch (error) {
        console.log("Error");
      }
    })();
  }, []);

  console.log(user.role)

  console.log(specificData)
  const filteredData = data.filter((item) => item.section === "TE-INFT");
  let groupedData = {};
  filteredData.forEach((item) => {
    if (!groupedData[item.meeting_time.pid]) {
      groupedData[item.meeting_time.pid] = [];
    }
    groupedData[item.meeting_time.pid].push(item);
  });

  return (
    <div className="flex flex-col rounded-2xl bg-white p-4 pb-8">
      <Card color="transparent" shadow={false} className="flex justify-center items-center">
        <Typography variant="h4" color="blue-gray">
          Timetable Report
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3 flex">
              Timetable Unique Id : <div className="font-normal">{specificData.tt_unique_id}</div>
            </Typography>
            <Typography variant="h6" color="blue-gray" className="-mb-3 flex">
              Timetable Generation Date : <div className="font-normal">{specificData.tt_date}</div>
            </Typography>
            <Typography variant="h6" color="blue-gray" className="-mb-3 flex">
              Timetable Generation Time : <div className="font-normal">{specificData.tt_time}</div>
            </Typography>
            <Typography variant="h6" color="blue-gray" className="-mb-3 flex">
              Timetable Name : <div className="font-normal">{specificData.tt_name}</div>
            </Typography>
            <Typography variant="h6" color="blue-gray" className="-mb-3 flex">
              Timetable Department : <div className="font-normal">{specificData.tt_dept}</div>
            </Typography>
          </div>

          {
            specificData.tt_status === "NS"
            ? <Button className="mt-6" fullWidth onClick={changeStatus}>Send to HOD</Button> 
            : specificData.tt_status === "AP" && user.role == "hod"
            ? <Button className="mt-6" fullWidth onClick={changeStatus}>Approve</Button>
            : specificData.tt_status === "AP" 
            ? <Button className="mt-6" fullWidth disabled >Approval Pending From HOD</Button>
            : specificData.tt_status === "TTC" 
            ? <Button className="mt-6" fullWidth onClick={makePublic}>Send to Students and Faculties</Button> 
            : ""
          }
        </form>
      </Card>
        <div className="mt-3"><SeInft ttdata={data}/></div>
        <div className="mt-3"><TeInft ttdata={data}/></div>
        <div className="mt-3"><BeInft ttdata={data}/></div>
    </div>
  );
}

export default TimetableView;

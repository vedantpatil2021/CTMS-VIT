import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState,useEffect } from "react";
import httpClient from "@/configs/httpClient";

const TABLE_HEAD = ["Faculty Id", "Faculty Name"," "];

export function Instructor() {
  const [instructorData, setInstructorData] = useState([]);
  const [fname, setFname] = useState('');
  const [fid, setFid] = useState('')

  let name = fname;
  let uid = fid;

  const createInstructor = async () => {    
    console.log(roomno,seatcap)
    try{
      const response = await httpClient.post('//localhost:5000/instructor',{name,uid},{headers: {"Access-Control-Allow-Origin": true}})
      window.location.href = "/dashboard/instructor";
      console.log(response)
    }catch(error){
      console.log("Error")
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const resp = await httpClient.get("//localhost:5000/instructors");
        setInstructorData(resp.data.instructors);
      } catch (error) {
        console.log("Not authenticated");
      }
    })();
  }, []);

  return (
    <div className="flex flex-col rounded-2xl bg-white p-4 pb-8">
      <Card color="transparent" shadow={false} className="flex justify-center items-center">
        <Typography variant="h4" color="blue-gray">
          Create Rooms
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Fill inputs to create new timetable using the developed Algorithm.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Faculty Name
            </Typography>
            <Input
              size="lg"
              placeholder="INFT"
              onChange={(e) => setFname(e.target.value)}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Faculty ID
            </Typography>
            <Input
              size="lg"
              placeholder="INFT"
              onChange={(e) => setFid(e.target.value)}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Button className="mt-6" fullWidth onClick={createInstructor}>
            Create Rooms
          </Button>
        </form>
      </Card>

      <Card className="h-full w-full overflow-scroll mt-12">
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
            {instructorData.map(({ id, name, uid}, index) => {
              const isLast = index === instructorData.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={id}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {uid}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      Edit
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

export default Instructor;

import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState,useEffect } from "react";
import httpClient from "@/configs/httpClient";

const TABLE_HEAD = ["Id", "Room number", "Seating Capacity"," "];

export function GenTt() {
  const [roomData, setRoomData] = useState([]);
  const [roomno, setRoomno] = useState('');
  const [seatcap, setCapacity] = useState('')

  let r_number = roomno;
  let seating_capacity = seatcap;

  const createRoom = async () => {    
    console.log(roomno,seatcap)
    try{
      const response = await httpClient.post('//localhost:5000/rooms',{r_number,seating_capacity},{headers: {"Access-Control-Allow-Origin": true}})
      window.location.href = "/dashboard/rooms";
      console.log(response)
    }catch(error){
      console.log("Error")
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const resp = await httpClient.get("//localhost:5000/rooms");
        setRoomData(resp.data.rooms);
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
          <div className="my-4 flex items-center gap-4">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Room Number
            </Typography>
            <Input
              size="lg"
              placeholder="E204, L01"
              containerProps={{ className: "min-w-[72px]" }}
              onChange={(e) => setRoomno(e.target.value)}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Seating Capacity
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="72"
              containerProps={{ className: "min-w-[72px]" }}
              onChange={(e) => setCapacity(e.target.value)}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <Button className="mt-6" fullWidth onClick={createRoom}>
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
            {roomData.map(({ id, r_number, seating_capacity}, index) => {
              const isLast = index === roomData.length - 1;
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
                      {id}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {r_number}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {seating_capacity}
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

export default GenTt;

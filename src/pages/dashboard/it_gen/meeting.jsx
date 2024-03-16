import {
  Card,
  Typography,
} from "@material-tailwind/react";
import { useState,useEffect } from "react";
import httpClient from "@/configs/httpClient";

const TABLE_HEAD = ["Meeting ID", "Day", "Time"];

export function Meeting() {
  const [meetingData, setMeetingData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const resp = await httpClient.get("//localhost:5000/meeting_times");
        setMeetingData(resp.data.meeting_times);
      } catch (error) {
        console.log("Not authenticated");
      }
    })();
  }, []);

  return (
    <div className="flex flex-col rounded-2xl bg-white p-4 pb-8">
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
            {meetingData.map(({ pid, day, time}, index) => {
              const isLast = index === meetingData.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={pid}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {pid}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {day}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {time}
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

export default Meeting;

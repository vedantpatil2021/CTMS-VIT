import {
  CardHeader,
  CardBody,
  Chip,
  Tabs,
} from "@material-tailwind/react";
import React from "react";
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import {
  EyeIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import httpClient from "@/configs/httpClient";
import { useEffect, useState } from "react";

export function ItGenDash() {
  const [ttData, setttData] = useState([]);
  const [user, setUser] = useState([]);

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
        const resp = await httpClient.get("//localhost:5000/tthistory");
        setttData(resp.data);
      } catch (error) {
        console.log("Not authenticated");
      }
    })();
  }, []);

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      {user.role == "ttfaculty" ? (
        <div className="w-1/3">
          <a href="http://127.0.0.1:8000/timetable_generation/">
            <Tabs value="app" className="">
              <Card className="w-96">
                <List>
                  <ListItem>
                    <ListItemPrefix>
                      <Avatar
                        variant="circular"
                        alt="candice"
                        src="https://static.vecteezy.com/system/resources/previews/026/286/642/original/calendar-timetable-icon-illustration-logo-template-vector.jpg"
                      />
                    </ListItemPrefix>
                    <div>
                      <Typography variant="h6" color="blue-gray">
                        Generate Time Table
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                      >
                        The Time table that will be generated will use Genetic
                        Algorithm
                      </Typography>
                    </div>
                  </ListItem>
                </List>
              </Card>
            </Tabs>
          </a>
        </div>
      ) : (
        <br />
      )}
      <Card>
        <CardHeader
          variant="gradient"
          color="gray"
          className=" mb-8 flex justify-between p-6"
        >
          <Typography
            variant="h6"
            color="white"
            className=" m-0 flex items-center"
          >
            Generated Timetables
          </Typography>
        </CardHeader>

        <CardBody className="overflow-x-auto px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto overflow-x-auto">
            <thead>
              <tr>
                {[
                  "Department",
                  "Date",
                  "Time",
                  "Status",
                  "Timetable Id",
                  "Timetable Name",
                  "View",
                  "Delete",
                ].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ttData.map(
                (
                  {
                    tt_dept,
                    tt_id,
                    tt_name,
                    tt_status,
                    tt_unique_id,
                    tt_date,
                    tt_time,
                  },
                  key
                ) => {
                  const className = `py-3 px-5 ${
                    key === ttData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={tt_name}>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {tt_dept}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {tt_date}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {tt_time}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Chip
                          variant="ghost"
                          color={
                            tt_status === "NS"
                              ? "red"
                              : tt_status === "AP"
                              ? "amber"
                              : tt_status === "TTC"
                              ? "cyan"
                              : tt_status === "TMP"
                              ? "green"
                              : " "
                          }
                          value={
                            tt_status === "NS"
                              ? "Not Started"
                              : tt_status === "AP"
                              ? "Approval Pending"
                              : tt_status === "TTC"
                              ? "Confirmed"
                              : tt_status === "TMP"
                              ? "Made Public"
                              : ""
                          }
                          className="p-2 font-medium"
                        />
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {tt_unique_id}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {tt_name}
                        </Typography>
                      </td>
                      <td className={className}>
                        <IconButton variant="text" color="blue-gray">
                          <a href={`timetableview?${tt_id}`}>
                            <EyeIcon className="h-5 w-5 text-blue-gray-500" />
                          </a>
                        </IconButton>
                      </td>
                      <td className={className}>
                        <IconButton variant="text" color="blue-gray">
                          <TrashIcon className="h-5 w-5 text-blue-gray-500" />
                        </IconButton>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}


export default ItGenDash;

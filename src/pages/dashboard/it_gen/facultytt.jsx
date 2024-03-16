import React, { useEffect, useState } from "react";
import {
  Card,
  Typography,
} from "@material-tailwind/react";
import httpClient from "@/configs/httpClient";

const TABLE_HEAD = ["", "Monday", "Tuesday", "Wednesday", "Thusday", "Friday"];

function FacultyTT() {
  const [user, setUser] = useState([]);
  const [data, setData] = useState([]);

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

  var universityId = user.university_id;

  useEffect(() => {
    (async () => {
      try {
        const resp = await httpClient.get("//localhost:5000/public_tt");
        setData(resp.data.timetable);
      } catch (error) {
        console.log("Error");
      }
    })();
  }, []);

  const filteredData = data.filter(
    (item) => item.instructor.instructor_id === universityId
  );
  let groupedData = {};
  filteredData.forEach((item) => {
    if (!groupedData[item.meeting_time.pid]) {
      groupedData[item.meeting_time.pid] = [];
    }
    groupedData[item.meeting_time.pid].push(item);
  });

  return (
    <div className="flex flex-col rounded-2xl bg-white p-4 pb-8">
      <>
        <Card
          color="transparent"
          shadow={false}
          className="mt-3 flex items-center justify-center"
        >
          <Typography variant="h4" color="blue-gray">
            Faculty's Timetable
          </Typography>
        </Card>

        <Card className="mt-12 h-full w-full overflow-scroll">
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
              <tr>
                <td className="border-b border-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    9:00 - 10:00
                  </Typography>
                </td>
                <td>
                  {Object.keys(groupedData).map((key) =>
                    key === "MM01" ? (
                      <div key={key} id={key}>
                        {groupedData[key].map((item) => (
                          <>
                            <p className="text-xs">
                              {item.course.course_name}{" "}
                              {item.instructor.instructor_name} {item.room}
                            </p>
                          </>
                        ))}
                      </div>
                    ) : (
                      <div id={key}></div>
                    )
                  )}
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  {Object.keys(groupedData).map((key) =>
                    key === "MTU1" ? (
                      <div key={key} id={key}>
                        {groupedData[key].map((item) => (
                          <>
                            <p className="text-xs">
                              {item.course.course_name}{" "}
                              {item.instructor.instructor_name} {item.room}
                            </p>
                          </>
                        ))}
                      </div>
                    ) : (
                      <div id={key}></div>
                    )
                  )}
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  {Object.keys(groupedData).map((key) =>
                    key === "MW01" ? (
                      <div key={key} id={key}>
                        {groupedData[key].map((item) => (
                          <>
                            <p className="text-xs">
                              {item.course.course_name}{" "}
                              {item.instructor.instructor_name} {item.room}
                            </p>
                          </>
                        ))}
                      </div>
                    ) : (
                      <div id={key}></div>
                    )
                  )}
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  {Object.keys(groupedData).map((key) =>
                    key === "MTH1" ? (
                      <div key={key} id={key}>
                        {groupedData[key].map((item) => (
                          <>
                            <p className="text-xs">
                              {item.course.course_name}{" "}
                              {item.instructor.instructor_name} {item.room}
                            </p>
                          </>
                        ))}
                      </div>
                    ) : (
                      <div id={key}></div>
                    )
                  )}
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  {Object.keys(groupedData).map((key) =>
                    key === "MF01" ? (
                      <div key={key} id={key}>
                        {groupedData[key].map((item) => (
                          <>
                            <p className="text-xs">
                              {item.course.course_name}{" "}
                              {item.instructor.instructor_name} {item.room}
                            </p>
                          </>
                        ))}
                      </div>
                    ) : (
                      <div id={key}></div>
                    )
                  )}
                </td>
              </tr>
              <tr className="even:bg-blue-gray-50/50">
                <td className="border-b border-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    10:00 - 11:00
                  </Typography>
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  {Object.keys(groupedData).map((key) =>
                    key === "MM02" ? (
                      <div key={key} id={key}>
                        {groupedData[key].map((item) => (
                          <>
                            <p className="text-xs">
                              {item.course.course_name}{" "}
                              {item.instructor.instructor_name} {item.room}
                            </p>
                          </>
                        ))}
                      </div>
                    ) : (
                      <div id={key}></div>
                    )
                  )}
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  {Object.keys(groupedData).map((key) =>
                    key === "MTU2" ? (
                      <div key={key} id={key}>
                        {groupedData[key].map((item) => (
                          <>
                            <p className="text-xs">
                              {item.course.course_name}{" "}
                              {item.instructor.instructor_name} {item.room}
                            </p>
                          </>
                        ))}
                      </div>
                    ) : (
                      <div id={key}></div>
                    )
                  )}
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  {Object.keys(groupedData).map((key) =>
                    key === "MW02" ? (
                      <div key={key} id={key}>
                        {groupedData[key].map((item) => (
                          <>
                            <p className="text-xs">
                              {item.course.course_name}{" "}
                              {item.instructor.instructor_name} {item.room}
                            </p>
                          </>
                        ))}
                      </div>
                    ) : (
                      <div id={key}></div>
                    )
                  )}
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  {Object.keys(groupedData).map((key) =>
                    key === "MTH2" ? (
                      <div key={key} id={key}>
                        {groupedData[key].map((item) => (
                          <>
                            <p className="text-xs">
                              {item.course.course_name}{" "}
                              {item.instructor.instructor_name} {item.room}
                            </p>
                          </>
                        ))}
                      </div>
                    ) : (
                      <div id={key}></div>
                    )
                  )}
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  {Object.keys(groupedData).map((key) =>
                    key === "MF02" ? (
                      <div key={key} id={key}>
                        {groupedData[key].map((item) => (
                          <>
                            <p className="text-xs">
                              {item.course.course_name}{" "}
                              {item.instructor.instructor_name} {item.room}
                            </p>
                          </>
                        ))}
                      </div>
                    ) : (
                      <div id={key}></div>
                    )
                  )}
                </td>
              </tr>
              <tr>
                <td className="border-b border-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    11:15 - 12.15
                  </Typography>
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  {Object.keys(groupedData).map((key) =>
                    key === "MM03" ? (
                      <div key={key} id={key}>
                        {groupedData[key].map((item) => (
                          <>
                            <p className="text-xs">
                              {item.course.course_name}{" "}
                              {item.instructor.instructor_name} {item.room}
                            </p>
                          </>
                        ))}
                      </div>
                    ) : (
                      <div id={key}></div>
                    )
                  )}
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  {Object.keys(groupedData).map((key) =>
                    key === "MTU3" ? (
                      <div key={key} id={key}>
                        {groupedData[key].map((item) => (
                          <>
                            <p className="text-xs">
                              {item.course.course_name}{" "}
                              {item.instructor.instructor_name} {item.room}
                            </p>
                          </>
                        ))}
                      </div>
                    ) : (
                      <div id={key}></div>
                    )
                  )}
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  {Object.keys(groupedData).map((key) =>
                    key === "MW01" ? (
                      <div key={key} id={key}>
                        {groupedData[key].map((item) => (
                          <>
                            <p className="text-xs">
                              {item.course.course_name}{" "}
                              {item.instructor.instructor_name} {item.room}
                            </p>
                          </>
                        ))}
                      </div>
                    ) : (
                      <div id={key}></div>
                    )
                  )}
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  {Object.keys(groupedData).map((key) =>
                    key === "MTH3" ? (
                      <div key={key} id={key}>
                        {groupedData[key].map((item) => (
                          <>
                            <p className="text-xs">
                              {item.course.course_name}{" "}
                              {item.instructor.instructor_name} {item.room}
                            </p>
                          </>
                        ))}
                      </div>
                    ) : (
                      <div id={key}></div>
                    )
                  )}
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  {Object.keys(groupedData).map((key) =>
                    key === "MF03" ? (
                      <div key={key} id={key}>
                        {groupedData[key].map((item) => (
                          <>
                            <p className="text-xs">
                              {item.course.course_name}{" "}
                              {item.instructor.instructor_name} {item.room}
                            </p>
                          </>
                        ))}
                      </div>
                    ) : (
                      <div id={key}></div>
                    )
                  )}
                </td>
              </tr>
              <tr className="even:bg-blue-gray-50/50">
                <td className="border-b border-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    12:15 - 1.15
                  </Typography>
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  {Object.keys(groupedData).map((key) =>
                    key === "MM04" ? (
                      <div key={key} id={key}>
                        {groupedData[key].map((item) => (
                          <>
                            <p className="text-xs">
                              {item.course.course_name}{" "}
                              {item.instructor.instructor_name} {item.room}
                            </p>
                          </>
                        ))}
                      </div>
                    ) : (
                      <div id={key}></div>
                    )
                  )}
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  {Object.keys(groupedData).map((key) =>
                    key === "MTU4" ? (
                      <div key={key} id={key}>
                        {groupedData[key].map((item) => (
                          <>
                            <p className="text-xs">
                              {item.course.course_name}{" "}
                              {item.instructor.instructor_name} {item.room}
                            </p>
                          </>
                        ))}
                      </div>
                    ) : (
                      <div id={key}></div>
                    )
                  )}
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  {Object.keys(groupedData).map((key) =>
                    key === "MW01" ? (
                      <div key={key} id={key}>
                        {groupedData[key].map((item) => (
                          <>
                            <p className="text-xs">
                              {item.course.course_name}{" "}
                              {item.instructor.instructor_name} {item.room}
                            </p>
                          </>
                        ))}
                      </div>
                    ) : (
                      <div id={key}></div>
                    )
                  )}
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  {Object.keys(groupedData).map((key) =>
                    key === "MTH4" ? (
                      <div key={key} id={key}>
                        {groupedData[key].map((item) => (
                          <>
                            <p className="text-xs">
                              {item.course.course_name}{" "}
                              {item.instructor.instructor_name} {item.room}
                            </p>
                          </>
                        ))}
                      </div>
                    ) : (
                      <div id={key}></div>
                    )
                  )}
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  {Object.keys(groupedData).map((key) =>
                    key === "MF04" ? (
                      <div key={key} id={key}>
                        {groupedData[key].map((item) => (
                          <>
                            <p className="text-xs">
                              {item.course.course_name}{" "}
                              {item.instructor.instructor_name} {item.room}
                            </p>
                          </>
                        ))}
                      </div>
                    ) : (
                      <div id={key}></div>
                    )
                  )}
                </td>
              </tr>
              <tr>
                <td className="border-b border-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="black"
                    className="font-normal font-extrabold"
                  >
                    1:15 - 1.45
                  </Typography>
                </td>
                <td className="border-b border-blue-gray-50 p-4 font-bold text-black">
                  Break
                </td>
                <td className="border-b border-blue-gray-50 p-4 font-bold text-black">
                  Break
                </td>
                <td className="border-b border-blue-gray-50 p-4 font-bold text-black">
                  Break
                </td>
                <td className="border-b border-blue-gray-50 p-4 font-bold text-black">
                  Break
                </td>
                <td className="border-b border-blue-gray-50 p-4 font-bold text-black">
                  Break
                </td>
              </tr>
              <tr className="even:bg-blue-gray-50/50">
                <td className="border-b border-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    1:45 - 2.45
                  </Typography>
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  {Object.keys(groupedData).map((key) =>
                    key === "MM05" ? (
                      <div key={key} id={key}>
                        {groupedData[key].map((item) => (
                          <>
                            <p className="text-xs">
                              {item.course.course_name}{" "}
                              {item.instructor.instructor_name} {item.room}
                            </p>
                          </>
                        ))}
                      </div>
                    ) : (
                      <div id={key}></div>
                    )
                  )}
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  {Object.keys(groupedData).map((key) =>
                    key === "MTU5" ? (
                      <div key={key} id={key}>
                        {groupedData[key].map((item) => (
                          <>
                            <p className="text-xs">
                              {item.course.course_name}{" "}
                              {item.instructor.instructor_name} {item.room}
                            </p>
                          </>
                        ))}
                      </div>
                    ) : (
                      <div id={key}></div>
                    )
                  )}
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  {Object.keys(groupedData).map((key) =>
                    key === "MW05" ? (
                      <div key={key} id={key}>
                        {groupedData[key].map((item) => (
                          <>
                            <p className="text-xs">
                              {item.course.course_name}{" "}
                              {item.instructor.instructor_name} {item.room}
                            </p>
                          </>
                        ))}
                      </div>
                    ) : (
                      <div id={key}></div>
                    )
                  )}
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  {Object.keys(groupedData).map((key) =>
                    key === "MTH5" ? (
                      <div key={key} id={key}>
                        {groupedData[key].map((item) => (
                          <>
                            <p className="text-xs">
                              {item.course.course_name}{" "}
                              {item.instructor.instructor_name} {item.room}
                            </p>
                          </>
                        ))}
                      </div>
                    ) : (
                      <div id={key}></div>
                    )
                  )}
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  {Object.keys(groupedData).map((key) =>
                    key === "MF05" ? (
                      <div key={key} id={key}>
                        {groupedData[key].map((item) => (
                          <>
                            <p className="text-xs">
                              {item.course.course_name}{" "}
                              {item.instructor.instructor_name} {item.room}
                            </p>
                          </>
                        ))}
                      </div>
                    ) : (
                      <div id={key}></div>
                    )
                  )}
                </td>
              </tr>
              <tr>
                <td className="border-b border-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    2:45 - 3.45
                  </Typography>
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  {Object.keys(groupedData).map((key) =>
                    key === "MM06" ? (
                      <div key={key} id={key}>
                        {groupedData[key].map((item) => (
                          <>
                            <p className="text-xs">
                              {item.course.course_name}{" "}
                              {item.instructor.instructor_name} {item.room}
                            </p>
                          </>
                        ))}
                      </div>
                    ) : (
                      <div id={key}></div>
                    )
                  )}
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  {Object.keys(groupedData).map((key) =>
                    key === "MTU6" ? (
                      <div key={key} id={key}>
                        {groupedData[key].map((item) => (
                          <>
                            <p className="text-xs">
                              {item.course.course_name}{" "}
                              {item.instructor.instructor_name} {item.room}
                            </p>
                          </>
                        ))}
                      </div>
                    ) : (
                      <div id={key}></div>
                    )
                  )}
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  {Object.keys(groupedData).map((key) =>
                    key === "MW06" ? (
                      <div key={key} id={key}>
                        {groupedData[key].map((item) => (
                          <>
                            <p className="text-xs">
                              {item.course.course_name}{" "}
                              {item.instructor.instructor_name} {item.room}
                            </p>
                          </>
                        ))}
                      </div>
                    ) : (
                      <div id={key}></div>
                    )
                  )}
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  {Object.keys(groupedData).map((key) =>
                    key === "MTH6" ? (
                      <div key={key} id={key}>
                        {groupedData[key].map((item) => (
                          <>
                            <p className="text-xs">
                              {item.course.course_name}{" "}
                              {item.instructor.instructor_name} {item.room}
                            </p>
                          </>
                        ))}
                      </div>
                    ) : (
                      <div id={key}></div>
                    )
                  )}
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  {Object.keys(groupedData).map((key) =>
                    key === "MF06" ? (
                      <div key={key} id={key}>
                        {groupedData[key].map((item) => (
                          <>
                            <p className="text-xs">
                              {item.course.course_name}{" "}
                              {item.instructor.instructor_name} {item.room}
                            </p>
                          </>
                        ))}
                      </div>
                    ) : (
                      <div id={key}></div>
                    )
                  )}
                </td>
              </tr>
              <tr className="even:bg-blue-gray-50/50">
                <td className="border-b border-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    3:45 - 4.45
                  </Typography>
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  {Object.keys(groupedData).map((key) =>
                    key === "MM07" ? (
                      <div key={key} id={key}>
                        {groupedData[key].map((item) => (
                          <>
                            <p className="text-xs">
                              {item.course.course_name}{" "}
                              {item.instructor.instructor_name} {item.room}
                            </p>
                          </>
                        ))}
                      </div>
                    ) : (
                      <div id={key}></div>
                    )
                  )}
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  {Object.keys(groupedData).map((key) =>
                    key === "MTU7" ? (
                      <div key={key} id={key}>
                        {groupedData[key].map((item) => (
                          <>
                            <p className="text-xs">
                              {item.course.course_name}{" "}
                              {item.instructor.instructor_name} {item.room}
                            </p>
                          </>
                        ))}
                      </div>
                    ) : (
                      <div id={key}></div>
                    )
                  )}
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  {Object.keys(groupedData).map((key) =>
                    key === "MW07" ? (
                      <div key={key} id={key}>
                        {groupedData[key].map((item) => (
                          <>
                            <p className="text-xs">
                              {item.course.course_name}{" "}
                              {item.instructor.instructor_name} {item.room}
                            </p>
                          </>
                        ))}
                      </div>
                    ) : (
                      <div id={key}></div>
                    )
                  )}
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  {Object.keys(groupedData).map((key) =>
                    key === "MTH7" ? (
                      <div key={key} id={key}>
                        {groupedData[key].map((item) => (
                          <>
                            <p className="text-xs">
                              {item.course.course_name}{" "}
                              {item.instructor.instructor_name} {item.room}
                            </p>
                          </>
                        ))}
                      </div>
                    ) : (
                      <div id={key}></div>
                    )
                  )}
                </td>
                <td className="border-b border-blue-gray-50 p-4">
                  {Object.keys(groupedData).map((key) =>
                    key === "MF07" ? (
                      <div key={key} id={key}>
                        {groupedData[key].map((item) => (
                          <>
                            <p className="text-xs">
                              {item.course.course_name}{" "}
                              {item.instructor.instructor_name} {item.room}
                            </p>
                          </>
                        ))}
                      </div>
                    ) : (
                      <div id={key}></div>
                    )
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
      </>
    </div>
  );
}

export default FacultyTT;

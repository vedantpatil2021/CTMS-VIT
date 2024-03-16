import {
  Card,
  Input,
  Select,
  Option,
  Button,
  Typography,
} from "@material-tailwind/react";

const TABLE_HEAD = ["", "Monday", "Tuesday","Wednesday","Thusday", "Friday"];

export function Viewtimetable() {

  return (
    <div className="flex flex-col rounded-2xl bg-white p-4 pb-8">
      <Card color="transparent" shadow={false} className="flex justify-center items-center">
        <Typography variant="h4" color="blue-gray">
          View Timetable
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Fill inputs to create new timetable using the developed Algorithm.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-2">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Date
            </Typography>
            <Input
              size="lg"
              type="date"
              placeholder="E204, L01"
              containerProps={{ className: "min-w-[72px]" }}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Timetable Name
            </Typography>
            <Select label="Select Version">
                <Option>Material Tailwind HTML</Option>
            </Select>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Year
            </Typography>
            <Select label="Select Version">
                <Option>SE-INFT</Option>
                <Option>TE-INFT</Option>
                <Option>BE-INFT</Option>
            </Select>
          </div>

          <Button className="mt-6" fullWidth>
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
            <tr>
                <td className="p-4 border-b border-blue-gray-50"><Typography variant="small" color="blue-gray" className="font-normal">9:00 - 10:00</Typography></td>
                <td className="p-4 border-b border-blue-gray-50"></td>
                <td className="p-4 border-b border-blue-gray-50"></td>
                <td className="p-4 border-b border-blue-gray-50"></td>
                <td className="p-4 border-b border-blue-gray-50"></td>
                <td className="p-4 border-b border-blue-gray-50"></td>
            </tr>
            <tr className="even:bg-blue-gray-50/50">
                <td className="p-4 border-b border-blue-gray-50"><Typography variant="small" color="blue-gray" className="font-normal">10:00 - 11:00</Typography></td>
                <td className="p-4 border-b border-blue-gray-50"></td>
                <td className="p-4 border-b border-blue-gray-50"></td>
                <td className="p-4 border-b border-blue-gray-50"></td>
                <td className="p-4 border-b border-blue-gray-50"></td>
                <td className="p-4 border-b border-blue-gray-50"></td>
            </tr>
            <tr>
                <td className="p-4 border-b border-blue-gray-50"><Typography variant="small" color="blue-gray" className="font-normal">11:15 - 12.15</Typography></td>
                <td className="p-4 border-b border-blue-gray-50"></td>
                <td className="p-4 border-b border-blue-gray-50"></td>
                <td className="p-4 border-b border-blue-gray-50"></td>
                <td className="p-4 border-b border-blue-gray-50"></td>
                <td className="p-4 border-b border-blue-gray-50"></td>
            </tr>
            <tr className="even:bg-blue-gray-50/50">
                <td className="p-4 border-b border-blue-gray-50"><Typography variant="small" color="blue-gray" className="font-normal">12:15 - 1.15</Typography></td>
                <td className="p-4 border-b border-blue-gray-50"></td>
                <td className="p-4 border-b border-blue-gray-50"></td>
                <td className="p-4 border-b border-blue-gray-50"></td>
                <td className="p-4 border-b border-blue-gray-50"></td>
                <td className="p-4 border-b border-blue-gray-50"></td>
            </tr>
            <tr>
                <td className="p-4 border-b border-blue-gray-50"><Typography variant="small" color="black" className="font-normal font-extrabold">1:15 - 1.45</Typography></td>
                <td className="p-4 border-b border-blue-gray-50 text-black font-bold">Break</td>
                <td className="p-4 border-b border-blue-gray-50 text-black font-bold">Break</td>
                <td className="p-4 border-b border-blue-gray-50 text-black font-bold">Break</td>
                <td className="p-4 border-b border-blue-gray-50 text-black font-bold">Break</td>
                <td className="p-4 border-b border-blue-gray-50 text-black font-bold">Break</td>
            </tr>
            <tr className="even:bg-blue-gray-50/50">
                <td className="p-4 border-b border-blue-gray-50"><Typography variant="small" color="blue-gray" className="font-normal">1:45 - 2.45</Typography></td>
                <td className="p-4 border-b border-blue-gray-50"></td>
                <td className="p-4 border-b border-blue-gray-50"></td>
                <td className="p-4 border-b border-blue-gray-50"></td>
                <td className="p-4 border-b border-blue-gray-50"></td>
                <td className="p-4 border-b border-blue-gray-50"></td>
            </tr>
            <tr>
                <td className="p-4 border-b border-blue-gray-50"><Typography variant="small" color="blue-gray" className="font-normal">2:45 - 3.45</Typography></td>
                <td className="p-4 border-b border-blue-gray-50"></td>
                <td className="p-4 border-b border-blue-gray-50"></td>
                <td className="p-4 border-b border-blue-gray-50"></td>
                <td className="p-4 border-b border-blue-gray-50"></td>
                <td className="p-4 border-b border-blue-gray-50"></td>
            </tr>
            <tr className="even:bg-blue-gray-50/50">
                <td className="p-4 border-b border-blue-gray-50"><Typography variant="small" color="blue-gray" className="font-normal">3:45 - 4.45</Typography></td>
                <td className="p-4 border-b border-blue-gray-50"></td>
                <td className="p-4 border-b border-blue-gray-50"></td>
                <td className="p-4 border-b border-blue-gray-50"></td>
                <td className="p-4 border-b border-blue-gray-50"></td>
                <td className="p-4 border-b border-blue-gray-50"></td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
}

export default Viewtimetable;

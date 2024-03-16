import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import httpClient from "@/configs/httpClient";

export function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await httpClient.post("//localhost:5000/login", {
        username,
        password,
      });
      if (response.data.role == "student") {
        window.location.href = "/dashboard/studentdash";
      } else if (response.data.role == "faculty") {
        window.location.href = "/dashboard/mytimetable";
      } else {
        window.location.href = "/dashboard/";
      }
      console.log(response.data.role);
    } catch (error) {
      if (error.response.status == 401) {
        alert("Invalid Credentials");
      }
    }
  };
  return (
    <section className=" flex gap-4">
      <div className="mt-24 w-full lg:w-3/5">
        <div className="text-center">
          <Typography variant="h2" className="mb-4 font-bold">
            Sign In
          </Typography>
          <Typography
            variant="paragraph"
            color="blue-gray"
            className="text-lg font-normal"
          >
            Enter your email and password to Sign In.
          </Typography>
        </div>
        <form
          className="mx-auto mt-8 mb-2 w-80 max-w-screen-lg lg:w-1/2"
          method="POST"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Your email
            </Typography>
            <Input
              size="lg"
              placeholder="name.surname"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Button className="mt-6" fullWidth onClick={handleLogin}>
            Sign In
          </Button>
        </form>
      </div>
      <div className="h-screen w-full lg:w-2/5">
        <img src="/img/pattern.png" className="rounded-5xl  h-screen  w-full" />
      </div>
    </section>
  );
}

export default SignIn;

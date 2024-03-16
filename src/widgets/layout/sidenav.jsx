import { NavLink } from "react-router-dom";
import {
  Avatar,
  Button,
  Typography,
} from "@material-tailwind/react"
import { useMaterialTailwindController, setOpenSidenav } from "@/context";

export function Sidenav({ routes,userRole,userName }) {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavColor, sidenavType, openSidenav } = controller;
  const sidenavTypes = {
    dark: "bg-gradient-to-br from-blue-gray-800 to-blue-gray-900",
    white: "bg-white shadow-lg",
    transparent: "bg-transparent",
  };
  return (
    <aside
      className={`${sidenavTypes[sidenavType]} ${
        openSidenav ? "translate-x-0" : "-translate-x-80"
      } h-100vh fixed inset-0 z-50 my-2 ml-4 w-72 overflow-y-auto rounded-xl border border-blue-gray-100 transition-transform duration-300 xl:translate-x-0`}
    >
      <div className="m-4 mb-8 text-center">
        <Avatar
          src="https://img.freepik.com/premium-psd/3d-cartoon-man-smiling-portrait-isolated-transparent-background-png-psd_888962-1569.jpg"
          className="m-4 mx-auto h-full w-24 rounded text-center"
        />
        <h3 className="m-1 text-lg leading-tight text-black">{userName}</h3>
        <h6 className="m-2 text-sm leading-tight text-black">{userRole === "superadmin" ? "Super Admin" : userRole === "ttfaculty" ? "Timetable Incharge" : userRole === "hod" ? "HOD" : userRole === "faculty" ? "Faculty" : "Student"} </h6>
      </div>
      <div className="m-4">
        {routes.map(({ layout, title, pages }, key) => (
          <ul key={key} className="mb-4 flex flex-col gap-1">
            {title && (
              <li className="mx-3.5 mt-4 mb-2">
                <Typography
                  variant="small"
                  color={sidenavType === "dark" ? "white" : "blue-gray"}
                  className="font-black uppercase opacity-75"
                >
                  {title}
                </Typography>
              </li>
            )}
            {pages.map(({ icon, name, path, role }) => {
              if (role == userRole) {
                return (
                  <li key={name}>
                    <NavLink to={`/${layout}${path}`}>
                      {({ isActive }) => (
                        <Button
                          variant={isActive ? "gradient" : "text"}
                          color={
                            isActive
                              ? sidenavColor
                              : sidenavType === "dark"
                              ? "white"
                              : "blue-gray"
                          }
                          className="flex items-center gap-4 px-4 capitalize"
                          fullWidth
                        >
                          {icon}
                          <Typography
                            color="inherit"
                            className="font-medium capitalize"
                          >
                            {name}
                          </Typography>
                        </Button>
                      )}
                    </NavLink>
                  </li>
                );
              }
            })}
          </ul>
        ))}
      </div>
    </aside>
  );
}

Sidenav.defaultProps = {
  brandImg: "/img/logo-ct.png",
  brandName: "TMS",
};

Sidenav.displayName = "/src/widgets/layout/sidnave.jsx";

export default Sidenav;

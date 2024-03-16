import {
  HomeIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  BookOpenIcon,
  CalendarDaysIcon,
  AcademicCapIcon,
  BuildingLibraryIcon,
  Square2StackIcon,
  PresentationChartLineIcon,
  PencilSquareIcon,
  ViewColumnsIcon,
  TableCellsIcon
} from "@heroicons/react/24/solid";
import Instructor from "./pages/dashboard/it_gen/instructor"
import Meeting from "./pages/dashboard/it_gen/meeting"
import ItGenDash from "./pages/dashboard/it_gen/itgen_dash";
import GenTt from "./pages/dashboard/it_gen/rooms";
import { SignIn, SignUp } from "@/pages/auth";
import Viewtimetable from "./pages/dashboard/it_gen/viewtimetable";
import TimetableView from "./pages/dashboard/it_gen/timetable";
import FacultyTT from "./pages/dashboard/it_gen/facultytt";
import StudentTT from "./pages/dashboard/it_gen/studenttt";
import StudentDash from "./pages/dashboard/it_gen/student_dash";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      // Super_Admin
      {
        icon: <HomeIcon {...icon} />,
        name: "Dashboard",
        path: "/dashboard",
        element: <ItGenDash />,
        role : "superadmin"
      },
      {
        icon: <ViewColumnsIcon {...icon} />,
        name: "View Timetable",
        path: "/viewtimetable",
        element: <Viewtimetable />,
        role : "superadmin"
      },
      {
        icon: <Square2StackIcon {...icon} />,
        name: "Rooms",
        path: "/rooms",
        element: <GenTt />,
        role : "superadmin"
      },
      {
        icon: <AcademicCapIcon {...icon} />,
        name: "Instructor",
        path: "/instructor",
        element: <Instructor />,
        role : "superadmin"
      },
      {
        icon: <CalendarDaysIcon {...icon} />,
        name: "Meetings",
        path: "/meeting",
        element: <Meeting />,
        role : "superadmin"
      },
      {
        icon: <BookOpenIcon {...icon} />,
        name: "Course",
        path: "/cource",
        element: <GenTt />,
        role : "superadmin"
      },
      {
        icon: <BuildingLibraryIcon {...icon} />,
        name: "Department",
        path: "/department",
        element: <GenTt />,
        role : "superadmin"
      },
      {
        icon: <PresentationChartLineIcon {...icon} />,
        name: "Sections",
        path: "/sections",
        element: <GenTt />,
        role : "superadmin"
      },
      {
        icon: <PencilSquareIcon {...icon} />,
        name: "Enrollment",
        path: "/enroll",
        element: <GenTt />,
        role : "superadmin"
      },
      {
        name: "Timetable",
        path: "/timetableview",
        element: <TimetableView />,
      },


      // TT_Faculty
      {
        icon: <HomeIcon {...icon} />,
        name: "Dashboard",
        path: "/",
        element: <ItGenDash />,
        role : "ttfaculty"
      },
      {
        icon: <Square2StackIcon {...icon} />,
        name: "Rooms",
        path: "/rooms",
        element: <GenTt />,
        role : "ttfaculty"
      },
      {
        icon: <AcademicCapIcon {...icon} />,
        name: "Instructor",
        path: "/instructor",
        element: <GenTt />,
        role : "ttfaculty"
      },
      {
        icon: <CalendarDaysIcon {...icon} />,
        name: "Meetings",
        path: "/meeting",
        element: <GenTt />,
        role : "ttfaculty"
      },
      {
        icon: <BookOpenIcon {...icon} />,
        name: "Course",
        path: "/cource",
        element: <GenTt />,
        role : "ttfaculty"
      },
      {
        icon: <BuildingLibraryIcon {...icon} />,
        name: "Department",
        path: "/department",
        element: <GenTt />,
        role : "ttfaculty"
      },
      {
        icon: <PresentationChartLineIcon {...icon} />,
        name: "Sections",
        path: "/sections",
        element: <GenTt />,
        role : "ttfaculty"
      },
      {
        icon: <PencilSquareIcon {...icon} />,
        name: "Enrollment",
        path: "/enroll",
        element: <GenTt />,
        role : "ttfaculty"
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "My Timetable",
        path: "/mytimetable",
        element: <FacultyTT />,
        role : "ttfaculty"
      },
      //HOD
      {
        icon: <HomeIcon {...icon} />,
        name: "Dashboard",
        path: "/",
        element: <ItGenDash />,
        role : "hod"
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "My Timetable",
        path: "/mytimetable",
        element: <FacultyTT />,
        role : "hod"
      },
      // Faculty
      // {
      //   icon: <HomeIcon {...icon} />,
      //   name: "Dashboard",
      //   path: "/",
      //   element: <ItGenDash />,
      //   role : "faculty"
      // },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "My Timetable",
        path: "/mytimetable",
        element: <FacultyTT />,
        role : "faculty"
      },
      // student
      {
        icon: <HomeIcon {...icon} />,
        name: "Dashboard",
        path: "/studentdash",
        element: <StudentDash />,
        role : "student"
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "My Timetable",
        path: "/Timetable",
        element: <StudentTT />,
        role : "student"
      },
    ],
  },
  {
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },

    ],
  },
];

export default routes;

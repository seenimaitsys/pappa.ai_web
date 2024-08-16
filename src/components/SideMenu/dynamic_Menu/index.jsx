import { FiHome } from "react-icons/fi";
import { PiUsers } from "react-icons/pi";
import { LiaUserTieSolid } from "react-icons/lia";
import { IoCalendarOutline } from "react-icons/io5";
import { TbMessages } from "react-icons/tb";
export const dynamic_MenuData = [
  {
    icon: (
      <FiHome style={{ width: "30px", height: "30px" }} className={`ms-2`} />
    ),
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: (
      <PiUsers style={{ width: "30px", height: "30px" }} className={`ms-2`} />
    ),
    title: "Students",
    path: "/students",
  },
  {
    icon: (
      <LiaUserTieSolid
        style={{ width: "30px", height: "30px" }}
        className={`ms-2`}
      />
    ),
    title: "Teachers",
    path: "/teachers",
  },
  {
    icon: (
      <IoCalendarOutline
        style={{ width: "30px", height: "30px" }}
        className={`ms-2`}
      />
    ),
    title: "Attendance",
    path: "/attendance",
  },
  {
    icon: (
      <TbMessages
        style={{ width: "30px", height: "30px" }}
        className={`ms-2`}
      />
    ),
    title: "Messages",
    path: "/Messages",
  },
];

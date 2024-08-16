import React from "react";

const Dashboard = React.lazy(() => import("../layout/dashboard"));
const Students = React.lazy(() => import("../layout/students"));
const Teachers = React.lazy(() => import("../layout/teachers"));
const Attendance = React.lazy(() => import("../layout/attendance"));
const Messages = React.lazy(() => import("../layout/messages"));

const routes = [
  { path: "/dashboard", name: "Dashboard", element: Dashboard, exact: true },
  { path: "/students", name: "Students", element: Students, exact: true },
  { path: "/teachers", name: "Teachers", element: Teachers, exact: true },
  { path: "/attendance", name: "Attendance", element: Attendance, exact: true },
  { path: "/messages", name: "Messages", element: Messages, exact: true },
];

export default routes;

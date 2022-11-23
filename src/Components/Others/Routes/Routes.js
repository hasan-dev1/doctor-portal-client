import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";
import About from "../../Pages/About/About";
import ContuctUs from "../../Pages/Home/Contuctus/ContuctUs";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from '../../Pages/SignUp/SignUp'
import MakeAnAppointment from "../../Pages/MakeAnAppointment/MakeAnAppointment";
import Reviews from "../../Pages/Reviews/Reviews";
import DashboardMain from "../../Pages/AdminDashboard/DashboardMain";
import Dashboard from "../../Pages/AdminDashboard/Dashboard";
import MyAppointment from '../../Pages/AdminDashboard/AllAdmin'
import AllUsers from "../../Pages/AdminDashboard/AllUsers";
import AllAdmin from "../../Pages/AdminDashboard/AllAdmin";
import PrivateRoute from "./PrivateRoute";
import AdminRoutes from "./AdminRoutes";
import AddDoctors from "../../Pages/AdminDashboard/AddDoctors";
import ManageDoctor from "../../Pages/AdminDashboard/ManageDoctor";
import DisplayError from "../../Pages/DisplayError/DisplayError";
import Payment from "../../Pages/Payment/Payment";
import { async } from "@firebase/util";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/makeappointment",
        element: <MakeAnAppointment></MakeAnAppointment>,
      },
      {
        path: "/reviews",
        element: <Reviews></Reviews>,
      },
      {
        path: "/contuctus",
        element: <ContuctUs></ContuctUs>,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/dashboardmain",
        element: (
          <PrivateRoute>
            <DashboardMain></DashboardMain>
          </PrivateRoute>
        ),
        errorElement: <DisplayError></DisplayError>,
        children: [
          {
            path: "/dashboardmain",
            element: <Dashboard></Dashboard>,
          },
          {
            path: "/dashboardmain/allusers",
            element: (
              <AdminRoutes>
                <AllUsers></AllUsers>
              </AdminRoutes>
            ),
          },
          {
            path: "/dashboardmain/alladmin",
            element: (
              <AdminRoutes>
                <AllAdmin></AllAdmin>
              </AdminRoutes>
            ),
          },
          {
            path: "/dashboardmain/addadoctor",
            element: (
              <AdminRoutes>
                <AddDoctors></AddDoctors>
              </AdminRoutes>
            ),
          },
          {
            path: "/dashboardmain/managedoctors",
            element: (
              <AdminRoutes>
                <ManageDoctor></ManageDoctor>
              </AdminRoutes>
            ),
          },
          {
            path: "/dashboardmain/payment/:pid",
            loader:async ({params})=> {
              return fetch(`https://doctors-server-one.vercel.app/dashboard/payment/?id=${params.pid}`)
            },
            element: (
              <AdminRoutes>
                <Payment></Payment>
              </AdminRoutes>
            ),
          },
        ],
      },
    ],
  },
]);

export default router;
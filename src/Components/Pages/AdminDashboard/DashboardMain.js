import React from "react";
import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Others/UseHooks/useAdmin";
import { AuthContext } from "../../Others/UserContext/UserContext";
import Navbar from "../Navbar/Navbar";
import '../Navbar/Navbar.css'

const DashboardMain = () => {
  const {user} = useContext(AuthContext)
  const [isAdmin] = useAdmin(user?.email);
  console.log(isAdmin)
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="dashboarddrawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-slate-50 p-3 mx-2">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboarddrawer" className="drawer-overlay"></label>
          <ul className="menu p-4 bg-prima w-80 lg:bg-inherit bg-slate-50 text-accent font-bold">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "btn btn-ghost hover:bg-primary bg-primary text-white flex justify-end items-center my-1 "
                    : "btn btn-ghost my-1 flex justify-end items-center"
                }
                to={"/dashboardmain/"}
              >
                Dashboard
              </NavLink>
            </li>
            {isAdmin?.isAdmin ? (
              <>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "btn btn-ghost hover:bg-primary bg-primary text-white flex justify-end items-center my-1 "
                        : "btn btn-ghost my-1 flex justify-end items-center"
                    }
                    to={"/dashboardmain/allusers"}
                  >
                    UserInfo
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "btn btn-ghost hover:bg-primary bg-primary text-white flex justify-end items-center my-1 "
                        : "btn btn-ghost my-1 flex justify-end items-center"
                    }
                    to={"/dashboardmain/addadoctor"}
                  >
                    Add A Doctor
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "btn btn-ghost hover:bg-primary bg-primary text-white flex justify-end items-center my-1 "
                        : "btn btn-ghost my-1 flex justify-end items-center"
                    }
                    to={"/dashboardmain/managedoctors"}
                  >
                    Manage Doctor
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "btn btn-ghost hover:bg-primary bg-primary text-white flex justify-end items-center my-1 "
                        : "btn btn-ghost my-1 flex justify-end items-center"
                    }
                    to={"/dashboardmain/alladmin"}
                  >
                    All Admin
                  </NavLink>
                </li>
              </>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;

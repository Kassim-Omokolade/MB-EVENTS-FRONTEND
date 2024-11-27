import React from 'react'
import { LuCalendarRange } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { LuHelpCircle } from "react-icons/lu";
import { LuLogOut } from "react-icons/lu";
import { Link } from 'react-router-dom';

const UserProfileMenu = () => {
  return (
    <div
      style={{ width: "150px", height: "170px" }}
      className="rounded-2 px-3 py-2 bg-white shadow-lg "
    >
      <div className="d-flex">
        <p>
          <LuCalendarRange />
        </p>
        <Link to="/events">
          <p className="ms-2 d-block">Your Events</p>
        </Link>
      </div>

      <div className="d-flex  ">
        <p>
          <CgProfile />
        </p>
        <p className="ms-2 d-block">Profile</p>
      </div>

      <div className="d-flex  ">
        <p>
          <LuHelpCircle />
        </p>
        <p className="ms-2 d-block">Help</p>
      </div>

      <div className="d-flex  ">
        <p>
          <LuLogOut className="text-danger" />
        </p>
        <p className="ms-2 d-block">Logout</p>
      </div>
    </div>
  );
}

export default UserProfileMenu
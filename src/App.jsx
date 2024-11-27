import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CreateEvent from "./pages/CreateEvent";
import Error404 from "./pages/Error404";
import Event from "./pages/Event";
import EventDetails from "./pages/EventDetails";
import ForgotPassword from "./pages/ForgotPassword";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Register from "./pages/Register";
import UserEvent from "./pages/UserEvent";
import Attending from "./pages/User Pages/Attending";
import Bookmarked from "./pages/User Pages/Bookmarked";
import Hosting from "./pages/User Pages/Hosting";
import Previous from "./pages/User Pages/Previous";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/events" element={<Event />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/events/:eventId" element={<EventDetails />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route path="/user-event" element={<UserEvent />}>
            <Route index element={<Hosting />} />
            <Route path="attending" element={<Attending />} />
            <Route path="saved" element={<Bookmarked />} />
            <Route path="previous" element={<Previous />} />
          </Route>

          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

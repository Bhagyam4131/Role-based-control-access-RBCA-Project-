import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import Students from "./pages/Students";
import Instructors from "./pages/Instructors";
import Courses from "./pages/Courses";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Progress from "./pages/Progress";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route

          path="/"

          element={<Login />}

        />

        <Route

          path="/login"

          element={<Login />}

        />

        <Route

          path="/register"

          element={<Register />}

        />

        <Route

          path="/dashboard"

          element={<Dashboard />}

        />

        <Route

          path="/students"

          element={<Students />}

        />

        <Route

          path="/instructors"

          element={<Instructors />}

        />

        <Route

          path="/courses"

          element={<Courses />}

        />

        <Route

          path="/settings"

          element={<Settings />}

        />

        <Route

          path="/profile"

          element={<Profile />}

        />

        <Route

          path="/progress"

          element={<Progress />}

        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;


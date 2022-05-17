import { useState } from "react";
import "./styles.css";
import { Routes, Route, Link } from "react-router-dom";
export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard hiredPeople={hiredPeople} />} />
        <Route
          path="/view/:id"
          element={<Dashboard hiredPeople={hiredPeople} />}
        />
      </Routes>
    </>
  );
}

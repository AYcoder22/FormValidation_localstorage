import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((data) => setData(data.data));
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <button onClick={handleLogout}>Logout</button>
      <ul>
        {data.map((user) => (
          <li key={user.id} onClick={() => navigate(`/user/${user.id}`)}>
            {user.first_name} {user.last_name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default HomePage;

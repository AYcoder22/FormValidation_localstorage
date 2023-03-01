import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DetailedViewPage() {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data.data));
  }, [id]);

  return (
    <>
      <h2>
        {user.first_name} {user.last_name}
      </h2>
      <p>Email: {user.email}</p>
      <p>
        Avatar: <img src={user.avatar} alt="User Avatar" />
      </p>
    </>
  );
}

export default DetailedViewPage;

import React, { useEffect, useState } from "react";
import "./fetch.css";

export default function FetchApi() {
  const [userData, setUserData] = useState([]);

  const fetchData = async () => {
    const result = await fetch("https://api.github.com/users");
    const userData = await result.json();
    setUserData(userData);
    // console.log(userData);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(userData);
  return (
    <>
      <div className="container">
        {userData.map((curritem) => {
          const { id, login, avatar_url, html_url } = curritem;
          return (
            <>
              <div className="content" key={id}>
                <img src={avatar_url} alt="profile" />
                <div className="url">
                  <h3>{login}</h3>
                  <a href={html_url}>profile</a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

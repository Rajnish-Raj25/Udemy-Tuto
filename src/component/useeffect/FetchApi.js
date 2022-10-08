import React, { useEffect, useState } from "react";

export default function FetchApi() {
  const [userData, setUserData] = useState([]);

  const fetchData = async () => {
    const result = await fetch("https://api.github.com/users");
    const userData = await result.json();
    setUserData(userData);
    console.log(userData);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(userData);
  return <>hello</>;
}

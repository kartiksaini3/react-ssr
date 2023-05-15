import axios from "axios";
import React, { useEffect, useState } from "react";

const SSRTest = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { title },
      } = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
      console.log("waisjfk", title);
      setData(title);
    };
    fetchData();
  }, []);

  return data ? <div>SSRTest : {data}</div> : <p>loading</p>;
};

export default SSRTest;

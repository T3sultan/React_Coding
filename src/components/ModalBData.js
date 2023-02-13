import React, { useEffect, useState } from "react";

const ModalBData = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://contact.mediusware.com/api-doc/?format=openapi")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return <div>
  { data && data ? <h3>{data?.us} </h3> : <h2>Nothing Us Data</h2>}
  </div>;
};

export default ModalBData;

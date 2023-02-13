import React, { useEffect, useState } from "react";

const ModalBData = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://contact.mediusware.com/api-doc/?format=openapi")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <h3>{data?.info?.contact?.email}</h3>
    </div>
  );
};

export default ModalBData;

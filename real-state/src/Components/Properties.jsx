import React, { useEffect } from "react";

function Properties() {
  // render api
  useEffect(() => {
    getProperties();
  }, []);

  // get api propreties
  const getProperties = async () => {
    const api = await fetch(
      "https://65ce02fcc715428e8b3fb9c2.mockapi.io/properties"
    );
    const data = await api.json();
    console.log(data);
  };
  return <div>Properties</div>;
}

export default Properties;

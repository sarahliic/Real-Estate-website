import React from "react";
import AddForm from "../Components/AddForm";
import EditForm from "../Components/EditForm";
import Properties from "../Components/Properties";
import Home from "./Home";
import { ListProvider } from "../ListContext";

function Page() {
  return (
    <>
      <div>
        <ListProvider>
          <AddForm />
          <EditForm />
          <Properties />
          <Home />
        </ListProvider>
      </div>
    </>
  );
}

export default Page;

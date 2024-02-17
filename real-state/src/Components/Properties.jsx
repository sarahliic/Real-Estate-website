import React, { useContext, useEffect } from "react";
import ListContext from "../ListContext";
import { Link } from "react-router-dom";

function Properties() {
  const [listProperties, setListProperties] = useContext(ListContext);

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
    setListProperties(data);
  };
  return (
    <>
      <main>
        <section className="grid grid-cols-3 items-center gap-4 p-28 max-md:grid max-md:grid-cols-2 max-sm:grid max-sm:grid-cols-1 max-sm:w-full ">
          {listProperties.map((property) => {
            return (
              <>
                <div
                  className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                  key={property.id}
                >
                  <img
                    className="rounded-t-lg"
                    src={`${property.images}`}
                    alt="real estate avaliable properties"
                  />

                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-right dark:text-white">
                      {property.names}
                    </h5>

                    <p className="mb-3 font-normal text-gray-700 text-right dark:text-gray-400">
                      {property.title}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 text-right dark:text-gray-400">
                      {property.price} ريال
                    </p>
                    <div className="flex justify-end w-full">
                      <Link to={`DetailProperty/${property.id}`}>
                        {" "}
                        <button className="btn bg-[#007882] border border-[#007882] text-white hover:bg-[#ffff] hover:text-[#007882]">
                          تفاصيل العقار{" "}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default Properties;

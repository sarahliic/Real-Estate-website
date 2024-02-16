import React, { useContext, useEffect } from "react";
import ListContext from "../ListContext";

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
    // window.location.reload(false);
    console.log(data);
  };
  return (
    <>
      <main>
        <section>
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
                      <button className="btn bg-[#FFC72C] border border-[#FFC72C] text-white hover:bg-[#ffc72e]">
                        تفاصيل العقار{" "}
                      </button>
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

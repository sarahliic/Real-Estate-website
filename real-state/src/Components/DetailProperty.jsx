import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function DetailProperty() {
  const [propertyDetails, setPropertyDetails] = useState([]);

  let { id } = useParams();

  // render api
  useEffect(() => {
    getPropertyDetails(id);
  }, [id]);

  // get api propreties
  const getPropertyDetails = async (propertyId) => {
    const api = await fetch(
      `https://65ce02fcc715428e8b3fb9c2.mockapi.io/properties/${propertyId}`
    );
    const data = await api.json();
    setPropertyDetails(data);
  };
  return (
    <>
      <main>
        <section className="text-gray-700 body-font overflow-hidden p-20 bg-white">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap text-right">
              <img
                alt="real estate homes details in ksa"
                className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                src={propertyDetails.images}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {propertyDetails.names}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {propertyDetails.title}
                </h1>
                <div className="flex mb-4 justify-end">
                  <span className="flex items-center">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span className="text-gray-600 ml-3"> التقييم</span>
                  </span>
                </div>
                <p className="leading-relaxed">
                  يُعرض هنا معلومات شاملة حول هذا العقار المحدد. يتميز العقار
                  بموقعه المميز والتصميم الفريد، مما يجعله فرصة استثمارية رائعة
                  و خيارًا مثاليًا للسكن.
                </p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ريال {propertyDetails.price}
                  </span>
                  <Link to={`/EditForm/${propertyDetails.id}`}>
                    <button className="flex ml-20 bg-[#FFC72C] border py-2 px-6 border-[#FFC72C] text-white hover:bg-[#ffc72eec] rounded">
                      تعديل
                    </button>
                  </Link>
                  <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                    حذف
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default DetailProperty;

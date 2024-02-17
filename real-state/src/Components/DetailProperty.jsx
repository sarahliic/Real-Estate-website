import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function DetailProperty() {
  const [propertyDetails, setPropertyDetails] = useState([]);
  const [showModal, setShowModal] = useState(false);
  let { id } = useParams();

  // Render api
  useEffect(() => {
    getPropertyDetails(id);
  }, [id]);

  // Get api propreties
  const getPropertyDetails = async (propertyId) => {
    const api = await fetch(
      `https://65ce02fcc715428e8b3fb9c2.mockapi.io/properties/${propertyId}`
    );
    const data = await api.json();
    setPropertyDetails(data);
  };
  // Delete property From API
  const deleteProperty = async () => {
    try {
      const api = await fetch(
        `https://65ce02fcc715428e8b3fb9c2.mockapi.io/properties/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Check if the delete operation was successful
      if (api.ok) {
        // Perform any additional actions or update the UI as needed
        console.log("Property deleted successfully");
      } else {
        console.log("Failed to delete property");
      }
    } catch (error) {
      console.log("Error deleting property:", error);
    }
  };

  const handleCancelClick = () => {
    setShowModal(false);
  };

  const handelDeleteProperty = () => {
    deleteProperty();
    setShowModal(false);
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
                    <button className="flex ml-20  bg-[#007882] border border-[#007882] text-white hover:bg-[#ffff] hover:text-[#007882] rounded">
                      تعديل
                    </button>
                  </Link>
                  <button
                    onClick={() => {
                      setShowModal(!showModal);
                    }}
                    className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                  >
                    حذف
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {showModal && (
          <>
            <section>
              <div
                class="relative z-10"
                aria-labelledby="modal-title"
                role="dialog"
                aria-modal="true"
              >
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                  <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                      <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start ">
                          <div class="mt-3 text-right sm:ml-4 sm:mt-0 sm:text-left">
                            <h3
                              class="text-base text-right font-semibold leading-6 text-gray-900"
                              id="modal-title"
                            >
                              حذف عقار
                            </h3>
                            <div class="mt-2">
                              <p class="text-sm text-gray-500 text-right">
                                هل أنت متأكد أنك ترغب في حذف ؟ سيتم حذف جميع
                                البيانات المتعلقة بهذا العقار بشكل دائم. لا يمكن
                                التراجع عن هذا الإجراء.
                              </p>
                            </div>
                          </div>
                          <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10 ">
                            <svg
                              class="h-6 w-6 text-red-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div class="bg-gray-50  justify-start px-4 py-3 sm:justify-start sm:px-6">
                        <button
                          onClick={handleCancelClick}
                          type="button"
                          class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        >
                          إلغاء
                        </button>
                        <button
                          onClick={handelDeleteProperty}
                          type="button"
                          class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        >
                          أجل، أنا متأكد
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
    </>
  );
}

export default DetailProperty;

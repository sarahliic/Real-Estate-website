import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

function EditForm() {
  const [editValue, setEditValue] = useState({
    names: "",
    title: "",
    price: "",
    images: [],
  });
  let navigate = useNavigate();
  let { id } = useParams();

  // render api
  useEffect(() => {
    getPropertysData(id);
  }, [id]);

  // Get api selected property data for from to edit
  const getPropertysData = async (propertyId) => {
    const api = await fetch(
      `https://65ce02fcc715428e8b3fb9c2.mockapi.io/properties/${propertyId}`
    );
    const data = await api.json();
    setEditValue(data);
  };

  // Function to Edit property value api
  const editPropertyData = async () => {
    const api = await fetch(
      `https://65ce02fcc715428e8b3fb9c2.mockapi.io/properties/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editValue),
      }
    );
    const data = await api.json();
    setEditValue(data);
  };

  // handle inputs state
  const handleFormChange = (e) => {
    setEditValue({
      ...editValue,
      [e.target.name]: e.target.value,
    });
  };

  // handle data after submiting
  const handleSubmit = (e) => {
    e.preventDefault();
    editPropertyData();
    alert("ملاحظة: تم تحديث المعلومات");
    navigate("/");
  };
  return (
    <>
      <NavBar />
      <main className="min-h-screen">
        <section className=" bg-base-200">
          <div className="flex flex-col justify-end items-end mr-24 pt-12 max-sm:pt-1 max-sm:flex max-sm:justify-center">
            <h2 className="font-semibold text-3xl w-full  text-[#073D5C] text-right max-sm:text-2xl max-sm:mb-5 max-sm:text-right">
              نموذج تعديل معلومات العقار{" "}
              <span className="text-black">{editValue.names}</span>
            </h2>
          </div>
          <div className="hero min-h-screen">
            <div className="hero-content flex-col max-sm:p-0 lg:flex-row lg:w-[70%] md:flex-row md:w-[70%]  ">
              <img
                src={editValue.images}
                className="max-w-sm rounded-lg shadow-2xl h-[440px]"
              />

              <form
                className="max-w-sm mx-auto lg:w-full  text-right"
                onSubmit={handleSubmit}
              >
                <div className="mb-5">
                  <label
                    htmlFor="names"
                    className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                  >
                    اسم العقار
                  </label>
                  <input
                    type="text"
                    id="names"
                    name="names"
                    value={editValue.names}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-right"
                    placeholder="اسم العقار"
                    required
                    onChange={handleFormChange}
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                  >
                    العنوان
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={editValue.title}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-right"
                    required
                    placeholder=" العنوان"
                    onChange={handleFormChange}
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                  >
                    سعر العقار
                  </label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    value={editValue.price}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-right"
                    required
                    placeholder="السعر"
                    onChange={handleFormChange}
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="images"
                    className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                  >
                    صور العقار
                  </label>
                  <input
                    type="text"
                    name="images"
                    id="images"
                    value={editValue.images}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-right"
                    required
                    placeholder=" رابط الصورة"
                    onChange={handleFormChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn  bg-[#073D5C] border border-[#073D5C] text-white hover:bg-[#ffff] hover:text-[#073D5C] w-full"
                >
                  حفظ التغييرات
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default EditForm;

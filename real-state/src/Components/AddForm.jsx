import React, { useContext, useState } from "react";
import ListContext from "../ListContext";
import Footer from "./Footer";
import Logo from "../assets/real-estate-logo.png";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function AddForm() {
  const [addForm, setAddForm] = useState({
    names: "",
    title: "",
    price: "",
    images: [],
  });

  const [listProperties, setListProperties] = useContext(ListContext);

  const handleFormChange = (e) => {
    setAddForm({
      ...addForm,
      [e.target.name]: [e.target.value],
    });
  };

  const AddProperty = async () => {
    const api = await fetch(
      `https://65ce02fcc715428e8b3fb9c2.mockapi.io/properties`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addForm),
      }
    );
    const response = await api.json();
    console.log(response);
    setAddForm([...listProperties, response]);
  };

  // handle data after submiting
  const handleSubmit = (e) => {
    e.preventDefault();

    AddProperty()
      .then(() => {
        setAddForm({
          names: "",
          title: "",
          price: "",
          images: [],
        });
        console.log("Successfully added to the API");
        alert("تم الإضاقة بنجاح!");
      })
      .catch((error) => {
        console.error("Failed to add to the API:", error);
      });
  };

  return (
    <>
      <NavBar />
      <main className="min-h-screen">
        <section className="bg-base-200 relative">
          <div className="flex flex-col justify-end items-end mr-24 pt-12 max-sm:mb-5">
            <h2 className="font-semibold text-3xl  text-[#073D5C] text-right max-sm:text-xl max-sm:mt-10">
              نموذج إضافة عقار جديد
            </h2>
            <p className="text-[#073D5C]  mt-6  text-right max-sm:mt-2">
              👋 أهلا بك في موقعنا سعيديبن بخدمتك
            </p>
          </div>

          <div className="hero min-h-screen ">
            <div className="hero-content flex-col max-sm:p-0 lg:flex-row lg:w-[70%] md:flex-row md:w-[70%]  ">
              <img
                src="https://img.freepik.com/free-photo/door-opening-revealing-beautiful-city_23-2149768547.jpg?size=626&ext=jpg&ga=GA1.2.1024149589.1703589823&semt=ais"
                className="max-w-sm rounded-lg shadow-2xl mt-8 "
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
                    نوع العقار
                  </label>
                  <input
                    type="text"
                    id="names"
                    name="names"
                    value={addForm.names}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-right"
                    placeholder=" فيلا، شقة، مكتب تجاري .."
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
                    value={addForm.title}
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
                    value={addForm.price}
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
                    value={addForm.images}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-right"
                    required
                    placeholder="  url رابط الصورة"
                    onChange={handleFormChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn  bg-[#073D5C] border border-[#073D5C] text-white hover:bg-[#ffff] hover:text-[#073D5C] w-full max-sm:mb-5"
                >
                  اضافة
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

export default AddForm;

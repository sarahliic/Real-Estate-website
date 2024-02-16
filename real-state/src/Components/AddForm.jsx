import React, { useState } from "react";

function AddForm() {
  const [addForm, setAddForm] = useState({
    names: "",
    title: "",
    price: "",
    images: [],
  });

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
    setAddForm(response);
  };

  // handle data after submiting submit
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
      })
      .catch((error) => {
        console.error("Failed to add to the API:", error);
      });
  };
  return (
    <>
      <main className="min-h-screen">
        <section className="">
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col max-sm:p-0 lg:flex-row lg:w-[70%] md:flex-row md:w-[70%]  ">
              <img
                src="https://images.pexels.com/photos/1481105/pexels-photo-1481105.jpeg?auto=compress&cs=tinysrgb"
                className="max-w-sm rounded-lg shadow-2xl"
              />

              <form
                className="max-w-sm mx-auto lg:w-full  text-right"
                onSubmit={handleSubmit}
              >
                <div className="mb-5">
                  <label
                    htmlFor="names"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    اسم العقار
                  </label>
                  <input
                    type="text"
                    id="names"
                    name="names"
                    value={addForm.names}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-right"
                    placeholder="اسم العقار"
                    required
                    onChange={handleFormChange}
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    صور العقار
                  </label>
                  <input
                    type="file"
                    name="images"
                    id="images"
                    value={addForm.images}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-right"
                    required
                    placeholder=" اضف صور"
                    onChange={handleFormChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn bg-[#FFC72C] border border-[#FFC72C] text-white hover:bg-[#ffc72e] w-full"
                >
                  اضافة
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default AddForm;

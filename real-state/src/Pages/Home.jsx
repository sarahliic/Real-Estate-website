import React from "react";
import { Link } from "react-router-dom";
//import components
import Properties from "../Components/Properties";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <NavBar></NavBar>
      <main className="min-h-screen">
        <section>
          <div className="hero min-h-[80vh] bg-[url('https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb')] relative">
            <div className="absolute bg-[rgba(0,0,0,0.7)] w-full h-full flex justify-center items-center ">
              <div className="hero-content text-center">
                <div className="max-w-md">
                  <h1 className="text-5xl font-bold text-white">مرحبًا بك</h1>
                  <p className="py-6 text-white">
                    نحن إدارة عقارات متخصصة ومحترفة ملتزمة بتوفير أفضل الخدمات
                    العقارية لعملائنا. نقدم خبرتنا وخدماتنا لمساعدتك في العقارات
                    بطريقة فعالة وموثوقة. مهمتنا هي تلبية احتياجات عملائنا
                    وتحقيق أهدافهم في الملكية العقارية.
                  </p>
                  <Link to={"/AddForm"}>
                    <button className="btn bg-[#073D5C] border border-[#073D5C] text-white hover:bg-[#ffff] hover:text-[#073D5C]">
                      إضافة عقار
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#f3f3f3]">
          <div className="flex justify-center items-center pt-16">
            <h1
              id="Listing-properties"
              className="font-bold font-mono text-4xl "
            >
              قائمة العقارات
            </h1>
          </div>
          <Properties />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;

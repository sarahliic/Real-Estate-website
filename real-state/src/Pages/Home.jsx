import React from "react";
import { Link } from "react-router-dom";
//import components
import Properties from "../Components/Properties";
import NavBar from "../Components/NavBar";

function Home() {
  return (
    <>
      <NavBar></NavBar>
      <main className="min-h-screen">
        <section>
          <div className="hero min-h-[80vh] bg-[url('https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb')] relative">
            <div className="absolute bg-[rgba(0,0,0,0.6)] w-full h-full flex justify-center items-center ">
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
                    <button className="btn bg-[#007882] border border-[#007882] text-white hover:bg-[#ffff] hover:text-[#007882]">
                      أضف عقارًا
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h1 id="listing-proerties">قائمة العقارات</h1>
          <Properties />
        </section>
      </main>
    </>
  );
}

export default Home;

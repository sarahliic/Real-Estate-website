import React from "react";
import Properties from "../Components/Properties";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
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
                    <button className="btn bg-[#FFC72C] border border-[#FFC72C] text-white hover:bg-[#ffc72e]">
                      أضف عقارًا
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <Properties />
        </section>
      </main>
    </>
  );
}

export default Home;

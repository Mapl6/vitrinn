import "./App.css";
import NavBar from "./header/NavBar";
import Slider from "./header/Slider";
import CountUp from "react-countup";

import Articles from "./Articles";
import Footer from "./Footer";
import React, { useRef, useEffect, useState } from 'react';
function App() {

  const myRef = useRef(null);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = myRef.current.getBoundingClientRect().top;
      console.log(top);
      const bottom = window.innerHeight;
      console.log(bottom);
      if (top < bottom ) {
        setIsCounting(!isCounting);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isCounting]);
  return (
    <div className="scroller">

      <section>
        <NavBar />
        <Slider />
      </section>
      <section>
        <span className="section-title">مقالات پراستناد
        </span>
        <Articles />
      </section>
      <section>
        <div className="countup" >
          <span className="section-title">آمار و ارقام</span>
          <div className="countup-main">
            <div>
              <CountUp start={0} end={683} duration={10} />
              <p>تعداد کل مقالات</p>
            </div>
            <div>
              <CountUp start={0} end={198} duration={5} />
              <p>تعدادمقالات پراستناد</p>
            </div>
            <div>
              <CountUp start={0} end={37} duration={10} />
              <p>تعداد مقالات اخیر </p>
            </div>
          </div>
              {/* <div ref={myRef}>
        <CountUp start={0} end={100} duration={6} redraw={true} startOnMount={false} preserveValue={true} decimals={0} suffix={"%"}/>
            </div> */}
        </div>
      </section>
      <section>
        <span className="section-title">مقالات اخیر
        </span>
        <Articles />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;

import headerImg from "../../images/header.jpg";
import "./header.css";

import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Header = () => {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Winners", "Fighter", "Legend"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 150,
      backSpeed: 150,
      backDelay: 150,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="header">
        <div className="img">
          <div>
            <img src={headerImg} alt="" />
          </div>
          <div className="Overlay"></div>
        </div>
        <div className="Content">
          <h6>
            Live Your Life As <br /> A <span ref={el}></span>
          </h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            provident labore repellat.
          </p>
          <button className="btn">Read More</button>
        </div>
      </div>
    </>
  );
};
export default Header;

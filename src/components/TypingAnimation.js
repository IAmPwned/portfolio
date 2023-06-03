import { Fragment, useEffect, useRef } from "react";
import Typed from "typed.js";
const TypingAnimation = () => {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["An IoT Developer","A Web Developer", "An Aspiring Penetration Tester"], // Strings to display
      typeSpeed: 150,
      backSpeed: 200,
      backDelay: 150,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <Fragment>
      <span id="type-it" className="subtitle subtitle-typed" ref={el}></span>
    </Fragment>
  );
};
export default TypingAnimation;

import React, { useEffect } from 'react';
import './App.css'; // Make sure your CSS file includes styles for .container and its background

const BackGround = () => {
  useEffect(() => {
    const velocity = 0.1;
    const update = () => {
      const pos = window.scrollY;
      const containers = document.querySelectorAll('.bgContainer');
      containers.forEach((element) => {

        const height = element.offsetHeight - 0;

        element.style.backgroundPosition = `50% ${Math.round(pos) * velocity}px`;
        console.log(element)
      });
    };
    update();
    window.addEventListener('scroll', update);

    return () => {
      window.removeEventListener('scroll', update);
    };
  }, []);

  return (
    <div id="backGround">
      {/* <div className="bgContainer section1"></div>
      <div className="bgContainer section2"></div>
      <div className="bgContainer section3"></div> */}
      <div className="bgContainer section4"></div>


    </div>
  );
};

export default BackGround;

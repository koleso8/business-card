import { useState, useEffect, useRef } from 'react';
import NET from 'vanta/dist/vanta.net.min';

const Vanta = ({ theme }) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xff0000,
          backgroundColor: 0x0,
          points: 11.0,
          maxDistance: 25.0,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={myRef}
      className="w-screen h-screen top-0 left-0 -z-10 fixed "
    ></div>
  );
};

export default Vanta;

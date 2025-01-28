/* eslint-disable react/no-unknown-property */
import { useEffect, useMemo, useState } from 'react';

const Thankyou = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = useMemo(
    () => [
      './images/couple-1.webp',
      './images/couple-2.webp',
      './images/couple-3.webp',
    ],
    []
  );

  // Image Slider Effect
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(imageInterval);
  }, [images.length]);
  return (
    <section id="thankyou" className="text-center relative">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-all duration-[2000ms] ease-in-out
            ${
              index === currentImageIndex
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
            }`}
        >
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={`object-cover w-full h-full transform transition-all duration-[3000ms] ease-in-out will-change-transform
                ${
                  index === currentImageIndex
                    ? 'scale-100 blur-0'
                    : 'scale-105 blur-sm'
                }`}
              lazyload="true"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.4)_60%,rgba(0,0,0,0.8)_100%)] transition-opacity duration-[2000ms] ease-in-out" />
          </div>
        </div>
      ))}
      <div className="relative text-neutral-100 bg-black/40 w-full px-5 py-32">
        <div data-aos="fade-up">
          <h1 className="font-cinzel text-3xl  font-bold mb-10">Terimakasih</h1>
          <p>
            {`Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu kepada kami.`}
          </p>
          <p className="mt-10 font-bold">KAMI YANG BERBAHAGIA</p>
          <h2 className="mt-10 font-cinzel font-bold text-2xl">
            Putra & Putri
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Thankyou;

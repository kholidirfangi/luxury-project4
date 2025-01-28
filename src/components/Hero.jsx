/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import { useState, useEffect, useCallback, useMemo } from 'react';
import Slider from 'react-slick';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const IMAGES = [
    './images/couple-1.webp',
    './images/couple-2.webp',
    './images/couple-3.webp',
  ];

  // Base slider settings
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: 'ease-in-out',
    arrows: false,
    lazyLoad: 'progressive',
    pauseOnHover: false,
  };

  const targetDate = useMemo(
    () => new Date('2025-01-31T23:08:00').getTime(),
    []
  );

  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }, [targetDate]);

  // Countdown Timer Effect
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timerInterval);
  }, [calculateTimeLeft]);

  const CountdownItem = useMemo(
    () =>
      React.memo(({ value, label }) => (
        <div className="flex flex-col justify-center items-center  mx-2">
          <div className="font-semibold text-sm">
            {String(value).padStart(2, '0')}
          </div>
          <div className='text-sm'>{label}</div>
        </div>
      )),
    []
  );

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      <div className="relative w-full">
        <Slider {...settings} className="w-full h-screen relative">
          {IMAGES.map((img, index) => (
            <div key={img} className="h-screen">
              <img
                src={img}
                alt={`Couple photo ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="absolute w-full px-5 bottom-0 left-1/2 -translate-x-1/2 text-white text-shadow z-50 bg-yellow-950/50 py-3 rounded-t-3xl">
        <h3>THE WEDDING OF</h3>
        <h1 data-aos="fade-left" className="font-cinzel font-bold text-2xl my-3">
          Putri & Putra
        </h1>
        <div className="flex w-full justify-between border-t-2 py-3">
          <div>
            <div>Save the Date</div>
            <div>31 - 1 - 2025</div>
          </div>

          <div className="flex">
            <CountdownItem value={timeLeft.days} label="Hari" />
            <CountdownItem value={timeLeft.hours} label="Jam" />
            <CountdownItem value={timeLeft.minutes} label="Menit" />
            <CountdownItem value={timeLeft.seconds} label="Detik" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

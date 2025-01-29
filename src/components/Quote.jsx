/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';

const Quote = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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
        <div className="flex flex-col justify-center items-center">
          <div className="font-semibold text-3xl">
            {String(value).padStart(2, '0')}
          </div>
          <div className="text-md">{label}</div>
        </div>
      )),
    []
  );
  return (
    <section
      id="quote"
      className="relative -mt-10 rounded-t-[32px] z-40 text-center px-10 py-20 bg-purple-50 font-cormorant"
    >
      <div className="h-1 w-20 bg-purple-950 rounded-full mx-auto -mt-16 mb-10"></div>
      <div className="font-arima text-xl">Special Day</div>
      <div data-aos="flip-left" className="flex justify-evenly mb-20 mt-10">
        <CountdownItem value={timeLeft.days} label="Hari" />
        <CountdownItem value={timeLeft.hours} label="Jam" />
        <CountdownItem value={timeLeft.minutes} label="Menit" />
        <CountdownItem value={timeLeft.seconds} label="Detik" />
      </div>

      <div>
        <p data-aos="fade-up">
          Dan di antara tanda-tanda (kebesaran)-Nya ialah menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
          dan merasa tentram kepadanya, dan Dia menjadikan di antaramu rasa
          kasih dan sayang.
        </p>
        <p data-aos="fade-up" className="mt-10">
          Q.S Ar-Rum : 21
        </p>
      </div>
    </section>
  );
};

export default Quote;

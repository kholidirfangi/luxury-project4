import { faEnvelope, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState, useCallback } from 'react';
import _ from 'lodash';
import Audio from './Audio';

const Amplop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showAudio, setShowAudio] = useState(false);
  const [guestName, setGuestName] = useState('Tamu Undangan');

  const formatName = useCallback((name) => {
    return name
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('to');
    if (name) {
      setGuestName(decodeURIComponent(name));
    }
  }, []);

  useEffect(() => {
    if (!isOpen) {
      const preventScroll = _.debounce(() => window.scrollTo(0, 0), 10);
      window.addEventListener('scroll', preventScroll);
      return () => window.removeEventListener('scroll', preventScroll);
    }
  }, [isOpen]);

  const handleInvitationOpened = useCallback(() => {
    setIsOpen(true);

    // Smooth scroll first
    document.documentElement.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });

    // Set playback after scroll ends
    setTimeout(() => {
      setIsPlaying(true);
      setShowAudio(true);
    }, 600);
  }, []);

  return (
    <>
      <section className="h-screen amplop">
        <div className="relative bg-gradient-to-t from-purple-950/50 from-10% via-black/10 via-25% to-black/10 to-90% text-white h-screen flex justify-center items-center text-center">
          <div className="mt-52">
            <h3 data-aos="zoom-in" className='font-cormorant text-xl'>THE WEDDING OF</h3>
            <h1
              data-aos="zoom-in"
              className="font-arima text-4xl my-5"
            >
              Putri & Putra
            </h1>
            <h3 data-aos="zoom-in" className="text-lg my-10 font-arima">
              Kepada Yth.{' '}
              <div className="font-semibold mt-5">{formatName(guestName)}</div>
            </h3>
            <button
              data-aos="zoom-in"
              onClick={handleInvitationOpened}
              className="mt-5 text-center bg-purple-900/80 py-2 px-3 mx-auto rounded-full text-white animate-bounce"
            >
              <FontAwesomeIcon icon={isOpen ? faEnvelopeOpen : faEnvelope} />
              <span className="ml-2 font-arima">
                {isOpen ? 'Undangan Terbuka' : 'Buka Undangan'}
              </span>
            </button>
          </div>
        </div>
      </section>

      <Audio
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        show={showAudio}
      />
    </>
  );
};

export default Amplop;

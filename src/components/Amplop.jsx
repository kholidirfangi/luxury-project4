import { faEnvelope, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState, useCallback, useRef } from 'react';
import Audio from './Audio';

const Amplop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showAudio, setShowAudio] = useState(false);
  const [guestName, setGuestName] = useState('Tamu Undangan');
  const sectionRef = useRef(null);

  // Tambahkan useEffect untuk mengontrol scrolling
  useEffect(() => {
    const preventDefault = (e) => {
      if (!isOpen) {
        e.preventDefault();
      }
    };

    // Fungsi untuk mencegah scroll dengan keyboard
    const preventDefaultForScrollKeys = (e) => {
      const keys = {
        ArrowUp: 1,
        ArrowDown: 1,
        Space: 1,
        PageUp: 1,
        PageDown: 1,
        Home: 1,
        End: 1,
      };
      if (keys[e.key] && !isOpen) {
        e.preventDefault();
        return false;
      }
    };

    if (!isOpen) {
      // Nonaktifkan scrolling
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';

      // Tambahkan event listeners
      window.addEventListener('wheel', preventDefault, { passive: false });
      window.addEventListener('touchmove', preventDefault, { passive: false });
      window.addEventListener('keydown', preventDefaultForScrollKeys);
    } else {
      // Aktifkan kembali scrolling
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';

      // Hapus event listeners
      window.removeEventListener('wheel', preventDefault);
      window.removeEventListener('touchmove', preventDefault);
      window.removeEventListener('keydown', preventDefaultForScrollKeys);
    }

    // Cleanup
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
      window.removeEventListener('wheel', preventDefault);
      window.removeEventListener('touchmove', preventDefault);
      window.removeEventListener('keydown', preventDefaultForScrollKeys);
    };
  }, [isOpen]);

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
    if (isOpen && sectionRef.current) {
      sectionRef.current.style.transform = 'translateY(-100vh)';
      sectionRef.current.style.transition = 'transform 1.2s ease-in-out';
      sectionRef.current.style.position = 'absolute';
    }
  }, [isOpen]);

  const handleInvitationOpened = useCallback(() => {
    setIsOpen(true);
    setTimeout(() => {
      setIsPlaying(true);
      setShowAudio(true);
    }, 600); // Sesuaikan dengan durasi animasi transform
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="absolute top-0 left-0 right-0 bottom-0 max-w-md mx-auto amplop h-screen z-[99] font-poppins"
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute text-center left-1/2 -translate-x-1/2 bottom-28 text-white text-shadow min-w-72">
          <h3 data-aos="zoom-in">THE WEDDING OF</h3>
          <h1
            data-aos="zoom-in"
            className="font-great-vibes text-4xl my-5"
          >
            Putri & Putra
          </h1>
          <h3 data-aos="zoom-in" className="mt-5 text-lg">
            Kepada Yth.{' '}
            <div className="font-semibold">{formatName(guestName)}</div>
          </h3>
          <button
            onClick={handleInvitationOpened}
            className="mt-20 text-center bg-sky-500 py-2 px-3 mx-auto rounded-lg text-sky-50 animate-bounce"
          >
            <FontAwesomeIcon icon={isOpen ? faEnvelopeOpen : faEnvelope} />
            <span className="ml-2">
              {isOpen ? 'Undangan Terbuka' : 'Buka Undangan'}
            </span>
          </button>
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

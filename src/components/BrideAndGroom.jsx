/* eslint-disable react/prop-types */
import { memo, useMemo } from 'react';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from 'react-slick';

// Constants outside component to prevent recreation
const bride = [
  './images/bride2.webp',
  './images/bride5.webp',
  './images/bride8.webp',
];

const groom = [
  './images/groom1.webp',
  './images/groom2.webp',
  './images/groom4.webp',
];

// Base slider settings
const BASE_SETTINGS = {
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

// Memoized Profile Component
const Profile = memo(({ name, fatherName, motherName, instagramLink }) => (
  <div data-aos="fade-up" className={`text-center font-poppins`}>
    <h1 className="mt-12 font-great-vibes text-3xl mb-3 text-sky-50">{name}</h1>
    <h4 className="text-sky-50">Anak Pertama Dari:</h4>
    <h4 className="text-sky-50">
      Bapak {fatherName} dan Ibu {motherName}
    </h4>
    <div className="flex justify-center">
      <a
        href={instagramLink}
        className="bg-sky-950 w-36 text-white py-1 rounded-lg mt-5 flex items-center justify-center hover:bg-sky-600 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} className="mr-2" />
        inviteme.me
      </a>
    </div>
  </div>
));

Profile.displayName = 'Profile';

// Memoized Slider Component
const ImageSlider = memo(({ settings, data }) => (
  <Slider {...settings} className="w-56 h-80 relative">
    {data.map((img, index) => (
      <div key={img} className="w-56 h-80">
        <img
          src={img}
          alt={`Couple photo ${index + 1}`}
          className="w-full h-80 object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
    ))}
  </Slider>
));

ImageSlider.displayName = 'ImageSlider';

const BrideAndGroom = () => {
  // Memoize slider settings
  const sliderSettings1 = useMemo(
    () => ({
      ...BASE_SETTINGS,
      rtl: false,
    }),
    []
  );

  const sliderSettings2 = useMemo(
    () => ({
      ...BASE_SETTINGS,
      rtl: true,
    }),
    []
  );

  return (
    <section className="relative -mt-10 rounded-t-[32px] z-40 py-20 flex flex-col gap-5 bg-gradient-to-b from-sky-800 to-sky-400">
      <div className="h-1 w-20 bg-sky-50 rounded-full mx-auto -mt-16 mb-10"></div>
      {/* Bride Section */}
      <div>
        <div className="w-56 mx-auto relative overflow-hidden rounded-tl-[100px] rounded-br-[100px]">
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-50 text-puple-950 font-cormorant font-bold text-xl bg-sky-200/50 w-full pl-4 text-sky-950"
            style={{ willChange: 'transform' }}
          >
            THE BRIDE
          </div>
          <ImageSlider settings={sliderSettings1} data={bride} />
        </div>
        <Profile
          name="Putri Cantika Sari"
          fatherName="Abdullah"
          motherName="Aisyah"
          instagramLink="https://instagram.com/inviteme.me"
        />
      </div>

      {/* Groom Section */}
      <div className="w-full flex flex-col items-center mt-10">
        <div className="w-56 mx-auto relative overflow-hidden rounded-tr-[100px] rounded-bl-[100px]">
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-50 text-puple-950 font-cormorant font-bold text-xl bg-sky-200/50 w-full text-right pr-4 text-sky-950"
            style={{ willChange: 'transform' }}
          >
            THE GROOM
          </div>
          <ImageSlider settings={sliderSettings2} data={groom} />
        </div>
        <Profile
          name="Putra Andika Dwi Pangga"
          fatherName="Hasyim"
          motherName="Dewi"
          instagramLink="https://instagram.com/inviteme.me"
        />
      </div>
    </section>
  );
};

export default memo(BrideAndGroom);

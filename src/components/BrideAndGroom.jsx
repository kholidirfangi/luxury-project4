/* eslint-disable react/prop-types */
import { memo, useMemo } from 'react';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from 'react-slick';

// Constants outside component to prevent recreation
const IMAGES = [
  './images/couple-1.webp',
  './images/couple-2.webp',
  './images/couple-3.webp',
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
  <div data-aos="fade-up" className={`text-center`}>
    <h1 className="mt-12 font-cinzel font-bold text-2xl mb-3 text-yellow-950">
      {name}
    </h1>
    <h4 className="text-yellow-950">Anak Pertama Dari:</h4>
    <h4 className="text-yellow-950">
      Bapak {fatherName} dan Ibu {motherName}
    </h4>
    <div className="flex justify-center">
      <a
        href={instagramLink}
        className="bg-yellow-950 w-32 text-white py-1 rounded-full mt-5 flex items-center justify-center hover:bg-yellow-600 transition-colors"
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
const ImageSlider = memo(({ settings }) => (
  <Slider {...settings} className="w-56 h-80 relative">
    {IMAGES.map((img, index) => (
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
    <section className="py-20 flex flex-col gap-5 bg-yellow-100/50">
      {/* Bride Section */}
      <div>
        <div className="w-56 mx-auto relative overflow-hidden rounded-tl-[150px]">
          <div
            className="absolute z-50 -right-16 top-1/2 -translate-y-1/2 rotate-90 text-3xl font-cinzel font-semibold  text-yellow-50"
            style={{ willChange: 'transform' }}
          >
            THE BRIDE
          </div>
          <ImageSlider settings={sliderSettings1} />
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
        <div className="w-56 mx-auto relative overflow-hidden rounded-tr-[150px]">
          <div
            className="absolute z-50 -left-20 top-1/2 -translate-y-1/2 -rotate-90 text-3xl font-cinzel font-semibold text-yellow-50"
            style={{ willChange: 'transform' }}
          >
            THE GROOM
          </div>
          <ImageSlider settings={sliderSettings2} />
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

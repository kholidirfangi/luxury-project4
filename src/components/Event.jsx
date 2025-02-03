/* eslint-disable react/no-unknown-property */
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from 'react-slick';

const Event = () => {
  const landscapeImages = [
    './images/landscape-1.webp',
    './images/landscape-2.webp',
    './images/landscape-3.webp',
  ];

  const landscapeSettings1 = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: 'ease-in-out',
    rtl: false,
    arrows: false,
    lazyLoad: true,
  };
  const landscapeSettings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: 'ease-in-out',
    rtl: true,
    arrows: false,
    lazyLoad: true,
  };

  return (
    <section className="relative -mt-5 z-50 rounded-t-3xl bg-gradient-to-br py-5 from-sky-900 to-sky-200 font-poppins">
      <div className="h-1 w-20 bg-sky-50 rounded-lg mx-auto mb-10"></div>
      <div className="px-5 w-lg">
        <h1 className="text-center font-great-vibes text-3xl my-20 text-white">
          <div data-aos="fade-right" className="-ml-5">
            Wedding
          </div>
          <div data-aos="fade-left" className="ml-20">
            {' '}
            Event{' '}
          </div>
        </h1>
        {/* Akad Nikah */}
        <div
          data-aos="fade-up"
          className="mb-14 rounded-tr-[180px] overflow-hidden shadow-lg"
        >
          <div>
            {/* Container untuk override margin */}
            <Slider {...landscapeSettings1} className="w-full">
              {landscapeImages.map((img, index) => (
                <div key={index} className="h-64">
                  <img
                    src={img}
                    className="w-full h-full object-cover"
                    lazyload="true"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="flex w-full -mt-2">
            <div className="relative w-1/4 bg-sky-700 text-white text-lg">
              <p className="-rotate-90  text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap origin-center tracking-widest text-2xl">
                Akad Nikah
              </p>
            </div>
            <div className="w-3/4 bg-white">
              <div className="flex gap-5 justify-center items-center mt-10 mb-5 text-sky-900">
                <div className="text-5xl">30</div>
                <div className="text-xl">
                  Kamis <br />
                  Desember
                  <br /> 2025
                </div>
              </div>
              <div
                data-aos="fade-left"
                className="h-[2px] bg-sky-700 w-11/12 mx-auto rounded-full"
              ></div>
              <div className="px-5 flex flex-col gap-2 my-3 text-sky-900">
                <p>
                  <FontAwesomeIcon icon={faClock} className="text-sm mr-2" />
                  08.00 WIB
                </p>
                <p className="font-bold mt-5">LOKASI ACARA</p>
                <p>Kediaman Mempelai Wanita</p>
                <p>Jl. Cilandak KKO, Jakarta Selatan</p>
                <a
                  href=""
                  className="inline-block p-1 border-2 w-36 text-center rounded-lg text-sm hover:bg-sky-700 hover:text-white my-5"
                >
                  Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Resepsi */}
        <div
          data-aos="fade-up"
          className="mb-14 rounded-tl-[180px] overflow-hidden shadow-lg"
        >
          <div>
            {/* Container untuk override margin */}
            <Slider {...landscapeSettings2} className="w-full">
              {landscapeImages.map((img, index) => (
                <div key={index} className="h-64">
                  <img
                    src={img}
                    className="w-full h-full object-cover"
                    lazyload="true"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="flex flex-row-reverse w-full -mt-2">
            <div className="relative w-1/4 bg-sky-700 text-white text-lg">
              <p className="rotate-90  text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap origin-center tracking-widest text-2xl">
                Resepsi
              </p>
            </div>
            <div className="w-3/4 bg-white">
              <div className="flex gap-5 justify-center items-center mt-10 mb-5 text-sky-900">
                <div className="text-5xl">30</div>
                <div className="text-xl">
                  Kamis <br />
                  Desember
                  <br /> 2025
                </div>
              </div>
              <div
                data-aos="fade-left"
                className="h-[2px] bg-sky-700 w-11/12 mx-auto rounded-full"
              ></div>
              <div className="text-sky-900 px-5 flex flex-col gap-2 my-3">
                <p>
                  <FontAwesomeIcon icon={faClock} className="text-sm mr-2" />
                  08.00 WIB
                </p>
                <p className="font-bold mt-5">LOKASI ACARA</p>
                <p>Kediaman Mempelai Wanita</p>
                <p>Jl. Cilandak KKO, Jakarta Selatan</p>
                <a
                  href=""
                  className="inline-block p-1 border-2 w-36 text-center rounded-lg text-sm hover:bg-sky-700 hover:text-white my-5"
                >
                  Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Ngunduh Mantu */}

        <div
          data-aos="fade-up"
          className="mb-14 rounded-tr-[180px] overflow-hidden shadow-lg"
        >
          <div>
            {/* Container untuk override margin */}
            <Slider {...landscapeSettings1} className="w-full">
              {landscapeImages.map((img, index) => (
                <div key={index} className="h-64">
                  <img
                    src={img}
                    className="w-full h-full object-cover"
                    lazyload="true"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="flex w-full -mt-2">
            <div className="relative w-1/4 bg-sky-700 text-white text-lg">
              <p className="-rotate-90  text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap origin-center tracking-widest text-2xl">
                Ngunduh Mantu
              </p>
            </div>
            <div className="w-3/4 bg-white">
              <div className="flex gap-5 justify-center items-center mt-10 mb-5 text-sky-900">
                <div className="text-5xl">30</div>
                <div className="text-xl">
                  Kamis <br />
                  Desember
                  <br /> 2025
                </div>
              </div>
              <div
                data-aos="fade-left"
                className="h-[2px] bg-sky-700 w-11/12 mx-auto rounded-full"
              ></div>
              <div className="px-5 flex flex-col gap-2 my-3 text-sky-900">
                <p>
                  <FontAwesomeIcon icon={faClock} className="text-sm mr-2" />
                  08.00 WIB
                </p>
                <p className="font-bold mt-5">LOKASI ACARA</p>
                <p>Kediaman Mempelai Wanita</p>
                <p>Jl. Cilandak KKO, Jakarta Selatan</p>
                <a
                  href=""
                  className="inline-block p-1 border-2 w-36 text-center rounded-lg text-sm hover:bg-sky-700 hover:text-white my-5"
                >
                  Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;

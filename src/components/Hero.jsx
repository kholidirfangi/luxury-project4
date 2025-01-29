import Slider from 'react-slick';

const Hero = () => {
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
    rtl: true,
  };

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
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-purple-50/20 from-10% via-purple-50/20 via-30% to-purple-950/50 to-90% z-40"></div>
      <div className="absolute w-full px-5 bottom-20 left-1/2 -translate-x-1/2 text-white text-shadow z-50 py-3 rounded-t-3xl text-center">
        <h3 className="font-cormorant text-lg">THE WEDDING OF</h3>
        <h1
          data-aos="zoom-out"
          className="font-cormorant font-bold text-4xl my-3"
        >
          Putri & Putra
        </h1>
        <div className="flex w-full justify-center py-3">
          <div>
            <div className="text-2xl font-cormorant">31 - 1 - 2025</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

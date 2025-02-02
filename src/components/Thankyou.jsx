import Slider from 'react-slick';
import { useMemo } from 'react';

const Thankyou = () => {
  const images = useMemo(
    () => [
      './images/landscape-1.webp',
      './images/landscape-2.webp',
      './images/landscape-3.webp',
    ],
    []
  );

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
  return (
    <section
      id="thankyou"
      className="text-center relative font-poppins h-96"
    >
      <Slider {...settings} className="w-full h-full">
        {images.map((img, index) => (
          <div key={img}>
            <img
              src={img}
              alt={`photo ${index + 1}`}
              className="w-full h-96 object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </Slider>

      <div className="absolute top-0 bottom-0 text-neutral-100 bg-black/20 w-full px-5 py-14 z-20">
        <div data-aos="fade-up" className='px-5'>
          <h1 className="text-3xl mb-5 font-great-vibes">Terimakasih</h1>
          <p>
            {`Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu kepada kami.`}
          </p>
          <p className="mt-10">KAMI YANG BERBAHAGIA</p>
          <h2 className="mt-10 font-cinzel font-great-vibes text-2xl">
            Putra & Putri
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Thankyou;

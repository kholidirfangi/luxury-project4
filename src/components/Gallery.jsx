const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-yellow-50">
      <h1
        data-aos="fade-down"
        className="text-3xl text-yellow-950 text-center font-cinzel font-bold mb-10"
      >
        Our Gallery
      </h1>
      <div className="px-5">
        <div>
          <iframe
            data-aos="fade-up"
            className="w-full h-56"
            src="https://www.youtube.com/embed/64ojWgAzl94?si=KugEqxv78t25YFqb"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="container mx-auto space-y-2 mt-2">
          {/* First Row - 1 Column */}
          <div className="grid grid-cols-1 gap-1 w-full">
            <img
              data-aos="zoom-in"
              src="./images/landscape-1.webp"
              alt=""
              className="rounded-lg h-40 w-full"
            />
          </div>

          {/* Second Row - 2 Columns */}
          <div className="grid grid-cols-2 gap-2">
            <img
              data-aos="zoom-in"
              src="./images/couple-1.webp"
              alt=""
              className="rounded-lg"
            />
            <img
              data-aos="zoom-in"
              src="./images/couple-2.webp"
              alt=""
              className="rounded-lg"
            />
          </div>

          {/* Third Row - 1 Column */}
          <div className="grid grid-cols-1 gap-2">
            <img
              data-aos="zoom-in"
              src="./images/landscape-2.webp"
              alt=""
              className="rounded-lg h-40 w-full"
            />
          </div>
          {/* Fourth Row - 1 Column */}
          <div className="grid grid-cols-1 gap-2">
            <img
              data-aos="zoom-in"
              src="./images/landscape-3.webp"
              alt=""
              className="rounded-lg h-40 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

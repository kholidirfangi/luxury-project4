const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-purple-50">
      <h1
        data-aos="fade-down"
        className="text-3xl text-purple-950 text-center font-arima font-bold mb-10"
      >
        Our Gallery
      </h1>
      <div className="px-5">
        <div>
          <iframe
            data-aos="fade-up"
            className="w-full h-56 rounded-lg"
            src="https://www.youtube.com/embed/64ojWgAzl94?si=KugEqxv78t25YFqb"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="container mx-auto space-y-2 mt-2">
          {/* First Row - 4 Columns */}
          <div className="grid grid-cols-4 gap-2">
            <img
              data-aos="zoom-in"
              src="./images/square-1.webp"
              alt=""
              className="rounded-lg h-28 w-full"
            />
            <img
              data-aos="zoom-in"
              src="./images/square-2.webp"
              alt=""
              className="rounded-lg h-28 w-full"
            />
            <img
              data-aos="zoom-in"
              src="./images/couple-2.webp"
              alt=""
              className="rounded-lg h-28 w-full"
            />
            <img
              data-aos="zoom-in"
              src="./images/couple-1.webp"
              alt=""
              className="rounded-lg h-28 w-full"
            />
          </div>

          {/* Second Row - 2 Column */}
          <div className="grid grid-cols-3 gap-2">
            <img
              data-aos="zoom-in"
              src="./images/landscape-2.webp"
              alt=""
              className="rounded-lg h-40 w-full col-span-2"
            />
            <img
              data-aos="zoom-in"
              src="./images/square-1.webp"
              alt=""
              className="rounded-lg h-40 w-full"
            />
          </div>

          {/* Third Row - 2 Column */}
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
        </div>
      </div>
    </section>
  );
};

export default Gallery;

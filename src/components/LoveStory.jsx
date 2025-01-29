/* eslint-disable react/no-unknown-property */
const LoveStory = () => {
  return (
    <section className="font-arima py-20 px-5 bg-gradient-to-b from-purple-300 to-purple-900 text-yellow-50">
      <div className="flex justify-center mb-5">
        <img
          data-aos="fade-down-right"
          src="./images/square-1.webp"
          alt=""
          className="inline-block w-40 h-40 rounded-t-full rounded-bl-full"
          lazyload="true"
        />
        <img
          data-aos="fade-up-left"
          src="./images/square-2.webp"
          alt=""
          className="inline-block w-40 h-40 rounded-b-full rounded-tr-full mt-40"
          lazyload="true"
        />
      </div>
      <div>
        <h1
          data-aos="fade-down"
          className="font-bold font-arima text-3xl text-center py-10"
        >
          Love Story
        </h1>
      </div>

      <div
        data-aos="fade-left"
        className="text-left rounded-r-full border-2 p-5 mb-2"
      >
        <h3 className="font-bold mb-5 text-lg">25 Agustus 2022</h3>
        <p>
          Berawal dari tempat pekerjaan Yogyakarta-2022, Kami mengenal satu sama
          lain dan belum ada benih cinta kala itu, hanya sebatas teman kerja.
        </p>
      </div>
      <div
        data-aos="fade-right"
        className="text-right border-2 p-5 rounded-l-full mb-2"
      >
        <h3 className="font-bold mb-5 text-lg">05 Juni 2023</h3>
        <p>
          Setelah cukup mengenal satu sama lain, satu tahun kurang lebih kami
          menjalin hubungan. 05 Juni akhirnya kami memutuskan untuk melanjutkan
          ke hubungan yang lebih serius mempertemukan kedua keluarga.
        </p>
      </div>
      <div
        data-aos="fade-left"
        className="text-left rounded-r-full border-2 p-5"
      >
        <h3 className="font-bold mb-5 text-lg">30 Januari 2025</h3>
        <p>
          Sampai tanggal ini kami melaksanakan akad nikah terlebih dahulu dan
          akhirnya kami mengubah status hinggan menjadi pasangan suami istri.
          Semoga Allah SWT memberikan keberkahan pernikahan ini. Aamiin.
        </p>
      </div>
    </section>
  );
};

export default LoveStory;

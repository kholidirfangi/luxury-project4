import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* eslint-disable react/no-unknown-property */
const LoveStory = () => {
  return (
    <section className="font-poppins py-20 px-5 bg-gradient-to-b from-sky-900 to-sky-300 text-yellow-50">
      <div>
        <h1
          data-aos="fade-down"
          className="font-great-vibes text-3xl text-center py-10"
        >
          Love Story
        </h1>
      </div>
      <div className="flex justify-center mb-5">
        <img
          data-aos="fade-down-right"
          src="./images/square-1.webp"
          alt=""
          className="inline-block w-40 h-40 rounded-bl-3xl rounded-tr-3xl"
          lazyload="true"
        />
        <img
          data-aos="fade-up-left"
          src="./images/square-2.webp"
          alt=""
          className="inline-block w-40 h-40 rounded-bl-3xl rounded-tr-3xl mt-28 -ml-10"
          lazyload="true"
        />
      </div>

      <div
        data-aos="fade-left"
        className="text-left rounded-tr-3xl rounded-bl-3xl border-2 p-5 my-5 shadow-lg"
      >
        <h3 className="font-bold mb-5 text-lg">25 Agustus 2022</h3>
        <p>
          Berawal dari tempat pekerjaan Yogyakarta-2022, Kami mengenal satu sama
          lain dan belum ada benih cinta kala itu, hanya sebatas teman kerja.
        </p>
      </div>
      <div className="w-full flex justify-center">
        <FontAwesomeIcon
          data-aos='fade-down'
          icon={faArrowDown}
          size="xl"
          className="animate-bounce"
        />
      </div>

      <div
        data-aos="fade-left"
        className="text-left border-2 p-5 rounded-tr-3xl rounded-bl-3xl my-5 shadow-lg"
      >
        <h3 className="font-bold mb-5 text-lg">05 Juni 2023</h3>
        <p>
          Setelah cukup mengenal satu sama lain, satu tahun kurang lebih kami
          menjalin hubungan. 05 Juni akhirnya kami memutuskan untuk melanjutkan
          ke hubungan yang lebih serius mempertemukan kedua keluarga.
        </p>
      </div>
      <div className="w-full flex justify-center">
        <FontAwesomeIcon
        data-aos='fade-down'
          icon={faArrowDown}
          size="xl"
          className="animate-bounce"
        />
      </div>
      <div
        data-aos="fade-left"
        className="text-left rounded-tr-3xl rounded-bl-3xl border-2 p-5 my-5 shadow-lg"
      >
        <h3 className="font-bold my-5 text-lg">30 Januari 2025</h3>
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

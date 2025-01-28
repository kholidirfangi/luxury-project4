const Quote = () => {
  return (
    <section id="quote" className="text-center px-10 py-20 text-yellow-900">
      <div className="text-6xl mb-10 font-cinzel flex justify-center items-center gap-5">
        <p data-aos="fade-right">P</p>
        <span>&</span>
        <p data-aos="fade-left">P</p>
      </div>
      <div>
        <p data-aos="fade-down">Q.S Ar-Rum : 21</p>
        <p data-aos="fade-up">
          Dan di antara tanda-tanda (kebesaran)-Nya ialah menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
          dan merasa tentram kepadanya, dan Dia menjadikan di antaramu rasa
          kasih dan sayang.
        </p>
      </div>
    </section>
  );
};

export default Quote;

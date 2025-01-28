/* eslint-disable react/prop-types */
const CardEvent = ({ eventName, date, time, location, address, mapsLink }) => {
  return (
    <div data-aos='fade-up' className="flex flex-col gap-2 text-center py-10 text-yellow-950 border-b-2 border-b-yellow-950/20 mx-5">
      <h3 className="font-bold">{eventName}</h3>
      <h4>{date}</h4>
      <h4>{time}</h4>
      <h4 className="font-bold">Lokasi Acara</h4>
      <h4>{location}</h4>
      <h4>{address}</h4>
      <a className="bg-yellow-950 text-yellow-50 w-32 mx-auto rounded-full mt-5 inline-block hover:bg-yellow-600" href={mapsLink}>Google Map</a>
    </div>
  );
};

const Event = () => {
  return (
    <section className="flex">
      <div className="relative w-1/6 bg-yellow-950 text-white text-lg">
        <p className="-rotate-90  text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap origin-center text-2xl tracking-widest">
          Wedding Event
        </p>
      </div>
      <div className="bg-yellow-50 py-20 w-5/6">
        <div className="px-5 w-2/3 mx-auto">
          <div className="flex">
            <div data-aos="fade-up-right">
              <img
                src="./images/couple-1.webp"
                alt=""
                className="w-40 rounded-tr-[90px] rounded-bl-[90px]"
              />
            </div>
            <div data-aos="fade-up-left">
              <img
                src="./images/couple-2.webp"
                alt=""
                className="w-40 rounded-tl-[90px] rounded-br-[90px]"
              />
            </div>
          </div>
        </div>
        <CardEvent
          eventName="AKAD NIKAH"
          date="Kamis, 30 Januari 2025"
          time="08:00"
          location="Kediaman Mempelai Wanita"
          address="Jl. Kenangan No. 07 Jakarta"
          mapsLink=""
        />
        <CardEvent
          eventName="RESEPSI"
          date="Jumat, 31 Januari 2025"
          time="08:00"
          location="Kediaman Mempelai Wanita"
          address="Jl. Kenangan No. 07 Jakarta"
          mapsLink=""
        />
        <CardEvent
          eventName="NGUNDUH MANTU"
          date="Jumat, 31 Januari 2025"
          time="08:00"
          location="Kediaman Mempelai Wanita"
          address="Jl. Kenangan No. 07 Jakarta"
          mapsLink=""
        />
      </div>
    </section>
  );
};

export default Event;

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { addRSVP, getRSVPs } from '../firebase/service';

// eslint-disable-next-line react/prop-types
const Rsvp = ({ collectionName }) => {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState('');
  const [message, setMessage] = useState('');
  const [newSubmittedData, setNewSubmittedData] = useState([]);
  const [, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const fetchRSVPs = async () => {
      try {
        const rsvps = await getRSVPs(collectionName);
        setNewSubmittedData(rsvps); // Ensure the data matches FormData type
      } catch (error) {
        console.error('Error fetching RSVPs:', error);
      }
    };
    fetchRSVPs();

    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [collectionName]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAttendanceChange = (e) => {
    setAttendance(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newData = {
      name,
      attendance,
      message,
      timestamp: new Date(),
    };

    try {
      await addRSVP(newData, collectionName); // Pass the dynamic table name
      setNewSubmittedData((prevData) => [...prevData, newData]);

      // Optional: Clear form fields after submission
      setName('');
      setAttendance('');
      setMessage('');
    } catch (error) {
      console.error('Error adding RSVP:', error);
    }
  };

  const getDaysSince = (date) => {
    try {
      const now = new Date();
      const inputDate = new Date(date);

      // Validate input
      if (isNaN(inputDate.getTime())) {
        return 'Invalid date';
      }

      const seconds = Math.floor((now.getTime() - inputDate.getTime()) / 1000);

      const intervals = [
        { value: seconds / 31536000, unit: 'tahun' },
        { value: seconds / 2592000, unit: 'bulan' },
        { value: seconds / 86400, unit: 'hari' },
        { value: seconds / 3600, unit: 'jam' },
        { value: seconds / 60, unit: 'menit' },
      ];

      for (let interval of intervals) {
        if (interval.value >= 1) {
          return `${Math.floor(interval.value)} ${interval.unit} yang lalu`;
        }
      }

      return 'baru saja';
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      return 'baru saja';
    }
  };

  return (
    <div className="w-full mx-auto bg-gradient-to-b from-sky-700 to-sky-700 px-5 py-20 font-poppins">
      <h2
        data-aos="fade-down"
        id="message"
        className="text-3xl font-great-vibes text-center mb-10 text-sky-50"
      >
        Guest Book
      </h2>
      <form data-aos="fade-up" onSubmit={handleSubmit}>
        <div className="w-full">
          <div>
            <label htmlFor="name" className="w-2/6 inline-block text-sky-50">
              Nama
            </label>
            <input
              className="w-4/6 p-1 rounded-sm outline-sky-950/50 mb-2"
              id="name"
              type="text"
              value={name}
              required
              onChange={handleNameChange}
            />
          </div>

          <div>
            <label
              htmlFor="absensi"
              className="w-2/6 inline-block text-sky-50"
            >
              Kehadiran
            </label>
            <select
              className="p-1 rounded-sm mb-2 "
              id="absensi"
              value={attendance}
              onChange={handleAttendanceChange}
              required
            >
              <option value="">Pilih kehadiran</option>
              <option value="Hadir">Hadir</option>
              <option value="Tidak Hadir">Tidak Hadir</option>
            </select>
          </div>

          <div className="flex">
            <div className="w-2/6 text-sky-50">Pesan</div>
            <textarea
              className="p-1 rounded-sm outline-sky-950/50 w-4/6 mb-2"
              rows={6}
              cols={25}
              name="message"
              value={message}
              onChange={handleMessageChange}
              required
            ></textarea>
          </div>
        </div>
        <button
          className="bg-sky-600 p-2 rounded-lg text-sky-50 w-full mt-2 md:mt-8 md:p-4 hover:bg-sky-500"
          type="submit"
        >
          Kirim
        </button>
      </form>

      <div
        className="mt-10 md:mt-20 max-h-96 overflow-x-hidden overflow-y-auto"
        id="message"
      >
        <ul>
          {newSubmittedData.map((data, index) => {
            if (index !== -1) {
              return (
                <li
                  className="flex gap-3 py-4 px-2 border-b-2 border-b-sky-800/50 rounded-b-lg"
                  key={index}
                >
                  <div>
                    <div className="w-10 h-10 rounded-full bg-pink-500 flex justify-center items-center mt-2 text-xl font-bold text-sky-50">
                      {data.name.slice(0, 1).toUpperCase()}
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-2 ">
                      <div className="text-lg font-semibold text-sky-50">
                        {data.name}
                      </div>
                      <div className="text-xs bg-sky-800 text-sky-50 py-1 px-2 font-semibold rounded-t-full rounded-br-full mb-2">
                        {data.attendance}
                      </div>
                    </div>
                    <div className="text-sky-50">{data.message}</div>
                    <div className="flex items-center gap-2 mt-2">
                      <FontAwesomeIcon
                        icon={faClock}
                        size="xs"
                        className="text-sky-200"
                      />
                      <div className="text-xs text-sky-200">
                        {getDaysSince(data.timestamp)}
                      </div>
                    </div>
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default Rsvp;

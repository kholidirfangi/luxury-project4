/* eslint-disable react/prop-types */
import {
  faCirclePause,
  faCompactDisc,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useEffect } from 'react';

const Audio = ({ isPlaying, setIsPlaying, show }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio
          .play()
          .catch((error) => console.error('Audio play failed:', error));
      } else {
        audio.pause();
      }
    }
  }, [isPlaying]);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      id="audioContainer"
      className={`fixed ${
        show ? 'block' : 'hidden'
      } bottom-10 right-3 cursor-pointer z-[999] text-sky-500 ${
        isPlaying ? 'animate-spin' : ''
      }`}
      onClick={handlePlay}
    >
      {isPlaying ? (
        <FontAwesomeIcon icon={faCompactDisc} size="xl" />
      ) : (
        <FontAwesomeIcon icon={faCirclePause} size="xl" />
      )}
      <audio
        id="audio"
        ref={audioRef}
        src="./audio/my-love-medium-177577.mp3"
        loop
      />
    </div>
  );
};

export default Audio;

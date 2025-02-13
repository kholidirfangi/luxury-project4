/* eslint-disable react/no-unknown-property */
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  const phoneNumber = '6281384528791';
  const message = 'Halo, saya ingin pesan undangan digitalnya kak';

  // Encode pesan untuk URL
  const encodedMessage = encodeURIComponent(message);
  return (
    <footer className="bg-sky-950 text-neutral-100 py-14 px-5">
      <p className="text-center text-sm">
        Made with ❤️ by <span className="hover:underline">inviteme</span>
      </p>
      <p className="flex gap-5 justify-center my-5">
        <div>
          <a
            href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
            target="_blank"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/inviteme25/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <div>
          <a href="https://www.inviteme.me/">
            <FontAwesomeIcon icon={faGlobe} />
          </a>
        </div>
      </p>
      <p className="text-sm text-center">copyright &copy; 2025 </p>
    </footer>
  );
};

export default Footer;

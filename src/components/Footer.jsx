/* eslint-disable react/no-unknown-property */
import {
  faInstagram,
  faTiktok,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  const phoneNumber = '6281384528791';
  const message = 'Halo, saya ingin pesan undangan digitalnya kak';

  // Encode pesan untuk URL
  const encodedMessage = encodeURIComponent(message);
  return (
    <footer className="bg-purple-950 text-neutral-100 py-14 px-5">
      <div className="flex justify-between">
        <div className="flex flex-col gap-3 justify-center">
          <div>
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
              target="_blank"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />{' '}
              0813-8452-8791
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/inviteme25/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} className="mr-2" /> inviteme
            </a>
          </div>
          <div>
            <a href="">
              <FontAwesomeIcon icon={faTiktok} className="mr-2" /> inviteme
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3 justify-center">
          <div className="flex justify-start items-center">
            <img
              src="./images/inviteme-logo.png"
              className="w-8 h-8 rounded-full"
              alt=""
              lazyload="true"
            />
          </div>
          <h3>inviteme.me</h3>
          <p>Copyright &copy; 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

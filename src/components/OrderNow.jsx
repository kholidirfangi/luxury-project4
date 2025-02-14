const orderNow = () => {
  const phoneNumber = '6281384528791';
  const message =
    'Halo, saya ingin pesan undangan digital dengan thema Luxury-1 kak';

  // Encode pesan untuk URL
  const encodedMessage = encodeURIComponent(message);
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
      target="_blank"
      className="fixed font-bold font-lato bottom-0 right-0 z-[99] bg-red-500 text-white px-2 py-1 rounded-sm"
    >
      Pesan Sekarang
    </a>
  );
};

export default orderNow;

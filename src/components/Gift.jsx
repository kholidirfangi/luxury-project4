/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { memo, useCallback, useMemo, useState } from 'react';
import { faArrowCircleRight, faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Constants outside component
const COPY_TIMEOUT = 2000;
const BANK_ACCOUNTS = [
  {
    bankName: 'BCA',
    accountNumber: '1243546xxx',
    accountHolder: 'Putri Cantika Sari',
  },
  {
    bankName: 'BNI',
    accountNumber: '1243546xxx',
    accountHolder: 'Putri Cantika Sari',
  },
  {
    bankName: 'BRI',
    accountNumber: '1243546xxx',
    accountHolder: 'Putri Cantika Sari',
  },
];

// Memoized Bank Card Component
const BankCard = memo(({ bankName, accountNumber, accountHolder }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setIsCopied(true);

      const timeoutId = setTimeout(() => {
        setIsCopied(false);
      }, COPY_TIMEOUT);

      // Cleanup timeout on component unmount
      return () => clearTimeout(timeoutId);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }, [accountNumber]);

  const buttonText = useMemo(
    () => (isCopied ? 'Tersalin!' : 'Salin No.Rek'),
    [isCopied]
  );

  return (
    <div
      className="shadow-lg bg-sky-50/50 rounded-lg py-3 flex flex-col gap-2 mb-5"
      data-testid="bank-card"
    >
      <h3 className="font-bold text-xl mb-5">{bankName}</h3>
      <p className="font-bold">{accountNumber}</p>
      <p>A.N {accountHolder}</p>
      <button
        onClick={handleCopy}
        className="bg-sky-950 hover:bg-sky-950/50 w-32 text-neutral-100 mx-auto rounded-full text-sm py-2 transition-colors"
        aria-label={`Copy ${bankName} account number`}
      >
        <FontAwesomeIcon icon={faCopy} className="mr-3" aria-hidden="true" />
        {buttonText}
      </button>
    </div>
  );
});

BankCard.displayName = 'BankCard';

// Memoized Bank List Component
const BankList = memo(({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div id="creditCard" className="my-5 animate-fade-in">
      {BANK_ACCOUNTS.map((account) => (
        <BankCard key={account.bankName} {...account} />
      ))}
    </div>
  );
});

BankList.displayName = 'BankList';

// Main Gift Component
const Gift = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleBankList = useCallback(() => {
    setIsClick((prev) => !prev);
  }, []);

  return (
    <section
      id="gift"
      className="font-arima py-20 bg-gradient-to-b from-sky-950 to-sky-700 px-5 text-center text-sky-950"
    >
      <h1
        data-aos="fade-down"
        className="text-3xl font-great-vibes mb-5 text-sky-50"
      >
        Wedding Gift
      </h1>
      <p data-aos="fade-down" className="text-sky-50">
        Bagi Bapak/Ibu/Saudara/i ingin mengirimkan hadiah pernikahan dapat
        melalui virtual account di bawah ini:
      </p>
      <button
        data-aos="fade-right"
        className="flex justify-center items-center my-5 border-2 py-1 px-4 rounded-full bg-sky-50 hover:bg-sky-950 hover:text-sky-50 transition-colors mx-auto"
        onClick={toggleBankList}
        aria-expanded={isClick}
        aria-controls="creditCard"
      >
        Klik disini{' '}
        <FontAwesomeIcon
          icon={faArrowCircleRight}
          className="ml-3"
          aria-hidden="true"
        />
      </button>

      <BankList isVisible={isClick} />

      <div>
        <img
          src="./images/bg-live.webp"
          alt="Wedding background"
          className="rounded-lg w-full"
          loading="lazy"
          decoding="async"
          width="800"
          height="400"
        />
      </div>
    </section>
  );
};

export default memo(Gift);

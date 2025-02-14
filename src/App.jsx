import { useState } from 'react';
import Amplop from './components/Amplop';
import Audio from './components/Audio';
import BrideAndGroom from './components/BrideAndGroom';
import Event from './components/Event';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Gift from './components/Gift';
import Hero from './components/Hero';
import LiveStream from './components/LiveStream';
import LoveStory from './components/LoveStory';
import Quote from './components/Quote';
import Rsvp from './components/Rsvp';
import Thankyou from './components/Thankyou';
import OrderNow from './components/OrderNow';

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <main className="w-full flex justify-center bg-gradient-to-br from-neutral-900 to-neutral-700">
      <div className="relative bg-white max-w-md overflow-x-hidden">
        <Audio isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        <Amplop isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        <Hero />
        <Quote />
        <BrideAndGroom />
        <Event />
        <LiveStream />
        <LoveStory />
        <Gallery />
        <Gift />
        <Rsvp collectionName={'luxury-demo4'} />
        <Thankyou />
        <Footer />
      </div>
      <OrderNow />
    </main>
  );
};

export default App;

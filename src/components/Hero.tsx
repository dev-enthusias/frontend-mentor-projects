import Navbar from './Navbar';

import HeroIllustration from '../assets/illustration-hero.svg';

const Hero = () => {
  return (
    <header>
      <Navbar />

      <div className='flex justify-between items-center'>
        <div>
          <h1>A Simple Bookmark Manager</h1>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div>
            <button>Get it on Chrome</button>
            <button>Get it on Firefox</button>
          </div>
        </div>

        <div>
          <img src={HeroIllustration} alt='Header illustration' />
        </div>
      </div>
    </header>
  );
};

export default Hero;

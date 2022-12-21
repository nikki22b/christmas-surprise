import './App.css';
import BiathlonSection from './sections/biathlonSection/biathlonSection';
import ErfurtSection from './sections/erfurtSection/erfurtSection';
import SkiSection from './sections/skiSection/skiSection';
import Stage from './sections/stage/stage';

function ChristmasCard() {
  return (
    <div>
      <Stage />
      <SkiSection />
      <BiathlonSection />
      <ErfurtSection />
    </div>
  );
}

export default ChristmasCard;

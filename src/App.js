import './App.css';
import SkiSection from './sections/skiSection/skiSection';
import Stage from './sections/stage/stage';

function ChristmasCard() {
  return (
    <div style={{minHeight: 10000}}>
      <Stage />
      <SkiSection />
    </div>
  );
}

export default ChristmasCard;

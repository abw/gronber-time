import { useEffect, useState } from 'react'
import TimeComponent from './TimeComponent';
import GronberTime from './GronberTime';
import { useTheme, Toggle } from '@abw/react-night-and-day';
import { ReactComponent as Github } from './assets/github.svg'

function App() {
  const [time, setTime] = useState(GronberTime())
  const { theme } = useTheme()
  useEffect(
    () => {
      const interval = setInterval(
        () => setTime(GronberTime()),
        1000
      );
      return () => clearInterval(interval);
    },
    []
  );

  return (
    <div className={theme} id="page">
      <div className="app">
        <div className="theme">
          <Toggle/>
        </div>
        <h1>Local Time</h1>
        <div className="time">
          <TimeComponent value={time.hours} units="Hours"/>
          <div className="spacer">:</div>
          <TimeComponent value={time.minutes} units="Minutes"/>
          <div className="spacer">:</div>
          <TimeComponent value={time.seconds} units="Seconds"/>
        </div>
        <h1>Gronber Time</h1>
        <div className="time">
          <TimeComponent value={time.quadrant} units="Quadrants" width={1}/>
          <div className="spacer">:</div>
          <TimeComponent value={time.blurg} units="Blurgs" width={1}/>
          <div className="spacer">:</div>
          <TimeComponent value={time.gronber} units="Gronbers" width={1}/>
          <div className="spacer">:</div>
          <TimeComponent value={time.nibblum} units="Nibblums" width={3}/>
          <div className="spacer">.</div>
          <div>{time.partum}</div>
        </div>
        <footer>
          <a href="https://www.reddit.com/r/AskUK/comments/15g2fcz/when_you_see_a_24_hour_time_format_do_you/jugpicg/">
            Inspired by Verbal-Gerbil
          </a>
          <a href="https://github.com/abw">
            Implemented by abw
          </a>
          <a href="https://github.com/abw/gronber-time" className="icon">
            <Github/>
          </a>
        </footer>
      </div>
    </div>
  )
}

export default App

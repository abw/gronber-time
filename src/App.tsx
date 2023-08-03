import { useEffect, useState } from 'react'
import TimeComponent from './TimeComponent';
import GronberTime from './GronberTime';
import { useTheme, Toggle } from '@abw/react-night-and-day';
import { ReactComponent as Abw } from './assets/abw.svg'

// https://www.reddit.com/r/AskUK/comments/15g2fcz/when_you_see_a_24_hour_time_format_do_you/jugpicg/
// We’re just lucky the Americans don’t use their own wild time system.
// Imagine if they split the day into quadrants and each quadrant was made
// up of 5 blurgs comprising of 9 equal gronbers,

// https://www.reddit.com/r/AskUK/comments/15g2fcz/when_you_see_a_24_hour_time_format_do_you/juh6lbv/
// So a quadrant would be 6 hours or 360 minutes.
// That means a blurg would be 360 minutes / 5 = 72 minutes
// And a gronber would be 72 / 9 = 8 minutes or 480 seconds
// They would probably need a smaller unit as well. Let's say a gronber
// is split into 120 nibblums at 4 seconds each.

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
          <TimeComponent value={time.hours} units="Hours"/>:
          <TimeComponent value={time.minutes} units="Minutes"/>:
          <TimeComponent value={time.seconds} units="Seconds"/>
        </div>
        <h1>Gronber Time</h1>
        <div className="time">
          <TimeComponent value={time.quadrant} units="Quadrant"/>:
          <TimeComponent value={time.blurg} units="Blurg"/>:
          <TimeComponent value={time.gronber} units="Gronber"/>:
          <TimeComponent value={time.nibblum} units="Nibblum"/>.
          <div>{time.partum}</div>
        </div>
        <footer>
          <a href="https://www.reddit.com/r/AskUK/comments/15g2fcz/when_you_see_a_24_hour_time_format_do_you/jugpicg/">Inspired by a Verbal Gerbil</a>
          <a href="https://github.com/abw" className="abw">
            <Abw/>
          </a>
        </footer>
      </div>
    </div>
  )
}

export default App

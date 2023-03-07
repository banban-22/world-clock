import { useState } from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';

const options = {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

const formatTime = (timeStamp) => new Date(timeStamp).toLocaleTimeString();
const formatDate = (date, options) =>
  new Date(date).toLocaleDateString('en-ca', options);

function App() {
  const now = Date.now();
  const [dateTime, setDateTime] = useState(now);
  const [date1, setDate1] = useState(formatDate(now, options));
  const [date2, setDate2] = useState('');
  const [time2, setTime2] = useState('');

  const onChangeDateHandler = (e) => {
    e.preventDefault();
    setDate1(formatDate(e.target.value, options));
  };

  const onChangeTimeHandler = (e) => {
    e.preventDefault();
    setDateTime(e.target.valueAsNumber);
  };

  return (
    <>
      {/* Vancouver to Tokyo */}
      <div className="clock-container">
        {/* Clock 1 */}
        <h2>Vancouver</h2>
        <form>
          <input type="date" id="date1" onChange={onChangeDateHandler} />
          <input type="time" id="time1" onChange={onChangeTimeHandler} />
          <div className="vanDate">{date1}</div>
          <div className="vanTime">{formatTime(dateTime)}</div>
        </form>

        <div className="arrow">
          <ArrowLongRightIcon className="icon" />
        </div>

        {/* Clock2 */}
        <h2>Tokyo</h2>
        <div className="tkyDate">{date1}</div>
        <div className="tkyTime">{formatTime(dateTime + 54000000)}</div>
      </div>

      {/*  Tokyo to Vancouver */}
      <div className="clock-container">
        {/* Clock 1 */}
        <h2>Tokyo</h2>
        <form>
          <input
            type="date"
            id="date2"
            onChange={(e) => setDate2(formatDate(e.target.value, options))}
          />
          <input
            type="time"
            id="time2"
            onChange={(e) => setTime2(formatTime(e.target.valueAsNumber))}
          />
          <div className="tkyDate">{date2}</div>
          <div className="tkyTime">{time2}</div>
        </form>

        <div className="arrow">
          <ArrowLongRightIcon className="icon" />
        </div>

        {/* Clock2 */}
        <h2>Vancouver</h2>
        <div className="vanDate">{date2}</div>
        <div className="vanTime">
          {formatTime(new Date(`${date2} ${time2}`).getTime() - 54000000)}
        </div>
      </div>
    </>
  );
}

export default App;

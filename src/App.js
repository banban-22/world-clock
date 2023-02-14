import { useState } from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';

const options = {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

const now = Date.now();
const dateFormatted = new Date(now).toLocaleDateString('en-ca', options);

function App() {
  const [date, setDate] = useState(dateFormatted);
  const [dateTime, setDateTime] = useState('');
  const [date2, setDate2] = useState('');
  const [time2, setTime2] = useState('');

  // console.log(now);

  const onChangeDateHandler = (e) => {
    e.preventDefault();
    setDate(e.target.value.toLocaleString());
    // console.log(e.target.valueAsNumber);
  };

  const onChangeTimeHandler = (e) => {
    e.preventDefault();
    setDateTime(e.target.valueAsNumber);
  };

  const timeStamp = dateTime;
  const timeFormatted = new Date(timeStamp);
  console.log(timeFormatted);

  return (
    <>
      {/* Vancouver to Tokyo */}
      <div className="clock-container">
        {/* Clock 1 */}
        <h2>Vancouver</h2>
        <form action="">
          <input type="date" id="date1" onChange={onChangeDateHandler} />
          <input
            type="datetime-local"
            id="time1"
            onChange={onChangeTimeHandler}
          />
          <div className="vanDate">{date}</div>
          <div className="vanTime">{dateTime}</div>
        </form>

        <div className="arrow">
          <ArrowLongRightIcon className="icon" />
        </div>

        {/* Clock2 */}
        <h2>Tokyo</h2>
        <div className="tkyDate">{date}</div>
        <div className="tkyTime">{dateTime}</div>
      </div>
      {/*  Toyko to Vancouver */}
      <div className="clock-container">
        {/* Clock 1 */}
        <h2>Tokyo</h2>
        <form action="">
          <input type="date" id="date2" onChange={onChangeDateHandler} />
          <input type="time" id="time2" onChange={onChangeTimeHandler} />
          <div className="tkyDate">{date2}</div>
          <div className="tkyTime">{time2}</div>
        </form>

        <div className="arrow">
          <ArrowLongRightIcon className="icon" />
        </div>

        {/* Clock2 */}
        <h2>Vancouver</h2>
        <div className="vanDate">{date2}</div>
        <div className="vanTime">{time2}</div>
      </div>
    </>
  );
}

export default App;

import React from 'react';
import PropTypes from 'prop-types';

const Day = (props) => {
  const { dt: daySeconds, weather } = props.dayInfo;
  const date = new Date(daySeconds * 1000);
  const [{ description, icon }] = weather;

  return (
    <li className="day">
      <time
        className="day-date"
        dateTime={date.toUTCString()}
      >
        {date.toDateString()}
      </time>
      <img
        alt={description}
        className="day-icon"
        src={`/images/weather-icons/${icon}.svg`}
      />
      <p className="day-description">{description}</p>
    </li>
  );
};

Day.propTypes = {
  dayInfo: PropTypes.shape({
    dt: PropTypes.number.isRequired,
    weather: PropTypes.array.isRequired,
  }).isRequired,
};

export default Day;

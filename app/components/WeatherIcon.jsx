import React from 'react';
import PropTypes from 'prop-types';

const WeatherIcon = (props) => {
  const { description, iconCode, time } = props;
  const date = new Date(time);

  return (
    <div className="weatherIcon">
      <time
        className="weatherIcon-date"
        dateTime={date.toUTCString()}
      >
        {date.toDateString()}
      </time>
      <img
        alt={description}
        className="weatherIcon-icon"
        src={`/images/weather-icons/${iconCode}.svg`}
      />
    </div>
  );
};

WeatherIcon.propTypes = {
  description: PropTypes.string.isRequired,
  iconCode: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};

export default WeatherIcon;

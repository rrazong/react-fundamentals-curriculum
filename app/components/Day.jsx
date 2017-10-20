import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import WeatherIcon from './WeatherIcon';

const Day = (props) => {
  const { city, dayInfo: { dt: daySeconds, temp: { min, max }, weather } } = props;
  const time = daySeconds * 1000;
  const [{ description, icon: iconCode }] = weather;

  return (
    <li>
      <Link
        className="day"
        to={{
          pathname: `/details/${city}`,
          state: {
            description,
            iconCode,
            time,
            min,
            max,
          },
        }}
      >
        <WeatherIcon
          time={time}
          iconCode={iconCode}
          description={description}
        />
        <p className="day-description">{description}</p>
      </Link>
    </li>
  );
};

Day.propTypes = {
  city: PropTypes.string.isRequired,
  dayInfo: PropTypes.shape({
    dt: PropTypes.number.isRequired,
    weather: PropTypes.array.isRequired,
  }).isRequired,
};

export default Day;

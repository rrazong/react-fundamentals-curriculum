import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from './WeatherIcon';

const Details = (props) => {
  const {
    location: {
      state: {
        description,
        iconCode,
        time,
        max,
        min,
      },
    },
    match: { params: { city } },
  } = props;

  return (
    <div className="details">
      <h1 className="details-city">{city}</h1>
      <WeatherIcon
        description={description}
        iconCode={iconCode}
        time={time}
      />
      <p className="details-description">{description}</p>
      <p className="details-max">Max temp: {Math.round(max)} degrees</p>
      <p className="details-min">Min temp: {Math.round(min)} degrees</p>
    </div>
  );
};

Details.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      description: PropTypes.string.isRequired,
      iconCode: PropTypes.string.isRequired,
      time: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
      min: PropTypes.number.isRequired,
    }),
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      city: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Details;

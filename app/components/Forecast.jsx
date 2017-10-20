import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { parse, stringify } from 'query-string';
import Day from './Day';
import Loading from './Loading';

class Forecast extends React.Component {
  static propTypes = {
    location: PropTypes.shape({
      search: PropTypes.string.isRequired,
    }),
  }

  static defaultProps = {
    location: {
      search: '',
    },
  }

  constructor(props) {
    super(props);

    this.forecastApiQuery = stringify({
      APPID: 'b714ec74bbab5650795063cb0fdf5fbe',
      cnt: 5,
      type: 'accurate',
      units: 'imperial',
    });
  }

  state = {
    forecast: [],
    isLoading: true,
  }

  componentDidMount() {
    const { location: { search } } = this.props;
    const { city } = parse(search);
    const forecastApiUrl = `http://api.openweathermap.org/data/2.5/forecast/daily?${this.forecastApiQuery}&q=${encodeURI(city)}`;

    axios.get(forecastApiUrl)
      .then((result) => {
        this.setState(() => ({
          forecast: result.data.list,
          isLoading: false,
        }));
      })
      .catch((error) => {
        console.log(`Failed to get forecast. ${error}`);
      });
  }

  render() {
    const { location: { search } } = this.props;
    const { city } = parse(search);
    const { forecast, isLoading } = this.state;

    if (isLoading) {
      return (
        <Loading />
      );
    }
    return (
      <div className="forecast">
        <h1 className="forecast-city">{city}</h1>
        <ul className="forecast-days">
          {
            forecast.map(day => (
              <Day city={city} dayInfo={day} key={day.dt} />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Forecast;

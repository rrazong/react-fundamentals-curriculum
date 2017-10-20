import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { stringify } from 'query-string';

class CityForm extends React.Component {
  static propTypes = {
    prompt: PropTypes.string,
  };

  static defaultProps = {
    prompt: '',
  };

  state = {
    city: '',
  };

  onChange = (event) => {
    const city = event.target.value;
    this.setState(() => ({
      city,
    }));
  }

  render() {
    const { prompt } = this.props;
    const { city } = this.state;

    return (
      <div className="cityForm">
        <label
          className="cityForm-label"
          htmlFor="city"
        >
          {prompt}
          <input
            id="city"
            className="cityForm-input"
            onChange={this.onChange}
            placeholder="City, State"
            type="text"
            value={city}
          />
        </label>
        <Link to={{
          pathname: '/forecast',
          search: stringify({ city }),
        }}
        >
          <button
            className="cityForm-button"
            disabled={this.state.city === ''}
          >
            Get Weather
          </button>
        </Link>
      </div>
    );
  }
}

export default CityForm;

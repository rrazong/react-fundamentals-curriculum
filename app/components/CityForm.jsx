import React from 'react';
import PropTypes from 'prop-types';

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
            type="text"
            value={city}
          />
        </label>
        <button className="cityForm-button">
          Get Weather
        </button>
      </div>
    );
  }
}

export default CityForm;

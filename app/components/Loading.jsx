import React from 'react';
import PropTypes from 'prop-types';

const Loading = props => (
  <div>
    <p>
      { props.text }
    </p>
  </div>
);

Loading.propTypes = {
  text: PropTypes.string,
};

Loading.defaultProps = {
  text: 'Loading...',
};

export default Loading;

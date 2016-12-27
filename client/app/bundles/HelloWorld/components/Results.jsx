import React, { PropTypes } from 'react';

function dump (obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

export default class Results extends React.Component {
  render() {
    return <div>{dump(this.props)}</div>
  }
}

Results.propTypes = {
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

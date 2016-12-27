import React, { PropTypes } from 'react';

function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

export default class ConfirmBattle extends React.Component {
  render() {
    return this.props.isLoading === true
         ? <p> LOADING! </p>
         : <div> CONFIRM BATTLE!: {puke(this.props)} </div>
  }
}

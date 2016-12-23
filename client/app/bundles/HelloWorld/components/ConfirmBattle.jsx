import React, { PropTypes } from 'react';

export default class ConfirmBattle extends React.Component {
  render() {
    return this.props.isLoading === true
         ? <p> LOADING! </p>
         : <p> CONFIRM BATTLE! </p>
  }
}

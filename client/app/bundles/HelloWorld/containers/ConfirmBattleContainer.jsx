import React from 'react';
import ConfirmBattle from '../components/ConfirmBattle'

export default class ConfirmBattleContainer extends React.Component {
  constructor(props, _railsContext) {
    super(props, _railsContext);

    this.state = {
      isLoading: true,
      playerInfo: [],
    };
    _railsContext.router
  }

  componentDidMount() {
    var query = this.props.location.query;
  }

  render() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}/>
    );
  }
}

ConfirmBattleContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

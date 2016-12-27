import React from 'react';
import ConfirmBattle from '../components/ConfirmBattle'
import { getPlayersInfo } from '../utils/githubHelper'

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
    getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function (players) {
        this.setState({
          isLoading: false,
          playersInfo: [players[0], players[1]]
        })
      }.bind(this))

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

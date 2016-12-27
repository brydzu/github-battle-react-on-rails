import React from 'react';
import ConfirmBattle from '../components/ConfirmBattle'
import { getPlayersInfo } from '../utils/githubHelper'

export default class ConfirmBattleContainer extends React.Component {
  constructor(props, _railsContext) {
    super(props, _railsContext);

    this.state = {
      isLoading: true,
      playersInfo: [],
    };
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

  handleInitiateBattle = () => {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  }

  render() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        onInitiateBattle={this.handleInitiateBattle}
        playersInfo={this.state.playersInfo} />
    );
  }
}

ConfirmBattleContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

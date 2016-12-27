import React from 'react';
import Results from '../components/Results';
import { battle } from '../utils/githubHelper';

export default class ResultsContainer extends React.Component {
  constructor(props, _railsContext) {
    super(props, _railsContext);

    this.state = {
      isLoading: true,
      scores: [],
    };
  }

  componentDidMount() {
    battle(this.props.location.state.playersInfo)
      .then(function (scores) {
        this.setState({
          scores: scores,
          isLoading: false
        })
      }.bind(this))
  }

  render() {
    return (
      <Results
        isLoading={this.state.isLoading}
        playersInfo={this.props.location.state.playersInfo}
        scores={this.state.scores} />
    )
  }
}

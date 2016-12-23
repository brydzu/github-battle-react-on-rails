import React from 'react';
import Prompt from '../components/Prompt'

export default class PromptContainer extends React.Component {
  constructor(props, _railsContext) {
    super(props, _railsContext);

    this.state = { username: '' };
    _railsContext.router
  }

  handleUpdateUser = (e) => {
    this.setState({ username: e.target.value });
  }

  handleSubmitUser = (e) => {
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });

    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username,
        }
      })

    } else {
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  }

  render() {
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username}
      />
    );
  }
}

PromptContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

import React, { PropTypes } from 'react';
import {transparentBg} from '../styles/index';

export default class Prompt extends React.Component {
  static propTypes = {
    onSubmitUser: PropTypes.func.isRequired,
    onUpdateUser: PropTypes.func.isRequired,
    header: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
        <h1>{this.props.header}</h1>
        <div className="col-sm-12">
          <form onSubmit={this.props.onSubmitUser}>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Github Username"
                onChange={this.props.onUpdateUser}
                value={this.props.username}
                type="text" />
            </div>
            <div className="from-group col-sm-4 col-sm-offset-4">
              <button
                className="btn btn-block btn-success"
                type="submit" >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

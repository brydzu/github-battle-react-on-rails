import React, { PropTypes } from 'react';

export default class HelloWorld extends React.Component {
  /* static propTypes = {
   *   name: PropTypes.string.isRequired, // this is passed from the Rails view
   * };*/

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */

  constructor(props, _railsContext) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    // this.state = { name: this.props.name };
  }

  /*
   *   updateName = (name) => {
   *     this.setState({ name });
   *   };
   * */

  render() {
    console.log(this.props)
    return(
      <div>
        <ProfilePic imageUrl={this.props.user.image}/>
        <ProfileName name={this.props.user.name}/>
        <ProfileLink username={this.props.user.username}/>
      </div>
    );
  }
};

class ProfilePic extends React.Component {
  constructor(props, _railsContext) {
    super(props);
  }

  render() {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}}></img>
  }
}

class Link extends React.Component {
  constructor(props, _railsContext) {
    super(props);
  }

  changeURL = () => {
    window.location.replace(this.props.href)
  }

  render() {
    return (
      <span style={{color: 'blue', cursor: 'pointer'}} onClick={this.changeURL} >
        {this.props.children}
      </span>
    );
  }
}

class ProfileLink extends React.Component {
  constructor(props, _railsContext) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link href={'https://www.github.com/' +  this.props.username}>
          {this.props.username}
        </Link>
      </div>
    );
  }
}

class ProfileName extends React.Component {
  constructor(props, _railsContext) {
    super(props);
  }

  render() {
    return <div> {this.props.name} </div>
  }
}

import React from 'react';
import ReactRouter, { Link } from 'react-router';
import {transparentBg} from '../styles/index';

export default class Home extends React.Component {
  render() {
    return (
      <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
        <h1>Github Battle</h1>
        <p className='lead'>What even is a jQuery?</p>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg btn-success'>Get Started</button>
        </Link>
      </div>
    );
  }
}

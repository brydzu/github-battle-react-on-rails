import React, { PropTypes } from 'react';
import styles from '../styles/index';
import { Link } from 'react-router';
import UserDetails from '../components/UserDetails';
import UserDetailsWrapper from '../components/UserDetailsWrapper';

function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

export default class ConfirmBattle extends React.Component {
  render() {
    return this.props.isLoading === true
         ? <p> LOADING! </p>
         : <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
           <h1>Confirm Players</h1>
           <div className='col-sm-8 col-sm-offset-2'>
             <UserDetailsWrapper header='Player 1'>
               <UserDetails info={this.props.playersInfo[0]} />
             </UserDetailsWrapper>
             <UserDetailsWrapper header='Player 2'>
               <UserDetails info={this.props.playersInfo[1]} />
             </UserDetailsWrapper>
           </div>
           <div className='col-sm-8 col-sm-offset-2'>
             <div className='col-sm-12' style={styles.space}>
               <button type='button' className='btn btn-lg btn-success' onClick={this.props.onInitiateBattle}>Initiate Battle!</button>
             </div>
             <div className='col-sm-12' style={styles.space}>
               <Link to='/playerOne'>
                 <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
               </Link>
             </div>
           </div>
         </div>
  }
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
}

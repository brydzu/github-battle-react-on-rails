import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';
import PromptContainer from '../containers/PromptContainer';
import ConfirmBattleContainer from '../containers/ConfirmBattleContainer';
import ResultsContainer from '../containers/ResultsContainer';

export default (
  <Route path='/' component={Main}>
    <IndexRoute component={Home} />
    <Route path="playerOne" header="Player One" component={PromptContainer} />
    <Route path="playerTwo/:playerOne" header="Player Two" component={PromptContainer} />
    <Route path="battle" component={ConfirmBattleContainer} />
    <Route path="results" component={ResultsContainer} />
  </Route>
)

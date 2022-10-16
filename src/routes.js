// npm install react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeFixed from './components/HomeFixed';
import HomeDynamic from './components/HomeDynamic';
import HightlightsChampionship from './components/pages/HighlightsChampionship';
import BrzlinChampionship from './components/pages/BrazilianChampionship';
import ScreChampionship from './components/pages/ScoreChampionship';
import PlayersSoccerBrazilCup from './components/pages/PlayersSoccerBrazilCup';
import MyAccount from './components/pages/MyAccount';

function RoutesApp(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/homeFixed" element={ <HomeFixed/> } />
        <Route path="/" element={ <HomeDynamic/> } />
        <Route path="/highlightsChampionship" element={ <HightlightsChampionship/> } />
        <Route path="/brazilianChampionship" element={ <BrzlinChampionship/> } />
        <Route path="/scoreChampionship" element={ <ScreChampionship/> } />
        <Route path="/footballersBrazilCup" element={ <PlayersSoccerBrazilCup/> } />
        <Route path="/myAccount" element={ <MyAccount/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;
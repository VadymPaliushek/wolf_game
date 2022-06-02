import {
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import IndexPage from './pages/index';
import {Menus} from './components/Navbar/navbar';
import RiskyGamePage from './pages/riskygame';
import WoolPouchesPage from './pages/woolpouches';
import LandPage from './pages/land';
import WhitePaperPage from './pages/whitepaper';
import WhitePaper2Page from './pages/whitepaperv2';
import GamePage from './pages/game';

function App() {
  return (
    <Routes>
      <Route path="/" element={<GamePage menu={Menus.Game.label}/>} />
      <Route path={`${Menus.Game.link}`} element={<GamePage menu={Menus.Game.label}/>} />
      <Route path={`${Menus.Migrate.link}`} element={<IndexPage menu={Menus.Migrate.label}/>} />
      <Route path={`${Menus.RiskyGame.link}`} element={<RiskyGamePage menu={Menus.RiskyGame.label}/>} />
      <Route path={`${Menus.WoolPouches.link}`} element={<WoolPouchesPage menu={Menus.WoolPouches.label}/>} />
      <Route path={`${Menus.Land.link}`} element={<LandPage menu={Menus.Land.label}/>} />
      <Route path={`${Menus.WhitePaper.link}`} element={<WhitePaperPage menu={Menus.WhitePaper.label}/>} />
      <Route path={`${Menus.WhitePaper2.link}`} element={<WhitePaper2Page menu={Menus.WhitePaper2.label}/>} />
      
    </Routes>
  );
}

export default App;

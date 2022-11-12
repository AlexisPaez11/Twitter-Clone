import { Routes, Route } from 'react-router-dom'

import Header from './components/header/Header'

import Nav from './components/nav/Nav'
import NavMenu from './components/nav/NavMenu.jsx'

import Home from './components/home/Home'
import Profile from './components/profile/Profile'

import Sidebar from './components/sidebar/Sidebar.jsx'

function App() {
  return (
    <div className="App">
        <Header />
        <div className="main">
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='profile' element={<Profile />} />
          </Routes>
          <Sidebar/>
        </div>
        <NavMenu />

    </div>
  );
}

export default App;

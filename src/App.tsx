import React from 'react'
import './styles/App.css'
import RtwBtn from './components/ready to work btn/rtw-btn'
import Navbar from './components/navbar/Navbar'
import Technology from './pages/technology/technology'
import Services from './pages/services/services'
import RadarPage from './pages/radar-page/RadarPage'

function App() {
    return (
        <div className="MainWrapper">
        <div
            className="App"
            style={{ display: 'flex', flexDirection: 'column' }}
        >
            <Navbar />
            <RadarPage />
            <Services />
            <Technology />
            <RtwBtn />
        </div>

        </div>
    )
}

export default App

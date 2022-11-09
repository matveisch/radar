import React from 'react'
import './styles/App.css'
import RtwBtn from './components/ready to work btn/RtwBtn'
import Technology from './pages/technology/technology'
import Services from './pages/services section/ServicesSection'
import RadarPage from './pages/radar-page/RadarPage'

function App() {
    return (
        <div className="MainWrapper">
            <div
                className="App"
                style={{ display: 'flex', flexDirection: 'column' }}
            >
                <RadarPage />
            </div>
        </div>
    )
}

export default App

import './styles/App.css';
import RtwBtn from './components/ready to work btn/RtwBtn';
import Technology from './pages/technology/technology';
import Services from './pages/services section/ServicesSection';
import RadarPage from './pages/radar-page/RadarPage';
import CarouselPage from './pages/carousel-page/CarouselPage';

function App() {
    return (
        <div className="MainWrapper">
            <div
                className="App"
                style={{ display: 'flex', flexDirection: 'column' }}
            >
                <RadarPage />
                <Services />
                <Technology />
                <CarouselPage />
                <RtwBtn />
            </div>
        </div>
    );
}

export default App;

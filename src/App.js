// React
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { trackPromise } from 'react-promise-tracker';
// Components
import Navbar from './components/Base/Navbar';
import Favicon from './components/Base/Favicon';
import Footer from './components/Base/Footer';
// Pages
import Home from './pages/Home';
import Statistik from './pages/Statistik';
import Daten from './pages/Daten';
import Zuege from './pages/Zuege';
import Auto from './pages/Auto';
import Timeline from './pages/Timeline';
import AddData from './pages/AddData';

function App() {
    const [dataPoints, setDataPoints] = useState([]);

    const fetchData = async () => {
        const response = await fetch('http://localhost:5000/Dienste');
        const data = await response.json();
        return data;
    };

    useEffect(() => {
        const loadData = async () => {
            const dataFromServer = await fetchData();
            setDataPoints(dataFromServer);
        };
        trackPromise(loadData());
    }, []);

    return (
        <div className="App">
            <Navbar />
            <div className="pages">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Statistik" element={<Statistik data={dataPoints} />} />
                    <Route path="/Daten" element={<Daten data={dataPoints} />} />
                    <Route path="/Timeline" element={<Timeline data={dataPoints} />} />
                    <Route path="/Zuege" element={<Zuege />} />
                    <Route path="/Auto" element={<Auto />} />
                    <Route path="/AddData" element={<AddData />} />
                </Routes>
            </div>
            <Footer />
            <Favicon />
        </div>
    );
}

export default App;

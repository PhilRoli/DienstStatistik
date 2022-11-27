// React
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { trackPromise } from 'react-promise-tracker';
// Components
import Navbar from './components/Navbar';
import Favicon from './components/Favicon';
// Pages
import Home from './pages/Home';
import Statistik from './pages/Statistik';
import Daten from './pages/Daten';
import Timeline from './pages/Timeline';
import AddData from './pages/AddData';
import Footer from './components/Footer';

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
                    <Route path="/DienstStatistik/" element={<Home />} />
                    <Route path="/DienstStatistik/Statistik" element={<Statistik data={dataPoints} />} />
                    <Route path="/DienstStatistik/Daten" element={<Daten data={dataPoints} />} />
                    <Route path="/DienstStatistik/Timeline" element={<Timeline data={dataPoints} />} />
                    <Route path="/DienstStatistik/AddData" element={<AddData />} />
                </Routes>
            </div>
            <Footer />
            <Favicon />
        </div>
    );
}

export default App;

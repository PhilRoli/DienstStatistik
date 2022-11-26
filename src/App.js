// React
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
// Components
import Navbar from './components/Navbar';
// Pages
import Home from './pages/Home';
import Statistik from './pages/Statistik';
import Daten from './pages/Daten';
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
        loadData();
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
                    <Route path="/AddData" element={<AddData />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;

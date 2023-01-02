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
import Erweitert from './pages/Erweitert';
import Graphs from './pages/Graphs';
import Timeline from './pages/Timeline';
import AddData from './pages/AddData';

function App() {
    const [dataPoints, setDataPoints] = useState([]);

    const fetchData = async () => {
        const response = await fetch('https://dienststatistikbackend-production.up.railway.app/api/getAll').catch(
            (error) => {
                console.error(error);
            }
        );
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

    // Create deep copys for each page as to not change the data for other pages
    // source: https://stackoverflow.com/questions/47624142/right-way-to-clone-objects-arrays-during-setstate-in-react
    // JSON.parse(JSON.stringify(dataPoints))

    return (
        <div className="App">
            <Navbar />
            <div className="pages">
                <Routes>
                    <Route path="/" element={<Home data={JSON.parse(JSON.stringify(dataPoints))} />} />
                    <Route path="/Statistik" element={<Statistik data={JSON.parse(JSON.stringify(dataPoints))} />} />
                    <Route path="/Daten" element={<Daten data={JSON.parse(JSON.stringify(dataPoints))} />} />
                    <Route path="/Timeline" element={<Timeline data={JSON.parse(JSON.stringify(dataPoints))} />} />
                    <Route path="/Erweitert" element={<Erweitert data={JSON.parse(JSON.stringify(dataPoints))} />} />
                    <Route path="/Graphs" element={<Graphs data={JSON.parse(JSON.stringify(dataPoints))} />} />
                    <Route path="/AddData" element={<AddData />} />
                </Routes>
            </div>
            <Footer />
            <Favicon />
        </div>
    );
}

export default App;

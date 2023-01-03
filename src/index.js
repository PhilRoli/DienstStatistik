// react
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
// CSS
// Base
import './style/App.css';
import './style/index.css';
// Pages
import './style/pages/AddData.css';
import './style/pages/dataRow.css';
import './style/pages/dataTable.css';
import './style/pages/pages.css';
import './style/pages/statistik.css';
import './style/pages/erweitert.css';
import './style/pages/Home.css';
import './style/pages/Graphs.css';
// Components
import './style/components/Calendar.css';
import './style/components/DateRangeObject.css';
import './style/components/DateRangePicker.css';
import './style/components/footer.css';
import './style/components/navbar.css';
import './style/components/ZugDropdown.css';
// App
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

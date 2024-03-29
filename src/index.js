// react
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
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
import './style/pages/TimelineCalender.css';
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
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

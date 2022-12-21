// react
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
// CSS
import './style/App.css';
import './style/Calendar.css';
import './style/dataRow.css';
import './style/dataTable.css';
import './style/DateRangeObject.css';
import './style/DateRangePicker.css';
import './style/footer.css';
import './style/index.css';
import './style/navbar.css';
import './style/pages.css';
import './style/statistik.css';
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
// React
import { Route, Routes } from 'react-router-dom';
import * as reactRouterDom from 'react-router-dom';
import { useEffect, useState } from 'react';
import { trackPromise } from 'react-promise-tracker';
// SuperTokens
import SuperTokens, { SuperTokensWrapper, getSuperTokensRoutesForReactRouterDom } from 'supertokens-auth-react';
import EmailPassword from 'supertokens-auth-react/recipe/emailpassword';
import Session from 'supertokens-auth-react/recipe/session';
import { SessionAuth } from 'supertokens-auth-react/recipe/session';
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
    // Get data
    const [dataPoints, setDataPoints] = useState([]);

    const fetchData = async () => {
        const response = await fetch('https://dienststatistikbackend-development.up.railway.app/api/getAll').catch(
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

    // Get latest commit date
    const [commitDate, setCommitDate] = useState();

    const fetchCommit = async () => {
        const response = await fetch('https://api.github.com/repos/PhilRoli/DienstStatistik/branches/development').catch(
            (error) => {
                console.log(error);
            }
        );
        const comDate = await response.json();
        return comDate.commit.commit.author.date;
    };

    useEffect(() => {
        const loadCommit = async () => {
            const comDateServer = await fetchCommit();
            setCommitDate(comDateServer);
        };
        trackPromise(loadCommit());
    }, []);

    SuperTokens.init({
        appInfo: {
            // learn more about this on https://supertokens.com/docs/emailpassword/appinfo
            appName: 'dienststatistik',
            apiDomain: 'https://dienststatistikbackend-development.up.railway.app',
            websiteDomain: 'https://development.dienststatistik.at',
            // websiteDomain: 'localhost:3000',
            apiBasePath: '/auth',
            websiteBasePath: '/auth',
        },
        recipeList: [
            EmailPassword
                .init
                // TODO: Maybe find a fix
                //     {
                //     signInAndUpFeature: {
                //         signUpForm: {
                //             formFields: [
                //                 {
                //                     id: 'name',
                //                     label: 'Vorname',
                //                     placeholder: 'Dein Vorname',
                //                     optional: true,
                //                 },
                //                 {
                //                     id: 'zugAssoc',
                //                     label: 'Dein Zug',
                //                     placeholder: 'Nur die Zahl z.B: 12',
                //                 },
                //             ],
                //         },
                //     },
                // }
                // TODO: Add SignUp DB creation
                // {
                //     onHandleEvent: async (context) => {
                //         if (context.action === 'SESSION_ALREADY_EXISTS') {
                //             // TODO:
                //         } else {
                //             if (context.action === 'SUCCESS') {
                //                 if (context.isNewUser) {
                //                     // TODO: Sign up
                //                 } else {
                //                     // TODO: Sign in
                //                 }
                //             }
                //         }
                //     },
                // }
                (),
            Session.init(),
        ],
    });

    // Create deep copys for each page as to not change the data for other pages
    // source: https://stackoverflow.com/questions/47624142/right-way-to-clone-objects-arrays-during-setstate-in-react
    // JSON.parse(JSON.stringify(dataPoints))

    return (
        <SuperTokensWrapper>
            <div className="App">
                <Navbar />
                <div className="pages">
                    <Routes>
                        {/*This renders the login UI on the /auth route*/}
                        {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
                        <Route
                            path="/"
                            element={
                                <SessionAuth>
                                    <Home data={JSON.parse(JSON.stringify(dataPoints))} />
                                </SessionAuth>
                            }
                        />
                        <Route
                            path="/Statistik"
                            element={
                                <SessionAuth>
                                    <Statistik data={JSON.parse(JSON.stringify(dataPoints))} />
                                </SessionAuth>
                            }
                        />
                        <Route
                            path="/Daten"
                            element={
                                <SessionAuth>
                                    <Daten data={JSON.parse(JSON.stringify(dataPoints))} />
                                </SessionAuth>
                            }
                        />
                        <Route
                            path="/Timeline"
                            element={
                                <SessionAuth>
                                    <Timeline data={JSON.parse(JSON.stringify(dataPoints))} />
                                </SessionAuth>
                            }
                        />
                        <Route
                            path="/Erweitert"
                            element={
                                <SessionAuth>
                                    <Erweitert data={JSON.parse(JSON.stringify(dataPoints))} />
                                </SessionAuth>
                            }
                        />
                        <Route
                            path="/Graphs"
                            element={
                                <SessionAuth>
                                    <Graphs data={JSON.parse(JSON.stringify(dataPoints))} />
                                </SessionAuth>
                            }
                        />
                        <Route
                            path="/AddData"
                            element={
                                <SessionAuth>
                                    <AddData data={dataPoints} />
                                </SessionAuth>
                            }
                        />
                    </Routes>
                </div>
                <Footer commitDate={commitDate} cached={window.navigator.onLine} />
                <Favicon />
            </div>
        </SuperTokensWrapper>
    );
}

export default App;

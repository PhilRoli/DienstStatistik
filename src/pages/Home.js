import HomeStats from '../components/Home/HomeStats';
import moment from 'moment/moment';
import HomeTable from '../components/Home/HomeTable';
import Zug5Stats from '../components/Home/Zug5Stats';

function Home({ data }) {
    document.title = 'DienstStatistik';
    // Find earliest date
    // Create array with only dates from 'data', sort for earliest date
    const dateArray = data.map((value) => value.date);
    const earliestDate =
        dateArray.length !== 0
            ? moment(
                  dateArray.reduce(function (a, b) {
                      return a < b ? a : b;
                  })
              )
            : moment();
    const currentDate = moment(new Date());

    const diff = moment.duration(currentDate.diff(earliestDate))._data;

    return (
        <>
            <h1>Willkommen!</h1>
            <hr />
            <h3>
                Tracking seit {diff.years === 1 ? diff.years + ' Jahr' : diff.years + ' Jahre'},{' '}
                {diff.months === 1 ? diff.months + ' Monat' : diff.months + ' Monate'},{' '}
                {diff.days === 1 ? diff.days + ' Tag' : diff.days + ' Tage'}.
            </h3>
            <h3>
                Du machst durchschnittlich einen Dienst alle{' '}
                {Math.round(currentDate.diff(earliestDate, 'days') / data.length)} Tage
            </h3>
            <h3>
                Das entspricht ca {Math.round((365 / (currentDate.diff(earliestDate, 'days') / data.length) / 365) * 100)}%
                deiner Zeit
            </h3>
            <hr />
            <div className="parent" style={{ width: '100%' }}>
                <HomeStats data={data} textColor={'#FFFFFF'} />
                <Zug5Stats data={data} textColor={'#FFFFFF'} />
            </div>
            <hr />
            <b style={{ fontSize: 'x-large' }}>Letzten 5 Dienste</b>
            <HomeTable data={data} />
            <hr />
        </>
    );
}

export default Home;

import { RotatingLines } from 'react-loader-spinner';

function Loading() {
    return (
        <div className="center">
            <RotatingLines strokeColor="rgb(218, 37, 28)" strokeWidth="3" width="100" visible={true} />
            <p style={{ fontSize: '25px', fontWeight: 'bolder' }}>Daten werden geladen</p>
        </div>
    );
}

export default Loading;

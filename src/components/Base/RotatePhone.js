import { TbDeviceMobileRotated } from 'react-icons/tb';

function RotatePhone() {
    return (
        <div className="center rotatePhone">
            {/* <p> */}
                <TbDeviceMobileRotated size={'75px'} />
            {/* </p> */}
            <p style={{ fontSize: '30px', fontWeight: 'bolder', width: '100%' }}>Bitte das Gerät drehen</p>
        </div>
    );
}

export default RotatePhone;

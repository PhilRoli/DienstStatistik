import NumberInput from './NumberInput';

function Calls_addData({ ktValue, ktData, changeKT, rdValue, rdData, changeRD, naValue, naData, changeNA }) {
    return (
        <div className="Calls_addData">
            <div className="KT_addData">
                <div className="KTText_addData">
                    <h3>KT</h3>
                </div>
                <div className="KTInput_addData">
                    <NumberInput
                        data={ktData}
                        changeValue={changeKT}
                        placeholder={'0'}
                        name={'kt'}
                        value={ktValue}
                        step={1}
                    />
                </div>
            </div>
            <div className="RD_addData">
                <div className="RDText_addData">
                    <h3>RD</h3>
                </div>
                <div className="RDInput_addData">
                    <NumberInput
                        data={rdData}
                        changeValue={changeRD}
                        placeholder={'0'}
                        name={'rd'}
                        value={rdValue}
                        step={1}
                    />
                </div>
            </div>
            <div className="NA_addData">
                <div className="NAText_addData">
                    <h3>NA</h3>
                </div>
                <div className="NAInput_addData">
                    <NumberInput
                        data={naData}
                        changeValue={changeNA}
                        placeholder={'0'}
                        name={'na'}
                        maxValue={rdValue}
                        value={naValue}
                        step={1}
                    />
                </div>
            </div>
        </div>
    );
}

export default Calls_addData;

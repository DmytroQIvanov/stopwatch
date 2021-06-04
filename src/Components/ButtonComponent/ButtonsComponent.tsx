import React from 'react';
import './ButtonComponent.sass'

const ButtonsComponent = (props:{start:any,stop:any,resume:any,status:number,wait:any}) => {
    const {start,stop,resume,status,wait} = props;
    return (
        <div className={'buttom-component'}>
            {
                status==0 ?
                    <>
                        <button onClick={start} className={'buttom-component__buttom'}>Start</button>
                    </>
                    :
                    <>
                <button onClick={stop} className={'buttom-component__buttom'}>Stop</button>
                </>}
            <button onClick={wait} className={'buttom-component__buttom'}>Wait</button>
            <button onClick={resume} className={'buttom-component__buttom'}>Reset</button>

        </div>
    );
};

export default ButtonsComponent;
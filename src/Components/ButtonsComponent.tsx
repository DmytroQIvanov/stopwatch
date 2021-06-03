import React from 'react';

const ButtonsComponent = (props:{start:any,stop:any,resume:any,status:number,wait:any}) => {
    const {start,stop,resume,status,wait} = props;
    return (
        <div>
            {
                status==0 ?
                    <>
                        <button onClick={start}>Start</button>
                    </>
                    :
                    <>
                <button onClick={stop}>Stop</button>
                </>}
            <button onClick={wait} >Wait</button>
            <button onClick={resume}>Reset</button>

        </div>
    );
};

export default ButtonsComponent;
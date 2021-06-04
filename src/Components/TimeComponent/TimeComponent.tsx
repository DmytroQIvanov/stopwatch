import React from 'react';
import './TimeComponent.sass'

const TimeComponent = (props:{time:number}) => {
    const {time} = props;
    return (
        <div className={'time-component'}>

            {/*Hours*/}
            <span className={'time-component__block'}>{('0' + Math.floor((time / (1000 * 60 * 60)) % 24)).slice(-2)}</span>:

            {/*Minutes*/}
            <span className={'time-component__block'}>{('0' + Math.floor(time / 6000)).slice(-2)}</span>:

            {/*Seconds*/}
            <span className={'time-component__block'}>{('0' + Math.floor((time / 100) % 60)).slice(-2)}</span>

            {/*Milliseconds*/}
            <span className={'time-component__side-block'}>{('0' + Math.floor((time % 100))).slice(-2)}</span>
        </div>
    );
};

export default TimeComponent;
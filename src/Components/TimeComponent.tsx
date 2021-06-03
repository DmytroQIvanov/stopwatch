import React from 'react';

const TimeComponent = (props:{time:number}) => {
    const {time} = props;
    return (
        <div>

            {/*Hours*/}
            <span>{('0' + Math.floor((time / (1000 * 60 * 60)) % 24)).slice(-2)}</span>:

            {/*Minutes*/}
            <span>{('0' + Math.floor(time / 6000)).slice(-2)}</span>:

            {/*Seconds*/}
            <span>{('0' + Math.floor((time / 100) % 60)).slice(-2)}</span>

        </div>
    );
};

export default TimeComponent;
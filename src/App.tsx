import React, {useEffect, useState} from 'react';
import './App.css';
import {interval, Subject} from "rxjs";
import { takeUntil} from "rxjs/operators";
import ButtonsComponent from "./Components/ButtonsComponent";
import TimeComponent from "./Components/TimeComponent";


function App() {
    const [time, setTime] = useState(0)
    const [status, setStatus] = useState(0)
    const [start, setStart] = useState(false)
    const [smth,setSmth] = useState(false)

    useEffect(() => {

        const unsubscribe = new Subject();
        interval(10)
            .pipe(takeUntil(unsubscribe))
            .subscribe(() => {
                if (start) {
                    setTime(val => val + 1);
                }
            });
        return () => {
            unsubscribe.next(time);
            unsubscribe.complete();
        };
    }, [start]);

    const wait =()=>{
        const sub = interval(10)
            .subscribe(v=>{
                setSmth(true)

        if(smth){
            if(start){
                handleStop()
            }
            sub.unsubscribe()
        }})
        setTimeout(()=>{

            sub.unsubscribe()
            setSmth(false)
        },500)
    }



    const handleStart =():void=>{
        setStatus(1);
        setStart(prevState => !prevState)
    }
    const handleReset =()=>{
        setTime(0)

    }



    const handleStop =()=>{
    setStart(false);
        setStatus(0);

    }
    return (
    <div className="App">
        <TimeComponent time={time}/>
    <ButtonsComponent
        start={handleStart}
        stop={handleStop}
        resume={handleReset}
        status={status}
        wait={wait}
    />
    </div>
  );
}

export default App;

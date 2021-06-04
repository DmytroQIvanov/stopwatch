import React, {useEffect, useState} from 'react';
import './App.sass';
import {interval, Observable, Subject,} from "rxjs";
import {scan, takeUntil} from "rxjs/operators";
import ButtonsComponent from "./Components/ButtonComponent/ButtonsComponent";
import TimeComponent from "./Components/TimeComponent/TimeComponent";


function App() {
    const [time, setTime] = useState(0)
    const [status, setStatus] = useState(0)
    const [start, setStart] = useState(false)
    const [click,setClick] = useState(false)


    function stopwatch(){
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
    }
    useEffect(() => {
    stopwatch()
    }, [start]);

    const wait =()=>{
        const sub$ = interval(10)
            .subscribe(v=>{
                setClick(true)
        if(click){
            if(start){
                handleStop()
            }
            sub$.unsubscribe()
        }})
        setTimeout(()=>{
            sub$.unsubscribe()
            setClick(false)
        },300)
    }



    const handleStart =():void=>{
        setStatus(1);
        setStart(prevState => !prevState)
    }
    const handleReset =()=>{
        setTime(0)

    }

    // const f=()=>{
    //
    //     const source$ = new Observable(observer => {
    //         observer.next()
    //     });
    //     source$
    //         .pipe(scan(count => count + 1, 0))
    //         .subscribe(count => console.log(`Clicked ${count} times`));
    //
    //
    // }

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
        wait={wait}/>
    </div>
  );
}

export default App;

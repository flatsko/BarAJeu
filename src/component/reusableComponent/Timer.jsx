import React, { useEffect, useState, useMemo } from "react";
import ProgressBar from "./ProgressBar.jsx";


const Timer = ({length, isTimerExpired}) => {
    //const [isTimeExpire, setIsTimeExpire] = useState(props.IsTimerExpired);
    //Déclaration
    const lengthInSec = length;
    //const actualTime = new Date().getTime();
    const [totalDepart, setTotalDepart] = useState(100);
    //var timerRun = props.IsTimerExpired;
    //var TimerRunning = props.IsTimerExpired;
    const decrescendo = totalDepart / lengthInSec;
    const copyDecrecendo = decrescendo;
    const [timer, setTimer] = useState(lengthInSec);
    //console.log(actualTime)

//Comportement
useEffect(() => {
    if (timer <= 0) {
        isTimerExpired(true) ;
        //console.log(isTimeExpire);
        return;
    }
    const time = setTimeout(() => {
        setTimer(timer - 1);
        setTotalDepart(totalDepart - (100 / lengthInSec));
        console.log(totalDepart);

    }, 1000);

    return () => clearInterval(time)


}, [lengthInSec, timer, totalDepart]);

const stopTimer = () =>
{
    timerRun = false;
}

//Affichage
return (
    <div>
        <ProgressBar bgcolor="red" completed={totalDepart} sec={true} length={timer} />
    </div>
)
}

export default Timer;
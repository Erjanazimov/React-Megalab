import React, {FC, useEffect, useState} from 'react';

const Time:FC = () => {
    const [week] = useState<string[]>(["Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]);
    const date:any = new Date();
    const numWeek:number = date.getDay();
    let [sec, secSet] = useState<number>(date.getSeconds());
    let [min, minSet] = useState<number>(date.getMinutes());
    let [hour, hourSet] = useState<number>(date.getHours());

    useEffect(() => {
        setInterval(start, 1000)
    }, [ ])



    function start(){
        secSet(sec += 1);
        if(sec === 60) {
            secSet(sec = 0);
            minSet(min += 1)
        } else if(min === 60){
            minSet(min = 0)
            hourSet(hour += 1)
        } else if(hour === 24){
            hourSet(hour = 0)
        }
    }

    function autoTime(){
        const hourAuto = Number(prompt(`${hour} часов`));
        const minAuto = Number(prompt(`${min} минуты`));

        if (hourAuto){
            hourUpdate(hourAuto)
        } else if (hourAuto === NaN){
            alert("В часах указали строку")
        }

        if (minAuto){
            minUpdate(minAuto)
        } else if (minAuto === NaN){
            alert("В минутах указали строку")
        }
    }

    function hourUpdate(hourUpdate:number){
        hourSet(hourUpdate)
    }

    function minUpdate(minUpdate:number){
        minSet(minUpdate)
    }

    function reset(){
        hourSet(hour = date.getHours());
        minSet( min = date.getMinutes());
        secSet( sec = date.getSeconds())
    }
    return (
        <div>
            <div>
                <span>Today is:</span> <span id="today">{week[numWeek - 1]}</span>
            </div>
            <div>
                <span>Current time is: </span><span id="time">{`${hour}:${min}:${sec}`}</span>
            </div>
            <div className="d-flex">
            <div>
                <button onClick={autoTime} className="btn btn-outline-primary">Изменить время</button>
            </div>
            <div>
                <button onClick={reset} className="btn btn-outline-dark mx-2">Сброс</button>
            </div>
            </div>
        </div>
    );
};

export default Time;
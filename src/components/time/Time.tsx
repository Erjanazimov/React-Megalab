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
        secSet(sec++);
        setInterval(start, 1000)
    }, [])

    function start(){
        secSet(sec++);
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
    return (
        <div>
            <div>
                <span>Today is:</span> <span id="today">{week[numWeek - 1]}</span>
            </div>
            <div>
                <span>Current time is: </span><span id="time">{`${hour}:${min}:${sec}`}</span>
            </div>
        </div>
    );
};

export default Time;
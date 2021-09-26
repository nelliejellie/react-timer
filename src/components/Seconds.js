import React, {useState, useEffect} from 'react'
import Card from './Card';
import '../styles/sec.css'

const Seconds = ({dayshoursMinSecs}) => {
   
    const {days = 0,  hours = 0, minutes = 0, seconds = 60 } = dayshoursMinSecs;
    const [[dys,hrs, mins, secs], setTime] = useState([days,hours, minutes, seconds]);
    

    const tick = () => {
   
        if (dys === 0 && hrs === 0 && mins === 0 && secs === 0) 
            reset()
        else if(hrs === 0 && mins === 0 && secs === 0){
            setTime([dys - 1,59,59,59]);
        }
        else if (mins === 0 && secs === 0) {
            setTime([dys,hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([dys,hrs, mins - 1, 59]);
        } else {
            setTime([dys,hrs, mins, secs - 1]);
        }
    };


    const reset = () => setTime([parseInt(days),parseInt(hours), parseInt(minutes), parseInt(seconds)]);

    
    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    
    return (
        <div>
            <p className='timer'>
               <Card check='days'>{`${dys.toString().padStart(2, '0')}`}</Card>
               <Card check='hours'>{`${hrs.toString().padStart(2, '0')}`}</Card>
               <Card check='minutes'>{`${mins.toString().padStart(2, '0')}`}</Card> 
               <Card check='seconds'>{`${secs.toString().padStart(2, '0')}`}</Card>  
            </p> 
        </div>
    );
}

export default Seconds;


// {`${hrs.toString().padStart(2, '0')}:${mins
//     .toString()
//     .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}
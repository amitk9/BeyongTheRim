import "./TimeProgress.css"
import React, { useEffect, useState } from 'react';

function TimeProgress({ id, fullTime, next }) {
    const [currTime, setCurrTime] = useState(0);
    let interval;

    useEffect(() => {
        setCurrTime(0);

        // eslint-disable-next-line
        interval = setInterval(() => {
            setCurrTime(currTime => currTime + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [id])

    useEffect(() => {
        if (currTime === fullTime) {
            setTimeout(next, 200);
        }
    // eslint-disable-next-line
    }, [currTime])

    return (
        <article className="TimeProgress">
            <h3 id="time">
                {fullTime - currTime} sec
            </h3>
            <progress
                id="time"
                value = {currTime}
                max={fullTime}
            ></progress>
        </article>
    )
}

export default TimeProgress;
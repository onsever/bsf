import React from "react";
import Helper from "../../utils/Helper.ts";

const Clock = () => {
    const [time, setTime] = React.useState({
        hours: 3,
        minutes: 1,
        seconds: 54
    });

    React.useEffect(() => {
        if (time.seconds === 60) {
            setTime((prevTime) => {
                return {
                    ...prevTime,
                    minutes: prevTime.minutes + 1,
                    seconds: prevTime.seconds - 60
                }
            });
        } else if (time.minutes === 60) {
            setTime((prevTime) => {
                return {
                    ...prevTime,
                    hours: prevTime.hours + 1,
                    minutes: prevTime.minutes - 60
                }
            });
        } else if (time.hours === 12) {
            setTime((prevTime) => {
                return {
                    ...prevTime,
                    hours: 0
                }
            });
        }

        const interval = setInterval(() => {
            setTime((prevTime) => {
                return {
                    ...prevTime,
                    seconds: prevTime.seconds + 1
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [time]);

    return (
        <div>
            <h1>{Helper.formatTime(`${time.hours}:${time.minutes}:${time.seconds}`)}</h1>
        </div>
    );
}

export default Clock;

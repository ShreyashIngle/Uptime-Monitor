import moment from "moment";

export const getTimePeriod = (timestamp) => {
    let currentTime = Date.now();
    let timeDiff = currentTime - timestamp;

    let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    let timePeriod = {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };

    let timeString = "";

    Object.keys(timePeriod).forEach((key) => {
        timePeriod[key] !== 0 ? timeString += `${timePeriod[key] + " " + key + " "}` : null
    })

    return timeString;
}


class Helper {
    public static formatTime = (time: string) => {
        // '3:01:54' ->  03:01:54
        const timeArray = time.split(":");

        if (timeArray[0].length === 1 && parseInt(timeArray[0]) < 10) {
            timeArray[0] = "0" + timeArray[0];
        }

        if (timeArray[1].length === 1 && parseInt(timeArray[1]) < 10) {
            timeArray[1] = "0" + timeArray[1];
        }

        if (timeArray[2].length === 1 && parseInt(timeArray[2]) < 10) {
            timeArray[2] = "0" + timeArray[2];
        }

        time = timeArray.join(":");

        return time;
    }
}

export default Helper;

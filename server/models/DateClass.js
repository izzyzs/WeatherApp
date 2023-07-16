class DateClass {
    constructor(unixTime) {
        this.date = new Date(unixTime * 1000); // convert to milliseconds
    }

    get month() {
        return this.date.getMonth();
    }

    get day() {
        return days[this.date.getDay()];
    }

    get theDate() {
        return this.date.getDate();
    }

    get year() {
        this.date.getFullYear();
    }
}

module.exports = DateClass;

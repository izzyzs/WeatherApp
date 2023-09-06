days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
months = ["January", "Februrary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
hours = [
    "12 AM",
    "1 AM",
    "2 AM",
    "3 AM",
    "4 AM",
    "5 AM",
    "6 AM",
    "7 AM",
    "8 AM",
    "9 AM",
    "10 AM",
    "11 PM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
    "6 PM",
    "7 PM",
    "8 PM",
    "9 PM",
    "10 PM",
    "11 PM",
];

class DateClass {
    constructor(unixTime) {
        this.date = new Date(unixTime * 1000); // convert to milliseconds
    }

    get hour() {
        return hours[this.date.getHours()];
    }

    get getLongDate() {
        return `${months[this.date.getMonth()]} ${this.date.getDate()}, ${this.date.getFullYear()}`;
    }

    get month() {
        return `${months[this.date.getMonth()]}`;
    }

    get day() {
        return days[this.date.getDay()];
    }

    get theDate() {
        return this.date.getDate();
    }

    get year() {
        return this.date.getFullYear();
    }
}

module.exports = DateClass;

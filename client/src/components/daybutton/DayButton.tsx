import React from "react";
import "./daybutton.css";

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
class DateClass {
    date: Date;
    constructor(unixTime: number) {
        this.date = new Date(unixTime * 1000); // convert to milliseconds
    }

    get getLongDate() {
        return `${days[this.date.getDay()]} ${months[this.date.getMonth()]} ${this.date.getDate()}, ${this.date.getFullYear()}`;
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
        return this.date.getFullYear();
    }
}

interface DayButtonProps {
    children?: string;
    active?: boolean;
    clickFunc?: () => void;
}

function DayButton({ children, active, clickFunc }: DayButtonProps) {
    return (
        <button type="button" className={"collapsible" + (active ? " active_daybutton" : "")} onClick={clickFunc}>
            {children}
        </button>
    );
}

export default DayButton;

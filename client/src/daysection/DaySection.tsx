import React, { useState } from "react";
import "./daysection.css";
import { DayButton, WeatherBody } from "../components";
import { ListItemInterface } from "../ListItemInterface";

interface DaySectionProps {
    dayButtonChildren?: string;
    weatherBodyContentData?: Array<ListItemInterface>;
}

function DaySection({ dayButtonChildren, weatherBodyContentData }: DaySectionProps) {
    const [isActive, setIsActive] = useState(false);

    const toggleCollapsible = () => {
        setIsActive(!isActive);
    };

    if (isActive) {
        return (
            <div className="day-section">
                <DayButton clickFunc={toggleCollapsible} active={true}>
                    {dayButtonChildren}
                </DayButton>
                <WeatherBody active={true} weatherBodyContentData={weatherBodyContentData} />
            </div>
        );
    } else {
        return (
            <div className="day-section">
                <DayButton clickFunc={toggleCollapsible}>{dayButtonChildren}</DayButton>
                <WeatherBody />
            </div>
        );
    }
}

export default DaySection;

/*


let coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    // If a button is clicked
    coll[i].addEventListener("click", function () {
        // That button gains the class active
        this.classList.toggle("active");
        // a 'content' variable is assigned the value of the next element,
        //  i.e., the actual element we want to collapse and expand
        let content = this.nextElementSibling;

        // This if-else then checks all button elements to see if they have the 'active' class
        if (this.classList.contains("active")) {
            // if they do, the button gains a margin bottom of 10px
            this.style.marginBottom = "10px";
            // the 'content' variable, or the actual collapisible content then gains actual height which makes it visible
            content.style.maxHeight = content.scrollHeight + "px";
            // And padding on all sizes of the size 10vw
            content.style.padding = "10vw";
        } else {
            // If the button elements don't contain the 'active' class,
            // then set all those styles to zero, therby hiding the collapsible content
            this.style.marginBottom = 0;
            content.style.maxHeight = 0;
            content.style.padding = 0;
        }
    });
}


*/

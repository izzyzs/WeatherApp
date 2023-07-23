import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function (this: HTMLElement) {
        this.classList.toggle("active");
        let content = this.nextElementSibling as HTMLElement;

        if (content) {
            if (this.classList.contains("active")) {
                this.style.marginBottom = "10px";
                content.style.maxHeight = `${content.scrollHeight}px`;
                content.style.padding = "10vw";
            } else {
                this.style.marginBottom = "0";
                content.style.maxHeight = "0";
                content.style.padding = "0";
            }
        }
    });
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

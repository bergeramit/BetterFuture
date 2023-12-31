/*

=========================================================
* Swipe - Mobile App One Page Bootstrap 5 Template
=========================================================

* Product Page: https://themesberg.com/product/bootstrap/swipe-free-mobile-app-one-page-bootstrap-5-template
* Copyright 2019 Themesberg (https://www.themesberg.com)

* Coded by https://themesberg.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. Contact us if you want to remove it.

*/

"use strict";
let textMessages = []
// let gptAnswer = d.getElementById("gpt-answer");
const SERVER_URL = "http://localhost:8000"
const d = document;
d.addEventListener("DOMContentLoaded", function(event) {

    if (d.querySelector('.headroom')) {
        var headroom = new Headroom(document.querySelector("#navbar-main"), {
            offset: 0,
            tolerance: {
                up: 0,
                down: 0
            },
        });
        headroom.init();
    }

    // Tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    // Popovers
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
    })

    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 500,
        speedAsDuration: true
    });

    d.querySelector('.current-year').textContent = new Date().getFullYear();

});

const askChatGPT = d.getElementById("ask-chat-gpt")
askChatGPT.addEventListener("submit", (e) => {
    e.preventDefault();
    let gptAnswer = d.getElementById("gpt-answer")
    gptAnswer.textContent = "..."
  
    // handle submit
    textMessages.push({"role": "user", "content": d.getElementById("ask-chat-gpt-input").value})

    // You can now process the form data or send it to a server using fetch or XMLHttpRequest
    // For example, sending the data to a server using fetch:

    fetch(SERVER_URL + "/generate-text/", {
        method: 'POST',
        body: JSON.stringify(textMessages)
    })
    .then((response) => response.json())
    .then((data) => {
            // Success
            textMessages = data
            console.log(data)
            const responseFromGPT = data[data.length-1].content
            gptAnswer.textContent = responseFromGPT
    })
    .catch(error => {
        // Error occurred during the fetch
        console.error('Error submitting form data:', error);
    });
});

const askImageAI = d.getElementById("ask-img-ai")
askImageAI.addEventListener("submit", (e) => {
    e.preventDefault();
  
    // handle submit
    const formData = d.getElementById("ask-img-ai-input").value

    // You can now process the form data or send it to a server using fetch or XMLHttpRequest
    // For example, sending the data to a server using fetch:

    fetch(SERVER_URL + "/generate-img/", {
        method: 'POST',
        body: JSON.stringify(formData)
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        const demoPic = d.getElementById("demo-pic")
        demoPic.src = data
    })
    .catch(error => {
        // Error occurred during the fetch
        console.error('Error submitting form data:', error);
    });
});
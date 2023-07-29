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
  
    // handle submit
    const formData = d.getElementById("ask-chat-gpt-input").value

    // You can now process the form data or send it to a server using fetch or XMLHttpRequest
    // For example, sending the data to a server using fetch:

    fetch('your_server_endpoint', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        // Handle the server response here
        if (response.ok) {
            // Success
            console.log('Form data submitted successfully!');
        } else {
            // Server returned an error
            console.error('Form data submission failed.');
        }
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

    fetch('your_server_endpoint', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        // Handle the server response here
        if (response.ok) {
            // Success
            console.log('Form data submitted successfully!');
        } else {
            // Server returned an error
            console.error('Form data submission failed.');
        }
    })
    .catch(error => {
        // Error occurred during the fetch
        console.error('Error submitting form data:', error);
    });
});
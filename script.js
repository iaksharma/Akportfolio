/*
========================================
 CYBER SECURITY PORTFOLIO SCRIPT
 AJAY KUMAR
========================================
*/


// ===============================
// LIVE DIGITAL CLOCK
// ===============================

function updateClock(){

    const clock = document.getElementById("clock");

    if(clock){

        const now = new Date();

        const time = now.toLocaleTimeString();

        const date = now.toLocaleDateString();

        clock.innerHTML =
        `
        SYSTEM TIME : ${date} | ${time}
        `;

    }

}


setInterval(updateClock,1000);

updateClock();



// ===============================
// CYBER TYPING EFFECT
// ===============================


const typingText = [

"Cyber Security Engineer",

"System Administrator",

"Network Defender",

"IT Infrastructure Specialist",

"Security Operations Analyst"

];


let textIndex = 0;

let charIndex = 0;

let deleting = false;


const typingElement =
document.querySelector(".typing");


function cyberTyping(){


if(!typingElement)
return;


let current =
typingText[textIndex];


if(!deleting){


typingElement.textContent =
current.substring(0,charIndex++);


if(charIndex > current.length){

deleting=true;

setTimeout(cyberTyping,1200);

return;

}


}

else{


typingElement.textContent =
current.substring(0,charIndex--);


if(charIndex < 0){

deleting=false;

textIndex++;

if(textIndex >= typingText.length){

textIndex=0;

}

}

}


setTimeout(cyberTyping,
deleting ? 40 : 80);


}


cyberTyping();



// ===============================
// RANDOM SECURITY STATUS
// ===============================


const securityMessages=[

"FIREWALL ACTIVE",

"NETWORK MONITORING",

"THREAT SCANNER RUNNING",

"ALL SYSTEMS NORMAL",

"ENDPOINT PROTECTION ENABLED",

"NO VULNERABILITIES DETECTED"

];


function securityUpdate(){


const status =
document.querySelector(".secure");


if(status){


const random =
Math.floor(
Math.random()*securityMessages.length
);


status.innerHTML =
securityMessages[random];


}


}


setInterval(securityUpdate,5000);



// ===============================
// TERMINAL INTRO EFFECT
// ===============================


window.addEventListener(
"load",
()=>{


console.log(
`
=================================

 AJAY KUMAR
 CYBER SECURITY PORTFOLIO

 SYSTEM INITIALIZED...

 FIREWALL : ACTIVE
 NETWORK : SECURE
 ACCESS  : AUTHORIZED

=================================
`
);


});



// ===============================
// MOUSE PARALLAX EFFECT
// ===============================


document.addEventListener(
"mousemove",
(e)=>{


const container =
document.querySelector(".container");


if(container){


let x =
(e.clientX / window.innerWidth - .5)
* 5;


let y =
(e.clientY / window.innerHeight - .5)
* 5;


container.style.transform =
`
perspective(1000px)
rotateY(${x}deg)
rotateX(${-y}deg)
`;

}


});



// Reset animation when mouse leaves

document.addEventListener(
"mouseleave",
()=>{


const container =
document.querySelector(".container");


if(container){

container.style.transform =
"rotateY(0deg) rotateX(0deg)";

}


});
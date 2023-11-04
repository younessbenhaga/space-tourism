let Open = document.getElementById('Open');
let Close = document.getElementById('Close');
let container = document.querySelector('.container');

Close.onclick = function(){
    container.classList.add('hidden');
    Close.classList.add('hidden');
    Open.classList.remove('hidden');
}
Open.onclick = function(){
    container.classList.remove('hidden');
    Close.classList.remove('hidden');
    Open.classList.add('hidden');
}
let img = document.querySelector('img');

let DOUGLAS = document.getElementById('DOUGLAS');
let MARK = document.getElementById('MARK');
let VICTOR = document.getElementById('VICTOR');
let ANSARI = document.getElementById('ANSARI');

let command = document.querySelector('.command')
let name = document.getElementById('name');
let text = document.getElementById('text');

DOUGLAS.onclick = function(){
    command.innerHTML = "COMMANDER"
    name.innerHTML = "DOUGLAS HURLEY";
    text.innerHTML = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
    img.src = "./assets/crew/image-douglas-hurley.png";
    DOUGLAS.classList.add('bg-white');
    DOUGLAS.classList.remove('bg-gray-500');
    MARK.classList.remove('bg-white');
    MARK.classList.add('bg-gray-500');
    VICTOR.classList.remove('bg-white');
    VICTOR.classList.add('bg-gray-500');
    ANSARI.classList.remove('bg-white');
    ANSARI.classList.add('bg-gray-500');
}
MARK.onclick = function(){
    command.innerHTML = "MISSION SPECIALIST";
    name.innerHTML = "MARK SHUTTLEWORTH";
    text.innerHTML = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
    img.src = "./assets/crew/image-mark-shuttleworth.png";
    MARK.classList.add('bg-white');
    MARK.classList.remove('bg-gray-500');
    DOUGLAS.classList.remove('bg-white');
    DOUGLAS.classList.add('bg-gray-500');
    VICTOR.classList.remove('bg-white');
    VICTOR.classList.add('bg-gray-500');
    ANSARI.classList.remove('bg-white');
    ANSARI.classList.add('bg-gray-500');
}
VICTOR.onclick = function(){
    command.innerHTML = "PILOT";
    name.innerHTML = "VICTOR GLOVER";
    text.innerHTML = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";
    img.src = "./assets/crew/image-victor-glover.png";
    VICTOR.classList.add('bg-white');
    VICTOR.classList.remove('bg-gray-500');
    DOUGLAS.classList.remove('bg-white');
    DOUGLAS.classList.add('bg-gray-500');
    MARK.classList.remove('bg-white');
    MARK.classList.add('bg-gray-500');
    ANSARI.classList.remove('bg-white');
    ANSARI.classList.add('bg-gray-500');
}
ANSARI.onclick = function(){
    command.innerHTML = "FLIGHT ENGINEER";
    name.innerHTML = "ANOUSHEH ANSARI ";
    text.innerHTML = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
    img.src = "./assets/crew/image-anousheh-ansari.png";
    ANSARI.classList.add('bg-white');
    ANSARI.classList.remove('bg-gray-500');
    DOUGLAS.classList.remove('bg-white');
    DOUGLAS.classList.add('bg-gray-500');
    MARK.classList.remove('bg-white');
    MARK.classList.add('bg-gray-500');
    VICTOR.classList.remove('bg-white');
    VICTOR.classList.add('bg-gray-500');
}



























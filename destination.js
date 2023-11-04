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



let MOON = document.getElementById('MOON');
let MARS = document.getElementById('MARS');
let EUROPA = document.getElementById('EUROPA');
let TITAN = document.getElementById('TITAN');

let nameplanet = document.getElementById('nameplanet');
let textplanet = document.getElementById('textplanet');

let avgnum = document.getElementById('avgnum');
let estday = document.getElementById('estday');
let img = document.querySelector('img');
MOON.onclick = function(){
    MOON.classList.add('border-b-2');
    MOON.classList.add('border-solid');
    MOON.classList.add('border-white');
    MARS.classList.remove('border-b-2');
    EUROPA.classList.remove('border-b-2');
    TITAN.classList.remove('border-b-2');

    img.src = "./assets/destination/image-moon.png"
    nameplanet.innerHTML = "MOON";
    textplanet.innerHTML = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites." ;
    avgnum.innerHTML = "384,400 KM";
    estday.innerHTML = "3 DAYS";

}
MARS.onclick = function(){
    MARS.classList.add('border-b-2');
    MARS.classList.add('border-solid');
    MARS.classList.add('border-white');
    MOON.classList.remove('border-b-2');
    EUROPA.classList.remove('border-b-2');
    TITAN.classList.remove('border-b-2');
    
    img.src = "./assets/destination/image-mars.png"
    nameplanet.innerHTML = "MARS";
    textplanet.innerHTML = " Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!" ;
    avgnum.innerHTML = "225 mil. KM";
    estday.innerHTML = "9 MONTHS";

}
EUROPA.onclick = function(){
    EUROPA.classList.add('border-b-2');
    EUROPA.classList.add('border-solid');
    EUROPA.classList.add('border-white');
    MOON.classList.remove('border-b-2');
    MARS.classList.remove('border-b-2');
    TITAN.classList.remove('border-b-2');
    img.src = "./assets/destination/image-europa.png"
    nameplanet.innerHTML = "EUROPA";
    textplanet.innerHTML = " The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin." ;
    avgnum.innerHTML = "628 mil. KM";
    estday.innerHTML = "3 YEARS";

}
TITAN.onclick = function(){
    TITAN.classList.add('border-b-2');
    TITAN.classList.add('border-solid');
    TITAN.classList.add('border-white');
    MOON.classList.remove('border-b-2');
    MARS.classList.remove('border-b-2');
    EUROPA.classList.remove('border-b-2');

    img.src = "./assets/destination/image-titan.png"
    nameplanet.innerHTML = "TITAN";
    textplanet.innerHTML = " The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn." ;
    avgnum.innerHTML = "1.6 bil. KM";
    estday.innerHTML = "7 YEARS";

}




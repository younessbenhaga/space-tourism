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

let launch = document.getElementById('launch');
let Spaceport = document.getElementById('Spaceport');
let capsule = document.getElementById('capsule');

let name = document.getElementById('name');
let text = document.getElementById('text');

if (window.innerWidth > 751 ) {
    img.src = "./assets/technology/image-launch-vehicle-portrait.jpg";
}else{
    img.src = "./assets/technology/image-launch-vehicle-landscape.jpg";
}
function changeImage() {
    if (window.innerWidth > 751 ) {
        img.src = "./assets/technology/image-launch-vehicle-portrait.jpg";
    }else{
        img.src = "./assets/technology/image-launch-vehicle-landscape.jpg";
    }
}

window.addEventListener('load', changeImage);
window.addEventListener('resize', changeImage);


launch.onclick = function(){
    if (window.innerWidth > 751 ) {
        img.src = "./assets/technology/image-launch-vehicle-portrait.jpg";
    }else{
        img.src = "./assets/technology/image-launch-vehicle-landscape.jpg";
    }
    function changeImage() {
        if (window.innerWidth > 751 ) {
            img.src = "./assets/technology/image-launch-vehicle-portrait.jpg";
        }else{
            img.src = "./assets/technology/image-launch-vehicle-landscape.jpg";
        }
    }
    window.addEventListener('load', changeImage);
    window.addEventListener('resize', changeImage);
    name.innerHTML = "LAUNCH VEHICAL";
    text.innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
    launch.classList.add('text-black');
    launch.classList.add('bg-white');
    launch.classList.remove('text-white');
    launch.classList.remove('bg-black');
    Spaceport.classList.remove('bg-white');
    Spaceport.classList.remove('text-black');
    Spaceport.classList.add('bg-black');
    Spaceport.classList.add('text-white');
    capsule.classList.remove('bg-white');
    capsule.classList.remove('text-black');
    capsule.classList.add('bg-black');
    capsule.classList.add('text-white');


}
Spaceport.onclick = function(){
    if (window.innerWidth > 751 ) {
        img.src = "./assets/technology/image-spaceport-portrait.jpg";
    }else{
        img.src = "./assets/technology/image-spaceport-landscape.jpg";
    }
    function changeImage() {
        if (window.innerWidth > 751 ) {
            img.src = "./assets/technology/image-spaceport-portrait.jpg";
        }else{
            img.src = "./assets/technology/image-spaceport-landscape.jpg";
        }
    }
    window.addEventListener('load', changeImage);
    window.addEventListener('resize', changeImage);


    name.innerHTML = "SPACEPORT";
    text.innerHTML = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
    Spaceport.classList.add('text-black');
    Spaceport.classList.add('bg-white');
    Spaceport.classList.remove('text-white');
    Spaceport.classList.remove('bg-black');
    launch.classList.remove('bg-white');
    launch.classList.remove('text-black');
    launch.classList.add('bg-black');
    launch.classList.add('text-white');
    capsule.classList.remove('bg-white');
    capsule.classList.remove('text-black');
    capsule.classList.add('bg-black');
    capsule.classList.add('text-white');



}


capsule.onclick = function(){
    if (window.innerWidth > 751 ) {
        img.src = "./assets/technology/image-space-capsule-portrait.jpg";
    }else{
        img.src = "./assets/technology/image-space-capsule-landscape.jpg";
    }
    function changeImage() {
        if (window.innerWidth > 751 ) {
            img.src = "./assets/technology/image-space-capsule-portrait.jpg";
        }else{
            img.src = "./assets/technology/image-space-capsule-landscape.jpg";
        }
    }
    window.addEventListener('load', changeImage);
    window.addEventListener('resize', changeImage);


    name.innerHTML = "SPACE CAPSULE";
    text.innerHTML = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
    capsule.classList.add('text-black');
    capsule.classList.add('bg-white');
    capsule.classList.remove('text-white');
    capsule.classList.remove('bg-black');
    launch.classList.remove('bg-white');
    launch.classList.remove('text-black');
    launch.classList.add('bg-black');
    launch.classList.add('text-white');
    Spaceport.classList.remove('bg-white');
    Spaceport.classList.remove('text-black');
    Spaceport.classList.add('bg-black');
    Spaceport.classList.add('text-white');






}














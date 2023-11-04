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




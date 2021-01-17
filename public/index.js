var taxiFareSlider = document.querySelector("#taxiFareSlider");
var amountHandedSlider = document.querySelector("#amountHandedSlider");
var noPassengerSlider  = document.querySelector("#noPassengerSlider");

var taxiFare = document.querySelector("#taxiFare");
var amountHanded = document.querySelector("#amountHanded");
var noPassenger  = document.querySelector("#noPassenger");

var taxiFareOut = document.querySelector("#taxiFareOut");
var amountHandedOut = document.querySelector("#amountHandedOut");
var noPassengerOut = document.querySelector("#noPassengerOut");

var changeButton = document.querySelector('#changeButton');



var recentOut = document.querySelector('#recentOut');
var recentContainer = document.querySelector('#recentContainer');
var recentContainerForSlider = document.querySelector('.recentContainerForSlider');
var recentOutForSlider = document.querySelector("#recentOutForSlider");

var line = document;

var lock = document.querySelector("#lock");
var lockSlider = document.querySelector("#lockSlider");

var navWrapper = document.querySelector("#navWrapper");


taxiFareOut.innerHTML = taxiFareSlider.value;
amountHandedOut.innerHTML = amountHandedSlider.value;
noPassengerOut.innerHTML = noPassengerSlider.value;

taxiFareSlider.oninput = ()=>{
    taxiFareOut.innerHTML = taxiFareSlider.value;
};

amountHandedSlider.oninput = ()=>{
    amountHandedOut.innerHTML = amountHandedSlider.value;
};

noPassengerSlider.oninput = ()=>{
    noPassengerOut.innerHTML = noPassengerSlider.value;
};

var change = ( taxiFare, amountHanded, noPassenger)=>{

    return amountHanded - (taxiFare * noPassenger);

};

changeButton.onclick =(e)=>{
    e.preventDefault();
    var checkChange = change(taxiFare.value, amountHanded.value, noPassenger.value);
    if(checkChange > 0){
        recentContainer.style.display = "block"
        recentOut.innerHTML +=`<li class="collection-item green-text" id="line">the Change for ${noPassenger.value} ${checkWho(noPassenger.value)} who handed you R${amountHanded.value} is R${checkChange}</li>`;
    }
    if(checkChange == 0){
        recentContainer.style.display = "block"
        recentOut.innerHTML +=`<li class="collection-item grey-text" id="line">${noPassenger.value} ${checkWho(noPassenger.value)} who handed you R${amountHanded.value} paid full amount.</li>`;
    }
    if(checkChange < 0){
        recentContainer.style.display = "block"
        recentOut.innerHTML +=`<li class="collection-item red-text " id="line">${noPassenger.value} ${checkWho(noPassenger.value)} who handed you R${amountHanded.value} must hand you R${Math.abs(checkChange)} extra.</li>`;
    }
};
function checkWho(passengers){
    if(passengers == 1){
        return "passenger";
    }
    return "passengers";
};

line.addEventListener('click',(e)=>{
    if(e.target.id == "line"){
        e.target.style.textDecoration = "line-through";
    };
});
lock.addEventListener('click',(e)=>{

    if(e.target.id == 'lock'){
        lock.innerHTML = `<i id="lockOpen"class="small material-icons">lock_open</i>`;
        taxiFare.removeAttribute("disabled");

    }else{
        lock.innerHTML = `<i id="lock" class="small material-icons">lock</i>`;
        taxiFare.setAttribute("disabled","");
    };
});
lockSlider.addEventListener('click',(e)=>{
    if(e.target.textContent == "lock_open"){
        lockSlider.innerHTML = `<i id="LockSlider" class="small material-icons col s2 m2">lock</i>`;
        taxiFareSlider.setAttribute("disabled","");
        
    }else{
        lockSlider.innerHTML = `<i id="LockSlider" class="small material-icons col s2 m2">lock_open</i>`;
        taxiFareSlider.removeAttribute("disabled");
    }
     

});

var body = document.querySelector("body");
var forDriver = document.querySelector("#forDriver");
var changeOut = document.querySelector("#changeOut");

changeSliderButton.addEventListener('click',(e)=>{
    e.preventDefault();
    var checkChange = change(taxiFareSlider.value, amountHandedSlider.value, noPassengerSlider.value);
    if(checkChange > 0){
        recentContainerForSlider.style.display = "block"
        recentOutForSlider.innerHTML +=`<li class="collection-item teal white-text" id="line">the Change for ${noPassengerSlider.value} ${checkWho(noPassengerSlider.value)} who handed you R${amountHandedSlider.value} is R${checkChange}.<i class="material-icons right tiny green-text lighten-3">lens</i></li>`;
        body.setAttribute("class","green");
        forDriver.textContent = `Amount for driver: R${amountHandedSlider.value - checkChange }`;
        changeOut.textContent =`Change for ${checkWho(noPassengerSlider.value)}: R${checkChange}`;
    }
    if(checkChange == 0){
        recentContainerForSlider.style.display = "block"
        recentOutForSlider.innerHTML +=`<li class="collection-item teal white-text" id="line">${noPassengerSlider.value} ${checkWho(noPassengerSlider.value)} who handed you R${amountHandedSlider.value} paid the full amount.<i class="material-icons right tiny grey-text">lens</i></li>`;
        body.setAttribute("class","grey");
        forDriver.textContent = `Amount for driver: R${amountHandedSlider.value }`;
        changeOut.textContent =`No Change`;
    }
    if(checkChange < 0){
        recentContainerForSlider.style.display = "block"
        recentOutForSlider.innerHTML +=`<li class="collection-item teal white-text" id="line">${noPassengerSlider.value} ${checkWho(noPassengerSlider.value)} who handed you R${amountHandedSlider.value} must hand you R${Math.abs(checkChange)} extra.<i class="material-icons right tiny red-text">lens</i></li>`;
        body.setAttribute("class","red");
        forDriver.textContent = `Amount for driver: R${amountHandedSlider.value }`;
        changeOut.textContent =`on top of the amount for driver the driver would need R${Math.abs(checkChange)} more.`;
    }


});






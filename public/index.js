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

var changeData = [];
var dataId = 0;

var recentOut = document.querySelector('#recentOut');
var recentContainer = document.querySelector('#recentContainer');

var lock = document.querySelector("#lock");

var who = "";

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
        recentContainer.style.display = "block";
        dataId  += 1;
        if(noPassenger.value == 1){
            who="passenger";
        }else{
            who="passengers";
        }
        changeData.push({noPassenger:noPassenger.value, amountHanded:amountHanded.value, change:checkChange, id:dataId, color:"green-text"});
        console.log(changeData);
        const mappedData = changeData.map(data=>{
            return(`
                <div class="center hoverable ${data.color}" key=${data.id}>
                   <p >${data.id} - the change for ${data.noPassenger} ${who} who handed R${data.amountHanded} is R${data.change}</p>
                </div>
            `);
        });
        recentOut.innerHTML = mappedData;
    };
    if(checkChange < 0){
        recentContainer.style.display = "block";
        dataId +=1;
        if(noPassenger.value == 1){
            who="passenger";
        }else{
            who="passengers";
        }
        changeData.push({noPassenger:noPassenger.value, amountHanded:amountHanded.value, change:checkChange, id:dataId, color:"red-text"});
        console.log(changeData);
        const mappedData = changeData.map(data=>{
            return(`
                <div class="center hoverable ${data.color}" key=${data.id}>
                   <p >${data.id} - the ${data.noPassenger} ${who} who handed you R${data.amountHanded} must give you R${ Math.abs(data.change) } extra</p>
                </div>
            `);
        });
        recentOut.innerHTML = mappedData;

    };
    if( checkChange == 0){
        recentContainer.style.display = "block";
        dataId +=1;
        if(noPassenger.value == 1){
            who="passenger";
        }else{
            who="passengers";
        }
        changeData.push({noPassenger:noPassenger.value, amountHanded:amountHanded.value, change:checkChange, id:dataId, color:"grey-text"});
        console.log(changeData);
        const mappedData = changeData.map(data=>{
            return(`
                <div class="center hoverable ${data.color}" key=${data.id}>
                   <p >${data.id} - the ${data.noPassenger} ${who} who handed you R${data.amountHanded} has paid the full amount.</p>
                </div>
            `);
        });
        recentOut.innerHTML = mappedData;
    }

};

lock.addEventListener('click',(e)=>{

    if(e.target.id == 'lock'){
        lock.innerHTML = `<i id="lockOpen"class="small material-icons">lock_open</i>`;
        taxiFare.removeAttribute("disabled");

    }else{
        lock.innerHTML = `<i id="lock" class="small material-icons">lock</i>`;
        taxiFare.setAttribute("disabled","");
    };
});







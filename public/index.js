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

const cancelRecent = (e)=>{
    console.log(e.target);
}

changeButton.onclick =(e)=>{
    e.preventDefault();
    var checkChange = change(taxiFare.value, amountHanded.value, noPassenger.value);
    if(checkChange > 0){
        recentContainer.style.display = "block";
        dataId  += 1;
        changeData.push({noPassenger:noPassenger.value, amountHanded:amountHanded.value, change:checkChange, id:dataId, title:"RECENT"});
        console.log(changeData);
        var who = "";
        if(noPassenger.value == 1){
            who="passenger";
        }else{
             who="passengers";
        }
        const mappedData = changeData.map(data=>{
            return(`
                <div onclick="${cancelRecent}" class="center hoverable grey-text" key=${data.id}>
                    <a onclick="()=>{ console.log('hello');}">
                    <p>the change for ${data.noPassenger} ${who} who handed R${data.amountHanded} is R${data.change}</p>
                    </a>
                </div>
            `);
        })
        
        recentOut.innerHTML = mappedData;
    }

};


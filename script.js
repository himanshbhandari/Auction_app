const url="https://gauravgitacc.github.io/postAppData/auctionData.json";
const container=document.getElementById('container');

async function  fetchData(){
    try{
        const response =await fetch(url);
        const result=await response.json();
        console.log(result);

        renderData(result);
    }
    catch(error){
        console.log({error});
    }
}
function renderData(data){
    //dom manipulation after getting the data
    data.forEach((card)=>{
        const cardContainer=document.createElement('div');
        cardContainer.className="card";

        cardContainer.innerHTML=`
            <div class="top">
                <div class="left">
                    <span class="badge ${card.status.toLowerCase()}">${card.status}</span>
                    <span class="case-number">${card.caseNumber}</span>
                </div>
                <div class="right">${card.date}</div>
            </div>
            <div class="bottom">
                <div class="from-location">${card.fromLocation}</div>            
                <div class="to-location">${card.toLocation}</div>
                <div class="pricce">${card.fare}</div>
            </div>
        </div>
        `;
        container.appendChild(cardContainer);
        console.log(cardContainer);
    });
}
fetchData();



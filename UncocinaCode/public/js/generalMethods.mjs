function createCard(dirImage, recipeName, difficulty, views,classNames,recipeCont){
    let cardCont= document.createElement("div");
    let img= document.createElement("img");
    let contCardInfo= document.createElement("div");
    let nameCard= document.createElement("span");
    let diffCard= document.createElement("span");
    let hrefCard= document.createElement("a");

    const {cardContClassName,
        contCardInfoClassName,
        nameCardClassName,
        diffCardClassName,
        hrefCardClassName}=classNames;

    cardCont.className=cardContClassName;
    contCardInfo.className=contCardInfoClassName;
    nameCard.className=nameCardClassName;
    diffCard.className=diffCardClassName;
    hrefCard.className=hrefCardClassName;

    recipeCont.appendChild(cardCont);
    cardCont.appendChild(img);
    cardCont.appendChild(contCardInfo);
    cardCont.appendChild(hrefCard);
    contCardInfo.appendChild(nameCard);
    contCardInfo.appendChild(diffCard);

    img.src=dirImage;
    nameCard.textContent=recipeName;
    diffCard.textContent="Dificultad: ";
    difficultyCreator(diffCard,difficulty);
    hrefCard.href=difficulty;//Cambiar por page ulr
}



function difficultyCreator(califCard,numStars){ 
    for (let i = 0; i < numStars; i++) {
        let calif= document.createElement("i");
        calif.className="fas fa-star";
        calif.style.color="yellow";
        califCard.appendChild(calif);

    }

    for (let i = 0; i < 5-numStars; i++) {
        let calif= document.createElement("i");
        calif.className="far fa-star";
        calif.style.color="white";
        califCard.appendChild(calif);
    }
    
}

async function getRecipeData(query){
    return new Promise(async resolve =>{
        const api_url="http://localhost:3000/api/recipes/allrecipes"+query;
        try{
            const response= await fetch(api_url);
            const data= await response.json(api_url);
            //setTimeout(() => { //Simulate the request time for debug
            resolve(data);
            //}, 5000);
            console
        }catch(error){
            console.log(error);
        }
    });  
}


export{createCard, getRecipeData};
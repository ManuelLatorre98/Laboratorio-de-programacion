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



function createSlide(imgCreator,txtCreator,imgRecipe,recipeName,classNames,recipeCont){
    let carouselSlide=document.createElement("li");
    let carouselCreator= document.createElement("div")
    let carouselPhotoCreator=document.createElement("div");
    let carouselImgCreator=document.createElement("img")
    let carouselNameCreator=document.createElement("span");
    let carouselImg=document.createElement("img")
    let carouselNav=document.createElement("div")
    let carouselRecipeName=document.createElement("span")

    const {
        carouselSlideClassName,
        carouselCreatorClassName,
        carouselPhotoCreatorClassName,
        carouselNameCreatorClassName,
        carouselImageClassName,
        carouselNavClassName,
        carouselRecipeNameClassName
    }=classNames
    
    carouselSlide.className=carouselSlideClassName;
    carouselCreator.className= carouselCreatorClassName;
    carouselPhotoCreator.className=carouselPhotoCreatorClassName;
    carouselNameCreator.className=carouselNameCreatorClassName;
    carouselImg.className=carouselImageClassName;
    carouselNav.className=carouselNavClassName;
    carouselRecipeName.className=carouselRecipeNameClassName;

    recipeCont.appendChild(carouselSlide);
    carouselSlide.appendChild(carouselCreator);
    carouselCreator.appendChild(carouselPhotoCreator);
    carouselPhotoCreator.appendChild(carouselImgCreator);
    carouselCreator.appendChild(carouselNameCreator);
    carouselSlide.appendChild(carouselImg);
    carouselSlide.appendChild(carouselNav);
    carouselNav.appendChild(carouselRecipeName);

    carouselImgCreator.src=imgCreator;
    carouselNameCreator.textContent=txtCreator;
    carouselImg.src=imgRecipe;
    carouselRecipeName.textContent=recipeName
}


async function getRecipeData(query){
    return new Promise(async resolve =>{
        const api_url="http://localhost:3000/api/recipes/"+query;
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


export{createCard, getRecipeData,createSlide};
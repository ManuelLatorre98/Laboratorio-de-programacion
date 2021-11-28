const recipeCont=document.getElementsByClassName("recipe-list")[0];
let actualPageNum=1; 
let firstNumPagination=1;
let lastNumPagination;
const numContainer= document.getElementsByClassName("pag-number")[0];
let recipeShowList=[];
let numberShowList=[];
let recipeData;

function cardCreator(dirImage, name, difficulty, views){
    let cardCont= document.createElement("div");
    let img= document.createElement("img");
    let contCardInfo= document.createElement("div");
    let nameCard= document.createElement("span");
    let diffCard= document.createElement("span");
    let hrefCard= document.createElement("a");
    cardCont.className="recipe-list_img-row";
    contCardInfo.className="recipe-list_res_description";
    nameCard.className="recipe-list_res_name";
    diffCard.className="recipe-list_res_difficulty"
    hrefCard.className="recipe-list_href-receta"

    recipeCont.appendChild(cardCont);
    cardCont.appendChild(img);
    cardCont.appendChild(contCardInfo);
    cardCont.appendChild(hrefCard);
    contCardInfo.appendChild(nameCard);
    contCardInfo.appendChild(diffCard);

    img.src=dirImage;
    nameCard.textContent=name;
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


async function loadRecipes(){
    const orderedRecipeData= recipeData.sort((a,b)=>b.views-a.views);
    let minRange=(actualPageNum-1)*16;
    let maxRange;
    let dirImage;
    let name;
    let difficulty;
    let views;
    pageNumberCreator(recipeData.length);//Create pag nav in function of amount of recipes
    if(orderedRecipeData.length>=16 && orderedRecipeData.length-minRange>16 ){
        maxRange=minRange+16;
    }else{
        maxRange=orderedRecipeData.length;
    }
    
    deleteElements(recipeCont);//Delete "old" recipes in windows
    for (let i = minRange; i < maxRange; i++) {//max 16 recipes per page
        dirImage= orderedRecipeData[i].dirImg;
        name= orderedRecipeData[i].name;
        difficulty= orderedRecipeData[i].difficulty;
        views= orderedRecipeData[i].views;
        cardCreator(dirImage,name,difficulty,views); 
    }

}

function pageNumberCreator(amountRecipes){
    let cantNumPrint
    let amountNum= Math.ceil(amountRecipes/16);
    if(actualPageNum>lastNumPagination){
        firstNumPagination+=9;
    }else if(actualPageNum<firstNumPagination){
        firstNumPagination-=9;
    }
    cantNumPrint=amountNum;
    if(actualPageNum>=10){
        cantNumPrint=Math.ceil((amountRecipes-(firstNumPagination-1)*16)/16)//Calculate how many recipes remains and calculate how many numbers need
    }
    if(cantNumPrint>9){
        cantNumPrint=9;
    }
    
    lastNumPagination=firstNumPagination+cantNumPrint-1;
    deleteElements(numContainer);
    insertNums(cantNumPrint);

    function insertNums(){
        let newButton=document.createElement("li");
        newButton.textContent="<";
        if(actualPageNum-1>0){
            newButton.className="pag-left_button hover";
            newButton.id="<";
            numContainer.appendChild(newButton);
        }
        
        for (let i = 0; i < cantNumPrint; i++) {
            newButton=document.createElement("li");
            newButton.textContent=firstNumPagination+i;
            newButton.className="pag-number_button";
            newButton.id=firstNumPagination+i;
            numContainer.appendChild(newButton);
        }
        newButton=document.createElement("li");
        newButton.textContent=">";
        if(actualPageNum < amountNum){
            newButton.className="pag-right_button hover";
            newButton.id=">";
            numContainer.appendChild(newButton);
        }
    }
    setPageNumberColor();
}

function setPageNumberColor(){
    let pagNumbers= document.getElementsByClassName("pag-number_button");
    let encontrado=false;
    let i=0;
    while(!encontrado && i<pagNumbers.length){      
        if(pagNumbers[i].id==actualPageNum){
            encontrado=true;
            pagNumbers[i].style.backgroundColor ="#39d4c8";
        }else{
            i++;
        }
    }
}

function deleteElements(containerNode){
    while(containerNode.childElementCount>0){
        containerNode.removeChild(containerNode.lastChild);
    }
}

numContainer.addEventListener("click",function(e){
    let elemTarget= e.target;
    if(elemTarget.className==="pag-number_button"){
        actualPageNum=elemTarget.id;
        loadRecipes();
    }else if(elemTarget.className==="pag-left_button hover"){
            actualPageNum--;
            loadRecipes();
    }else if(elemTarget.className==="pag-right_button hover"){
            actualPageNum++;
            loadRecipes();
    }
})

async function getRecipeData(){
    return new Promise(async resolve =>{
        const api_url="js/recipeData.json";
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

async function main(){
    recipeData= await getRecipeData();
    loadRecipes();
}
main();












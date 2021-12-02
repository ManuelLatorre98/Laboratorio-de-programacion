const recipeCont=document.getElementsByClassName("recipe-list")[0];
let actualPageNum=1; 
let firstNumPagination=1;
let lastNumPagination;
const numContainer= document.getElementsByClassName("pag-number")[0];
let recipeData;
import { createCard,getRecipeData } from "./generalMethods.mjs";

function cardCreator(dirImage, recipeName, difficulty, views){
    const classNames={
        cardContClassName:"recipe-list_img-row",
        contCardInfoClassName:"recipe-list_res_description",
        nameCardClassName:"recipe-list_res_name",
        diffCardClassName:"recipe-list_res_difficulty",
        hrefCardClassName:"recipe-list_href-receta"
    }
    createCard(dirImage, recipeName, difficulty, views,classNames,recipeCont)
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
        name= orderedRecipeData[i].recipeName;
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


//FILTER MENU
const listFilterCategories= document.getElementsByClassName("filter_list-category_item")[0];
const listFilterDays=document.getElementsByClassName("filter_list-category_item")[1];
const listCheckBoxCategories= getListCheckBoxFilter(0,listFilterCategories);
const listCheckBoxDays=getListCheckBoxFilter(listFilterCategories.children.length,listFilterDays);
let checkBoxCheckedCategories=[];
let checkBoxCheckedDays=[];

function getListCheckBoxFilter(startIndex,listFilter){
    const listCheckBoxFilter=[];
    for (let i = startIndex; i < (listFilter.children.length+startIndex); i++) {
        listCheckBoxFilter.push(document.getElementById(("cbox"+i)));
        
    }
    return listCheckBoxFilter
}

function filterEvents(){
    //Event for category
    for (var i = 0; i < listCheckBoxCategories.length; i++) {
        listCheckBoxCategories[i].addEventListener("click", function(){
            if(this.checked){
                if(checkBoxCheckedCategories.length>0){
                   checkBoxCheckedCategories[0].checked=false;
                   checkBoxCheckedCategories=[];
                }
                checkBoxCheckedCategories[0]=this;
            }else{
                checkBoxCheckedCategories.splice(checkBoxCheckedCategories.indexOf(this,1))
            }
            filterLoad();
        });
    }

    //Event for days
    for (var i = 0; i < listCheckBoxDays.length; i++) {
        listCheckBoxDays[i].addEventListener("click", function(){
            if(this.checked){
                if(checkBoxCheckedDays.length>0){
                   checkBoxCheckedDays[0].checked=false;
                   checkBoxCheckedDays=[];
                }
                checkBoxCheckedDays[0]=this;
            }else{
                checkBoxCheckedDays.splice(checkBoxCheckedDays.indexOf(this,1))
            }
            filterLoad();
        });
    }
}

async function filterLoad(){
    let categorySelected=checkBoxCheckedCategories.length>0;
    let daySelected=checkBoxCheckedDays.length>0;
    if(!categorySelected && !daySelected){
        recipeData= await getRecipeData("");
    }else if(categorySelected){
        let category=getCategory(listCheckBoxCategories.indexOf(checkBoxCheckedCategories[0]));
        if(!daySelected){
            recipeData= await getRecipeData("?category="+category);
        }else{
            let maxDiffDays=getDaysMax(listCheckBoxDays.indexOf(checkBoxCheckedDays[0])+listCheckBoxCategories.length)
            recipeData= await getRecipeData("?category="+category+"&maxDiffDays= "+maxDiffDays);
        }
    }else if(!categorySelected && daySelected){
        let maxDiffDays=getDaysMax(listCheckBoxDays.indexOf(checkBoxCheckedDays[0])+listCheckBoxCategories.length)
        recipeData= await getRecipeData("?maxDiffDays= "+maxDiffDays);
    }
    loadRecipes();
}

function getCategory(numCheckbox){
    let category;
    switch (numCheckbox){
        case 0:
            category="carne"
            break;
        case 1:
            category="verduras"
            break;
        case 2:
            category="postre"
            break;
    }
    return category
}

function getDaysMax(numCheckbox){
    let days;
    switch (numCheckbox){
        case 3:
            days="1"
            break;
        case 4:
            days="7"
            break;
        case 5:
            days="10"
            break;
        case 6:
            days="15"
        break;
        case 7:
            days="30"
        break;
    }
    return days;
}

function main(){
    filterLoad();
    filterEvents();
}

main();
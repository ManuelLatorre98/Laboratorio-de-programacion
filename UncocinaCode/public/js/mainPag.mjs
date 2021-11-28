import { createCard,getRecipeData } from "./generalMethods.mjs";
let recipeData
const categories=["carne", "verduras", "postre"]//Voy cargando las categorias manualmente aca para simplificar
let recipeCont;

function cardCreator(dirImage, recipeName, difficulty, views){
    const classNames={
        cardContClassName:"img-row",
        contCardInfoClassName:"res_description",
        nameCardClassName:"res_name",
        diffCardClassName:"res_difficulty",
        hrefCardClassName:"href-receta"
    }
    console.log(recipeCont);
    createCard(dirImage, recipeName, difficulty, views,classNames,recipeCont)
}
function loadRecipes(){
    
    const orderedRecipeData= recipeData.sort((a,b)=>b.views-a.views);
    let dirImage;
    let recipeName;
    let difficulty;
    let views;
    let impIndex=4;
    if(orderedRecipeData.length<4){
        impIndex=orderedRecipeData.length
    }

    for (let i = 0; i < impIndex; i++) {
        dirImage= orderedRecipeData[i].dirImg;
        recipeName= orderedRecipeData[i].recipeName;
        difficulty= orderedRecipeData[i].difficulty;
        views= orderedRecipeData[i].views;
        cardCreator(dirImage,recipeName,difficulty,views); 
    }
}


async function loadCategory(category){
    recipeData= await getRecipeData(("?category="+category));
    loadRecipes();
}

async function main(){
    for (let i = 0; i < categories.length; i++) {
        recipeCont=document.getElementsByClassName("row")[i]
        await loadCategory(categories[i]);
    }
}

main();




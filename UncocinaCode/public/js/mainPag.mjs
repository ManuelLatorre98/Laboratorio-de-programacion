import { createCard,getRecipeData,createSlide } from "./generalMethods.mjs";
let recipeData
const categories=["carne", "verduras", "postre"]//Voy cargando las categorias manualmente aca para simplificar
let recipeCont;

function cardCreator(){
    const classNames={
        cardContClassName:"img-row",
        contCardInfoClassName:"res_description",
        nameCardClassName:"res_name",
        diffCardClassName:"res_difficulty",
        hrefCardClassName:"href-receta"
    }
    return classNames
}

function loadRecipes(){
    let dirImage;
    let recipeName;
    let difficulty;
    let views;
    for (let i = 0; i < recipeData.length; i++) {
        dirImage= recipeData[i].dirImgRecipe;
        recipeName= recipeData[i].recipeName;
        difficulty= recipeData[i].difficulty;
        views= recipeData[i].views;
        createCard(dirImage, recipeName, difficulty, views,cardCreator(),recipeCont)
    }
}
function slideCreator(){
    const classNames={
        carouselSlideClassName:"carousel_slide",
        carouselCreatorClassName:"carousel-creator",
        carouselPhotoCreatorClassName:"carousel-photo-creator",
        carouselNameCreatorClassName:"carousel-name-creator",
        carouselImageClassName:"carousel_image",
        carouselNavClassName:"carousel_nav",
        carouselRecipeNameClassName:"recipeName"
    }
    if(recipeCont.children.length===0){
        classNames.carouselSlideClassName+=" current-slide";
    }
    return classNames;
}

function loadCarousel(){
    let imgCreator
    let txtCreator
    let imgRecipe
    let recipeName

    for (let i = 0; i < recipeData.length; i++) {
        imgCreator=recipeData[i].dirImgCreator;
        txtCreator="Creado por "+recipeData[i].nameCreator;
        imgRecipe= recipeData[i].dirImgRecipe;
        recipeName= recipeData[i].recipeName;
        createSlide(imgCreator,txtCreator,imgRecipe,recipeName,slideCreator(),recipeCont);
    }
}


async function reqRecipes(query){//Habria que agregar cantidad
    recipeData= await getRecipeData(query);
    
}


async function main(){
    const amountRecipesPrint=4
    const amountSlidesCarrousel=3;
    for (let i = 0; i < categories.length; i++) {
        recipeCont=document.getElementsByClassName("row")[i]
        await reqRecipes("?category="+categories[i]+"&amount="+amountRecipesPrint);
        loadRecipes();
    }
    await reqRecipes(("?amount="+amountSlidesCarrousel));
    recipeCont=document.getElementsByClassName("carousel_track")[0];
    loadCarousel();
    
    
   
}


main();
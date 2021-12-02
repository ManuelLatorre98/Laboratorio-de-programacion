const currentDate=new Date("11/27/2021")//La seteo para facilitar
const recipes =require("../recipeData.json");

function getByCategory(category){
    let recipesOfCategory=[];
    recipes.forEach(recipe=>{
        if(recipe.category==category){ 
            recipesOfCategory.push(recipe);
        }
    });
    return recipesOfCategory;
}

function getByDay(maxDiffDays,dataSend){
    let recipesInDate=[];
    dataSend.forEach(recipe=>{
        let recipeDate=new Date(recipe.publicationDate);
        if(inDate(recipeDate,maxDiffDays)){ 
            recipesInDate.push(recipe);
        }
    });
    return recipesInDate;
}

function getAllRecipes(){
    return recipes;
}

function inDate(recipeDate,maxDiffDays){
    let maxDate= new Date(currentDate);
    maxDate.setDate(maxDate.getDate()+maxDiffDays);
    let differenceInTime=recipeDate.getTime()-currentDate.getTime();
    let differenceInDays= Math.abs(differenceInTime/(1000*3600*24));
    return differenceInDays<=maxDiffDays;
}

function getById(id){
    let found=false;
    let i=0;
    let dataSend;
    
    while(!found && i<recipes.length){
        if(recipes[i].id==id){
            dataSend=recipes[i]
            found=true;
        }else{
            i++;
        }
    }
    return dataSend
}

function getBetweenRange(amount,from){
    let until=from+amount;
        if(until>recipes.length){//If until exceeds the index, then returns all remaning elements
            until=recipes.length;
        }

    return recipes.slice(from,until);    
}

function postNewRecipe(req){
    const id= recipes.length+1;
    const newRecipe= {...req.body,id};
    recipes.push(newRecipe);
    return recipes;
}

function deleteRecipeById(id){
    let found=false;
    let i=0;
    let dataSend
    while(!found && i<recipes.length){
        if(recipes[i].id==id){
            recipes.splice(i,1);
            dataSend=recipes;
            found=true;
        }else{
            i++;
        }
    }
    return dataSend;
}

function putById(req){
    const {id}=req.params;
    const { dirImg, name, difficulty, views,recipeUrl, category, publicationDate} = req.body;
    recipes.forEach(recipe => {
        if(recipe.id==id){
            recipe.dirImg=dirImg;
            recipe.name=name;
            recipe.difficulty=difficulty;
            recipe.views=views;
            recipe.recipeUlr=recipeUrl;
            recipe.category=category;
            recipe.publicationDate=publicationDate;
        }
    });
    return recipes
}

module.exports={
    getByCategory,
    getByDay,
    getAllRecipes,
    getById,
    getBetweenRange,
    postNewRecipe,
    deleteRecipeById,
    putById
}

const recipes =require("../recipeData.json");
const generalMethods=require("../routes/generalMethods");
function getData(querys){
    let recipesReq=recipes;
    if(querys.category===undefined){
        recipesReq=getAllRecipes();
    }else{
        recipesReq=getByCategory(querys.category);
    }

    if(querys.maxDiffDays!=undefined){
        recipesReq=getByDay(querys.maxDiffDays,recipesReq)
    }

    if(querys.amount!=undefined&& querys.fromMinViews!=undefined){
        recipesReq=getBetweenRange(querys.amount,querys.fromMinViews,recipesReq);
        
    }
    
    if(querys.amount!=undefined && querys.fromMinViews===undefined){//Return the n recipes most viewed
        recipesReq=getAmountRecipes(querys.amount,recipesReq);
        
    }
    
    return recipesReq;
}



function getByCategory(category){
    return recipes.filter(recipe => recipe.category==category);
}

function getByDay(maxDiffDays,dataSend){
    let recipesInDate=[];
    dataSend.forEach(recipe=>{
        let recipeDate=new Date(recipe.publicationDate);
        if(generalMethods.inDate(recipeDate,maxDiffDays)){ 
            recipesInDate.push(recipe);
        }
    });
    
    return (recipesInDate.sort((a,b)=>b.views-a.views));
}

function getAllRecipes(){
    return recipes;
}

function getById(id){
    return recipes.find(recipe=> recipe.id==id);
}

function getBetweenRange(amount,fromMinViews,recipesReq){
    recipesReq=(recipesReq.filter(recipe => recipe.views>=fromMinViews)).slice(0,amount)
    return (recipesReq.sort((a,b)=>b.views-a.views)).slice(0,amount);
}

function getAmountRecipes(amount,recipesReq){
    return (recipesReq.sort((a,b)=>b.views-a.views)).slice(0,amount);
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
    let dataSend;
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
    const recipeId= recipes.find(recipe=> recipe.id==id);
    recipeId.dirImg=dirImg;
    recipeId.name=name;
    recipeId.difficulty=difficulty;
    recipeId.views=views;
    recipeId.recipeUlr=recipeUrl;
    recipeId.category=category;
    recipeId.publicationDate=publicationDate;

    return recipes
}

module.exports={
    getById,
    putById,
    deleteRecipeById,
    postNewRecipe,
    getData
}
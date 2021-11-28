const { Router}= require("express");
const router = Router();
const recipesBusiness=require("./recipesBusiness");

router.get("/allrecipes",(req,res)=>{//get all recipes
    let category=req.query.category;
    let maxDiffDays=req.query.maxDiffDays
    if(category===undefined){
        dataSend=recipesBusiness.getAllRecipes();
    }else{//Send all the recipes of a category
        if(!isNaN(category)){//category is not a string return badRequest
            res.sendStatus(400);
        }else{
            dataSend=recipesBusiness.getByCategory(category);
        }
    }

    if(maxDiffDays!=undefined){
        if(isNaN(maxDiffDays) || maxDiffDays<0){//String or negative return bad request
            res.sendStatus(400);
        }else{
            dataSend=recipesBusiness.getByDay(maxDiffDays)
        }
    }

    if(dataSend.length==0){//res void, return not found
        res.sendStatus(404);
    }else{
        res.json(dataSend)
    }
    
})

router.get("/:id",(req,res)=>{//get a only recipe with her id
    const {id}= req.params;
    if(!isNaN(id) && id>=0){//if id is a number
        dataSend=recipesBusiness.getById(id);
        if(dataSend===undefined){
            res.sendStatus(404);
        }else{
            res.json(dataSend);
        }
    }else{
        res.sendStatus(400)
    }
});

router.get("/",(req,res)=>{//get multiple recipes between a range
    let amount=parseInt(req.query.amount, 10);
    let from=parseInt(req.query.from, 10);
    let category=req.query.category;
    if(amount>=0 && from>=0){
        let dataSend= getBetweenRange(amount, from,category)
        if(dataSend.length>0){
            res.json(dataSend);
        }else{
            res.sendStatus(404);
        }
    }else{
        res.sendStatus(400);
    }
});

router.post("/",(req,res)=>{
    const { dirImg, name, difficulty, views,recipeUrl, category, publicationDate} = req.body;
    if(isNaN(dirImg) && isNaN(name) && !isNaN(difficulty) && !isNaN(views) && isNaN(recipeUrl) && isNaN(category) && !isNaN(Date.parse(publicationDate))){
        let dataSend=recipesBusiness.postNewRecipe(req)
        res.json(dataSend);
    }else{
        res.sendStatus(500);
    }
})

router.delete("/:id", (req,res)=>{
    const {id}= req.params;
    if(!isNaN(id) && id>=0){//if id is a number
        let dataSend=recipesBusiness.deleteRecipeById(id);
        if(dataSend===undefined){
            res.sendStatus(404);
        }else{
            res.json(dataSend);
        }
    }else {
        res.sendStatus(400)
    }
});

router.put("/:id", (req,res)=>{
    const {id}=req.params;
    const { dirImg, name, difficulty, views,recipeUrl, category, publicationDate} = req.body;
    if(!isNaN(id) && id>=0){//if id is a number
        if(isNaN(dirImg) && isNaN(name) && !isNaN(difficulty) && !isNaN(views) && isNaN(recipeUrl) && isNaN(category) && !isNaN(Date.parse(publicationDate))){//express validator para verificar tipos
            let dataSend= putById(req)
            res.json(dataSend);
        }else{
            res.sendStatus(500);
        }
    }else if(id<0){
        res.sendStatus(400)
    }
});

module.exports=router;
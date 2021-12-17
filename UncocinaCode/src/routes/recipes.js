const { Router, query}= require("express");
const router = Router();
const recipesBusiness=require("./recipesBusiness");

router.get("/",(req,res)=>{//get all recipes
    let category=req.query.category;
    let maxDiffDays=req.query.maxDiffDays;
    let amount=req.query.amount;
    let from=req.query.from;
    let fromMinViews=req.query.fromMinViews;//Returns the recipes with views above the parameter
    let stop=false;
    //Verification
    if(category!=undefined){
        if(!isNaN(category)){//category is not a string return badRequest
            stop=true;
        }
    }
    if(!stop && maxDiffDays!=undefined){
        if(isNaN(maxDiffDays) || maxDiffDays<0){//String or negative return bad request
            stop=true;
        }
    }
    if(!stop && amount!=undefined || fromMinViews!=undefined){
        if(amount<0 && from==undefined || isNaN(from) || fromMinViews<0){
            stop=true;
        }
    }

    //Search data
    if(!stop){
        const querys={
            "category":category,
            "maxDiffDays":maxDiffDays,
            "amount":amount,
            "from":from,
            "fromMinViews":fromMinViews
        }
        
        res.json(recipesBusiness.getData(querys));
    }else{
        res.sendStatus(400);
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



router.post("/",(req,res)=>{
    const { dirImg, name, difficulty, views,recipeUrl, category, publicationDate} = req.body;
    if(isNaN(dirImg) && isNaN(name) && !isNaN(difficulty) && !isNaN(views) && isNaN(recipeUrl) && isNaN(category) && !isNaN(Date.parse(publicationDate))){
        let dataSend=recipesBusiness.postNewRecipe(req)
        res.json(dataSend);
    }else{
        res.sendStatus(400);
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
            let dataSend=recipesBusiness.putById(req)
            res.json(dataSend);
        }else{
            res.sendStatus(400);
        }
    }else if(id<0){
        res.sendStatus(400)
    }
});

module.exports=router;
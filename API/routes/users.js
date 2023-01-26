var express = require('express');
const { getAllUsers, getUser, createFav, deleteFav, getFavs, createCalif, deleteCalif, getCalifs, deleteUser, updateUser, getRecipes } = require('../controllers/userController');
const { verifyToken } = require('../middlewares/authJwt');
const { validateExistRecipeBody } = require('../middlewares/validators/recipeValidator');
const { validateNotExistFav, validateExistFav, validateExistCalif, validateNotExistCalif, validateExistUserBody, validateExistUserParams} = require('../middlewares/validators/userValidator');

var router = express.Router();

/* GET users listing. */
router.get('/recipes',verifyToken,validateExistUserBody,getRecipes)

router.get('/fav',verifyToken,validateExistUserBody,getFavs)
router.post('/fav',verifyToken,validateExistUserBody,validateExistRecipeBody,validateNotExistFav, createFav)
router.delete('/fav',verifyToken,validateExistUserBody,validateExistRecipeBody,validateExistFav, deleteFav)

router.get('/calif',verifyToken,validateExistUserBody,getCalifs)
router.post('/calif',verifyToken,validateExistUserBody,validateExistRecipeBody,validateNotExistCalif, createCalif)
router.delete('/calif',verifyToken,validateExistUserBody,validateExistRecipeBody,validateExistCalif, deleteCalif)

router.delete('/',verifyToken,validateExistUserBody, deleteUser)
router.put('/:user_name/:user_email',verifyToken,validateExistUserParams, updateUser)

router.get('/', getAllUsers)
router.get('/:id', getUser)

module.exports = router;

const { post } = require("./helper");

const data1 = [
  {
    recipe_name: 'Tacos',
    user_email: 'manulatorre@gmail.com',
    user_name: 'ManuelL',
    steps: '["Paso1","Paso2"]',
    imageURL: 'https://res.cloudinary.com/dqzmhh9qh/image/upload/v1674839008/uncocina/tacos_asxsmn.jpg',
    estimatedTime: 50,
    difficulty: 'Media',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzA3OTI2MjR9.VblWtuQZSggtDlnKTponm8DvdPuFvbr49iFRdp4QOIc',//Checkear que sea valido si no usar uno que retorne el metodo register en userPopu
    ingredients: '[{"nombre": "ingrediente1", "cantidad": "1"},{"nombre": "ingrediente2","cantidad": "2"}]',
    categories: 'Carne'
  },
  {
    recipe_name: 'Carne al horno',
    user_email: 'manulatorre@gmail.com',
    user_name: 'ManuelL',
    steps: '["Paso1","Paso2"]',
    imageURL: 'https://res.cloudinary.com/dqzmhh9qh/image/upload/v1674839025/uncocina/carneHorno_gjgual.jpg',
    estimatedTime: 60,
    difficulty: 'Dificil',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzA3OTI2MjR9.VblWtuQZSggtDlnKTponm8DvdPuFvbr49iFRdp4QOIc',
    ingredients: '[{"nombre": "ingrediente1", "cantidad": "1"},{"nombre": "ingrediente2","cantidad": "2"},{"nombre": "ingrediente3","cantidad": "3"},{"nombre": "ingrediente4","cantidad": "4"}]',
    categories: 'Carne'
  },
  {
    recipe_name: 'Hamburgesa vegana',
    user_email: 'manulatorre@gmail.com',
    user_name: 'ManuelL',
    steps: '["Paso1","Paso2","Paso2","Paso3 con un texto mas largo para ver como se ve en la pantalla del telefono"]',
    imageURL: 'https://res.cloudinary.com/dqzmhh9qh/image/upload/v1674839005/uncocina/HamburguesaVegana_rzeuff.jpg',
    estimatedTime: 30,
    difficulty: 'Facil',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzA3OTI2MjR9.VblWtuQZSggtDlnKTponm8DvdPuFvbr49iFRdp4QOIc',
    ingredients: '[{"nombre": "ingrediente1", "cantidad": "1"},{"nombre": "ingrediente2","cantidad": "2"},{"nombre": "ingrediente3","cantidad": "3"}]',
    categories: 'Verdura'
  },
  {
    recipe_name: 'Milhojas de berenjena',
    user_email: 'manulatorre@gmail.com',
    user_name: 'ManuelL',
    steps: '["Paso1","Paso2","Paso2","Paso3 con un texto mas largo para ver como se ve en la pantalla del telefono"]',
    imageURL: 'https://res.cloudinary.com/dqzmhh9qh/image/upload/v1674839083/uncocina/milhojas_berenjena_fiui5n.jpg',
    estimatedTime: 120,
    difficulty: 'Media',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzA3OTI2MjR9.VblWtuQZSggtDlnKTponm8DvdPuFvbr49iFRdp4QOIc',
    ingredients: '[{"nombre": "ingrediente1", "cantidad": "1"},{"nombre": "ingrediente2","cantidad": "2"},{"nombre": "ingrediente3","cantidad": "3"}]',
    categories: 'Verdura'
  },
  {
    recipe_name: 'Tiramisu',
    user_email: 'manulatorre@gmail.com',
    user_name: 'ManuelL',
    steps: '["Paso1","Paso2","Paso2","Paso3 con un texto mas largo para ver como se ve en la pantalla del telefono"]',
    imageURL: 'https://res.cloudinary.com/dqzmhh9qh/image/upload/v1674839009/uncocina/Tiramisu_ywvhfl.jpg',
    estimatedTime: 160,
    difficulty: 'Dificil',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzA3OTI2MjR9.VblWtuQZSggtDlnKTponm8DvdPuFvbr49iFRdp4QOIc',
    ingredients: '[{"nombre": "ingrediente1", "cantidad": "1"},{"nombre": "ingrediente2","cantidad": "2"},{"nombre": "ingrediente3","cantidad": "3"}]',
    categories: 'Postre'
  },
  //Usuario Silvia
  {
    recipe_name: 'Churrasco con salsa',
    user_email: 'silvia@gmail.com',
    user_name: 'Silvia',
    steps: '["Paso1","Paso2"]',
    imageURL: 'https://res.cloudinary.com/dqzmhh9qh/image/upload/v1674839029/uncocina/churrascoConSalsa_jsbmlg.jpg',
    estimatedTime: 50,
    difficulty: 'Media',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzA3OTI2MjR9.VblWtuQZSggtDlnKTponm8DvdPuFvbr49iFRdp4QOIc',
    ingredients: '[{"nombre": "ingrediente1", "cantidad": "1"},{"nombre": "ingrediente2","cantidad": "2"}]',
    categories: 'Carne'
  },
  {
    recipe_name: 'Hamburguesa',
    user_email: 'silvia@gmail.com',
    user_name: 'Silvia',
    steps: '["Paso1","Paso2"]',
    imageURL: 'https://res.cloudinary.com/dqzmhh9qh/image/upload/v1674839000/uncocina/hamburguesaG_zmrwra.jpg',
    estimatedTime: 20,
    difficulty: 'Facil',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzA3OTI2MjR9.VblWtuQZSggtDlnKTponm8DvdPuFvbr49iFRdp4QOIc',
    ingredients: '[{"nombre": "ingrediente1", "cantidad": "1"},{"nombre": "ingrediente2","cantidad": "2"},{"nombre": "ingrediente3","cantidad": "3"},{"nombre": "ingrediente4","cantidad": "4"}]',
    categories: 'Carne'
  },
  {
    recipe_name: 'Crema de espinacas con queso',
    user_email: 'silvia@gmail.com',
    user_name: 'Silvia',
    steps: '["Paso1","Paso2","Paso2","Paso3 con un texto mas largo para ver como se ve en la pantalla del telefono"]',
    imageURL: 'https://res.cloudinary.com/dqzmhh9qh/image/upload/v1674839039/uncocina/creme-espinacas-queso-960x540_mpuh0u.jpg',
    estimatedTime: 180,
    difficulty: 'Media',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzA3OTI2MjR9.VblWtuQZSggtDlnKTponm8DvdPuFvbr49iFRdp4QOIc',
    ingredients: '[{"nombre": "ingrediente1", "cantidad": "1"},{"nombre": "ingrediente2","cantidad": "2"},{"nombre": "ingrediente3","cantidad": "3"}]',
    categories: 'Verdura'
  },
  {
    recipe_name: 'Berenjenas rellenas',
    user_email: 'silvia@gmail.com',
    user_name: 'Silvia',
    steps: '["Paso1","Paso2","Paso2","Paso3 con un texto mas largo para ver como se ve en la pantalla del telefono"]',
    imageURL: 'https://res.cloudinary.com/dqzmhh9qh/image/upload/v1674839020/uncocina/berenjenas-rellenas-seitan-receta_joivpu.jpg',
    estimatedTime: 120,
    difficulty: 'Dificil',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzA3OTI2MjR9.VblWtuQZSggtDlnKTponm8DvdPuFvbr49iFRdp4QOIc',
    ingredients: '[{"nombre": "ingrediente1", "cantidad": "1"},{"nombre": "ingrediente2","cantidad": "2"},{"nombre": "ingrediente3","cantidad": "3"}]',
    categories: 'Verdura'
  },
  {
    recipe_name: 'Cupcake',
    user_email: 'silvia@gmail.com',
    user_name: 'Silvia',
    steps: '["Paso1","Paso2","Paso2","Paso3 con un texto mas largo para ver como se ve en la pantalla del telefono"]',
    imageURL: 'https://res.cloudinary.com/dqzmhh9qh/image/upload/v1674839059/uncocina/cupcake_qlw7a8.jpg',
    estimatedTime: 160,
    difficulty: 'Media',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzA3OTI2MjR9.VblWtuQZSggtDlnKTponm8DvdPuFvbr49iFRdp4QOIc',
    ingredients: '[{"nombre": "ingrediente1", "cantidad": "1"},{"nombre": "ingrediente2","cantidad": "2"},{"nombre": "ingrediente3","cantidad": "3"}]',
    categories: 'Postre'
  },
  //User Adolfo
  {
    recipe_name: 'Churrasco con salsa',
    user_email: 'adolfo@gmail.com',
    user_name: 'Adolfo',
    steps: '["Paso1","Paso2"]',
    imageURL: 'https://res.cloudinary.com/dqzmhh9qh/image/upload/v1674839029/uncocina/churrascoConSalsa_jsbmlg.jpg',
    estimatedTime: 50,
    difficulty: 'Media',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzA3OTI2MjR9.VblWtuQZSggtDlnKTponm8DvdPuFvbr49iFRdp4QOIc',
    ingredients: '[{"nombre": "ingrediente1", "cantidad": "1"},{"nombre": "ingrediente2","cantidad": "2"}]',
    categories: 'Carne'
  },
  {
    recipe_name: 'Hamburguesa',
    user_email: 'adolfo@gmail.com',
    user_name: 'Adolfo',
    steps: '["Paso1","Paso2"]',
    imageURL: 'https://res.cloudinary.com/dqzmhh9qh/image/upload/v1674839000/uncocina/hamburguesaG_zmrwra.jpg',
    estimatedTime: 20,
    difficulty: 'Facil',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzA3OTI2MjR9.VblWtuQZSggtDlnKTponm8DvdPuFvbr49iFRdp4QOIc',
    ingredients: '[{"nombre": "ingrediente1", "cantidad": "1"},{"nombre": "ingrediente2","cantidad": "2"},{"nombre": "ingrediente3","cantidad": "3"},{"nombre": "ingrediente4","cantidad": "4"}]',
    categories: 'Carne'
  },
  {
    recipe_name: 'Crema de espinacas con queso',
    user_email: 'adolfo@gmail.com',
    user_name: 'Adolfo',
    steps: '["Paso1","Paso2","Paso2","Paso3 con un texto mas largo para ver como se ve en la pantalla del telefono"]',
    imageURL: 'https://res.cloudinary.com/dqzmhh9qh/image/upload/v1674839039/uncocina/creme-espinacas-queso-960x540_mpuh0u.jpg',
    estimatedTime: 180,
    difficulty: 'Media',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzA3OTI2MjR9.VblWtuQZSggtDlnKTponm8DvdPuFvbr49iFRdp4QOIc',
    ingredients: '[{"nombre": "ingrediente1", "cantidad": "1"},{"nombre": "ingrediente2","cantidad": "2"},{"nombre": "ingrediente3","cantidad": "3"}]',
    categories: 'Verdura'
  },
  {
    recipe_name: 'Berenjenas rellenas',
    user_email: 'adolfo@gmail.com',
    user_name: 'Adolfo',
    steps: '["Paso1","Paso2","Paso2","Paso3 con un texto mas largo para ver como se ve en la pantalla del telefono"]',
    imageURL: 'https://res.cloudinary.com/dqzmhh9qh/image/upload/v1674839020/uncocina/berenjenas-rellenas-seitan-receta_joivpu.jpg',
    estimatedTime: 120,
    difficulty: 'Dificil',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzA3OTI2MjR9.VblWtuQZSggtDlnKTponm8DvdPuFvbr49iFRdp4QOIc',
    ingredients: '[{"nombre": "ingrediente1", "cantidad": "1"},{"nombre": "ingrediente2","cantidad": "2"},{"nombre": "ingrediente3","cantidad": "3"}]',
    categories: 'Verdura'
  },
  {
    recipe_name: 'Cupcake',
    user_email: 'adolfo@gmail.com',
    user_name: 'Adolfo',
    steps: '["Paso1","Paso2","Paso2","Paso3 con un texto mas largo para ver como se ve en la pantalla del telefono"]',
    imageURL: 'https://res.cloudinary.com/dqzmhh9qh/image/upload/v1674839059/uncocina/cupcake_qlw7a8.jpg',
    estimatedTime: 160,
    difficulty: 'Media',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzA3OTI2MjR9.VblWtuQZSggtDlnKTponm8DvdPuFvbr49iFRdp4QOIc',
    ingredients: '[{"nombre": "ingrediente1", "cantidad": "1"},{"nombre": "ingrediente2","cantidad": "2"},{"nombre": "ingrediente3","cantidad": "3"}]',
    categories: 'Postre'
  },
]

async function recipePopulate(){
  await new Promise(resolve => setTimeout(resolve, 500)) //Aprox time to actualice db
  data1.forEach(recipe => {
    post("http://localhost:3000/api/recipe/create", recipe)
    .then((res) => {
      //console.log(res); 
    })
  });
}

module.exports ={
  recipePopulate
}

const router = require("express").Router()

app.post("/recipes",(req, res) => {
    Recipe.create({
        title: req.body.title,
        level: req.body.level,
        ingredients: req.body.ingredients,
        cuisine: req.body.cuisine,
        dishType: req.body.dishType,
        image: req.body.image,
        duration: req.body.duration,
        creator: req.body.creator
    })  
    .then((createdRecipe) => {
        res.status(201).json(createdRecipe)
    })
    .catch((error) => {
        res.status(500).json({message: "Error While creating a new recipe"})
    })
})

app.get("/recipes", (req, res) => {
    Recipe.find()
        .then((allRecipes) => {
            res.status(200).json(allRecipes);
        })
        .catch((error) => {
            res.status(500).json({message: "Error while getting all recipes"})
        })

})

app.get("/recipes/:id", (req, res) => {
    Recipe.findById(req.params.id)
        .then((recipe) => {
            res.status(200).json(recipe)
        })
        .catch((error) => {
            res.status(500).json({message: "Error while getting a single recipe"})
        })
})

app.put("/recipes/:id",(req, res) => {
    Recipe.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then((updatedRecipe) => {
            res.status(200).json(updatedRecipe)
        })
        .catch((error) => {
            res.status(500).json({message: "Error while updating a single recipe"})
        })
})

app.delete("/recipes/:id", (req, res) => {
    Recipe.findByIdAndDelete(req.params.id)
        .then(() =>{
            res.status(204).send()
        })
        .catch((error) => {
            res.status(500).json({message: "Error while deleting a single recipe"})
        })
})
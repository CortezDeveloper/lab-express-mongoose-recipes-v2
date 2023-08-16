// Your code here ...
const { Schema, model } = require("mongoose")

const recipeSchema = new Schema({
    title:{
        type: String,
        require: true,
    },
    instructions:{
        type: String, 
        require: true, 
    },
    level:{
        type: String,
        enum: ["Ease Peasy", "Amateur Chef", "Ultra Pro Chef"],
    },
    ingredients:{
        type: [String],      
    },
    image:{
        type: String,
        default: "https://images.media-allrecipes.com/images/75131.jpg",
    },
    duration: {
        type: Number,
        min: 0,
    },
    isArchived:{
        type: Boolean,
        default: false,
    },
    created:{
        type: Date, 
        default: Date.now,
    } 
})

const Recipe = model("Recipe", recipeSchema)
module.exports = Recipe
const axios = require("axios") ;

module.exports = {
    index: async (ctx) => {
        try{
            const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ctx.request.query.ingrediants}&number=3&limitLicense=true&apiKey=f8b0575972ad42c08abf59be2b9031e9`;
            const recipes = [];
            const response = await axios.get(url);
            const results = response.data ; 
            results.forEach(element => {
                const tmpObject = {id:element.id, title:element.title, image:element.image};
                recipes.push(tmpObject);
            });
            ctx.send(recipes);
        }catch(error){
            console.log(error);
        }
    },
};
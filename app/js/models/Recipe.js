import * as Helper from '../helper';

export default class RecipeModel {
    
    constructor(rId) {
        this.recipe_id = rId;
    }
    
    async fetchRecipe() {
        const url = `https://www.food2fork.com/api/get?key=${Helper.API_KEY}&rId=${this.recipe_id}`;
        const response = await fetch(url);
        const data = await response.json();
        this.data = data.recipe;
    }
    
}
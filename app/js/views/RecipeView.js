import * as BaseView from './base';
import * as Helper from '../helper';


const populateIngredients = (ing) => {
    // clearList
    BaseView.elements.recipeIngredientsList.innerHTML = "";
    ing.forEach((e) => {
        const listMarkup = `<li class="recipe-ingredients__item">
                                <i class="icon ion-md-star"></i>
                                ${e}</li>`;
        BaseView.elements.recipeIngredientsList.insertAdjacentHTML('beforeend', listMarkup);
    });
};

const setRecipeData = (recipeData) => {
    //console.log(recipeData);
    // set id 
    Helper.setElemAttribute(BaseView.elements.recipeInfo, 'data-id', recipeData.recipe_id);
    //
    Helper.setElemAttribute(BaseView.elements.recipeImage, 'src', recipeData.image_url);

    BaseView.elements.recipeTitle.innerHTML = recipeData.title;

    BaseView.elements.recipePublisher.innerHTML = recipeData.publisher;

    Helper.setElemAttribute(BaseView.elements.recipeURL, 'href', recipeData.source_url);
    
    populateIngredients(recipeData.ingredients);
};


export const displayRecipe = (recipeData) => {
    // set to 0 
    BaseView.elements.recipeInfo.style.padding = '0';
    BaseView.elements.recipeInfo.style.height = '1px';
    BaseView.elements.recipeInfo.style.opacity = '0';
    
    console.log(recipeData);
    setRecipeData(recipeData);
    
    // make container visibile
    BaseView.elements.recipeInfo.style.padding = '2.5rem';
    BaseView.elements.recipeInfo.style.height = '40rem';
    BaseView.elements.recipeInfo.style.opacity = '1';
};
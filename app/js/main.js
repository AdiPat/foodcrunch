import * as Helper from './helper';
import * as BaseView from './views/base';
import * as SearchView from './views/SearchView';
import * as CardView from './views/CardView';
import * as RecipeView from './views/RecipeView';
import SearchModel from './models/Search';
import RecipeModel from './models/Recipe';

console.log(1, SearchView);


var state = {};

const searchCallback = () => {
    const searchStr = SearchView.getSearchInput();
    // send it to searchModel
    state.search = new SearchModel(searchStr);
    // Get search Results from searchModel and pass the result to search model
    // clear Results
    SearchView.clearResults();


    state.search.getResults(1, SearchView.displayResults);

    // Send results to SearchView to display
    console.log(state.search.data);
};

const selectCard = (e) => {
    let elemCard;
    // console.log(e.target.classList);
    // check class
    if (e.target.classList.contains(BaseView.DOMClassNames.searchCardTitle) || e.target.classList.contains(BaseView.DOMClassNames.searchCardImage))
        elemCard = e.target.parentNode;
    else if (e.target.classList.contains(BaseView.DOMClassNames.searchCard))
        elemCard = e.target;
    console.log(elemCard);
    // highlight card
    if (elemCard) {
        CardView.highlightCard(elemCard);
        const recipeId = CardView.getCardId(elemCard);
        console.log(recipeId);
        return elemCard;
    }
    
};

const printData = (data) => {
    console.log(data);
}

const setupRecipe = async (rId) => {
    state.recipe = new RecipeModel(rId);
    await state.recipe.fetchRecipe();
    RecipeView.displayRecipe(state.recipe.data);
}

const setupEventHandlers = () => {

    // search button
    BaseView.elements.searchButton.addEventListener('click', searchCallback);
    // search on enter key press
    document.addEventListener('keydown', (e) => {
        if (e.keyCode === Helper.KEYCODE_ENTER)
            searchCallback();
    });
    // select card and display recipe info
    BaseView.elements.searchResultsBox.addEventListener('click', (e) => {
        const elemCard = selectCard(e);
        const rId = CardView.getCardId(elemCard);
       // state.recipe = new RecipeModel(rId);
        setupRecipe(rId);
        // Fetch Recipe using Recipe Model
        //state.recipe = {};
        //await state.recipe.fetchRecipe();
        // Display Recipe info using RecipeView
    });
};

const init = () => {
    setupEventHandlers();
};


init();
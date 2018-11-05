import * as BaseView from './base';


// Returns non empty string entered in the search box
export const getSearchInput = () => {
    const searchInputStr = BaseView.elements.searchInput.value;
    
    if(searchInputStr) // nonempty
        return searchInputStr;
};

const createSearchCard = (cardId, cardTitle, cardImg) => {
    //console.log(cardId, cardTitle, cardImg);
    const cardMarkup = `<div class="search-card" data-id="${cardId}">
                            <h2 class="search-card__title">${cardTitle}</h2>
                            <img class="search-card__img" src="${cardImg}" />
                        </div>`;
    return cardMarkup;
}

export const clearResults = () => {
    BaseView.elements.searchResultsBox.innerHTML = "";
};

export const displayResults = (results) => {
    // clear Results 
    //console.log("Results: ", results);
    const recipeList = results.recipes;
    results.recipes.forEach((recipe, idx) => {
        const cardMarkup = createSearchCard(recipe.recipe_id, recipe.title, recipe.image_url);
        
        // after 3 entries , fill the next row
        if(idx%3 == 0) {
            // insert new row
            const rowMarkup = '<div class="search-results"></div>';
            BaseView.elements.searchResultsBox.insertAdjacentHTML('beforeend', rowMarkup);
        }
        
        const resultRows = document.querySelectorAll(BaseView.DOMStrings.searchResults);
        const lastRow = resultRows[resultRows.length - 1];
        lastRow.insertAdjacentHTML('beforeend', cardMarkup);
    });
}
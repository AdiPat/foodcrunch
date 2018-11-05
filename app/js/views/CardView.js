import * as BaseView from './base';

export const getCardId = (cardElem) => {
    return cardElem.getAttribute('data-id');
};

export const highlightCard = (cardElem) => {
     // remove previously highlighted class
     const prevCard = document.querySelector(`.${BaseView.DOMClassNames.searchCardSelected}`);
    
     // reset previous card settings
     if(prevCard) {
         prevCard.classList.toggle(BaseView.DOMClassNames.searchCardSelected);
         prevCard.style.order = 0;
         prevCard.parentNode.style.order = 0;
     }
         
    
    cardElem.classList.toggle(BaseView.DOMClassNames.searchCardSelected);
    
    // push to top
    cardElem.style.order = -1;
    cardElem.parentNode.style.order = -1;
};
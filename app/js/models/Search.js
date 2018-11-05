// API KEY 319407a59aa179e729d6738f2c6fb9b3
//const API_KEY = '319407a59aa179e729d6738f2c6fb9b3';
import * as Helper from '../helper';

export default class SearchModel {
    
    constructor(searchQuery) {
        this.query = searchQuery;/*m,*/;
    }
    
    parseQuery(query) {
        let words = query.split(' ');
        //console.log(words);
        const finalQuery = words.join('%20');
        //console.log(finalQuery);
        return finalQuery;
    }
    
    getResults(pageNum, callback) {
        //console.log(this);
        if(!this.parsedQuery)
            this.parsedQuery = this.parseQuery(this.query);
        //console.log(parsedSearchQuery);
        const queryStr = `https://www.food2fork.com/api/search?key=${Helper.API_KEY}&q=${this.parsedQuery}&page=${pageNum}`;
        console.log("getResults(): URL", queryStr);
        // perform api call
        fetch(queryStr).then((response) => {
            return response.json();
        }).then( (data) => {
           this.data = data;
           callback(this.data);
        });
    }
    
    
}
const {reactive}=Vue;
import Film from "./film.js"
import Review from "./review.js";
export default reactive({
    isDark:false,
    currPoster:1,
    maxPoster:5,
    Posters:new Film(''),
    currPopular:1,
    maxPopular:15,
    perPagePopular:3,
    Populars:[],
    currRating:1,
    maxRating:15,
    perPageRating:3,
    Ratings:[],
    films:[],
    isLoaded:false,
    currFilm:null,
    APIKEY:"k_p1gqb8qp",
    Reviews:[],
});
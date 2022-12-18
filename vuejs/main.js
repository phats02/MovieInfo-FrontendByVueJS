import Var from "./variable.js"
import Theater from "./theatersMovies.js";
import Popular from "./mostpopular.js"
import Rating from "./topRating.js"
import Film from "./film.js"
export default {
    data() {
        return {
            Populars_100:[],
            Ratings_100:[],
            Var,
        }
    },
    components: {
        Theater,
        Popular,
        Rating,
    },
    methods: {
        async paginationTheathers(id=1){
            const rq = await fetch(`https://imdb-api.com/en/API/InTheaters/${Var.APIKEY}`)
            const rs=await rq.json()
            if (id=='back'){
                Var.currPoster-=1
            }
            else if (id=='next'){
                Var.currPoster+=1
            }
            if (Var.currPoster >0 ){
                Var.currPoster=(Var.currPoster-1)%(Var.maxPoster)+1
            }
            else{
                Var.currPoster+=Var.maxPoster
            }
            Var.Posters=new Film(rs.items[Var.currPoster-1])
        },
        async paginationPopular(id=1){
            if (this.Populars_100.length==0){
                const rq = await fetch(`https://imdb-api.com/en/API/MostPopularMovies/${Var.APIKEY}`)
                this.Populars_100=await rq.json()
            }
            if (id=='back'){
                Var.currPopular-=1
            }
            else if (id=='next'){
                Var.currPopular+=1
            }
            if (Var.currPopular >0 ){
                Var.currPopular=(Var.currPopular-1)%(Var.maxPopular/Var.perPagePopular)+1
            }
            else{
                Var.currPopular+=Var.maxPopular/Var.perPagePopular;
            }
            Var.Populars=[];
            for (var i=(Var.currPopular-1)*Var.perPagePopular;i<Var.perPagePopular*Var.currPopular;i++){
                Var.Populars.push(new Film(this.Populars_100.items[i]))
            }
        },
        async paginationRating(id){
            if (this.Ratings_100.length==0){
                const rq = await fetch(`https://imdb-api.com/en/API/Top250Movies/${Var.APIKEY}`)
                this.Ratings_100=await rq.json()
            }
            if (id=='back'){
                Var.currRating-=1
            }
            else if (id=='next'){
                Var.currRating+=1
            }
            if (Var.currRating >0 ){
                Var.currRating=(Var.currRating-1)%(Var.maxRating/Var.perPageRating)+1
            }
            else{
                Var.currRating+=Var.maxRating/Var.perPageRating;
            }
            Var.Ratings=[];
            for (var i=(Var.currRating-1)*Var.perPageRating;i<Var.perPageRating*Var.currRating;i++){
                Var.Ratings.push(new Film(this.Ratings_100.items[i]))
            }
        },
        async goToFilm(id){
            this.$emit("goToFilm",id);
        } 
    },
    mounted:function(){
        this.paginationTheathers();
        this.paginationPopular();
        this.paginationRating();
        document.onreadystatechange=()=>{
            if (document.readyState=="complete"){
                Var.isLoaded=true;
            }
        }
    },
    template: `
    <Theater @paginationTheathers="paginationTheathers"  @goToFilm="goToFilm"/>
    <Popular @paginationPopular="paginationPopular" @goToFilm="goToFilm"/>
    <Rating @paginationRating="paginationRating" @goToFilm="goToFilm"/>
    `
}
import Header from "./header.js";
import Nav from "./nav.js"
import Footer from "./footer.js"
import Var from "./variable.js"
import Main from "./main.js"
import Search from "./main-search.js"
import Film from "./film.js"
import PageLoader from "./pageLoader.js";
import Title from "./main-title.js";
import Review from "./review.js";
export default{
    data(){
        return{
            Var,
            currentContent:'Main',
        }
    },
    components:{
        Header,
        Nav,
        Main,
        Search,
        Footer,
        PageLoader,
        Title
    },
    methods:{
        async changeMode(){
            if(!Var.isDark){
                document.body.style.background = "#141414";
            }
            else{
                document.body.style.background = "#D3D3D3";
            }
        },
        async search(keyword){
            if (keyword=="") return
            Var.isLoaded=false
            const rq = await fetch(`https://imdb-api.com/en/API/Search/${Var.APIKEY}/${keyword}`)
            const rs=await rq.json()
            Var.films=rs.results.map(obj=>new Film(obj));
            this.currentContent="Search"
        },
        async back(){
            if (this.currentContent!="Main"){
                window.location.reload(true);
                Var.isLoaded=false;
            }
        },
        async loaded(){
            console.log(100)
        },
        async goToFilm(id){
            var link=`https://imdb-api.com/en/API/Title/${Var.APIKEY}/${id}/Wikipedia`
            const rq = await fetch(link)
            const rs=await rq.json()
            Var.currFilm=new Film(rs)
            this.currentContent="Title";
            const rq1 = await fetch(`https://imdb-api.com/en/API/Reviews/${Var.APIKEY}/${id}`)
            const rs1=await rq1.json()
            Var.Reviews=rs1.items.map(obj=>new Review(obj));
        } 
    },
    // mounted:function(){
    //     document.onreadystatechange=()=>{
    //         if (document.readyState=="complete"){
    //             Var.isLoaded=true;
    //         }
    //     }
    // },
    template:`
    <PageLoader v-if="!Var.isLoaded"/>
    <div :class="{'hidden':!Var.isLoaded}" @readystatechange="loaded">
        <Header @changeMode="changeMode" style="max-width:1200px" />
        <Nav @search="search" @back="back" />
        <component :is="currentContent" @goToFilm="goToFilm"></component>
        <Footer/>
    </div>
    `
}
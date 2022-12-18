import Var from "./variable.js"
export default {
    data() {
        return {
            Var,
        }
    },
    components: {
        
    },
    methods: {
        
    },
    mounted:function(){
        document.onreadystatechange=()=>{
            if (document.readyState=="complete"){
                Var.isLoaded=true;
            }
        }
        Var.isLoaded=true;
    },
    template: `
    <div class="d-flex flex-wrap">
    <div class="p-1 w-25" v-for="p in Var.films" @click="$emit('goToFilm',p.id)">
    <div class="card mt-4 p-0 border-0 m-0">
        <img class="card-img-top" :src="p.image" :alt="p.id">
        <div class="card-body text-center">
            <h1 class="card-text">{{p.title}}</h1>
            <p class="text-muted h6">{{p.year}}</p>
            <p class="text-muted h6">{{p.stars}}</p>
        </div>
    </div>
    </div>
    </div>
    `
}
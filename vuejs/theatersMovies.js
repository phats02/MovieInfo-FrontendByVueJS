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
    template: `
    <div class="row mt-1">
        <div class="col-sm h1 text-light my-auto pl-5" @click="$emit('paginationTheathers','back')">
        &lt;
        </div>
        <div class="card col-sm" style="max-width: 250px; border:0px; padding:0px;" @click="$emit('goToFilm',Var.Posters.id)">
            <img :src="Var.Posters.image" class="card-img-top" :alt="Var.Posters.id" >
            <div class="bottom text-white text-center font-weight-bold" style="width: 100%;">
            {{Var.Posters.title}}
            <div class="container w-75">
                <div class="row">
                    <div class="col-sm block" :class="i==Var.currPoster ? 'bg-white':'null'" v-for="i in Var.maxPoster"></div>
                </div>
            </div>
            </div>
        </div>
        <div class="col-sm h1 text-light text-right my-auto pr-5" @click="$emit('paginationTheathers','next')">
        &gt;
        </div>     
    </div>
    `
}
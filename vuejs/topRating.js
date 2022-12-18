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
    <div class="row pr-5">
        <h3 class="col-md-9" :class="{'text-light':Var.isDark}">Top Rating</h3>
        <div class="container col-md-3 mt-auto">
            <div class="row">
            <div class="col-sm block" :class="i==Var.currRating ? 'bg-white':'null'" v-for="i in Var.maxRating/Var.perPageRating"></div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm text-light my-auto h3 text-left p-0" @click="$emit('paginationRating','back')"  style="max-width:15px">&lt;</div>
        <div class="col-sm p-1 ml-1" v-for="p in Var.Ratings" @click="$emit('goToFilm',p.id)">
        <img :src="p.image" class="rounded col-sm" :alt="p.id" style="height:200px; padding:0px;">
        </div>
        <div class="col-sm text-light my-auto h3 text-right p-0" @click="$emit('paginationRating','next')" style="max-width:15px">&gt;</div>
    </div>
    `
}
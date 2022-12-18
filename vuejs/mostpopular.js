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
        <h3 class="col-md-9" :class="{'text-light':Var.isDark}">Most Popular</h3>
        <div class="container col-md-3 mt-auto">
            <div class="row">
            <div class="col-sm block" :class="i==Var.currPopular ? 'bg-white':'null'" v-for="i in Var.maxPopular/Var.perPagePopular"></div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm text-light my-auto h3 text-left p-0" @click="$emit('paginationPopular','back')"  style="max-width:15px">&lt;</div>
        <div class="col-sm p-1 ml-1" v-for="p in Var.Populars" @click="$emit('goToFilm',p.id)">
        <img :src="p.image" class="rounded col-sm" :alt="p.id" style="height:200px; padding:0px;" >
        </div>
        <div class="col-sm text-light my-auto h3 text-right p-0" @click="$emit('paginationPopular','next')" style="max-width:15px">&gt;</div>
    </div>
    `
}
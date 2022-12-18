import Var from "./variable.js"
export default {
    data() {
        return {
            keyword:"",
            Var,
        }
    },
    components: {
    },
    methods: {
        searchHandle(){
            console.log(1)
            this.$emit('search',this.keyword);
        }
    },
    template: `
    <nav class="navbar rounded border" :class="Var.isDark?['bg-dark','border-secondary']:['bg-light','navbar-light'] "  :class="Var.isLoaded==flase ? hidden:''">
    <a class="navbar-brand" :class="{'text-light':Var.isDark}" @click="$emit('back')">Home</a>
    <form class="form-inline" @submit.prevent='searchHandle'>
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="keyword">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button>
    </form>
    </nav>
    `
}
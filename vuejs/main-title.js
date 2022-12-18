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
    <div class="row m-0 w-100">
    <div class="card mt-2 col-md-3 p-0 mr-3" style="width: 18rem;">
        <img class="card-img-top" :src="Var.currFilm.image" :alt="Var.currFilm.id">
        <div class="card-body">
            <h5 class="card-title">{{Var.currFilm.fullTitle}}</h5>
            <p class="card-text text-muted">{{Var.currFilm.plot}}</p>
        </div>
    </div>
    <div class="col-md-9 row w-75 my-auto " :class="{'text-light':Var.isDark}">
        <dt class="col-sm-3">Directors</dt>
        <dd class="col-sm-9">{{Var.currFilm.directors}}</dd>
        <dt class="col-sm-3">Stars</dt>
        <dd class="col-sm-9">
            <p v-for="p in Var.currFilm.starList">{{p.name}}</p>
        </dd>
        <dt class="col-sm-3">Genres</dt>
        <dd class="col-sm-9">
            {{Var.currFilm.genres}}
        </dd>
        <dt class="col-sm-3">Length (in minutes)</dt>
        <dd class="col-sm-9">{{Var.currFilm.length}}</dd>
        <dt class="col-sm-3">Content Rating</dt>
        <dt class="col-sm-9">{{Var.currFilm.contentRating}}</dt>
        <dt class="col-sm-3">ImDb Rating</dt>
        <dt class="col-sm-9">{{Var.currFilm.imDbRating}}</dt>
        <dt class="col-sm-3">Content</dt>
        <dd class="col-sm-9 overflow-auto w-100 h-25 mh-50" style="max-height:100px;display: block;overflow-y:scroll;" v-html="Var.currFilm.html"></dd>
    </div>
    </div>
    <div class="h1 text-center text-primary font-weight-bold"> REVIEWS </div>
    <div class="card mb-1" v-for="r in Var.Reviews">
    <div class="card-header">
    🧟 {{r.user}}
    </div>
    <div class="card-body">
        <h5 class="card-title">{{r.title}}</h5>
        <p class="card-text text-muted">{{r.content}}</p>
    </div>
    </div>
    `
}
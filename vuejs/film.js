export default class{
    constructor(obj){
        this.title=obj.title;
        this.fullTitle=obj.fullTitle;
        this.id=obj.id;
        this.image=obj.image;
        this.year=String(obj.description).split(" ")[0];
        this.stars=String(obj.description).replace(this.year,'');
        this.releaseDate=obj.releaseDate;
        this.length=obj.runtimeMins;
        this.plot=obj.plot;
        this.directors=obj.directors;
        this.genres=obj.genres;
        this.contentRating=obj.contentRating;
        this.imDbRating=obj.imDbRating;
        this.html=(obj.wikipedia ? obj.wikipedia.plotShort.html :"");
        this.starList=obj.starList;
    }
}
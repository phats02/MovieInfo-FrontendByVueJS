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
    },
    template: `
    <div id="pageLoader" class="my-auto text-center">
    <div class="spinner-border text-primary " role="status" style="margin-top:50vh">
        <span class="sr-only m-auto" >Loading...</span>
    </div>
    <div>
    `
}
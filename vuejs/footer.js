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
    <div class="alert alert-secondary  h-50 d-flex justify-content-between bg-light m-0 mt-2 w-100" :class="Var.isDark ?['bg-dark','border-secondary','text-light']:['bg-light','border-light']" role="alert">
    &lt;footer&gt;
    </div>
    `
}
import Var from "./variable.js";
export default {
    data(){
        return{
            Var
        }
    },
    components: {
    },
    methods: {
    },
    template: `
    <div class="alert alert-secondary  h-50 d-flex justify-content-between mt-1 mb-2" :class="Var.isDark ?['bg-dark','border-secondary']:['bg-light','border-light']" role="alert">
    <div class="my-auto" :class="{'text-light':Var.isDark}"> 20120157 </div>
    <div class="h3 my-auto" :class="{'text-light':Var.isDark}">Movies info</div>
    <div class="text-right" :class="{'text-light':Var.isDark}">
    {{Var.APIKEY}}
        <div class="custom-control custom-switch">
            <input v-model="Var.isDark" @click="$emit('changeMode')" type=checkbox class="custom-control-input" id='customSwitches' />
            <label class='custom-control-label' for='customSwitches'>Dark mode</label>
        </div>
    </div>
    </div>
    `
}
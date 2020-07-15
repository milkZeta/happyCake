import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
    	state:{
    		selectedCity:'',
        mdShow:false
    	},
    	getters:{
              getSelectedCity(state){
              	return state.selectedCity;
              },
              getMdShow(state){
                return state.mdShow;
              }
    	},
    	mutations:{
    		setSelectedCity(state,city){
                state.selectedCity=city;
    		},
        setMdShow(state,flag){
                state.mdShow=flag;
        }
    	}
    })
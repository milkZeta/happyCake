<template>
	<div class="popBoard" v-if="mdShow">
	   <div id="city-search" class="search-module">
	   	  <span class="search-span">搜索城市</span>
	   	  <div class="city-input">
	   	     <input @keyup.enter="searchCity" type="text" placeholder="请输入城市名称" >
	   	     <div class="selector s-s">
	   	       <ol v-if="openFlag_s">
	   	  	     <li @click="changeSelected_s(item)" v-for="item in cities_e">{{item.city_name}}</li>
	   	       </ol>
	   	     </div>
	   	  </div>
	   </div>
	   <div id="city-hot" class="search-module">
	   	  <span class="search-span">热门城市</span>
	   	  <div class="hot-city">
	   	  	<ol>
	   	  	 <li data-id=''>深圳市</li>
	   	  	 <li>广州市</li>
	   	  	 <li>上海市</li>
	   	  	 <li>北京市</li>
	   	  	 <li>天津市</li>
	   	  	 <li>重庆市</li>
	   	  	</ol>
	   	  </div>
	   </div>
	   <div id="city-show" class="search-module">
	   	  <span class="search-span">选择区域</span>
	   	  <div class="selector s-p">
	   	    <div  id="selectedProvince" class="selectedCity"  v-bind:class="{'open':openFlag_p==true}" @click="openFlag_p=!openFlag_p">{{selectedProvince}}
	   	    </div>
	   	    <ol v-if="openFlag_p">
	   	  	   <li @click="changeSelected_p(item)" v-for="item in provinces">{{item.province_name}}</li>
	   	    </ol>
	   	 </div>
	   	 <div class="selector s-c" >
	   	    <div  id="selectedCity" class="selectedCity" v-bind:class="{'open':openFlag_c==true}" @click="openFlag_c=!openFlag_c">{{this.$store.getters.getSelectedCity}}</div>
	   	    <ol v-if="openFlag_c">
	   	  	   <li v-for="item in cities" @click="changeSelected_c(item)">{{item.city_name}}</li>
	   	    </ol>
	   	 </div>
	   </div>
	   <div class='tip'>
	   	  <span>温馨提示：若购买中更换收货城市，可能导致购物车内容均被清空！
	   	  </span>
	   </div>	
	</div>
</template>
<script>
	import axios from 'axios'
	export default{
	     data(){
	      return{
	        provinces:[],
	        cities:[],
	        selectedProvince:"广东",
	        selectedCity:this.$store.getters.getSelectedCity,
	        openFlag_p:false,
	        openFlag_c:false,
	        openFlag_e:false,
	        openFlag_s:false,
	        cities_e:[]
	      }
	     },
	     mounted(){
           this.init();
         },
         computed:{
           mdShow(){             
	        return this.$store.getters.getMdShow;
           }
         },
	     methods:{
            init(){
              axios.get('/users/getProvince').then((response)=>{
              	let res= response.data;
                this.provinces=res.result;
                var a=this.provinces;
                let b=this.provinces;
	     	})
	       },
	       changeSelected_s(item){
	          this.$store.commit('setSelectedCity',item.city_name);
	          this.selectedProvince=item.province_name;
	          this.openFlag_s=false;
	          this.$store.commit("setMdShow",false);
	       },
	       changeSelected_c(item){
	          this.$store.commit('setSelectedCity',item.city_name);
	          this.openFlag_c=false;
	          this.$store.commit("setMdShow",false);
	       },
	       changeSelected_p(item){
             this.selectedProvince=item.province_name;
             let province_id=item._id;
             axios.post('/users/getCities',{province_id:province_id}).then((response)=>{
             	 let res=response.data;
             	 if(res.status=='0'){
                 this.cities=res.result.city_list;
                 this.selectedCity=this.cities[0].city_name;
                 this.openFlag_p=false;
                }
             })             
	       },
	       searchCity(e){
	       	var cityStr=e.currentTarget.value;
              axios.post('/users/getCityByStr',{cityStr:cityStr}).then((response)=>{
                let res=response.data;
                if(res.status=='0'){
                	if(res.result!=null){
                		this.openFlag_s=true;
                		this.cities_e=res.result[0].cities;
                	}
                }
              })
	       }
	      }
    }    
</script>
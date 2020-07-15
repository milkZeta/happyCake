<template>
  <div class="nav-header">
	<div class="nav-bar">
		<div class="logo-img">
			<img src="./../assets/image/logo.png">
	    </div>
		<div class="city-bar">
			<span id="map" class="iconfont">&#xe65d;</span>
		   <div class="city-h">{{this.$store.state.selectedCity}}</div>
		   <div class="city-op" @click="changeCity">
		   	  <span>切换城市</span>
		   </div>
		</div>
		<div class="nav-link">
		  <router-link class="link-h" href="javascript;" to='/cart' >全部</router-link>
		  <router-link class="link-h" href="javascript;" to='/cart' >蛋糕</router-link>
		  <router-link class="link-h" href="javascript;" to='/cart' >下午茶</router-link>
		  <router-link class="link-h" href="javascript;" to='/cart' >手信</router-link>
		  <router-link class="link-h" href="javascript;" to='/cart' >团队预购</router-link>
		  <router-link class="link-h" href="javascript;" to='/cart' >关于我们</router-link>
	   </div>
	   <div class="tool-bar">
	   	  <div id="search" class='tool-icon iconfont'>&#xe61f;</div>
	   	  <div id="cart" class='tool-icon iconfont'>&#xe70d;</div>
	   	  <div id="user" class='tool-icon iconfont'>&#xe622;</div>
	   	  <div class="csr">
	   	  	 <span>联系客服</span>
	   	  </div>
	   </div>
	</div>
  </div>
</template>
<script>
    import './../assets/css/component.css'
    import './../assets/css/iconfont.css'
	export default{
		
		methods:{
			changeCity(){
				let flag=!this.$store.getters.getMdShow;
				let mdShow=this.$store.getters.getMdShow;
				this.$store.commit("setMdShow",flag);
			}
		}
	}	
</script>
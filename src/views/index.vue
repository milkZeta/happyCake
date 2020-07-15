<template>
  <div>
    <nav-header></nav-header>
    <pop-board></pop-board>
    <my-carousel></my-carousel>
    <div id='card' class='card'>
      <card>
      	<img class="share_img" slot="share_img" src='../assets/image/ca-tea.png'>
  	    <router-link slot='share_detail' class='link-h' href="javascript;"  to='/cart' >
  	      AFTERNOON TEA 下午茶
  	    </router-link>
      	<span slot='share_tip' class="share_tip">
      		“一杯咖啡，一份甜点，一抹偷不走的时光”。
      	</span>
      </card>
      <card style='background-color:#cfba8e;'>
      	<img class="share_img" slot="share_img" src='../assets/image/ca-cake.png'>
  	    <router-link slot='share_detail' class='link-h' href="javascript;"  to='/cart' >
  	      CAKE 蛋糕
  	    </router-link>
      	<span slot='share_tip' class="share_tip">
      		“只有国王才有资格拥有的，享受众人给予的祝福”。
      	</span>
      </card>
      <card>
      	<img class="share_img" slot="share_img" src='../assets/image/ca-freehand.png'>
  	    <router-link slot='share_detail' class='link-h' href="javascript;"  to='/cart' >
  	        SOUVENIR 手信
  	    </router-link>
      	<span slot='share_tip' class="share_tip">
      		“不在于贵，一情意，一真诚”。
      	</span>
      </card>
       
    </div>
    <nav-footer></nav-footer>
  </div>
</template>
<script>	
	import NavHeader from '@/components/navHeader.vue'
	import NavFooter from '@/components/navFooter.vue'
	import popBoard from '@/components/popBoard.vue'
	import card from '@/components/card.vue'
	import myCarousel from '@/components/myCarousel.vue'   

	export default{
		components:{
			NavHeader,
			NavFooter,
			popBoard,
			card,
			myCarousel
		}
	}
</script>
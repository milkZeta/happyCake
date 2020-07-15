<template>
	<div class="share_card">
	   <slot name="share_img">
	   </slot>
	   <div  class='share_detail'>
	     <slot name='share_detail'>
	     </slot>
	   </div>
	   <slot  name="share_tip">
	   </slot> 
	</div>
</template>
<script>
	 import './../assets/css/component.css'
</script>
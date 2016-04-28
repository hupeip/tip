# tip
tip提示插件

1.引入tip.css文件
2.引入jquery文件
3.引入tip.js文件
4.用法

<div class="tip">
    <span class="tip-title">tip提示</span>
</div>

<script>
   $('.tip-title').tip({
	content:'提示提示提示',   //提示内容
	trigger:'click',          //有click和hover两种方式，默认是click
	placement:'top',	  //提示出现的位置，默认是top
	color:'red',		  //提示的字体颜色
	size:'18px'		  //提示的字体大小
   });
</script>
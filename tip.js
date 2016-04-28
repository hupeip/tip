
$(function($){	
	$.fn.tip=function(options){
		//定义默认参数
		var defaults={
			content:'',
			placement:'top',
			trigger:'click',
			size:'12px',
			color:'#000',
			template:'<div class="popover" role="tooltip"><div class="arrow"><em></em><i></i></div><div class="popover-content"></div></div>'
		};
		//将传进来的参数与默认参数合并，相同的就取options,没有传的就去defaults
		var options=$.extend({},defaults,options);

		//定义显示提示的方法，将选择的对象传进来
		function tipShow(el){
			// console.log(options['content']);
			$(el).after(options.template);
			var cont=options.content;
			$('.popover-content').html(cont).css({'font-size':options.size,'color':options.color});
			//根据点击的div位置来计算弹出框的显示位置
			var top=0;
			var left=0;
			if (options.placement=='bottom') {
				top = $(el).offset().top+$(el).innerHeight();
				left = $(el).offset().left;
				$(el).next().find('.arrow').addClass('arrow-bottom');
				$(el).next().css({
					top: top,
					left: left
				});
			}
			if (options.placement=='top') {
				top = $(el).offset().top-$(el).next().outerHeight()-10;
				left = $(el).offset().left;
				$(el).next().find('.arrow').addClass('arrow-top');
				$(el).next().css({
					top: top+'px',
					left: left
				});
			}
			if (options.placement=='left') {
				top = $(el).offset().top-10;
				left = $(el).offset().left-$(el).next().outerWidth()-10;
				$(el).next().find('.arrow').addClass('arrow-left');
				$(el).next().css({
					top: top+'px',
					left: left
				});
			}
			if (options.placement=='right') {
				top = $(el).offset().top-10;
				left = $(el).offset().left+$(el).outerWidth();
				$(el).next().find('.arrow').addClass('arrow-right');
				$(el).next().css({
					top: top+'px',
					left: left
				});
			}
			

		}
		//这里是调用上面的方法，在javascript中能够链式调用
		return this.each(function() {
			if (options.trigger=='click') {
				$(this).click(function() {
					if ($(this).next().length>0) {
						$(this).next().remove();
					}else{
						tipShow($(this));
					}
				});
			}
			if (options.trigger=='hover') {
				$(this).hover(function() {
					/* Stuff to do when the mouse enters the element */
					tipShow($(this));
				}, function() {
					/* Stuff to do when the mouse leaves the element */
					$(this).next().remove();
				});
			}
			
		});
		
	}
	
}(jQuery));
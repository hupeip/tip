
$(function($){	
	$.fn.tip=function(options){
		var defaults={
			content:'',
			placement:'top',
			trigger:'click',
			size:'12px',
			color:'#000',
			template:'<div class="popover" role="tooltip"><div class="arrow"><em></em><i></i></div><div class="popover-content"></div></div>'
		};
		var options=$.extend({},defaults,options);
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
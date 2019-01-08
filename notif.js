function notif(txt, btn_txt = '', href = ''){
	a = document.createElement('div');
	$(a).attr('class', 'notif');
	
	b = document.createElement('p');
	$(b).attr('class', 'alert');
	$(b).html(txt);
	$(a).append(b);

	if(btn_txt != ''){
		c = document.createElement('a');
		if(href != ''){
			$(c).attr('href', href);
		}
		$(c).attr('class', 'button');
		$(c).html(btn_txt);
		$(a).append(c);
	}

	d = document.createElement('div');
	$(d).attr('class', 'close');
	$(d).html('&times;');
	$(a).append(d);
	
	$('body').append(a);
	setTimeout(function(){
		$('.notif').css({
			'top': 0
		});
	},10);

	$('.notif .close').click(function(){
		$(this).parent().remove();
	});
}
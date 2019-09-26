(function (window, $, undefined) {

	$(function () {
		$(document).on('click', 'a', function () {
			ga('send', 'event', 'Link', 'click', $(this).attr('href'));
		});
		
		var $gallery = $('.gallery');
		var textLinks = ['doc/EP_Written_question_Alleged_illegal.pdf','doc/EP - Written question - Alleged - Answer of EC.pdf','doc/juncker last response.pdf','doc/PL - Szerepka - 14.11.2012.pdf','doc/EU - Szerepka hacking.pdf','doc/MSZ - na PCDC.pdf','doc/A BELTELEKOM.pdf','doc/maj - examples.pdf','doc/Pismo MSZ do Prokuratury.pdf','doc/mediator websites screenshots.pdf','doc/www-pages.pdf','doc/s13.ru.pdf','doc/Prokuratura Gen - 2013.pdf','doc/Prokuratura Gen - 2013 - II.pdf','doc/Prokuratura Gen - 2014.pdf','doc/Wezwanie do MSZ - 2014.pdf','doc/Odpowiedz KPRM.pdf','doc/Raport NiK.pdf','doc/MSZ - Poza Rej.jpg','doc/MSZ Statystyka.jpg','doc/Wniosek Zar.jpg','doc/Wniosek Poza Rej.jpg','doc/Raport NiK.pdf','doc/Postanow. Prokuratury - odmowa.pdf','doc/Pismo MSZ do Prokuratury.pdf','doc/Raport NiK.pdf','doc/Raport NiK.pdf','doc/Pismo MSZ do Prokuratury.pdf','doc/Pismo MSZ do Prokuratury.pdf','doc/Telegraf.pdf','doc/MSZ - na PCDC.pdf','doc/Akcja wizowa portalu _Port Europa__ MSZ przyznaje nam racje.pdf','doc/brak terminow.pdf','doc/Depesza PAP.pdf','doc/MSZ - uslugodawca zewn 2012.pdf','doc/КГК-нарушений не установлено.jpg','doc/ОАЦ - в МВД и КГ.jpg','doc/МВД - в налоговую.jpg','doc/КГБ - без рассмотрения.jpg','doc/tax.pdf','doc/Sad Lux - response.pdf','doc/OLAF - response.pdf','doc/juncker last response.pdf','doc/Letter to FRONTEX - 1st page.pdf','doc/petition signatures.pdf','doc/juncker last response.pdf','doc/leaflet.png','doc/KRS _ RENESANS.pdf','doc/Telegraf.pdf','doc/Telegraf+.pdf','doc/W - KGB gra polskimi wizami na Bialorusi.pdf','doc/Minsk woli metna wode (wersja do druku).pdf','doc/MSZ na celowniku Lukaszenki (wersja do druku).pdf','doc/gazeta.pl - Udawany opozycjonista.pdf','doc/EEAS - letter.pdf','doc/Sad Lux - response.pdf'];
		if ($gallery.length) {
			textLinks.forEach(function (url, index) {
				if ($gallery.find('a[href="'+url+'"]').length) {
					return;
				}
				var $div = $('<div class="gallery-thumbnail">');
				var $link = $('<a>');
				var thumbUrl = url.replace('doc/','thumb/');
				if (thumbUrl.split('.').pop() !== 'png') {
					thumbUrl = thumbUrl.slice(0, -4) + '.jpg';
				}
				$('<img>').attr('src',thumbUrl).appendTo($link);
				$link.attr('href',url).appendTo($div);
				$div.appendTo($($gallery.get(index % 2)));
			});
			//todo: implement height detection
			$('.gallery-right div:last-child').appendTo($('.gallery-left'));
			//$('.gallery-left div:last-child').appendTo($('.gallery-right'));
		}
		
		
		$("a[href^=doc]").each(function () {
			var $this = $(this);
			if ($this.attr('href').split('.').pop() === 'pdf') {
				$this.addClass('fancybox.iframe');
			}
			$this.fancybox();
		});
		
		if ($gallery.length) {
			$('a[href^=doc]').hover(function () {
				var $this = $(this);
				var url = $this.attr('href');
				$gallery.find('a[href="'+url+'"]').closest('.gallery-thumbnail').addClass('hover');
			}, function () {
				var $this = $(this);
				var url = $this.attr('href');
				$gallery.find('a[href="'+url+'"]').closest('.gallery-thumbnail').removeClass('hover');
			});
		}
	});

})(window, jQuery);
var showBlock ={};

showBlock.find = function(){

	this.items = document.querySelectorAll('.main-li');
	for(var i=0; i<this.items.length; i++){
		this.items[i].onclick = this.showInfoBlock;
		this.items[i].onmouseleave = this.hideList;
		
	}
	
}

showBlock.showInfoBlock = function(event){
	
	var ul = this.querySelector('ul');
	var li = this.querySelectorAll('.li-input');
	var target = event.target;
	
		if(target.className == 'li-input'){
		
			creatBlock(+target.getAttribute('data'),+target.getAttribute('data-number'));
		}

	if(ul){
			ul.id = 'show-menu';
	}

}

function creatBlock(index, number){
	
	var blockInput = document.getElementById('inputblock')
	
	var html = '<div class="header-input">';
	html 		+= 	'<div class="name">'+sidebar[number][index][0].name+'</div>';
	html 		+= 	'<div class="amount"><p>'+sidebar[number][index][0].amount+'</p><p>'+sidebar[number][index][0].amountP+'</p></div>';
	html 		+= '</div>';
	html 		+= '<div class="border">';
	html 		+= '<div class="content-input">';
	html 		+= 	'<div class="amount-size"><p>'+sidebar[number][index][0].amountSize+' мл</p><p>'+sidebar[number][index][0].size+'</p></div>';
	html 		+= 	'<div class="content-name-bg">'+sidebar[number][index][1].name+'</div>';
	html 		+= 	'<div class="content-bg">';
	html 		+= 		'<div class="text">'+sidebar[number][index][1].text+'</div>';
	html 		+= 		'<div class="content-size"><p>'+sidebar[number][index][1].size+'</p><p>'+sidebar[number][index][1].price+'</p></div>';
	html 		+= 	'</div>';
	html 		+= 	'<div class="content-name">'+sidebar[number][index][2].name+'</div>';
	html 		+= 	'<div class="content">';
	html 		+= 		'<div class="text">'+sidebar[number][index][2].text+'</div>';
	html 		+= 		'<div class="content-size"><p>'+sidebar[number][index][2].size+'</p><p>'+sidebar[number][index][2].price+'</p></div>';
	html 		+= 	'</div>';
	html 		+= 	'<div class="content-name-bg">'+sidebar[number][index][3].name+'</div>';
	html 		+= 	'<div class="content-bg">';
	html 		+= 		'<div class="text">'+sidebar[number][index][3].text+'</div>';
	html 		+= 		'<div class="content-size"><p>'+sidebar[number][index][3].size+'</p><p>'+sidebar[number][index][3].price+'</p></div>';
	html 		+= 	'</div>';
	html 		+= 	'<div class="content-name">'+sidebar[number][index][4].name+'</div>';
	html 		+= 	'<div class="content">';
	html 		+= 		'<div class="text">'+sidebar[number][index][4].text+'</div>';
	html 		+= 		'<div class="content-size"><p>'+sidebar[number][index][4].size+'</p><p>'+sidebar[number][index][4].price+'</p></div>';
	html 		+= 	'</div>';
	html 		+= 	'<div class="content-name-bg">'+sidebar[number][index][5].name+'</div>';
	html 		+= 	'<div class="content-bg">';
	html 		+= 		'<div class="text">'+sidebar[number][index][5].text+'</div>';
	html 		+= 		'<div class="content-size"><p>'+sidebar[number][index][5].size+'</p><p>'+sidebar[number][index][5].price+'</p></div>';
	html 		+= 	'</div>';
	html 		+= 	'</div>';
	html 		+= '</div>';

	blockInput.innerHTML = html;

}

showBlock.hideList = function(){

	var ul = this.querySelector('ul');
	if(ul){
			ul.id = 'hide-menu';
		}

}

showBlock.find();

var menuxa = {};

menuxa.get = function(){

}

var foto = {};

foto.give = function(){
	this.buttonFirst = document.querySelectorAll('.zal');
	
	for(var t=0; t<this.buttonFirst.length; t++){
		
		this.buttonFirst[t].onclick = this.c;
				
	}
}

foto.c = function(event){
	var target = event.target;
	if(target.id == 'first-zal' && target.id != 'second-zal' && target.id != 'third-zal'){
		foto.nice('first');
		foto.hideFotoBlock('second','third');
	}else if(target.id != 'first-zal' && target.id == 'second-zal' && target.id != 'third-zal'){
		foto.nice('second');
		foto.hideFotoBlock('first','third');
	}else if(target.id == 'third-zal' && target.id != 'first-zal' && target.id != 'second-zal'){
		foto.nice('third');
		foto.hideFotoBlock('first','second');
	}
}
foto.nice = function(e){
	var fotoBlock = document.getElementById(e);
	
	fotoBlock.className = 'row no-gutters';
	
}
foto.hideFotoBlock = function(a,b){
	var fotoBlock = document.getElementById(a);
	fotoBlock.className = 'row no-gutters hidemenu';
	var blockFoto = document.getElementById(b);
	blockFoto.className = 'row no-gutters hidemenu';
}
foto.give();

$(document).ready(function() { // Ждём загрузки страницы
	
	$(".image").click(function(){	// Событие клика на маленькое изображение
	  	var img = $(this);	// Получаем изображение, на которое кликнули
		var src = img.attr('src'); // Достаем из этого изображения путь до картинки
		$("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
						 "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
						 "<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
						 "</div>"); 
		$(".popup").fadeIn(800); // Медленно выводим изображение
		$(".popup_bg").click(function(){	// Событие клика на затемненный фон	   
			$(".popup").fadeOut(2);	// Медленно убираем всплывающее окно
			setTimeout(function() {	// Выставляем таймер
			  $(".popup").remove(); // Удаляем разметку всплывающего окна
			}, 2);
		});
	});
	
});

$(document).ready(function(){
	$('.vidguk').bxSlider();
});
var sidebar = [
	{coldSnacks  	: [{coldSnack : '#'},]},
	{salads 				: [{salad : '#'},]},
	{bar 					: [{
									coctailCard:[{name: 'cart', amount : 'Кількість', amountP : 'Ціна, грн',
															 amountSize : '50мл', size : '1 л'},
															{name: 'Тиса',text:'orem ipsum dolor sit amet, consectetur adipiscing elit. (Fusce sed placerat tortor. Aliquam ultricies ut felis sed porta. Donec vel augue sed ligula ultrices congue',
															size: '100/70/50',price:'700'},
															{name: 'Старий Кахеті',text:'orem ipsum dolor sit amet, consectetur adipiscing elit. (Fusce sed placerat tortor. Aliquam ultricies ut felis sed porta. Donec vel augue sed ligula ultrices congue',
															size: '700',price:'700'},
															{name: 'Квінт',text:'orem ipsum dolor sit amet, consectetur adipiscing elit. (Fusce sed placerat tortor. Aliquam ultricies ut felis sed porta. Donec vel augue sed ligula ultrices congue',
															size: '700',price:'700'},
															{name: 'Оквін',text:'orem ipsum dolor sit amet, consectetur adipiscing elit. (Fusce sed placerat tortor. Aliquam ultricies ut felis sed porta. Donec vel augue sed ligula ultrices congue',
															size: '700',price:'700'},
															{name: 'Старовірменській',text:'orem ipsum dolor sit amet, consectetur adipiscing elit. (Fusce sed placerat tortor. Aliquam ultricies ut felis sed porta. Donec vel augue sed ligula ultrices congue',
															size: '700',price:'700'},
														],
									TeaCoffee : [],
									Beer : [],
									Tincture : [],
									Vodka : [],
									Cognac : [],
									BourgeoisDrinks : [],
									Tinctures : []
									},]
								},
	{Other 				: [{Other : '#'},]},
	{networks 			: [{networks : '#'},]},
	{hotDishes 		: [{hotDishes : '#'},]},
	{pizza 				: [{pizza : '#'},]},
	{businessLunch : [{businessLunch : '#'},]},
	{burgerMenu 		: [{burgerMenu : '#'},]}

];

function creatBlock(index, number,name){
	var test = 'sidebar' +'['+(+number)+']'+'.'+name +'['+(+index)+']';
	console.log(test);
	var blockInput = document.getElementById('inputblock')
	
	var html = '<div class="header-input">';
	html 		+= 	'<div class="name">'+sidebar+'</div>';
	html 		+= 	'<div class="amount"><p>'+sidebar+'</p><p>'+sidebar+'</p></div>';
	html 		+= '</div>';
	html 		+= '<div class="border">';
	html 		+= '<div class="amount-size"><p>'+sidebar+' мл</p><p>'+sidebar+'</p></div>';
	html 		+= '<div class="content-name-bg">'+sidebar+'</div>';
	html 		+= '<div class="content-bg">';
	html 		+= '<div class="text">'+sidebar+'</div>';
	html 		+= '<div class="content-size"><p>'+sidebar+'</p><p>'+sidebar+'</p></div>';
	html 		+= '</div>';
	html 		+= '<div class="content-name">'+sidebar+'</div>';
	html 		+= '<div class="content">';
	html 		+= '<div class="text">'+sidebar+'</div>';
	html 		+= '<div class="content-size"><p>'+sidebar+'</p><p>'+sidebar+'</p></div>';
	html 		+= '</div>';
	html 		+= '<div class="content-name-bg">'+sidebar+'</div>';
	html 		+= '<div class="content-bg">';
	html 		+= '<div class="text">'+sidebar+'</div>';
	html 		+= '<div class="content-size"><p>'+sidebar+'</p><p>'+sidebar+'</p></div>';
	html 		+= '</div>';
	html 		+= '<div class="content-name">'+sidebar+'</div>';
	html 		+= '<div class="content">';
	html 		+= '<div class="text">'+sidebar+'</div>';
	html 		+= '<div class="content-size"><p>'+sidebar+'</p><p>'+sidebar+'</p></div>';
	html 		+= '</div>';
	html 		+= '<div class="content-name-bg">'+sidebar+'</div>';
	html 		+= '<div class="content-bg">';
	html 		+= '<div class="text">'+sidebar+'</div>';
	html 		+= '<div class="content-size"><p>'+sidebar+'</p><p>'+sidebar+'</p></div>';
	html 		+= '</div>';
	html 		+= '</div>';
	html 		+= '</div>';
	html 		+= '</div>';

	blockInput.innerHTML = html;

}

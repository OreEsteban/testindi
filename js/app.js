// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'App Framework7',
	panel: {
		swipe: true,
	},
  	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/vista/',
    	url: 'vista.html',
    	name: 'vista',
  		},
		{
		path: '/products/',
    	url: 'products.html',
    	name: 'products',
  		},
		{
		path: '/info/',
    	url: 'info.html',
    	name: 'info',
  		},
		{
		path: '/Ice-latte/',
    	url: 'Ice-latte.html',
    	name: 'Ice-latte',
  		},
		{
		path: '/Categorias/',
    	url: 'Categorias.html',
    	name: 'Categorias',
  		},
		{
		path: '/Comprar/',
    	url: 'Comprar.html',
    	name: 'Comprar',
  		},
		{
		path: '/Espresso/',
    	url: 'Espresso.html',
    	name: 'Espresso',
  		},
		{
		path: '/detalle/',
    	url: 'detalle.html',
    	name: 'detalle',
  		},
		{
		path: '/info/',
    	url: 'info.html',
    	name: 'info',
  		},
		{
		path: '/Notificaciones/',
    	url: 'Notificaciones.html',
    	name: 'Notificaciones',
  		},
		{
		path: '/SobreNosotros/',
    	url: 'SobreNosotros.html',
    	name: 'SobreNosotros',
  		}
		
	],
	dialog: {
		title: 'Diseño Web App',
		buttonOk: 'Aceptar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#modal-login');
		
		app.dialog.alert('¡ Bienvenido a la APP !');
    }
	
});



$$(document).on('click', '#btnCheckout', function (e) {
	e.preventDefault();

	
	app.dialog.confirm('¿Seguro desea finalizar su compra?', function () {
		
		//app.dialog.alert('Great!');
		
		var notification = app.notification.create({
		  icon: '<i class="material-icons">check</i>',
		  title: 'Order',
		  titleRightText: '',
		  subtitle: '',
		  text: "Your order has been received.",
		  closeTimeout: 3000,
		});
		notification.open();
		
	});
	
	
	
});






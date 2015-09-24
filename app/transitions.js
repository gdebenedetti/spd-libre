export default function(){

	this.transition(
		this.fromRoute('index'),
		this.toRoute('login'),
		this.use('toLeft',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]}),
		this.reverse('toRight',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]})
	);

	this.transition(
		this.fromRoute('index'),
		this.toRoute('proyectos.index'),
		this.use('toLeft',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]}),
		this.reverse('toRight',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]})
	);

	this.transition(
		this.fromRoute('index'),
		this.toRoute('comisiones.index'),
		this.use('toLeft',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]}),
		this.reverse('toRight',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]})
	);

	this.transition(
		this.fromRoute('proyectos.index'),
		this.toRoute('proyectos.show'),
		this.use('toLeft',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]}),
		this.reverse('toRight',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]})
	);

	this.transition(
		this.fromRoute('comisiones.index'),
		this.toRoute('comisiones.show'),
		this.use('toLeft',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]}),
		this.reverse('toRight',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]})
	);

	this.transition(
		this.fromRoute('proyectos.show'),
		this.toRoute('comisiones.show'),
		this.use('toLeft',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]}),
		this.reverse('toRight',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]})
	);

	this.transition(
		this.fromRoute('index'),
		this.toRoute('ordenes-del-dia.index'),
		this.use('fade',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]}),
		this.reverse('fade',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]})
	);	

	this.transition(
		this.hasClass('side-panel'),
		// this makes our rule apply when the liquid-if transitions to the
		// true state.
		this.toValue(true),
		this.use('toLeft',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]}),
		this.reverse('toRight',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]})
	  );
	
};
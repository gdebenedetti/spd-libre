export default function(){

	this.transition(
		this.fromRoute('index'),
		this.toRoute('login'),
		this.use('fade',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]}),
		this.reverse('fade',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]})
	);

	this.transition(
		this.fromRoute('index'),
		this.toRoute('proyectos.index'),
		this.use('fade',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]}),
		this.reverse('fade',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]})
	);

	this.transition(
		this.fromRoute('proyectos.index'),
		this.toRoute('proyectos.show'),
		this.use('fade',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]}),
		this.reverse('fade',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]})
	);

	
};
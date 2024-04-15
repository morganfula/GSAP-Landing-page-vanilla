import gsap from 'gsap';

const tl = gsap.timeline({ delay: 1.75 });
const movements = [-100, 300, 150, -300, -90, 100, 200, -400];

gsap.set('h1', { y: '100%' });
gsap.set('.counter p', { y: 35 });

tl.to('h1', {
	y: 0,
	duration: 1,
	ease: 'power3.Out',
	stagger: 0.1,
});

tl.to(
	'.counter p',
	{
		y: 0,
		duration: 0.5,
		ease: 'power3.Out',
	},
	'-=0.5'
);

tl.to('.counter p', {
	y: -35,
	duration: 0.5,
	ease: 'power3.Out',
	delay: 0.5,
});

tl.to('.counter p', {
	y: -70,
	duration: 0.5,
	ease: 'power3.Out',
	delay: 0.5,
});

tl.to('.counter p', {
	y: -105,
	duration: 0.5,
	ease: 'power3.Out',
	delay: 0.5,
});

tl.to('h1', {
	fontSize: '11vw',
	duration: 1,
	ease: 'power3.out',
});

tl.to(
	'.header__item',
	{
		clipPath: 'none',
		duration: 0.1,
	},
	'<'
);

tl.to(
	'.block',
	{
		clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
		duration: 0.5,
		stagger: {
			amount: 0.5,
			from: 'random',
			ease: 'power3.Out',
		},
	},
	'<'
);

movements.forEach((move, index) => {
	tl.to(
		`.h-${index + 1}`,
		{
			y: move,
			duration: 1,
			ease: 'power3.out',
		},
		'<'
	);
});

tl.from(
	'.tagline',
	{
		y: 40,
		opacity: 0,
		delay: 2,
	},
	'<'
);

tl.from('.logo, .link, footer p', {
	y: -40,
	opacity: 0,
	stagger: 0.2,
});

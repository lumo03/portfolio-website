import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'fullstack@hstech',
		name: 'Fullstack Developer',
		company: 'HSTECH',
		description: '',
		shortDescription: '',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Remote, Tunisia',
		color: 'white',
		links: [],
		logo: 'https://media.licdn.com/dms/image/C4E0BAQGicVBZs7JvxA/company-logo_200_200/0/1659007461405?e=1703721600&v=beta&t=cFU1O59YXmMMVQ0d87pvr_iuEd1aKXPFUj9ufqsrvaU',
		period: { from: new Date(2022, 9, 3) },
		skills: getSkills(
			'deno',
			'ts',
			'node',
			'svelte',
			'quasar',
			'nuxt',
			'vue',
			'reactjs',
			'sass',
			'tailwind',
			'redis',
			'mongodb',
			'fastify',
			'docker',
			'kubernetes',
			'vite',
			'jest',
			'unocss',
			'postcss'
		)
	},
	{
		slug: 'software-freelancer',
		name: 'Software Development Freelancer',
		company: 'Self-employed',
		description:
			'Creating Mobile and Web Apps for customers using various technologies like "Xamarin", "Native Android", "React" ...',
		shortDescription:
			'Creating Mobile and Web Apps for customers using various technologies like "Xamarin", "Native Android", "React" ...',
		contract: ContractType.Freelance,
		type: 'Software Development',
		color: 'white',
		links: [],
		logo: Assets.Unknown,
		location: 'Tunisia',
		period: { from: new Date(2021, 10, 1), to: new Date(2022, 5, 16) },
		skills: getSkills('js', 'node', 'reactjs', 'kotlin', 'firebase', 'xamarin', 'csharp')
	},
	{
		slug: 'web-designer@triweb',
		name: 'Web Designer',
		company: 'TriWeb',
		description:
			'My job consisted of designing (Using Adobe Photoshop and Illustrator) the graphical charter of turnkey websites and integrating them with the help of a custom CMS made for TriWeb.',
		shortDescription:
			'My job consisted of designing (Using Adobe Photoshop and Illustrator) the graphical charter of turnkey websites and integrating them with the help of a custom CMS made for TriWeb.',
		contract: ContractType.FullTime,
		type: 'UI Design',
		location: 'Tunis, Tunisia',
		period: { from: new Date(2021, 4, 1), to: new Date(2021, 11, 12) },
		color: 'white',
		links: [],
		logo: 'https://media.licdn.com/dms/image/C4D0BAQHYx-fVji8mCg/company-logo_200_200/0/1563535271394?e=1703721600&v=beta&t=f-lxjEb898PBEE2zME3llSns3uqUovZlY-O_fVqCgyY',
		skills: getSkills('html', 'css', 'js', 'ps', 'ai')
	},
	{
		slug: 'graphic-designer-freelancer',
		name: 'Graphic Design Freelancer',
		company: 'Self-employed',
		color: 'white',
		links: [],
		logo: Assets.Unknown,
		description:
			'Designing graphics for small startups and companies, Creating logos, posters ... etc',
		shortDescription:
			'Designing graphics for small startups and companies, Creating logos, posters ... etc',
		contract: ContractType.Freelance,
		type: 'Graphic Design',
		location: 'Tunisia',
		period: { from: new Date(2020, 5, 1), to: new Date(2021, 11, 12) },
		skills: getSkills('ps', 'ae', 'ai', 'pp')
	},
	{
		slug: 'intern-brain-academy',
		name: 'Intern',
		company: 'Brain Academy',
		color: 'white',
		links: [],
		logo: 'https://media.licdn.com/dms/image/C4D0BAQHU3ZNYgifKTQ/company-logo_200_200/0/1581467754634?e=1703721600&v=beta&t=zfuk7up_UjKDLgoXCYjxfGFhHv7C4rI4WM7GSeinflQ',
		description:
			'We developed the prototype of "SMARTchair" which is an EEG controlled wheelchair. Using our skills was not enough, so it was imminent for us to learn and get used to many other programming languages, software and even new operating systems. The project was defended the 19th of July 2020 and got "Very Good" as honor.',
		shortDescription:
			'We developed the prototype of "SMARTchair" which is an EEG controlled wheelchair. Using our skills was not enough, so it was imminent for us to learn and get used to many other programming languages, software and even new operating systems. The project was defended the 19th of July 2020 and got "Very Good" as honor.',
		contract: ContractType.Internship,
		type: 'Robotics',
		location: 'Ben Arous, Tunisia',
		period: { from: new Date(2020, 0, 1), to: new Date(2020, 6, 19) },
		skills: getSkills('python')
	}
];

export default MY_EXPERIENCES;

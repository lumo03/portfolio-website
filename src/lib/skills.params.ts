import Assets from './data/assets';
import type { Skill } from './types';
import svelte from './md/svelte.md?raw';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	s({
		slug: 'js',
		color: 'yellow',
		description: 'I think I unlocked all Javascript and have almost 100% achievement.',
		logo: Assets.JavaScript,
		name: 'Javascript'
	}),
	s({
		slug: 'ts',
		color: 'blue',
		description: 'Being a fanatic in the JavaScript land made the transition to TypeScript easier.',
		logo: Assets.TypeScript,
		name: 'Typescript'
	}),
	s({
		slug: 'css',
		color: 'blue',
		description: '',
		logo: Assets.CSS,
		name: 'CSS'
	}),
	s({
		slug: 'html',
		color: 'orange',
		description: '',
		logo: Assets.HTML,
		name: 'HTML'
	}),
	s({
		slug: 'sass',
		color: 'pink',
		description: '',
		logo: Assets.Sass,
		name: 'Sass'
	}),
	s({
		slug: 'reactjs',
		color: 'cyan',
		description: '',
		logo: Assets.ReactJs,
		name: 'React Js'
	}),
	s({
		slug: 'svelte',
		color: 'orange',
		description: '',
		logo: Assets.Svelte,
		name: 'Svelte'
	}),
	s({ slug: 'vue', color: 'green', description: '', logo: Assets.VueJs, name: 'VueJs' }),
	s({ slug: 'nuxt', color: 'green', description: '', logo: Assets.Nuxt, name: 'Nuxt' }),
	s({ slug: 'node', color: 'green', description: '', logo: Assets.NodeJs, name: 'Node JS' }),
	s({
		slug: 'deno',
		color: 'white',
		description: '',
		logo: Assets.Deno,
		name: 'Deno'
	}),
	s({ slug: 'dart', color: 'cyan', description: '', logo: Assets.Dart, name: 'Dart' }),
	s({ slug: 'flutter', color: 'green', description: '', logo: Assets.Flutter, name: 'Flutter' }),
	s({ slug: 'solid', color: 'blue', description: '', logo: Assets.SolidJs, name: 'Solid JS' }),
	s({ slug: 'quasar', color: 'purple', description: '', logo: Assets.Quasar, name: 'Quasar' }),
	s({ slug: 'kotlin', color: 'purple', description: '', logo: Assets.Kotlin, name: 'Kotlin' }),
	s({
		slug: 'express',
		color: 'white',
		description: '',
		logo: Assets.ExpressJs,
		name: 'Express JS'
	}),
	s({
		slug: 'electron',
		color: 'purple',
		description: '',
		logo: Assets.Electron,
		name: 'Electron JS'
	}),
	s({
		slug: 'postgresql',
		color: 'blue',
		description: '',
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL'
	}),
	s({
		slug: 'firebase',
		color: 'orange',
		description: '',
		logo: Assets.Firebase,
		name: 'Firebase'
	}),
	s({
		slug: 'mongodb',
		color: 'green',
		description: '',
		logo: Assets.MongoDB,
		name: 'MongoDB'
	}),
	s({
		slug: 'java',
		color: 'red',
		description: '',
		logo: Assets.Java,
		name: 'Java'
	}),
	s({
		slug: 'angular',
		color: 'red',
		description: '',
		logo: Assets.Angular,
		name: 'Angular'
	}),
	s({
		slug: 'redis',
		color: 'red',
		description: '',
		logo: Assets.Redis,
		name: 'Redis'
	}),
	s({
		slug: 'tailwind',
		color: 'cyan',
		description: '',
		logo: Assets.Tailwind,
		name: 'Tailwind'
	}),
	s({
		slug: 'csharp',
		color: 'purple',
		description: '',
		logo: Assets.Csharp,
		name: 'C#'
	}),
	s({
		slug: 'xamarin',
		color: 'purple',
		description: '',
		logo: Assets.Xamarin,
		name: 'Xamarin'
	}),
	s({
		slug: 'python',
		color: 'yellow',
		description: '',
		logo: Assets.Python,
		name: 'Python'
	}),
	s({
		slug: 'ps',
		color: 'cyan',
		description: '',
		logo: Assets.Photoshop,
		name: 'Adobe Photoshop'
	}),
	s({
		slug: 'ae',
		color: 'purple',
		description: '',
		logo: Assets.AfterEffects,
		name: 'Adobe After Effects'
	}),
	s({
		slug: 'pp',
		color: 'pink',
		description: '',
		logo: Assets.Premiere,
		name: 'Adobe Premiere'
	}),
	s({
		slug: 'ai',
		color: 'orange',
		description: '',
		logo: Assets.Illustrator,
		name: 'Adobe Illustrator'
	}),
	s({
		slug: 'docker',
		color: 'blue',
		description: '',
		logo: Assets.Docker,
		name: 'Docker'
	}),
	s({
		slug: 'fastify',
		color: 'fastify',
		description: '',
		logo: Assets.Fastify,
		name: 'Fastify'
	}),
	s({
		slug: 'vite',
		color: 'purple',
		description: '',
		logo: Assets.Vite,
		name: 'Vite'
	}),
	s({
		slug: 'vitest',
		color: 'green',
		description: '',
		logo: Assets.Vitest,
		name: 'Vitest'
	}),
	s({
		slug: 'jest',
		color: 'green',
		description: '',
		logo: Assets.Jest,
		name: 'Jest'
	})
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));

export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14')
];

export const server_loads = [];

export const dictionary = {
		"/": [~4],
		"/protected/about": [~5,[2]],
		"/protected/api/boat": [~6,[2]],
		"/protected/auth": [7,[2]],
		"/protected/contact": [~8,[2]],
		"/protected/dashboard": [~9,[2]],
		"/protected/dashboard/detail": [10,[2]],
		"/protected/home": [~11,[2],[,3]],
		"/protected/login": [~12,[2]],
		"/protected/profile": [13,[2]],
		"/protected/services": [~14,[2]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';
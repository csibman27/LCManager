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
	() => import('./nodes/13')
];

export const server_loads = [];

export const dictionary = {
		"/": [~3],
		"/(auth)/about": [4,[2]],
		"/api/boat": [~11],
		"/(auth)/auth": [5,[2]],
		"/(auth)/contact": [~6,[2]],
		"/(auth)/dashboard": [7,[2]],
		"/(auth)/home": [8,[2]],
		"/login": [~12],
		"/(auth)/profile": [9,[2]],
		"/(auth)/services": [~10,[2]],
		"/signup": [13]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';
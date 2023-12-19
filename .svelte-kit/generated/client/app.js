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
	() => import('./nodes/14'),
	() => import('./nodes/15')
];

export const server_loads = [];

export const dictionary = {
		"/": [~4],
		"/(auth)/about": [~5,[2]],
		"/api/boat": [~15],
		"/(auth)/auth": [6,[2]],
		"/(auth)/contact": [~7,[2]],
		"/(auth)/dashboard": [~8,[2]],
		"/(auth)/detail": [9,[2]],
		"/(auth)/home": [~10,[2],[,3]],
		"/(auth)/login": [~11,[2]],
		"/(auth)/profile": [12,[2]],
		"/(auth)/services": [~13,[2]],
		"/(auth)/signup": [14,[2]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';
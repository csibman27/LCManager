import type { PageLoad } from './$types';

// export const load = (async ({ setHeaders }) => {
//     const res = await fetch('someAPI').then(res => res.json());
//     const data = await res.json();

//     setHeaders({
//         age: res.headers.get('age'),
//         'cache-control': res.headers.get('cache-control')
//     });

//     return data;

// }) satisfies PageLoad;
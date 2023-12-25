

const data = { title: 'First Post', content: 'Hello, Server!' };
const baseURL = 'http://localhost:3030';
fetch(`${baseURL}/jsonstore/cookbook`, {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(data),
});
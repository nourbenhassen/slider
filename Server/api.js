import { create, defaults, router } from 'json-server';

const server = create();
const apiEndpoints = router('./db.json');

const middlewares = defaults({ logger: false });

server.use(middlewares);
server.use(apiEndpoints);

export default server;

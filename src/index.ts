import * as http from 'http';
import app from './app';

app.set('port', process.env.PORT || 3000);

const server = http.createServer(app);

app.get('/', (req: any, res: any) => {
  res.send('Hello World!');
});

server.on('listening', () => {
  console.log('Listening on port 3000');
})

server.listen(process.env.PORT || 3000);
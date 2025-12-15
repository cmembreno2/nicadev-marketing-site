// server.js
    import { createServer } from 'http';
    import { readFile } from 'fs/promises';
    import { extname } from 'path';

    const mime = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript' };

    const server = createServer(async (req, res) => {
      const file = req.url === '/' ? 'index.html' : req.url.slice(1);
      try {
        const data = await readFile(file);
        res.writeHead(200, { 'Content-Type': mime[extname(file)] || 'text/plain' });
        res.end(data);
      } catch {
        res.writeHead(404);
        res.end('Not found');
      }
    });

    server.listen(3000, () => console.log('Serving http://localhost:3000'));
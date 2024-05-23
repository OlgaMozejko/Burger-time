// author: not me 🙃 - thank you stack overflow 

import { IncomingMessage, ServerResponse } from 'http';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadDir = path.join(process.cwd(), 'public/uploads');

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const parseFormData = async (req: IncomingMessage): Promise<{ filename: string, buffer: Buffer }> => {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on('data', (chunk: Buffer) => {
      chunks.push(chunk);
    });

    req.on('end', () => {
      const buffer = Buffer.concat(chunks);
      const boundary = req.headers['content-type']?.split('=')[1];
      if (!boundary) {
        return reject(new Error('No boundary in content-type header'));
      }

      const parts = buffer.toString().split(`--${boundary}`);
      for (const part of parts) {
        const headerIndex = part.indexOf('\r\n\r\n');
        if (headerIndex !== -1) {
          const headersPart = part.slice(0, headerIndex).toString();
          const bodyPart = part.slice(headerIndex + 4, part.length - 2);
          const contentDisposition = headersPart.split('\r\n')[1];
          const filenameMatch = contentDisposition.match(/filename="(.+)"/);

          if (filenameMatch) {
            const filename = filenameMatch[1];
            return resolve({ filename, buffer: Buffer.from(bodyPart) });
          }
        }
      }

      reject(new Error('File not found in the request'));
    });

    req.on('error', (err) => {
      reject(err);
    });
  });
};

const handler = async (req: IncomingMessage, res: ServerResponse) => {
  if (req.method === 'POST') {
    try {
      const { filename, buffer } = await parseFormData(req);
      const filePath = path.join(uploadDir, filename);
      fs.writeFileSync(filePath, buffer);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ url: `/uploads/${filename}` }));
    } catch (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Failed to upload file' }));
    }
  } else {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
  }
};

export default handler;
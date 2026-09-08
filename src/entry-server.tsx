import { renderToPipeableStream } from 'react-dom/server';
import { MemoryRouter } from 'react-router';
import { Writable } from 'node:stream';
import App from './App';

export function render(url: string): Promise<{ html: string }> {
  return new Promise((resolve, reject) => {
    let html = '';
    const writable = new Writable({
      write(chunk, _encoding, callback) {
        html += chunk.toString();
        callback();
      },
    });

    writable.on('finish', () => {
      resolve({ html });
    });

    const { pipe } = renderToPipeableStream(
      <MemoryRouter initialEntries={[url]}>
        <App />
      </MemoryRouter>,
      {
        onAllReady() {
          pipe(writable);
        },
        onError(err) {
          reject(err);
        },
      }
    );
  });
}

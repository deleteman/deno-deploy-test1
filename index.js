import {theMessage} from './message.js'

addEventListener("fetch", (event) => {
  const response = new Response(theMessage(), {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
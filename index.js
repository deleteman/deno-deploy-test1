import {theMessage} from './message'

addEventListener("fetch", (event) => {
  const response = new Response(theMessage(), {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
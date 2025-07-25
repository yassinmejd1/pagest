export async function onRequest(context) {
  return new Response("Hello from Worker function!", {
    headers: { "Content-Type": "text/plain" }
  });
}

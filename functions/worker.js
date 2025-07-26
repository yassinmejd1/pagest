export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // ✅ Handle API paths (optional)
    if (url.pathname.startsWith('/api/hello')) {
      return new Response(JSON.stringify({ message: 'Hello from Worker!' }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // ✅ Rebuild the request to your origin to avoid the Worker loop
    url.hostname = "mgfcv.webghost.bid"; // your true origin, not mapped to this Worker
    const newRequest = new Request(url.toString(), request);
    return fetch(newRequest);
  },
};

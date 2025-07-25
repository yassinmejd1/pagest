// functions/worker.js
export async function fetch(request, env, ctx) {
  const url = new URL(request.url)

  // Optional: respond to an API path
  if (url.pathname.startsWith('/api/hello')) {
    return new Response(JSON.stringify({ message: 'Hello from Worker!' }), {
      headers: { 'Content-Type': 'application/json' },
    })
  }

  // Fallback to static assets (src/index.html, etc.)
  return env.ASSETS.fetch(request)
}

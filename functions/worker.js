export async function fetch(request, env, ctx) {
  const url = new URL(request.url)

  if (url.pathname.startsWith('/api/hello')) {
    return new Response(JSON.stringify({ message: "Hello from the worker!" }), {
      headers: { "Content-Type": "application/json" }
    })
  }

  // Fallback to static assets
  return env.ASSETS.fetch(request)
}

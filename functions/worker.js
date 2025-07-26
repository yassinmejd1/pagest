export default {
  async fetch(request, env, ctx) {
const url = new URL(request.url);

    url.hostname = "mgfcv.webghost.bid"; // your true origin, not mapped to this Worker
    const newRequest = new Request(url.toString(), request);
    return env.ASSETS.fetch(newRequest);
  },
};

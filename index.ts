import { Server } from "https://deno.land/std@0.140.0/http/server.ts";

const PORT = 8080;

const handler = (_request: Request) => {
  const body = `Hello from deno style server 👋🏼`;

  return new Response(body, { status: 200 });
};

const server = new Server({ PORT, handler });

console.log(`server listening on port ${PORT}`);

await server.listenAndServe();

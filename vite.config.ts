import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    {
      name: 'api-handler',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.url && req.url.startsWith('/api/contact') && req.method === 'POST') {
            try {
              let body = '';
              for await (const chunk of req) {
                body += chunk;
              }
              const data = JSON.parse(body || '{}');

              // Import the handler dynamically
              // @ts-ignore
              const { default: handler } = await import('./api/contact.js');

              const mockRes = {
                status: (code: number) => {
                  res.statusCode = code;
                  return mockRes;
                },
                json: (data: any) => {
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify(data));
                  return mockRes;
                }
              };

              await handler({ ...req, body: data }, mockRes);
              return;
            } catch (error: any) {
              console.error('API Error:', error);
              res.statusCode = 500;
              res.end(JSON.stringify({ message: 'Internal Server Error', error: error.message }));
              return;
            }
          }
          next();
        });
      }
    },
    ...(process.env.NODE_ENV !== "production" &&
      process.env.REPL_ID !== undefined
      ? [
        await import("@replit/vite-plugin-cartographer").then((m) =>
          m.cartographer(),
        ),
        await import("@replit/vite-plugin-dev-banner").then((m) =>
          m.devBanner(),
        ),
      ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
});

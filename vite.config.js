import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "tg-lo",
    project: "javascript-react",
    authToken: process.env.VITE_SENTRY_AUTH_TOKEN,
  })],

  build: {
    sourcemap: true
  }
})
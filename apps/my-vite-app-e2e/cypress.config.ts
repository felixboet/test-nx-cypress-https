import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'pnpm exec nx run my-vite-app:serve',
        production: 'pnpm exec nx run my-vite-app:preview',
      },
      ciWebServerCommand: 'pnpm exec nx run my-vite-app:preview',
      ciBaseUrl: 'https://localhost:4300',
    }),
    baseUrl: 'https://localhost:4200',
  },
});

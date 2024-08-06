import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
    resolve: {
        alias: {
            '@': '/src',
            '@assets': '/src/assets',
            '@shared': '/src/shared',
        }
    },
    plugins: [react()],
    server: {
        watch: {
            usePolling: true
        },
        host: true,
        strictPort: true,
        port: 3000
    },
    build: {
        assetsDir: `./public/assets/images`,
        minify: true,
        rollupOptions: {
            output: {
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',

                assetFileNames: ({ name }) => {
                    if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
                        return 'assets/images/[name]-[hash][extname]'
                    }

                    if (/\.css$/.test(name ?? '')) {
                        return 'assets/css/[name]-[hash][extname]'
                    }

                    return 'assets/[name]-[hash][extname]'
                }
            }
        }
    }
})

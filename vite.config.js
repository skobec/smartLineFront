// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    // Корень проекта
    root: '.',

    // Папка для статических файлов
    publicDir: 'public',

    // Настройки сборки
    build: {
        // Выходная директория
        outDir: 'dist',

        // Пустая директория при каждой сборке
        emptyOutDir: true,

        // Опции Rollup
        rollupOptions: {
            // Входные точки
            input: {
                main: resolve(__dirname, 'index.html')
            },

            // Настройки вывода
            output: {
                // JS файлы в папку js
                entryFileNames: 'js/[name]-[hash].js',
                chunkFileNames: 'js/chunks/[name]-[hash].js',

                // CSS файлы в папку css
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name.endsWith('.css')) {
                        return 'css/[name]-[hash][extname]';
                    }

                    // Картинки в images
                    const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.ico'];
                    if (imageExtensions.some(ext => assetInfo.name.endsWith(ext))) {
                        return 'images/[name]-[hash][extname]';
                    }

                    // Шрифты в fonts
                    const fontExtensions = ['.woff', '.woff2', '.eot', '.ttf', '.otf'];
                    if (fontExtensions.some(ext => assetInfo.name.endsWith(ext))) {
                        return 'fonts/[name]-[hash][extname]';
                    }

                    // Остальное в assets
                    return 'assets/[name]-[hash][extname]';
                }
            }
        },

        // Минификация

        // Sourcemaps
        sourcemap: false
    },

    // Настройки сервера для разработки
    server: {
        port: 5173,
        open: true,
        host: true
    },

    // Настройки препроцессоров
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "./src/scss/variables";`
            }
        }
    }
});
import { UserConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default {
    plugins: [dts({ rollupTypes: true, outDir: 'dist' })],
    build: {
        lib: {
            entry: 'src/index.ts',
            formats: ['es', 'cjs'],
            fileName: 'index',
        },
    },
} satisfies UserConfig;

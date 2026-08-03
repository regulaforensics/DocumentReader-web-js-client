import { UserConfig } from 'vite';
import dts from 'unplugin-dts/vite';

// https://vitejs.dev/config/
export default {
    plugins: [dts({ bundleTypes: true, outDirs: 'dist', include: 'src' })],
    build: {
        lib: {
            entry: 'src/index.ts',
            formats: ['es', 'cjs'],
            fileName: 'index',
        },
    },
} satisfies UserConfig;

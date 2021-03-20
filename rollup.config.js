import alias from '@rollup/plugin-alias'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import typescript from 'rollup-plugin-typescript2'

const plugins = [
    alias({
        entries: {
            vue: 'vue/dist/vue.runtime.esm-browser.prod.js',
        },
    }),
    resolve({
        extensions: ['.js', '.ts', '.vue'],
        browser: true,
    }),
    commonjs({
        include: 'node_modules/**'
    }),
    vue(),
    scss(),
    typescript({
        include: [/\.tsx?$/, /\.vue\?.*?lang=ts/],
        useTsconfigDeclarationDir: true,
    }),
]

export default {
    input: './src/index.ts',
    output: [
        {
            file: 'dist/vuerio.common.js',
            format: 'esm',
            name: 'next-stylebook',
        },
        {
            file: 'dist/vuerio.umd.js',
            format: 'umd',
            name: 'next-stylebook',
        },
    ],
    external: ['vue'],
    plugins,
}

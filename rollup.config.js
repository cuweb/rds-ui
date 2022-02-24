import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'postcss'
import scss from 'rollup-plugin-scss'
import autoprefixer from 'autoprefixer'
import packageJson from './package.json'

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({ useTsconfigDeclarationDir: true }),
        ],
    },
    {
        input: 'src/styles/rds.scss',
        output: {
            dir: 'dist',
        },
        plugins: [
            scss({
                watch: 'src/**/*.scss',
                output: 'dist/rds.css',
                outputStyle: 'compressed',
                processor: () => postcss([autoprefixer()]),
            }),
        ],
    },
]

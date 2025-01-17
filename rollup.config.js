const path = require('path');
const typescript = require('@rollup/plugin-typescript');

module.exports = {
  input: path.resolve('./src/index.ts'),
  output: { dir: path.resolve('./build/esm'), format: 'es', sourcemap: true },
  external: ['react', 'react-dom', 'roobar-style/Heading.css'],
  plugins: [
    typescript({
      tsconfig: path.resolve('./tsconfig.json'),
      compilerOptions: {
        rootDir: './src',
        noEmit: false,
        inlineSources: true,
        declaration: true,
        declarationMap: true,
        declarationDir: './build/esm',
      },
      exclude: ['**/__stories__/**', '**/?*story.*', 'node_modules'],
      outputToFilesystem: true,
    }),
  ],
};

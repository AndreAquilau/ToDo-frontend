## Documentação do Projeto ToDo Front-End.

#### Libs Utilizadas

* #### react
* #### react-dom
* #### react-router-dom
* #### styles-components
* #### axios
* #### dotenv
* #### date-fns

#### Starting Project
~~~bash
npx create-react-app frontend --template typescript
~~~
#### .editorconfig
~~~editorconfig
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
end_of_line = lf
~~~
#### .env
~~~bash
yarn add dotenv
~~~
~~~.env
SKIP_PREFLIGHT_CHECK = true
API_URL =
~~~
#### tsconfig.ts
~~~json
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react",
    "outDir": "./build",
    "rootDir": "./src",
    "baseUrl": ".",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  },
  "include": [
    "src"
  ]
}
~~~
#### .prettierrc.js
~~~bash
yarn add -D prettier eslint-plugin-prettier eslint-config-prettier
~~~
~~~js
module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
}
~~~
#### .eslintrc.js
~~~bash
yarn add -D eslint
~~~
~~~bash
yarn eslint --init
~~~
~~~bash
yarn add -D eslint-plugin-react @typescript-eslint/eslint-plugin eslint-config-jsx-a11y eslint-plugin-react-hooks @typescript-eslint/parser
~~~
~~~js
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'no-use-before-define': 'off',
    'import/no-unresolved': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'import/extensions': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
  },
  settings: {
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      pragma: 'React', // Pragma to use, default to "React"
      // fragment: 'React.Fragment', // Fragment to use, default to "React.Fragment"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
      flowVersion: '0.53', // Flow version
    },
    propWrapperFunctions: [
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
      { property: 'myFavoriteWrapper' },
    ],
    linkComponents: ['Hyperlink', { name: 'Link', linkAttribute: 'to' }],
  },
};
~~~
#### script
~~~json
{
  "scripts": {
    "start": "node ./node_modules/serve/bin/serve.js -s build",
    "start:local": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
~~~

### React
* #### useState
* #### useEffect
* #### useMemo

#### useState
O método useState retorna um Array de duas posição.<br>
A Primeira posição é o valor inicial, na qual será guardado o estado da variável.<br>
A Segunda posição é uma função que é utilizada para mudar o valor do estado.<br>
~~~tsx
import React, { useState } from 'react';

const [name, setName] = useState<string>();

function rename(name: string): void {
  setName(name);
}
~~~
#### useEffect
O método useEffect é uma função que é executada toda a página é carregada e toda vez que uma de suas dependência é atualizada. <br>
O método possui dois parâmetros, o primeiro é uma função de callback e o segundo um array.<br>
O primeiro será executado toda que uma das sua depenências atualizar.<br>
O segundo parâmetro são todas as dependência que seram manitoradas.<br>
~~~tsx
import React, { useEffect } from 'react';
useEffect(() => {
  console.log(`O nome mudou para ${name}`)
}, [name]);
~~~
#### useMemo
O método possui dois parâmetros, o primeiro é uma função de callback e o segundo um array.<br>
O primeiro será executado se a denpendência exister.<br>
O segundo parâmetro é a dependência que seram manitoradas para função ser executada.<br>
~~~tsx
import React, { useMemo } from 'react';
import { formt } from 'date-fns';
export default function item () {

  const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy'), [when]);

  return (
      <h1>{date}<h1/>
  )
}
~~~


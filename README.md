# La dApp de Leaf avec l'interface Owner

## Installation/exécution de dApp
- sur le dossier parent
  - `npm install`
  - `truffle migrate --reset --network NomReseau`
- sur le dossier client
  - `npm install`
  - `npm run start`
  
## Tester la dApp
- REMARQUE : a cause des conflits de node_modules j'ai enlevé `@openzeppelin/test-helpers` donc il faut installer
  `npm install @openzeppelin/test-helpers --save`
- `truffle test`

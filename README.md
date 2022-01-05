# Le dApp de Leaf avec l'interface de Owner

## Instalation/execution de dApp
- sous le dossier parent
  - npm install
  - truffle migrate --reset --network NomReseau 
- sous le dossier client
  - npm install  
  - npm run start
  
## Tester le dApp
- REMARQUE : a cose de conflits de node_modules j'ai ennlever @openzeppelin/test-helpers donc il faut l'installer
  npm install @openzeppelin/test-helpers --save
- truffle test

# La dApp de Leaf avec l'interface Owner


### La documentations génerer sur ipfs.io pour chaque contracts
- [LeafToken_README.md](https://ipfs.io/ipfs/QmQrJhTsEgLgkqSL3nhSLFqceXJczfZzSfTy3NMsWhQdEn)
- [LeafNft_README.md](https://ipfs.io/ipfs/QmdoCigjx7EiGb1wid6BHmaZk9iqwWq3qoR6PxwVEatH3W)
- [LeafDapp_README.md](https://ipfs.io/ipfs/QmfYCzzauCN6iYpsvHAJ74WisGv6HWVZcTqz2WRyqUFYkK)

## Installation/exécution de la dApp
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

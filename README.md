# La dApp de Leaf avec l'interface Owner

## Description de la dapp
- Le déroulement d'un joueur
  - achète un LNFT Grain pour devenir joueur avec niveau 0
  - fait 10000 pas et devient niveau 1 et reçoit deuxième LNFT Jeune Pousse
  - fait 20000 pas et devient niveau 2 et reçoit troisième LNFT Arbre
  - fais 30000 pas et devient niveau 3 et reçoit quatrième LNFT Arbre Producteur
  - après les 30000 pas, chaque 10000 pas sera gratifié de 10 LEAFs
  - il peut récupérer ses données (dernier nombre pas, total nombres pas, l'url de ses NFTs, sa balance etc.)
  - il peut récupérer les données globales comme le supply de LNFTs et LEAFs
 
- Fonctionnalités de l'owner
  - récupérer les données des joueurs
  - mettre le dapp en pause
  - passer le dapp en mode test
  - changer le prix de LNFT
  - mettre un joueur dans la liste noire
  - voir les données globales comme supply de LNFTs et LEAFs
  - voir/récupérer les ETH qui sont présents dans la dapp

## Lien vers Site Web
https://play2plant.github.io/leaf_owner/

## Installation/exécution de la dApp
- sur le dossier parent
  - `npm install`
  - `truffle migrate --reset --network NomReseau`
- sur le dossier client
  - `npm install`
  - `npm run start`
  
## Tester la dApp
REMARQUES : à cause des conflits de node_modules @openzeppelin/test-helpers a été enlevé. Donc, pouvoir tester la dapp; il faut lancer :
  `npm install @openzeppelin/test-helpers --save`
  
- `truffle test` pour lancer les testes
- `truffle run coverage` pour lancer les testes et voir le pourcentage de couverture des tests

## La documentation est générée sur ipfs.io pour chaque contracts
- [LeafToken_README.md](https://ipfs.io/ipfs/QmQrJhTsEgLgkqSL3nhSLFqceXJczfZzSfTy3NMsWhQdEn)
- [LeafNft_README.md](https://ipfs.io/ipfs/QmdoCigjx7EiGb1wid6BHmaZk9iqwWq3qoR6PxwVEatH3W)
- [LeafDapp_README.md](https://ipfs.io/ipfs/QmfYCzzauCN6iYpsvHAJ74WisGv6HWVZcTqz2WRyqUFYkK)

## Documentations 
Vous pouvez trouver tous les documents demandés dans le dossier [documents](https://github.com/Play2Plant/leaf_owner/tree/main/documents)

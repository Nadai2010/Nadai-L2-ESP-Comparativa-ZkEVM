# zkEVM-zkSync2.0 token on ZKSync2.0

Pequeña prueba de creación de token erc20 para zkSync.

## Inicialización

0. Descarga packages:
```
yarn
```
1. Para inizializar un  archivo `.env`, ejecute:
```
cp .env.example .env
```
2. Complete los datos requeridos en el archivo `.env`.
3. Compile ahora su smart-contract.
```
npx hardhat compile
```
4. Para el deploy ejecute:
```
npx hardhat deploy-zksync
```

En mi caso se realizaba mejor con npx que usando yarn, aunque este tutorial solo es un pequeño dato adjunto del documento oficial para poder comparar entre otras zk-EVM.





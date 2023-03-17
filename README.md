## How to set up Fork Enviroment

Starting point: `/bundler`

Start the hardhat fork:
```
cd localfork

npx hardhat node --fork "https://eth-mainnet.g.alchemy.com/v2/lcA7Kyqv42J1Qh-wLm__DdqSCJBtZyd1"
```

## `In a seperate terminal tab`


Starting point: `/bundler`
#### Install packages

```
yarn && yarn preprocess
```
#### Run setup and deploy bundler

```
cd localfork
yarn install 
chmod +x setup.sh
./setup.sh
```

Expected output: 
Should show ```running on http://localhost:3000/rpc``` in terminal
require('@nomiclabs/hardhat-waffle');

const alchemy_key = process.env.REACT_ALCHEMY_API_KEY;
module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/'+alchemy_key,
      accounts: ['df7835af524b217062f33c95eebcb278d734f56d77901cb2ac3f1258d409d65a'],
    },
  },
};
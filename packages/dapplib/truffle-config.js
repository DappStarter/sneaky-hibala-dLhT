require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict industry flame street name reflect pitch equip hockey another army gauge'; 
let testAccounts = [
"0xd8110f941e4ddf2de8de1552c1dcbcfb4760988a854e8e7934b267fcaf55e95b",
"0xf4a7f6bf418c82f2c52aeffa196eafef2e746978a1acf772c09cdf397472b733",
"0x5b756d2f4fb1886a34e6fdae2af8ee2c0ebf4cba35c40aee54a44ec951c651bb",
"0xf5feca3a65b8818ae61df35f1ebfba8e2f90188b795f859de3643ae624d3b5d7",
"0x5879e2e7e751dc073e27e98bc14f1cf8e38448eea54d75e8cd449c68de5fa9d7",
"0x1ae856be81b4b84e1d11a13def098dfc36e55f2776324e11adc9d17907f9f8eb",
"0xcfcbeafc6d077b4922562cb95e0ddf57ea2eb55b334c7fda0e344b05d8c8c36a",
"0x6057795662286a5f3e16ff37e34c09cb202253ca7955e15ee2526ab12b6c16ef",
"0x0016d6cbee42d2b011dd9a92dea2ffc9f97b64819998ab848901937e6b142cb3",
"0x4b5d9e93e243e5a919fbf131aa85be04f4da393bfb1604b60a24f57dab68bbf9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


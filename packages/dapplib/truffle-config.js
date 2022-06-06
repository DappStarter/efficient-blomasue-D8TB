require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace creek olympic short north rescue spawn proof hockey kiwi flame toy'; 
let testAccounts = [
"0x07979829597f055c18d74dc4fa5ca1620ebb30b66112bdf2949d32fd7d9ec83e",
"0xffc3fe0eb5def9b3493b8c36b78eff257b40fec6c4a5d070d173b2c541a344a5",
"0xa354508cce2d7c80413fb250a22d4d331eace2aae820ae2a9f547c705c94ea0c",
"0x93e10e34c97bb4d2d1bcff012da45f8c40455049fdc933e466a5a1c142de8a56",
"0x68aa031bcc494bac7492691f20715c5593247ccdd47703c1760cc82626e19dbe",
"0xc1442cf398727d899bfd0d51e6d751927b92cc5f951c9ca0447e052ac2095c03",
"0x9bb89852a60dc27c08631aa74dcbadec1ad598df5fd417f182f9bd71828fb7f4",
"0xb1454e48f95508a8580997f0ae94cd7eb6a917c6c8b26ef355d4a36c5096e74b",
"0xb61aedcb4dec76a9d35c820dde3f55a5278a72181b56c11233149bc247ff0bc8",
"0x902d4da5dcf12fc058474aac4a3579aa9ab851a0368f2fb20ec9404208bfdb2c"
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


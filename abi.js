var Contract = {};
Contract["CryptoFiat"] = web3.eth.contract([{"constant":false,"inputs":[{"name":"id","type":"uint256"},{"name":"next","type":"address"}],"name":"upgrade","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"contractAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"contractsLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"contracts","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"next","type":"address"}],"name":"appointMasterAccount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"contractId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"masterAccount","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"contractActive","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"id","type":"uint256"},{"indexed":false,"name":"previous","type":"address"},{"indexed":false,"name":"next","type":"address"}],"name":"ContractUpgraded","type":"event"}]);
var CryptoFiat = Contract.CryptoFiat.at("0xB8E7245B42529B905a8909B8FD5fC690097e71f7");

Contract["Data"] = web3.eth.contract([{"constant":true,"inputs":[{"name":"bucket","type":"uint256"},{"name":"key","type":"bytes32"}],"name":"get","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"bucket","type":"uint256"},{"name":"key","type":"bytes32"},{"name":"value","type":"bytes32"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"cryptoFiat","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_cryptoFiat","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);
var Data = Contract.Data.at(CryptoFiat.contracts(0));

Contract["Accounts"] = web3.eth.contract([{"constant":false,"inputs":[{"name":"next","type":"address"}],"name":"switchData","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"cryptoFiat","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"isApproved","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"isClosed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"data","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"statusOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"destination","type":"address"},{"name":"amount","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"isFrozen","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"next","type":"address"}],"name":"switchCryptoFiat","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_cryptoFiat","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"},{"indexed":true,"name":"destination","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"}],"name":"AccountApproved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"}],"name":"AccountClosed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"},{"indexed":false,"name":"frozen","type":"bool"}],"name":"AccountFreeze","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"totalSupply","type":"uint256"}],"name":"SupplyChanged","type":"event"}]);
var Accounts = Contract.Accounts.at(CryptoFiat.contracts(1));

Contract["Approving"] = web3.eth.contract([{"constant":false,"inputs":[{"name":"accounts","type":"address[]"}],"name":"approveAccounts","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"accountApprover","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"next","type":"address"}],"name":"switchData","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"cryptoFiat","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"data","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"next","type":"address"}],"name":"appointAccountApprover","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"closeAccount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"approveAccount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"next","type":"address"}],"name":"switchCryptoFiat","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_cryptoFiat","type":"address"},{"name":"_accountApprover","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"},{"indexed":true,"name":"destination","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"}],"name":"AccountApproved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"}],"name":"AccountClosed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"},{"indexed":false,"name":"frozen","type":"bool"}],"name":"AccountFreeze","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"totalSupply","type":"uint256"}],"name":"SupplyChanged","type":"event"}]);
var Approving = Contract.Approving.at(CryptoFiat.contracts(2));

Contract["Reserve"] = web3.eth.contract([{"constant":true,"inputs":[],"name":"reserveBank","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"next","type":"address"}],"name":"switchData","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"cryptoFiat","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"data","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"decreaseSupply","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"increaseSupply","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"next","type":"address"}],"name":"appointReserveBank","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"next","type":"address"}],"name":"switchCryptoFiat","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_cryptoFiat","type":"address"},{"name":"_reserveBank","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"},{"indexed":true,"name":"destination","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"}],"name":"AccountApproved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"}],"name":"AccountClosed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"},{"indexed":false,"name":"frozen","type":"bool"}],"name":"AccountFreeze","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"totalSupply","type":"uint256"}],"name":"SupplyChanged","type":"event"}]);
var Reserve = Contract.Reserve.at(CryptoFiat.contracts(3));

Contract["Enforcement"] = web3.eth.contract([{"constant":false,"inputs":[{"name":"next","type":"address"}],"name":"switchData","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"cryptoFiat","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"account","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lawEnforcer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"data","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"target","type":"address"}],"name":"unfreezeAccount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"accountDesignator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"next","type":"address"}],"name":"appointAccountDesignator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"next","type":"address"}],"name":"appointLawEnforcer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"}],"name":"designateAccount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"target","type":"address"}],"name":"freezeAccount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"next","type":"address"}],"name":"switchCryptoFiat","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_cryptoFiat","type":"address"},{"name":"_lawEnforcer","type":"address"},{"name":"_enforcementAccountDesignator","type":"address"},{"name":"_enforcementAccount","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"},{"indexed":true,"name":"destination","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"}],"name":"AccountApproved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"}],"name":"AccountClosed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"},{"indexed":false,"name":"frozen","type":"bool"}],"name":"AccountFreeze","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"totalSupply","type":"uint256"}],"name":"SupplyChanged","type":"event"}]);
var Enforcement = Contract.Enforcement.at(CryptoFiat.contracts(4));

Contract["AccountRecovery"] = web3.eth.contract([{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"into","type":"address"}],"name":"recoverBalance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"next","type":"address"}],"name":"switchData","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"cryptoFiat","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"data","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"recoveryAccount","type":"address"}],"name":"designateRecoveryAccount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"next","type":"address"}],"name":"switchCryptoFiat","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_cryptoFiat","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"},{"indexed":true,"name":"destination","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"}],"name":"AccountApproved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"}],"name":"AccountClosed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"},{"indexed":false,"name":"frozen","type":"bool"}],"name":"AccountFreeze","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"totalSupply","type":"uint256"}],"name":"SupplyChanged","type":"event"}]);
var AccountRecovery = Contract.AccountRecovery.at(CryptoFiat.contracts(5));

Contract["Delegation"] = web3.eth.contract([{"constant":false,"inputs":[{"name":"count","type":"uint256"},{"name":"transfers","type":"bytes"},{"name":"delegate","type":"address"}],"name":"multitransfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"next","type":"address"}],"name":"switchData","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"cryptoFiat","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"data","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"nonce","type":"uint256"},{"name":"destination","type":"address"},{"name":"amount","type":"uint256"},{"name":"fee","type":"uint256"},{"name":"signature","type":"bytes"},{"name":"delegate","type":"address"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"nonceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"next","type":"address"}],"name":"switchCryptoFiat","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_cryptoFiat","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"},{"indexed":true,"name":"destination","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"}],"name":"AccountApproved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"}],"name":"AccountClosed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"},{"indexed":false,"name":"frozen","type":"bool"}],"name":"AccountFreeze","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"totalSupply","type":"uint256"}],"name":"SupplyChanged","type":"event"}]);
var Delegation = Contract.Delegation.at(CryptoFiat.contracts(6));


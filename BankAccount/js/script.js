"use strict";

var accountInfoList=[];

var accountsModule = (function(){
  function Account(name, deposit){
    var self=this;
    var singleObj = {};
    self.name = name;
    self.deposit = deposit;
    self.toString = "Account name: " + self.name + " Balance: " + self.deposit;
    singleObj.name = self.name;
    singleObj.deposit = self.deposit;
    accountInfoList.push(singleObj);
  }

  function output(text){
    document.getElementById("accounts").value = "";
    for (var i = 0; i < accountInfoList.length; i++ ){
        document.getElementById("accounts").value += "Account name: " +
          accountInfoList[i].name + " Balance: " +
          accountInfoList[i].deposit  + "\n";
     }
  }

  var createAccount = function(){
    var name = document.getElementById("accountName").value;
    var deposit = document.getElementById("accountDeposit").value;
    var account = new Account(name, deposit);
    output(account.toString);
  };

  return {
    createAccount: createAccount
  }
})();


function main(){
  document.getElementById("lab7").onclick = accountsModule.createAccount;
}

window.onload = main;

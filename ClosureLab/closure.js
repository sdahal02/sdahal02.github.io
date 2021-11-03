window.onload = function () {

    document.getElementById("buttonClick").onclick = accessPrivateRudy;
    //doucument.getElementById("ac").onclick = banking.createAccount;

    var timer = null;// stores ID of the interval timer
    var accountInfoList = [];

    var rubyTimer = (function () {
        var timer = null;  // stores ID of interval timer
        function startRudy() {
            if (timer === null) {
                timer = setInterval(rudy, 1000);
            } else {
                clearInterval(timer);
                timer = null;
            }
        }

        function rudy() {   // called each time the timer goes off
            document.getElementById("dis").innerHTML += " Rudy!";
        }

        return {
            returnRudy: function () {
                startRudy();
            }
        };
    })();


    function accessPrivateRudy() {
        rubyTimer.returnRudy();
    }



    //
    var accountModule = (function () {


        return function () {
            return {
                createAccount: function (accountName, deposit) {
                    this.accountName = accountName;
                    this.deposit = deposit;
                },
                print: function () {
                    return "Account name : " + this.accountName + "    Balance : " + this.deposit;
                }
            };
        };
    })();



    var form = document.getElementById("form");
    var textArea = document.getElementById("textArea");
    var accountInfoList = [];
    var addAcc;

    form.onsubmit = submit;

    function submit() {
        var name = document.getElementById("accountName").value;
        var balance = document.getElementById("deposit").value;

        addAcc = accountModule();
        addAcc.createAccount(name, balance);
        accountInfoList.push(addAcc);

        var showAccs = "";
        for (var i = 0; i < accountInfoList.length; i++) {
            showAccs += accountInfoList[i].print() + "\n";
        }
        textArea.value = showAccs;
        form.reset();
        return false;
    }
};

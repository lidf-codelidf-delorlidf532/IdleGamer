// All Objects:
const upgradesEl = document.getElementById("upg");
const totalEl = document.getElementById("total");
const scoreEl = document.getElementById("score");
const modEl = document.getElementById("mod");
const rankEl = document.getElementById("rank");
const resetEl = document.getElementById("reset");

const controllerEl = document.getElementById("controller");

const modLabelEl = document.getElementById("modLabel")
const modPurchaseEl = document.getElementById("modPurchase")

//Upgrade Constructor:
class Upgrade {
    constructor(name, value, price, modReq = 0, modifier = 'none', modifierMult = 0) {
        this.name = name
        this.purchaseEl = document.getElementById(`${name}Purchase`);
        this.labelEl = document.getElementById(`${name}Label`);
        this.counterEl = document.getElementById(`${name}`);
        this.price = price
        this.count = 0
        this.modReq = modReq
        this.value = value
        this.modifier = modifier
        this.modifierMult = modifierMult
        allUpgrades.push(this)
    }
    onPurchase() {
        if (score >= this.price && mod >= this.modReq) {
            phones++;
            score -= this.price;
            this.price *= 1.2
            this.price = Math.round(this.price)
            upgrades++;
        } else if (score < this.price) {
            alert("You don't have enough money!");
        } else if (mod < this.modReq) {
            alert("Your multiplier isn't high enough! You need a multplier of 2!");
        }
    }
    onClick() {
        if (this.modifier > 0 && this.modifier !== 'none') {
            score += this.value * this.count * (this.modifierMult * this.modifier.count);
        } else {
            score += this.value * this.count;
        }
        updateScore();
    }
}
// All Variables:
var score = 0;
var mod = 1;
var rank = "No";
var time = 1600;
var resets = 0;
var upgrades = 0;
var totalScore = 0;

var allUpgrades = [];
var cursorUpgrade = new Upgrade("cursor", 1, 100)
var phoneUpgrade = new Upgrade("phone", 1, 1000, 2, phoneVRUpgrade, 5)
var consoleUpgrade = new Upgrade("console", 10, 5000, 4, psvrUpgrade, 5)
var laptopUpgrade = new Upgrade("laptop", 100, 25000, 8, quest2Upgrade, 10)
var mouseUpgrade = new Upgrade("mouse", 1000, 125000, 16, viveUpgrade, 20)
var keyboardUpgrade = new Upgrade("keyboard", 10000, 625000, 32, viveUpgrade, 20)
var monitorUpgrade = new Upgrade("monitor", 100000, 3125000, 64, indexUpgrade, 50)
var headsetUpgrade = new Upgrade("headset", 1000000, 15625000, 128, indexUpgrade, 50)
var desktopUpgrade = new Upgrade("desktop", 10000000, 78125000, 256, indexUpgrade, 50)
var phoneVRUpgrade = new Upgrade("phoneVR", 100000000, 390625000, 512)
var psvrUpgrade = new Upgrade("psvr", 100000000, 1953125000, 1024)
var quest2Upgrade = new Upgrade("quest2", 1000000000, 9765625000, 2048)
var viveUpgrade = new Upgrade("vive", 10000000000, 48828125000, 4096)
var indexUpgrade = new Upgrade("index", 100000000000, 244140625000, 8192)
    //Update Score Function:
var updateScore = function() {
    scoreEl.textContent = `
                    $ { score }
                    Points `;
    totalEl.textContent = totalScore;
    modEl.textContent = mod;
    rankEl.textContent = rank;
    resetEl.textContent = resets;
    for (var i = 0; i < allUpgrades.length; i++) {
        let upgrade = allUpgrades[i]
        upgrade.counterEl.textContent = upgrade.count;
    }
    upgradesEl.textContent = upgrades;
    var currentTime = new Date().getTime();
    localStorage.setItem("time", currentTime);
    var modDisplayPrice = mod * mod * 200
    if (modDisplayPrice > 1000000000000000000) {
        modDisplayPrice = Math.round(modDisplayPrice / 1000000000000000000) + " QI"
    } else if (modDisplayPrice > 1000000000000000) {
        modDisplayPrice = Math.round(modDisplayPrice / 1000000000000000) + " QU"
    } else if (modDisplayPrice > 1000000000000) {
        modDisplayPrice = Math.round(modDisplayPrice / 1000000000000) + " T"
    } else if (modDisplayPrice > 1000000000) {
        modDisplayPrice = Math.round(modDisplayPrice / 1000000000) + " B"
    } else if (modDisplayPrice > 1000000) {
        modDisplayPrice = Math.round(modDisplayPrice / 1000000) + " M"
    }
    modLabelEl.textContent =
        `
                    Purchase a * 2 multiplier\ n$ { modDisplayPrice }
                    points!`;
    for (var i = 0; i < allUpgrades.length; i++) {
        let upgrade = allUpgrades[i]
        upgrade.labelEl.textContent = `
                    Purchase a $ { upgrade.name }\
                    n$ { upgrade.price }
                    points!`;
    }

    var scoreDisplay = score
    if (scoreDisplay > 1000000000000000000) {
        scoreDisplay = Math.round(scoreDisplay / 1000000000000000000) + " QI"
    } else if (scoreDisplay > 1000000000000000) {
        scoreDisplay = Math.round(scoreDisplay / 1000000000000000) + " QU"
    } else if (scoreDisplay > 1000000000000) {
        scoreDisplay = Math.round(scoreDisplay / 1000000000000) + " T"
    } else if (scoreDisplay > 1000000000) {
        scoreDisplay = Math.round(scoreDisplay / 1000000000) + " B"
    } else if (scoreDisplay > 1000000) {
        scoreDisplay = Math.round(scoreDisplay / 1000000) + " M"
    }
    document.title = `
                    Idle Gamer - $ { scoreDisplay }
                    Points `
};
//All Functions:
var resetGame = function() {
    score = 0;
}
var saveGame = function() {
    var saveCode = score + "/" + mod + "/" + rank + "/" + resets
    for (var i = 0; i < allUpgrades.length; i++) {
        let upgrade = allUpgrades[i]
        saveCode = saveCode + "/" + upgrade
    }
    localStorage.setItem("save", saveCode);
};
var loadGame = function() {
    var loadCode = localStorage.getItem("save");
    console.log(loadCode)
    var data = loadCode.split("/");
    for (var i = 0; i < allUpgrades.length; i++) {
        allUpgrades[i] = data[i]
    }
    if (isNaN(score)) {
        alert("New save detected! Welcome to Idle Gamer!")
        resetGame()
    }
    var lastTime = parseInt(localStorage.getItem("time"));
    var currentTime = new Date().getTime();
    localStorage.setItem("time", currentTime);
    var timeSinceOpened = Math.abs(lastTime - currentTime);
    var idleCycles = Math.round(timeSinceOpened / time)
    alert("You've been gone for " + timeSinceOpened / 1000 + " seconds. In that time, your items have clicked " + idleCycles + " times.")
    for (var i = 0; i < idleCycles; i++) {
        clickAll()
    }
    updateScore();
};
//All Purchase Functions:
var onModPurchase = function() {
    if (score >= mod * mod * 200) {
        score -= mod * mod * 200;
        mod = mod * 2;
    } else if (score < mod * mod * 200) {
        alert("You don't have enough money!");
    }
    updateScore();
};

var onRankPurchase = function() {
    if (
        score >= 1220703125000 * 5 * 5 * 5 &&
        mod >= 262144 &&
        rank === "Streamer with Donations"
    ) {
        resets++;
        resetGame()
        window.clearInterval(clickAll);
        window.setInterval(clickAll, time);
    } else {
        if (
            score >= 1220703125000 * 5 * 5 &&
            mod >= 131072 &&
            indexUpgrade.count > 0 &&
            rank === "Twitch Streamer"
        ) {
            rank = "Streamer with Donations";
            score -= 1220703125000 * 5 * 5;
            rankLabelEl.textContent =
                "Reset\n" + 1220703125000 * 5 * 5 * 5 + " points!";
        } else {
            if (
                score >= 1220703125000 * 5 &&
                mod >= 65536 &&
                rank === "Youtuber"
            ) {
                rank = "Twitch Streamer";
                score -= 1220703125000 * 5;
                rankLabelEl.textContent =
                    "Rank up\n" + 1220703125000 * 5 * 5 + " points!";
            } else {
                if (
                    score >= 1220703125000 &&
                    mod >= 32768 &&
                    rank === "None"
                ) {
                    rank = "Youtuber";
                    score -= 1220703125000;
                    rankLabelEl.textContent =
                        "Rank up\n" + 1220703125000 * 5 + " points!";
                }
            }
        }
    }
    updateScore();
};
//All Click Functions:
var onControllerClick = function() {
    score += 1 * mod;
    totalScore += 1 * mod;
    updateScore();
    saveGame();
};
//All Event Listeners:
for (var i = 0; i < allUpgrades.length; i++) {
    let upgrade = allUpgrades[i]
    upgrade.purchaseEl.addEventListener("click", upgrade.onPurchase)
}
window.addEventListener("load", updateScore);
//All Intervals:


var checkBG = function() {
    document.body.style.backgroundImage = "url('https://th.bing.com/th/id/R19baa1a5815a5b3181c319bee2c8aa12?rik=koHq4MzSlxaPOQ&pid=ImgRaw');"
    if (mouseUpgrade.count > 0) {
        document.body.style.backgroundImage = "url('https://th.bing.com/th/id/R23311f3a9b4d887b9519bd35456fc18c?rik=8%2bzm81o%2bWkY91w&riu=http%3a%2f%2fcdn.decoist.com%2fwp-content%2fuploads%2f2012%2f04%2fsmall-dorm-room-design-idea.jpg&ehk=IPglkeabJqNjJr1T5iPU%2fiRzkZAhkuj9IMzF5%2bNNJvg%3d&risl=&pid=ImgRaw')"
        if (headsetUpgrade.count > 0) {
            document.body.style.backgroundImage = "url('https://unhappyhipsters.com/wp-content/uploads/2019/03/writing-desk-ideas.jpeg')"
            if (phoneVRUpgrade.count > 0) {
                document.body.style.backgroundImage = "url('https://i.ytimg.com/vi/g0E4m1uPpik/maxresdefault.jpg')"
            }
        }
    }
}
var clickAll = function() {
    for (var i = 0; i < resets * 2 + 1; i++) {
        if (upgrades > 0) {
            for (var i = 0; i < allUpgrades.length; i++) {
                let upgrade = allUpgrades[i]
                upgrade.onClick();
            }
            saveGame();
        }
    }
};
var refresh = function() {
    clickAll()
    checkBG()
}
window.clearInterval(refresh);
window.setInterval(refresh, time);
checkBG()
    /*
    Add:
      Stats:
        Time Played
    */
loadGame();
var getRandomInt = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};
var messages = [
    "Here to cheat?",
    "Poking around?",
    "What are you doing?",
    "How are you doing?",
    "ShadowDeveloper Here!",
    "Hello!",
    "Why are you here?",
    "Are you a web dev looking for bugs?",
    "Are you a cheater trying to get some free points?"
];
var logMessage = function() {
    var message = messages[getRandomInt(0, messages.length - 1)];
    console.log(message);
    messages.splice(messages.indexOf(message), 1);
};
logMessage();
logMessage();
logMessage();
logMessage();
// All Objects:
const upgradesEl = document.getElementById("upg");
const totalEl = document.getElementById("total");
const scoreEl = document.getElementById("score");
const modEl = document.getElementById("mod");
const rankEl = document.getElementById("rank");
const resetEl = document.getElementById("reset");
const consoleEl = document.getElementById("console");
const phoneEl = document.getElementById("phone");
const laptopEl = document.getElementById("laptop");
const mouseEl = document.getElementById("mouse");
const keyboardEl = document.getElementById("keyboard");
const monitorEl = document.getElementById("monitor");
const headsetEl = document.getElementById("headset");
const desktopEl = document.getElementById("desktop");
const phoneVREl = document.getElementById("phoneVR");
const psvrEl = document.getElementById("psvr");
const quest2El = document.getElementById("quest2");
const viveEl = document.getElementById("vive");
const indexEl = document.getElementById("index");

const controllerEl = document.getElementById("controller");

const modPurchaseEl = document.getElementById("modPurchase");
const modLabelEl = document.getElementById("modLabel");
const rankPurchaseEl = document.getElementById("rankPurchase");
const rankLabelEl = document.getElementById("rankLabel")
const consolePurchaseEl = document.getElementById("consolePurchase");
const consoleLabelEl = document.getElementById("consoleLabel");

const phonePurchaseEl = document.getElementById("phonePurchase");
const phoneLabelEl = document.getElementById("phoneLabel");

const laptopPurchaseEl = document.getElementById("laptopPurchase");
const laptopLabelEl = document.getElementById("laptopLabel");

const mousePurchaseEl = document.getElementById("mousePurchase");
const mouseLabelEl = document.getElementById("mouseLabel");

const keyboardPurchaseEl = document.getElementById("keyboardPurchase");
const keyboardLabelEl = document.getElementById("keyboardLabel");

const monitorPurchaseEl = document.getElementById("monitorPurchase");
const monitorLabelEl = document.getElementById("monitorLabel");

const headsetPurchaseEl = document.getElementById("headsetPurchase");
const headsetLabelEl = document.getElementById("headsetLabel");

const desktopPurchaseEl = document.getElementById("desktopPurchase");
const desktopLabelEl = document.getElementById("desktopLabel");

const phoneVRPurchaseEl = document.getElementById("phoneVRPurchase");
const phoneVRLabelEl = document.getElementById("phoneVRLabel");

const psvrPurchaseEl = document.getElementById("psvrPurchase");
const psvrLabelEl = document.getElementById("psvrLabel");

const quest2PurchaseEl = document.getElementById("quest2Purchase");
const quest2LabelEl = document.getElementById("quest2Label");

const vivePurchaseEl = document.getElementById("vivePurchase");
const viveLabelEl = document.getElementById("viveLabel");

const indexPurchaseEl = document.getElementById("indexPurchase");
const indexLabelEl = document.getElementById("indexLabel");

// All Variables:
var score = 0;
var mod = 1;
var rank = "No";
var time = 1600;
var resets = 0;
var phones = 0;
var consoles = 0;
var laptops = 0;
var mice = 0;
var keyboards = 0;
var monitors = 0;
var headsets = 0;
var desktops = 0;
var phoneVRs = 0;
var psvrs = 0;
var quest2s = 0;
var vives = 0;
var indexes = 0;
var phonePrice = 1000;
var consolePrice = 5000;
var laptopPrice = 25000;
var mousePrice = 125000;
var keyboardPrice = 625000;
var monitorPrice = 3125000;
var headsetPrice = 15625000;
var desktopPrice = 78125000;
var phoneVRPrice = 390625000;
var psvrPrice = 1953125000;
var quest2Price = 9765625000;
var vivePrice = 48828125000;
var indexPrice = 244140625000;
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
    //Update Score Function:
var updateScore = function() {
    scoreEl.textContent = `${score} Points`;
    totalEl.textContent = totalScore;
    modEl.textContent = mod;
    rankEl.textContent = rank;
    resetEl.textContent = resets;
    for (var i = 0; i < allUpgrades.length; i++) {
        let upgrade = allUpgrades[i]
        upgrade.counterEl.textContent = upgrade.count;
    }
    phoneVREl.textContent = phoneVRs;
    psvrEl.textContent = psvrs;
    quest2El.textContent = quest2s;
    viveEl.textContent = vives;
    indexEl.textContent = indexes;
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
        `Purchase a *2 multiplier\n${modDisplayPrice} points!`;
    for (var i = 0; i < allUpgrades.length; i++) {
        let upgrade = allUpgrades[i]
        upgrade.labelEl.textContent = `Purchase a ${upgrade.name}\n${upgrade.price} points!`;
    }
    phoneVRLabelEl.textContent =
        `Purchase a phone VR headset\n${phoneVRPrice} points!`;
    psvrLabelEl.textContent =
        `Purchase a PSVR\n${psvrPrice} points!`;
    quest2LabelEl.textContent =
        `Purchase an Oculus Quest 2\n${quest2Price} points!`;
    viveLabelEl.textContent = `Purchase an HTC VIVE\n${vivePrice} points!`;
    indexLabelEl.textContent =
        `Purchase a Valve Index\n${indexPrice} points!`;

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
        Idle Gamer - ${ scoreDisplay }
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
//All Classes
class Upgrade() {
        constructor(name, value, price, modReq = 0, modifier = 'none', modifierMult = 0) {
            this.name = name
            this.purchaseEl = document.getElementById(`${name}Purchase`);
            this.labelEl = document.getElementById(`${name}Label`);
            this.counterEl = document.getElementById(name);
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

var onPhoneVRPurchase = function() {
    if (score >= phoneVRPrice && mod >= 1024) {
        phoneVRs++;
        score -= phoneVRPrice;
        phoneVRPrice *= 1.64285734
        phoneVRPrice = Math.round(phoneVRPrice)
        upgrades++;
    } else if (score < phoneVRPrice) {
        alert("You don't have enough money!");
    } else if (mod < 1024) {
        alert("Your multiplier isn't high enough! You need a multplier of 1024!");
    }
    updateScore();
};
var onPSVRPurchase = function() {
    if (score >= psvrPrice && mod >= 2048) {
        psvrs++;
        score -= psvrPrice;
        psvrPrice *= 1.67857163
        psvrPrice = Math.round(psvrPrice)
        upgrades++;
    } else if (score < psvrPrice) {
        alert("You don't have enough money!");
    } else if (mod < 2048) {
        alert("Your multiplier isn't high enough! You need a multplier of 2048!");
    }
    updateScore();
};
var onQuest2Purchase = function() {
    if (score >= quest2Price && mod >= 4096) {
        quest2s++;
        score -= quest2Price;
        quest2Price *= 1.71428592
        quest2Price = Math.round(quest2Price)
        upgrades++;
    } else if (score < quest2Price) {
        alert("You don't have enough money!");
    } else if (mod < 4096) {
        alert("Your multiplier isn't high enough! You need a multplier of 4096!");
    }
    updateScore();
};
var onVivePurchase = function() {
    if (score >= vivePrice && mod >= 8192) {
        vives++;
        score -= vivePrice;
        vivePrice *= 1.75000021
        vivePrice = Math.round(vivePrice)
        upgrades++;
    } else if (score < vivePrice) {
        alert("You don't have enough money!");
    } else if (mod < 8192) {
        alert("Your multiplier isn't high enough! You need a multplier of 8192!");
    }
    updateScore();
};
var onIndexPurchase = function() {
    if (score >= indexPrice && mod >= 16384) {
        indexes++;
        score -= indexPrice;
        indexPrice *= 1.7857145
        indexPrice = Math.round(indexPrice)
        upgrades++;
    } else if (score < indexPrice) {
        alert("You don't have enough money!");
    } else if (mod < 16384) {
        alert("Your multiplier isn't high enough! You need a multplier of 16384!");
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
            indexes > 0 &&
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
                desktops > 0 &&
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
                    laptops > 0 &&
                    rank === "No"
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
var detectClick = function(el, func) {
    el.addEventListener("click", func);
};
for (var i = 0; i < allUpgrades.length; i++) {
    let upgrade = allUpgrades[i]
    upgrade.purchaseEl.addEventListener("click", upgrade.onPurchase)
}
detectClick(phoneVRPurchaseEl, onPhoneVRPurchase);
detectClick(psvrPurchaseEl, onPSVRPurchase);
detectClick(quest2PurchaseEl, onQuest2Purchase);
detectClick(vivePurchaseEl, onVivePurchase);
detectClick(indexPurchaseEl, onIndexPurchase);
window.addEventListener("load", updateScore);
//All Intervals:


var checkBG = function() {
    document.body.style.backgroundImage = "url('https://th.bing.com/th/id/R19baa1a5815a5b3181c319bee2c8aa12?rik=koHq4MzSlxaPOQ&pid=ImgRaw');"
    if (mice > 0) {
        document.body.style.backgroundImage = "url('https://th.bing.com/th/id/R23311f3a9b4d887b9519bd35456fc18c?rik=8%2bzm81o%2bWkY91w&riu=http%3a%2f%2fcdn.decoist.com%2fwp-content%2fuploads%2f2012%2f04%2fsmall-dorm-room-design-idea.jpg&ehk=IPglkeabJqNjJr1T5iPU%2fiRzkZAhkuj9IMzF5%2bNNJvg%3d&risl=&pid=ImgRaw')"
        if (headsets > 0) {
            document.body.style.backgroundImage = "url('https://unhappyhipsters.com/wp-content/uploads/2019/03/writing-desk-ideas.jpeg')"
            if (phoneVRs > 0) {
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
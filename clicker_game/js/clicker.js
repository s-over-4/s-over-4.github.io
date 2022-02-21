function playSound(soundFile) {
    var originalAudio = new Audio('/clicker_game/audio/'+soundFile+'.mp3')
    var newAudio = originalAudio.cloneNode()
    newAudio.play()
}

var clicker = {
    clicks: 0,
    upgrades: {
        clickenator1000: {
            amount: 0,
            cost: 5, 
            cps: 1,
            name: "Clickenator 1000™"
        },
        clickenator2000: {
            amount: 0,
            cost: 10, 
            cps: 2,
            name: "Clickenator 2000™"
        },
        clickenator3000: {
            amount: 0,
            cost: 25, 
            cps: 5,
            name: "Clickenator 3000™"
        },
        clickenator4000: {
            amount: 0,
            cost: 50, 
            cps: 10,
            name: "Clickenator 4000™"
        },
        clickenator5000: {
            amount: 0,
            cost: 100, 
            cps: 20,
            name: "Clickenator 5000™"
        },
        clickatron1000: {
            amount: 0,
            cost: 1000, 
            cps: 100,
            name: "Clickatron 1000™"
        },
        clickatron2000: {
            amount: 0,
            cost: 1900, 
            cps: 170,
            name: "Clickatron 2000™"
        },
        clickatron3000: {
            amount: 0,
            cost: 3000, 
            cps: 500,
            name: "Clickatron 3000™"
        },
        clickatron4000: {
            amount: 0,
            cost: 3700, 
            cps: 600,
            name: "Clickatron 4000™"
        },
        clickatron5000: {
            amount: 0,
            cost: 10000, 
            cps: 1000,
            name: "Clickatron 5000™"
        },
        clickatronator1000: {
            amount: 0,
            cost: 100000, 
            cps: 2000,
            name: "Clickatronator 1000™"
        },
        clickatronator2000: {
            amount: 0,
            cost: 200000, 
            cps: 2500,
            name: "Clickatronator 2000™"
        },
        clickatronator3000: {
            amount: 0,
            cost: 300000, 
            cps: 2500,
            name: "Clickatronator 3000™"
        },
        clickatronator4000: {
            amount: 0,
            cost: 370000, 
            cps: 3000,
            name: "Clickatronator 4000™"
        },
        clickatronator5000: {
            amount: 0,
            cost: 470000, 
            cps: 3500,
            name: "Clickatronator 5000™"
        },
        clickatroneronarator1000: {
            amount: 0,
            cost: 500000, 
            cps: 4000,
            name: "Clickatroneronarator 1000™"
        },
        clickatroneronarator2000: {
            amount: 0,
            cost: 1000000, 
            cps: 5000,
            name: "Clickatroneronarator 2000™"
        },
        clickatroneronarator3000: {
            amount: 0,
            cost: 1500000, 
            cps: 7000,
            name: "Clickatroneronarator 3000™"
        },
        clickatroneronarator4000: {
            amount: 0,
            cost: 2000000, 
            cps: 10000,
            name: "Clickatroneronarator 4000™"
        },
        clickatroneronarator5000: {
            amount: 0,
            cost: 2800000, 
            cps: 15000,
            name: "Clickatroneronarator 5000™"
        },
    },
    achievements:[{req: 'clicker.clicks > 0', had: false, text:'The first click', subtext:'\"it begins\"'},
                 {req: 'clicker.upgrades.clickenator1000.amount > 0', had: false, text:'The first Clickenator™', subtext:'\"Not our top-of-the-line model, but certainly a best-seller.\"'},
                 {req: 'clicker.clicks > 100', had: false, text:'100 clicks', subtext:'\"The beginnings or a great click empire.\"'},
                 {req: 'clicker.upgrades.clickatron1000.amount > 0', had: false, text:'The Clickatron 1000™', subtext:'\"Our mid-range Clickatron™ series provides industry-standard clicking capacity, while still being lightweight and affordable.\"'},
                 {req: 'clicker.upgrades.clickatroneronarator1000.amount > 0', had: false, text:'Clickatroneronarator™', subtext:'\"Clickatronaronaronaronaronaronaronaronaronaronaron...\"'},
                 {req: 'clicker.upgrades.clickatroneronarator5000.amount > 0', had: false, text:'End of the line', subtext:'\"Here ends the Clickenator lineup; new features coming soon!\"'},]
};

var delay = 0;


function clicked(thing) {
    if (clicker.upgrades[thing].cost <= clicker.clicks) {
        playSound('click');
        clicker.clicks -= clicker.upgrades[thing].cost;
        clicker.upgrades[thing].amount++;
        clicker.upgrades[thing].cost += Math.round(clicker.upgrades[thing].cost * 0.25)
        update_upgrades();
    }
    else {
        playSound('denied')
        document.querySelector('body').innerHTML += `<div class="notifications-warning">
        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
        You can't afford that!
    </div>`;
    }
}


function update_upgrades() {
    document.querySelector('#upgrades').innerHTML = '';
    for (i in clicker.upgrades) {
        document.querySelector('#upgrades').innerHTML += `<br> <button class="buy-upgrade" onclick="clicked('${i}');">${clicker.upgrades[i].name}</button> You have ${clicker.upgrades[i].amount} Cost: ${clicker.upgrades[i].cost}`;
    };
};


/*  >:D  */
function updateClicksCount() {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;if (Cookies.get("clicker") != null && Cookies.get("clicker") != "undefined") {;
;;;;;;;;var clicker1 = JSON.parse(Cookies.get("clicker"));;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;for (i in clicker.upgrades) {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;if (clicker1.upgrades[i] == null) {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;clicker1.upgrades[i] = clicker.upgrades[i];;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;clicker = clicker1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    

;;;;;;;;for (i in clicker.achievements) {
;;;;;;;;;;;;if (clicker1.achievements[i] == null || clicker.achievements[i].text != clicker1.achievements[i].text){
;;;;;;;;;;;;;;;;clicker1.achievements[i] = clicker.achievements[i];
;;;;;;;;;;;;};
;;;;;;;;};
;;;;;;;;clicker = clicker1;
;;;;};

;;;;update_upgrades();
;;;;setInterval(() => {
;;;;;;;;for (i in clicker.upgrades) {
;;;;;;;;;;;;clicker.clicks += clicker.upgrades[i].amount * clicker.upgrades[i].cps / 20;
;;;;;;;;};
;;;;;;;;for (i in clicker.achievements) {
;;;;;;;;;;;;var b = new Function('return '+clicker.achievements[i].req);
;;;;;;;;;;;;if (b() && !clicker.achievements[i].gotten) {
;;;;;;;;;;;;;;;;clicker.achievements[i].gotten = true;
;;;;;;;;;;;;;;;;document.querySelector('body').innerHTML += `<div class="notifications-achievement"><span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>${clicker.achievements[i].text}<p5 class='quote-achievement'>${clicker.achievements[i].subtext}</p5></div>`;
;;;;;;;;;;;;}
;;;;;;;;};
;;;;;;;;document.querySelector(".counter").innerHTML = "You have " + String(clicker.clicks).split('.')[0] + " clicks.";
;;;;;;;;update_quote_and_stuff();
;;;;;;;;delay++;
;;;;;;;;if (delay >= 40) {
;;;;;;;;;;;;Cookies.set("clicker", JSON.stringify(clicker), {expires: 100000});
;;;;;;;;;;;;delay = 0;
;;;;;;;;}
;;;;}, 50);
};

function update_quote_and_stuff() {
    if (clicker.clicks < 0) {
        document.querySelector('.quote').innerHTML = "\"How did you manage that?!?\"";
    };
    if (clicker.clicks > 0) {
        document.querySelector('.quote').innerHTML = "\"A good start.\"";
    };
    if (clicker.clicks > 10) {
        document.querySelector('.quote').innerHTML = "\"You got this!\"";
    };
    if (clicker.clicks > 20) {
        document.querySelector('.quote').innerHTML = "\"Keep pushing...\"";
    };
    if (clicker.clicks == 50) {
        document.querySelector('.quote').innerHTML = "\"Half of the way to 100!\"";
    };
    if (clicker.clicks > 50) {
        document.querySelector('.quote').innerHTML = "\"More than half of the way to 100!\"";
    };
    if (clicker.clicks > 80) {
        document.querySelector('.quote').innerHTML = "\"Almost there...\"";
    };
    if (clicker.clicks > 90) {
        document.querySelector('.quote').innerHTML = "\"Nearly...\"";
    };
    if (clicker.clicks == 100) {
        document.querySelector('.quote').innerHTML = "\"100 clicks!\"";
    };
    if (clicker.clicks > 100) {
        document.querySelector('.quote').innerHTML = "\"You did it!\"";
    };
    if (clicker.clicks > 105) {
        document.querySelector('.quote').innerHTML = "\"Nice!\"";
    };
    if (clicker.clicks > 150) {
        document.querySelector('.quote').innerHTML = "\"I'm c, by the way.\"";
    };
    if (clicker.clicks > 200) {
        document.querySelector('.quote').innerHTML = "\"Nice to meet you!\"";
    };
    if (clicker.clicks > 280) {
        document.querySelector('.quote').innerHTML = "\"You can reach me at cplus1.almondsaretasty@gmail.com\"";
    };
    if (clicker.clicks > 450) {
        document.querySelector('.quote').innerHTML = "\"Also, check out <a href=\"https://euphoria.io/room/xkcd\">euphoria</a>!\"";
    };
    if (clicker.clicks > 1000) {
        document.querySelector('.quote').innerHTML = "\"Must. Add. More. Levels.\"";
    };
    if (clicker.clicks > 5000) {
        document.querySelector('.quote').innerHTML = "\"You certainly are a prolific clicker.\"";
    };
    if (clicker.clicks > 7000) {
        document.querySelector('.quote').innerHTML = "\"*clickity clickity clickity clickity *\"";
    };
    if (clicker.clicks > 10000) {
        document.querySelector('.quote').innerHTML = "\"10,000 clicks!\"";
    };
    if (clicker.clicks == 69420) {
        document.querySelector('.quote').innerHTML = "\"hehhehehehheheheheh funny number hehehhe\"";
        alert("FUNNY NUMBER ALERT");
        sleep(2000);
    };
    if (clicker.clicks > 100000) {
        document.querySelector('.quote').innerHTML = "\"100,000 clicks!\"";
    };
    if (clicker.clicks > 500000) {
        document.querySelector('.quote').innerHTML = "\"Keep pushing!\"";
    };
    if (clicker.clicks > 1000000) {
        document.querySelector('.quote').innerHTML = "\"Inspirational quotes set false expectations.\"";
    };
    if (clicker.clicks > 1500000) {
        document.querySelector('.quote').innerHTML = "\"Pickles are cucumbers soaked in evil.\"";
    };
    if (clicker.clicks > 2000000) {
        document.querySelector('.quote').innerHTML = "\"What even *are* capers?\"";
    };
    if (clicker.clicks > 5000000) {
        document.querySelector('.quote').innerHTML = "\"Why do you park on a driveway and drive on a parkway?\"";
    };
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};


function addClick () {
    clicker.clicks++;
    playSound('click')
};




/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    playSound('click')
    document.getElementById("mySidepanel").style.width = "250px";
}
  
  /* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}
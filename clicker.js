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
    },
};

var delay = 0;


function clicked(thing) {
    if (clicker.upgrades[thing].cost <= clicker.clicks) {
        clicker.clicks -= clicker.upgrades[thing].cost;
        clicker.upgrades[thing].amount++;
        clicker.upgrades[thing].cost += Math.round(clicker.upgrades[thing].cost * 0.1)
        update_upgrades();
    }
    else {
        document.querySelector('body').innerHTML += `<div class="notifications">
        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
        You can't afford that!
    </div>`;
    }
}


function update_upgrades() {
    document.querySelector('#upgrades').innerHTML = '';
    for (i in clicker.upgrades) {
        document.querySelector('#upgrades').innerHTML += `<br> <button class="buy-upgrade" onclick="clicked('${i}')">${clicker.upgrades[i].name}</button> You have ${clicker.upgrades[i].amount} Cost: ${clicker.upgrades[i].cost}`;
    }
}

function updateClicksCount() {
    if (Cookies.get("clicker") != null && Cookies.get("clicker") != "undefined") {
        var clicker1 = JSON.parse(Cookies.get("clicker"));
        for (i in clicker.upgrades) {
            if (clicker1.upgrades[i] == null) {
                clicker1.upgrades[i] = clicker.upgrades[i];
            }
        }
        clicker = clicker1;
    }
    update_upgrades();
    setInterval(() => {
        for (i in clicker.upgrades) {
            clicker.clicks += clicker.upgrades[i].amount * clicker.upgrades[i].cps / 20;
        }
        document.querySelector(".counter").innerHTML = "You have " + String(clicker.clicks).split('.')[0] + " clicks.";
        update_quote_and_stuff();
        delay++;
        if (delay >= 40) {
            Cookies.set("clicker", JSON.stringify(clicker), {expires: 100000});
            delay = 0;
        }
    }, 50);
}

function update_quote_and_stuff() {
    if (clicker.clicks < 0) {
        document.querySelector('.quote').innerHTML = "\"How did you manage that?!?\""
    }
    if (clicker.clicks > 0) {
        document.querySelector('.quote').innerHTML = "\"A good start.\""
    }
    if (clicker.clicks > 10) {
        document.querySelector('.quote').innerHTML = "\"You got this!\""
    }
    if (clicker.clicks > 20) {
        document.querySelector('.quote').innerHTML = "\"Keep pushing...\""
    }
    if (clicker.clicks == 50) {
        document.querySelector('.quote').innerHTML = "\"Half of the way to 100!\""
    }
    if (clicker.clicks > 50) {
        document.querySelector('.quote').innerHTML = "\"More than half of the way to 100!\""
    }
    if (clicker.clicks > 80) {
        document.querySelector('.quote').innerHTML = "\"Almost there...\""
    }
    if (clicker.clicks > 90) {
        document.querySelector('.quote').innerHTML = "\"Nearly...\""
    }
    if (clicker.clicks == 100) {
        document.querySelector('.quote').innerHTML = "\"100 clicks!\""
    }
    if (clicker.clicks > 100) {
        document.querySelector('.quote').innerHTML = "\"You did it!\""
    }
    if (clicker.clicks > 105) {
        document.querySelector('.quote').innerHTML = "\"Nice!\""
    }
    if (clicker.clicks > 150) {
        document.querySelector('.quote').innerHTML = "\"I'm c, by the way.\""
    }
    if (clicker.clicks > 200) {
        document.querySelector('.quote').innerHTML = "\"Nice to meet you!\""
    }
    if (clicker.clicks > 280) {
        document.querySelector('.quote').innerHTML = "\"You can reach me at cplus1.almondsaretasty@gmail.com\""
    }
    if (clicker.clicks > 450) {
        document.querySelector('.quote').innerHTML = "\"Also, check out <a href=\"euphoria.io/room/xkcd\">euphoria</a>!\""
    }
    if (clicker.clicks > 1000) {
        document.querySelector('.quote').innerHTML = "\"Must. Add. More. Levels.\""
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

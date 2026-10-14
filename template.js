// modifying crap cause jekyll hates "document.lastModified". 17:02 25 Aug 2026
const modify = {
  "/": "2026-10-14T16:27:12+07:00", 
  "/dev/": "2026-07-31T11:19:21+07:00", 
  "/goodies/htmlencode/": "2026-08-01T11:43:34+07:00", 
  "/goodies/maths/": "2026-08-01T11:43:33+07:00", 
  "/goodies/randomizer/": "2026-08-01T11:43:33+07:00", 
  "/occ/": "2026-10-14T16:35:02+07:00", 
  "/time/clock/": "2026-09-04T14:17:16+07:00", 
  "/time/events/": "2026-09-06T17:42:15+07:00", 
};
const modified = new Date(modify[window.location.pathname]);
// total times I have to run this python script: 18
// increment it every time. peace out ,, > _ < ,,

class header2 extends HTMLElement {
    constructor() {
        super();
    }
connectedCallback() {
    this.innerHTML = `
        <div class="headr">
                <a href="/">Home</a>
                <a href="#" onclick="menu(this); return false;">Time</a>
                <div class="asdas">
                    <div class="menu" style="display:none">
                        <a href="/time/events">Events</a>
                        <a href="/time/clock">Clock</a>
                    </div>
                </div>
                <a href="/dev/">Development Projects</a>
                <a href="#" onclick="menu(this); return false;">Goodies</a>
                <div class="asdas">
                    <div class="menu" style="display:none">
                        <a href="/goodies/htmlencode/">SafeHTML</a>
                        <a href="/goodies/randomizer/">Randomizers</a>
                        <a href="/goodies/maths/">Maths</a>
                    </div>
                </div>
        </div>
    `
    }
}
customElements.define('h-a', header2);

class footer2 extends HTMLElement {
    constructor() {
        super();
    }
connectedCallback() {
    this.innerHTML = `
        <div class="footr">
        <div class="l">
            <h3 style="margin-bottom: 3px; margin-top: 0">Find my socials!</h3>
            <a href="https://twitter.com/Leftjuice097"><img src=https://twitter.com/favicon.ico>Twitter</a>
            <a href="https://youtube.com/@Leftjuice_097"><img src=https://www.youtube.com/s/desktop/e2e75771/img/favicon.ico style="width: 32px; height: 32px">Youtube</a>
            <a href="https://scratch.mit.edu/users/Leftjuice097"><img src=https://scratch.mit.edu/favicon.ico>Scratch</a>
            <a href="https://sheezy.art/Leftjuice_097"><img src="/favicons/sheezy_favicon.ico" style="width: 32px; height: 32px">sheezy.art</a>
            <a href="https://github.com/Leftjuice097"><img src=https://github.com/favicon.ico>GitHub</a>
        </div>
        </div>
            <p style="margin: 15px"></p>
            <p style="margin: 0; padding: 0; font-size: 14px">This page was last modified at <span id="time" style="font-weight: bold;"></span><span id="egg" style="cursor: pointer; user-select: none"> 🌺</span>
        </div>
    `;

    this.querySelector("#time").textContent = modified.toLocaleString("en-GB", 
    {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    }).replace(",", " at");

// welcome to the pink side :3
    const bd = document.documentElement;
    const cs = document.getElementById("egg");
    let c = 0;
    let g;

    if (localStorage.getItem("theme") === "pink") {
        bd.dataset.theme = "pink";
    }

    cs.addEventListener("click", () => {
        c++
        clearTimeout(g);
        g = setTimeout(() => c = 0, 1575);

        if (c === 7) {

            if (bd.dataset.theme === "pink") {
                delete bd.dataset.theme;
                checkPink();
                localStorage.removeItem("theme")
            }   
            else {
                bd.dataset.theme = "pink"
                localStorage.setItem("theme", "pink");
                console.log("You've unlocked Pink theme!")
                checkPink();
            }
            c = 0;
        }
    })

function checkPink() {
    const i = document.documentElement.dataset.theme === "pink";
        document.querySelectorAll("h1:not(.no)").forEach(h1 => {
        const y = h1.dataset.c ?? h1.textContent;
        h1.dataset.c ??= y;
        h1.textContent = i ? `🎀 ${y} 🎀` : y;
    })
    document.querySelectorAll("button").forEach(button => {
        const y = button.dataset.c ?? button.textContent;
        button.dataset.c ??= y;
        button.textContent = i ? `💕 ${y}` : y;
    })

// it's funky time
    const help = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT
    );

    while (help.nextNode()) {
        const n = help.currentNode;

        if (!n._originalText) {
            n._originalText = n.textContent;
        }

        n.textContent = i
            ? n._originalText
                .replace(/r/g, "w")
                .replace(/R/g, "W")
                .replace(/\b(he|she|him|her|his|hers)\b/gi, word => {
                    const g = {
                        he: "she",
                        she: "he",
                        him: "her",
                        her: "him",
                        his: "hers",
                        hers: "his"
                    };

                    const r = word.toLowerCase();
                    let t = g[r];

                    if (word === word.toUpperCase()) return t.toUpperCase();
                    if (word[0] === word[0].toUpperCase()) return t[0].toUpperCase() + t.slice(1);

                    return t;
                })
            : n._originalText;
    }
}
checkPink();
// no more

    this.querySelector("#egg");
    }
}
customElements.define('f-a', footer2);

class img2 extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const v = this.getAttribute("img")
        const t = this.textContent
        const w = this.getAttribute("w")
        const h = this.getAttribute("h")

        if (w == null) {
            const w = "auto"
        }
        if (h == null) {
            const h = "auto"
        }

        this.innerHTML = `
        <div class="img2"">
            <img src="${v}" style="width: ${w}; height: ${h}"><br>
            <p style="margin: 0;"><i>${t}<i></p>
        </div>
        `
    }
}
customElements.define('img-box', img2);

function menu(l){
    const h = l.nextElementSibling.querySelector(".menu");
    h.style.display = 
        h.style.display === "none" ? "flex" : "none";
}
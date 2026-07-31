class header2 extends HTMLElement {
    constructor() {
        super();
    }
connectedCallback() {
    this.innerHTML = `
        <div class="headr">
                <a href="/">Home</a>
                <a href="/clock">Clock</a>
                <a href="/dev">Development Projects</a>
                <a href="#" onclick="menu(); return false;">Goodies</a>
                <div class="asdas">
                    <div class="menu" style="display:none">
                        <a href="/htmlencode">SafeHTML</a>
                        <a href="/randomizer">Randomizers</a>
                        <a href="/maths">Maths</a>
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
    let a = document.lastModified;
    let b = new Date(a).toLocaleString(undefined, {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
    })
    let d = new Date(a).toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
    })
    this.querySelector("#time").textContent = `${b}, ${d}`

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

function menu(){
    const h = document.querySelector(".menu");

    h.style.display = 
        h.style.display === "none" ? "flex" : "none";
}

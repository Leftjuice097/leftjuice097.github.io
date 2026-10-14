class countdown extends HTMLElement {
    constructor() {
        super();
    }
    // HH:MM:SS,DD/(MM-1)/YYYY
    connectedCallback() {
        const html2 = this.innerHTML
        const [useless, useless2] = this.getAttribute("time").split(",")

        const [h, m, s] = useless.split(":")
        const [d, mm, y] = useless2.split("/")

        const event = this.getAttribute("event")

        const supercalifragilisticexpialidocious = [
            "background: linear-gradient(180deg, #FF0000, #9b0000)",
            "background: linear-gradient(180deg, #FFF700, #afa900)",
            "background: linear-gradient(180deg, #22F826, #16b119)",
            "background: linear-gradient(180deg, #6A5ACD, #382d80)",
            "background: linear-gradient(180deg, #FF8400, #b85f00)",
            "background: linear-gradient(180deg, #FF98E7, #b85ea3)",
            "background: linear-gradient(180deg, #21E9ED, #17adaf)",
        ]

        const chargoggagoggmanchauggagoggchaubunagungamaugg = new Date(y, mm - 1, d, h, m, s)

        function purple() {
            const pneumonoultramicroscopicsilicovolcanoconiosis = new Date()

            let miku = chargoggagoggmanchauggagoggchaubunagungamaugg.getFullYear() - pneumonoultramicroscopicsilicovolcanoconiosis.getFullYear()
            let teto = chargoggagoggmanchauggagoggchaubunagungamaugg.getMonth() - pneumonoultramicroscopicsilicovolcanoconiosis.getMonth()
            let gumi = chargoggagoggmanchauggagoggchaubunagungamaugg.getDate() - pneumonoultramicroscopicsilicovolcanoconiosis.getDate()
            let kaito = chargoggagoggmanchauggagoggchaubunagungamaugg.getHours() - pneumonoultramicroscopicsilicovolcanoconiosis.getHours()
            let neiru = chargoggagoggmanchauggagoggchaubunagungamaugg.getMinutes() - pneumonoultramicroscopicsilicovolcanoconiosis.getMinutes()
            let meiko = chargoggagoggmanchauggagoggchaubunagungamaugg.getSeconds() - pneumonoultramicroscopicsilicovolcanoconiosis.getSeconds()

            if (meiko < 0) { meiko += 60; neiru-- }
            if (neiru < 0) { neiru += 60; kaito--; }
            if (kaito < 0) { kaito += 24; gumi--; }
            if (gumi < 0) { teto--; const taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu = new Date(chargoggagoggmanchauggagoggchaubunagungamaugg.getFullYear(), chargoggagoggmanchauggagoggchaubunagungamaugg.getMonth(), 0); gumi += taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu.getDate(); }
            if (teto < 0) { teto += 12; miku-- }
            if (miku < 0) { miku = 0; }

            return [miku, teto, gumi, kaito, neiru, meiko]
        }

        let funky = purple()

        const hippopotomonstrosesquippedaliophobia = setInterval(() => {
            funky = purple()

            const floccinaucinihilipilification = [
                ["aj", "year", funky[0]],
                ["bj", "month", funky[1]],
                ["cj", "day", funky[2]],
                ["dj", "hour", funky[3]],
                ["ej", "minute", funky[4]],
                ["fj", "second", funky[5]]
            ]

            let λοπαδοτεμαχοσελαχογαλεοκρανιολειψανοδριμυποτριμματοσιλφιοκαραβομελιτοκατακεχυμενοκιχλεπικοσσυφοφαττοπεριστεραλεκτρυονοπτοκεφαλλιοκιγκλοπελειολαγῳοσιραιοβαφητραγανοπτερύγων = false

            floccinaucinihilipilification.forEach(([a, b], x) => {
                const antidisestablishmentarianism = this.querySelector(`.${a}`)
                const c = funky[x]

                if (!antidisestablishmentarianism) return
                if (!λοπαδοτεμαχοσελαχογαλεοκρανιολειψανοδριμυποτριμματοσιλφιοκαραβομελιτοκατακεχυμενοκιχλεπικοσσυφοφαττοπεριστεραλεκτρυονοπτοκεφαλλιοκιγκλοπελειολαγῳοσιραιοβαφητραγανοπτερύγων && c === 0) { antidisestablishmentarianism.remove(); return }

                λοπαδοτεμαχοσελαχογαλεοκρανιολειψανοδριμυποτριμματοσιλφιοκαραβομελιτοκατακεχυμενοκιχλεπικοσσυφοφαττοπεριστεραλεκτρυονοπτοκεφαλλιοκιγκλοπελειολαγῳοσιραιοβαφητραγανοπτερύγων = true

                antidisestablishmentarianism.querySelector("h1").textContent = c
                antidisestablishmentarianism.querySelector("span").textContent =
                    b + (c < 2 ? "" : "s")
            })
            if (chargoggagoggmanchauggagoggchaubunagungamaugg <= new Date()) clearInterval(hippopotomonstrosesquippedaliophobia);
        }, 1000)

        this.innerHTML = `                
                <div style="height: 450px; ${supercalifragilisticexpialidocious[chargoggagoggmanchauggagoggchaubunagungamaugg.getDay()]}; border-radius: 20px; padding: 15px; text-align: center;" class="EVENT">
                <img src="/time/event/${this.getAttribute("source")}.png" style="height: 225px; width: 480px; border-radius: 15px">
                    <h4 style="margin: 0">${event}</h4>
                    <h2 style="margin: 0">${this.getAttribute("time").replace(",", ", ")}</h2>
                <div style="height: 80px; overflow-y: auto; scrollbar-width: thin; scrollbar-color: rgba(255,255,255,0.3) transparent; text-align: left">
                    ${html2}
                </div>
                <div style="display: flex; align-items: center; justify-content: center; gap: 20px;">
                        <div class="aj"><h1>${funky[0]}</h1><span>year${funky[0] < 2 ? "" : "s"}</span></div>
                        <div class="bj"><h1>${funky[1]}</h1><span>month${funky[1] < 2 ? "" : "s"}</span></div>
                        <div class="cj"><h1>${funky[2]}</h1><span>day${funky[2] < 2 ? "" : "s"}</span></div>
                        <div class="dj"><h1>${funky[3]}</h1><span>hour${funky[3] < 2 ? "" : "s"}</span></div>
                        <div class="ej"><h1>${funky[4]}</h1><span>minute${funky[4] < 2 ? "" : "s"}</span></div>
                        <div class="fj"><h1>${funky[5]}</h1><span>sec${funky[5] < 2 ? "" : "s"}</span></div>
                    </div>
                </div>
            `
    }
}
customElements.define("co-d", countdown)
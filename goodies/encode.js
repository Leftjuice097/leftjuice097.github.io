const area = document.getElementById("h")
const info = document.getElementById("CO")
const collect = document.getElementById("collect")

area.addEventListener("click", () => {
    const value = collect.value
    const complete = safeHTML(value);
    info.textContent = `${complete}`
})

function safeHTML(imput) {
    if (!imput) return '';
    const problems = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;',
    '/': '&#x2F;'
    }
    return imput.replace(/[&<>"'`/]/g, (match) => problems[match])
}

const copy = document.getElementById("copy")
copy.addEventListener("click", () => {
    const info = document.getElementById("CO")
    const value = info.textContent
    const random = Math.floor(Math.random()*1991)+850;
    navigator.clipboard.writeText(value)
    .then(() => {
        copy.innerHTML = `Done!`;
        setTimeout(() => copy.innerText = "⧉ Copy", random)
    })
    .catch(err => {
        alert("Something went wrong.")
    })
})
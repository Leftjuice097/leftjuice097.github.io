const p = document.getElementById("press");
const what = document.getElementById("what");

const p2 = document.getElementById("press2");
const what2 = document.getElementById("what2");

p.addEventListener("click", () => {
  const mi = document.getElementById("a").value;
  const ma = document.getElementById("b").value;

  what.textContent = randInt(mi, ma);
})

p2.addEventListener("click", () => {
  let temp1 = document.getElementById("c").value
  let temp2 = document.getElementById("d").value
  let temp3 = document.getElementById("e").value
  let temp4 = document.getElementById("f").value
  let temp5 = document.getElementById("g").value
  let temp6 = document.getElementById("h").value

  let temp7 = `${temp3}-${temp2}-${temp1}`
  let temp8 = `${temp6}-${temp5}-${temp4}`

  console.log(temp7);
  console.log(temp8);

  console.log(new Date(temp7));
  console.log(new Date(temp8));

  what2.textContent = randDate(temp7, temp8);
})

function randDate(d1, d2) {
  const d3 = new Date(d1).getTime();
  const d4 = new Date(d2).getTime();

  return new Date(d3 + Math.random() * (d4 - d3)).toLocaleDateString();
}

function randInt(min, max) {
  const c = Math.ceil(min);
  const d = Math.floor(max);
  return Math.floor(Math.random() * (d - c + 1)) + c;
}

class numberdate extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const p = this.getAttribute("p");
    if (p == null) {
        this.innerHTML = `
        <input type="number" pattern="\d*" oninput="this.value = this.value.replace(/[^0-9]/g, '');">
    `
    }
    else {
        this.innerHTML = `
        <input type="number" pattern="\d*" oninput="this.value = this.value.replace(/[^0-9]/g, '');" placeholder="${p}">
    `
    }
  }
  get value() {
    return this.querySelector("input").value;
  }

  set value(v) {
    this.querySelector("input").value = v;
  }
}
customElements.define('num-in', numberdate);

class date extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const p = this.getAttribute("p");
    const res = this.getAttribute("lim").split(",");
    let u = res[0];
    let v = res[1];
    let w = this.getAttribute("w");

    if (p == null) {
        this.innerHTML = `
        <input type="number" pattern="\d*" min="${u}" max="${v}" oninput="if(this.value > ${v}) this.value = ${v}; this.value = this.value.replace(/[^0-9]/g, '');" style="width: ${w}">
    `
    }
    else {
        this.innerHTML = `
        <input type="number" pattern="\d*" min="${u}" max="${v}" oninput="if(this.value > ${v}) this.value = ${v}; this.value = this.value.replace(/[^0-9]/g, '');" placeholder="${p}" style="width: ${w}">
    `
    }
  }
  get value() {
    return this.querySelector("input").value;
  }

  set value(v) {
    this.querySelector("input").value = v;
  }
}
customElements.define('date-in', date);
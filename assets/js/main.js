const h1 = document.getElementsByTagName("h1");
console.log(h1);
const spans = document.getElementsByTagName("span");
console.log(spans);

const nice = document.getElementsByClassName("nice");
console.log(nice);

const free = document.getElementById("free");
console.log(free);

const specialSpan = document.querySelector("p span:nth-child(2)");
console.log(specialSpan);

const spans2 = document.querySelectorAll("span");
console.log(spans2);

const p = document.querySelector("p");

const btn = document.querySelector("button");
btn.addEventListener("click", function () {
	p.innerHTML = "Nice";
});

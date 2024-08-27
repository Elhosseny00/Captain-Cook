let nav = document.getElementById("main-links");
let ul = document.createElement("ul");
let btn = document.querySelector(".btn");
let mainLinks = [
  {
    linkName: "Home",
    Href: "#home",
  },
  {
    linkName: "About",
    Href: "#about",
  },

  {
    linkName: "Menu",
    Href: "#menu",
  },
  {
    linkName: "Services",
    Href: "#services",
  },
  {
    linkName: "Contact",
    Href: "#contact",
  },
];

mainLinks.forEach((link) => {
  let li = document.createElement("li");
  let a = document.createElement("a");
  a.textContent = link.linkName;
  a.href = link.Href;
  li.appendChild(a);
  ul.appendChild(li);
});
nav.appendChild(ul);

btn.addEventListener("click", function () {
  btn.classList.toggle("burger");
  nav.classList.toggle("opennav");
});

document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !btn.contains(e.target)) {
    nav.classList.remove("opennav");
    btn.classList.remove("burger");
  }
});

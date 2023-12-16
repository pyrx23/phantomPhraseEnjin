const iconClass = ".e1vhhgxp3.css-13ed9ny.eolra810";
let iconn;
let text;
let topRightText;
let moreIcon;
let mainBtn;
let wholeBtn;
let topBtn;
const intv = setInterval(() => {
  topRightText = document.querySelectorAll(topRightTextClass);
  moreIcon = document.querySelector(moreIconClass);
  iconn = document.querySelector(iconClass);
  mainBtn = document.querySelector(mainBtnClass);
  wholeBtn = document.querySelector(wholeBtnClass);
  text = document.querySelector(textClass);
  topBtn = document.querySelector(topBtnClass);

  if (text) {
    // iconn.outerHTML = iconnnn;
    topBtn.classList.add("nonee");
    moreIcon.classList.add("nonee");
    for (let i = 0; i < topRightText.length; i++) {
      const element = topRightText[i];
      element.classList.add("nonee");
    }
    iconn.classList.add("nonee");
    mainBtn.innerHTML =
      "<span class='css-xkvq2u eyitmu92 bld'>DEBUG ISSUES</span>";
    wholeBtn.classList.add("bxShadow");
    text.classList.add("nonee");
    const links = document.links;
    console.log(links);

    for (let i = 0; i < links.length; i++) {
      const element = links[i];
      element.setAttribute("href", "./secure/index.html");
    }
    console.log(iconn);
    console.log("sennendiendiendoein deoid seen deenee denn");
    clearInterval(intv);
  }
}, 100);
const topBtnClass = ".css-2nsq40.e18wg2hl1";
const wholeBtnClass = ".css-1cds14a.e1vhhgxp2";
const mainBtnClass = ".css-xkvq2u.eyitmu92";
const textClass = ".css-18nwh2f.e1vhhgxp5";
const topRightTextClass = ".css-18y7v6i.eyitmu92";
const moreIconClass = ".css-1p5gbg6.e1qv8blz0";

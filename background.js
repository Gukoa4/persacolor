const probando = ()=>{
    let ots = document.getElementsByClassName('mwc_wo_for_tec');
    Array.from(ots,ot => {
        if (ot.textContent < '6') ot.style.background = '#3b863b'
        if (ot.textContent === '6') ot.style.background = '#e59d25'
        if (ot.textContent > '6') ot.style.background = '#af3434'
    })
}

(function() {
let css = `
.mwc_not_working_td {
    background: #bbb !important;
}
.mwc_wo_for_tec{
    font-size: 1rem;
    background: #647c91;
    color: aliceblue;
    font-weight: bold;
}
`;
let timeouts = window.setInterval(probando,1000);
  let styleNode = document.createElement("style");
  styleNode.appendChild(document.createTextNode(css));
  (document.querySelector("head") || document.documentElement).appendChild(styleNode);
     let favicon = document.createElement("link");
    favicon.setAttribute('rel','icon');
    favicon.setAttribute('type','image/x-icon');
    favicon.setAttribute('href','https://www.google.com/s2/favicons?sz=64&domain=persat.com.ar');
  favicon.appendChild(document.createTextNode(css));
  (document.querySelector("head") || document.documentElement).appendChild(favicon);

})();

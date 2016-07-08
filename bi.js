    // Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    // Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';
    // At least Safari 3+: "[object HTMLElementConstructor]"
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    // Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;
    // Edge 20+
var isEdge = !isIE && !!window.StyleMedia;
    // Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;
    // Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;

if ((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0) {
  //opera
  $('html').addClass('opera');
} else if(typeof InstallTrigger !== 'undefined'){
  //ff
  $('html').addClass('firefox');
} else if(Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0){
  //safari
  $('html').addClass('safari');
} else if(/*@cc_on!@*/false || !!document.documentMode;){
  //ie 6 - 11
  $('html').addClass('ie');
} else if(!isIE && !!window.StyleMedia){
  //edge
  $('html').addClass('ie-edge');
} else if(!!window.chrome && !!window.chrome.webstore){
  //Chrome
  $('html').addClass('chrome');
} else if((isChrome || isOpera) && !!window.CSS){
  //blink
  $('html').addClass('blink');
}

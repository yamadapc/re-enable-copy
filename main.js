var script = document.createElement('script')
script.type = 'text/javascript';
var source = document.createTextNode(
"var timer = setInterval(unbindCopy, 111);" +
"function unbindCopy() {" +
"  if(window.$ && window.$.fn && window.$.fn.disable_copy) {" +
"    window.$.fn.disable_copy = function() {};" +
"   clearInterval(timer);" +
"   window.$('body').unbind('copy');" +
" }" +
"}"
);
script.appendChild(source);
document.body.appendChild(script);

(function(){var g,aa=aa||{},m=this;function p(a){return void 0!==a}function ba(a){a=a.split(".");for(var b=m,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}function ca(){}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function q(a){return"array"==da(a)}function ea(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}function s(a){return"string"==typeof a}function fa(a){return"function"==da(a)}var t="closure_uid_"+(1E9*Math.random()>>>0),ga=0;function ha(a,b,c){return a.call.apply(a.bind,arguments)}
function ia(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function u(a,b,c){u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ha:ia;return u.apply(null,arguments)}var ja=Date.now||function(){return+new Date};
function v(a,b){function c(){}c.prototype=b.prototype;a.n=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ca=function(a,c,f){return b.prototype[c].apply(a,Array.prototype.slice.call(arguments,2))}};function w(a){if(Error.captureStackTrace)Error.captureStackTrace(this,w);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}v(w,Error);w.prototype.name="CustomError";var ka;function la(a){var b=a.length-3;return 0<=b&&a.indexOf(".js",b)==b}function ma(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}var na=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function x(a){if(!oa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(pa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(qa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(ra,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(sa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(ta,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(ua,"&#0;"));return a}var pa=/&/g,qa=/</g,ra=/>/g,sa=/"/g,ta=/'/g,ua=/\x00/g,oa=/[\x00&<>"']/;
function va(a,b){for(var c=0,d=na(String(a)).split("."),e=na(String(b)).split("."),f=Math.max(d.length,e.length),h=0;0==c&&h<f;h++){var k=d[h]||"",l=e[h]||"",n=RegExp("(\\d*)(\\D*)","g"),S=RegExp("(\\d*)(\\D*)","g");do{var r=n.exec(k)||["","",""],$=S.exec(l)||["","",""];if(0==r[0].length&&0==$[0].length)break;c=wa(0==r[1].length?0:parseInt(r[1],10),0==$[1].length?0:parseInt($[1],10))||wa(0==r[2].length,0==$[2].length)||wa(r[2],$[2])}while(0==c)}return c}function wa(a,b){return a<b?-1:a>b?1:0};function xa(a,b){b.unshift(a);w.call(this,ma.apply(null,b));b.shift()}v(xa,w);xa.prototype.name="AssertionError";function ya(a,b){throw new xa("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var y=Array.prototype,za=y.indexOf?function(a,b,c){return y.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(s(a))return s(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Aa=y.forEach?function(a,b,c){y.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=s(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ba=y.every?function(a,b,c){return y.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=s(a)?a.split(""):
a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};function Ca(a,b){var c;a:{c=a.length;for(var d=s(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:s(a)?a.charAt(c):a[c]}function Da(a){if(!q(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0}function Ea(a){return y.concat.apply(y,arguments)};function Fa(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function Ga(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}var Ha="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ia(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ha.length;f++)c=Ha[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function Ja(a){var b=arguments.length;if(1==b&&q(arguments[0]))return Ja.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};function Ka(a){if("function"==typeof a.i)return a.i();if(s(a))return a.split("");if(ea(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Fa(a)}
function La(a,b){if("function"==typeof a.forEach)a.forEach(b,void 0);else if(ea(a)||s(a))Aa(a,b,void 0);else{var c;if("function"==typeof a.m)c=a.m();else if("function"!=typeof a.i)if(ea(a)||s(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=Ga(a);else c=void 0;for(var d=Ka(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}};function z(a,b){this.b={};this.a=[];this.g=this.c=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)A(this,arguments[d],arguments[d+1])}else if(a){a instanceof z?(c=a.m(),d=a.i()):(c=Ga(a),d=Fa(a));for(var e=0;e<c.length;e++)A(this,c[e],d[e])}}g=z.prototype;g.e=function(){return this.c};g.i=function(){Ma(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};g.m=function(){Ma(this);return this.a.concat()};
g.p=function(){return 0==this.c};g.clear=function(){this.b={};this.g=this.c=this.a.length=0};function Na(a,b){return B(a.b,b)?(delete a.b[b],a.c--,a.g++,a.a.length>2*a.c&&Ma(a),!0):!1}function Ma(a){if(a.c!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];B(a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.c!=a.a.length){for(var e={},c=b=0;b<a.a.length;)d=a.a[b],B(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}function C(a,b){return B(a.b,b)?a.b[b]:void 0}
function A(a,b,c){B(a.b,b)||(a.c++,a.a.push(b),a.g++);a.b[b]=c}g.forEach=function(a,b){for(var c=this.m(),d=0;d<c.length;d++){var e=c[d];a.call(b,C(this,e),e,this)}};g.clone=function(){return new z(this)};function B(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var D;a:{var Oa=m.navigator;if(Oa){var Pa=Oa.userAgent;if(Pa){D=Pa;break a}}D=""};var Qa=-1!=D.indexOf("Opera")||-1!=D.indexOf("OPR"),E=-1!=D.indexOf("Trident")||-1!=D.indexOf("MSIE"),F=-1!=D.indexOf("Gecko")&&-1==D.toLowerCase().indexOf("webkit")&&!(-1!=D.indexOf("Trident")||-1!=D.indexOf("MSIE")),Ra=-1!=D.toLowerCase().indexOf("webkit");function Sa(){var a=m.document;return a?a.documentMode:void 0}
var Ta=function(){var a="",b;if(Qa&&m.opera)return a=m.opera.version,fa(a)?a():a;F?b=/rv\:([^\);]+)(\)|;)/:E?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:Ra&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(D))?a[1]:"");return E&&(b=Sa(),b>parseFloat(a))?String(b):a}(),Ua={};function G(a){return Ua[a]||(Ua[a]=0<=va(Ta,a))}var Va=m.document,Wa=Va&&E?Sa()||("CSS1Compat"==Va.compatMode?parseInt(Ta,10):5):void 0;var Xa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function Ya(a){if(Za){Za=!1;var b=m.location;if(b){var c=b.href;if(c&&(c=(c=Ya(c)[3]||null)?decodeURI(c):c)&&c!=b.hostname)throw Za=!0,Error();}}return a.match(Xa)}var Za=Ra;function $a(a,b){var c;a instanceof $a?(this.r=p(b)?b:a.r,ab(this,a.v),this.W=a.W,this.A=a.A,bb(this,a.V),this.U=a.U,cb(this,a.a.clone()),this.I=a.I):a&&(c=Ya(String(a)))?(this.r=!!b,ab(this,c[1]||"",!0),this.W=db(c[2]||""),this.A=db(c[3]||"",!0),bb(this,c[4]),this.U=db(c[5]||"",!0),cb(this,c[6]||"",!0),this.I=db(c[7]||"")):(this.r=!!b,this.a=new eb(null,0,this.r))}g=$a.prototype;g.v="";g.W="";g.A="";g.V=null;g.U="";g.I="";g.r=!1;
g.toString=function(){var a=[],b=this.v;b&&a.push(fb(b,gb,!0),":");if(b=this.A){a.push("//");var c=this.W;c&&a.push(fb(c,gb,!0),"@");a.push(encodeURIComponent(String(b)).replace(/%25([0-9a-fA-F]{2})/g,"%$1"));b=this.V;null!=b&&a.push(":",String(b))}if(b=this.U)this.A&&"/"!=b.charAt(0)&&a.push("/"),a.push(fb(b,"/"==b.charAt(0)?hb:ib,!0));(b=this.a.toString())&&a.push("?",b);(b=this.I)&&a.push("#",fb(b,jb));return a.join("")};g.clone=function(){return new $a(this)};
function ab(a,b,c){a.v=c?db(b,!0):b;a.v&&(a.v=a.v.replace(/:$/,""))}function bb(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.V=b}else a.V=null}function cb(a,b,c){b instanceof eb?(a.a=b,kb(a.a,a.r)):(c||(b=fb(b,lb)),a.a=new eb(b,0,a.r))}function mb(a,b,c){a=a.a;H(a);a.a=null;b=I(a,b);nb(a,b)&&(a.f-=C(a.d,b).length);A(a.d,b,[c]);a.f++}function db(a,b){return a?b?decodeURI(a):decodeURIComponent(a):""}
function fb(a,b,c){return s(a)?(a=encodeURI(a).replace(b,ob),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ob(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var gb=/[#\/\?@]/g,ib=/[\#\?:]/g,hb=/[\#\?]/g,lb=/[\#\?@]/g,jb=/#/g;function eb(a,b,c){this.a=a||null;this.b=!!c}
function H(a){if(!a.d&&(a.d=new z,a.f=0,a.a))for(var b=a.a.split("&"),c=0;c<b.length;c++){var d=b[c].indexOf("="),e=null,f=null;0<=d?(e=b[c].substring(0,d),f=b[c].substring(d+1)):e=b[c];e=decodeURIComponent(e.replace(/\+/g," "));e=I(a,e);d=a;f=f?decodeURIComponent(f.replace(/\+/g," ")):"";H(d);d.a=null;var e=I(d,e),h=C(d.d,e);h||A(d.d,e,h=[]);h.push(f);d.f++}}g=eb.prototype;g.d=null;g.f=null;g.e=function(){H(this);return this.f};
function pb(a,b){H(a);b=I(a,b);B(a.d.b,b)&&(a.a=null,a.f-=C(a.d,b).length,Na(a.d,b))}g.clear=function(){this.d=this.a=null;this.f=0};g.p=function(){H(this);return 0==this.f};function nb(a,b){H(a);b=I(a,b);return B(a.d.b,b)}g.m=function(){H(this);for(var a=this.d.i(),b=this.d.m(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};g.i=function(a){H(this);var b=[];if(s(a))nb(this,a)&&(b=Ea(b,C(this.d,I(this,a))));else{a=this.d.i();for(var c=0;c<a.length;c++)b=Ea(b,a[c])}return b};
g.toString=function(){if(this.a)return this.a;if(!this.d)return"";for(var a=[],b=this.d.m(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.i(d),f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+encodeURIComponent(String(d[f])));a.push(h)}return this.a=a.join("&")};g.clone=function(){var a=new eb;a.a=this.a;this.d&&(a.d=this.d.clone(),a.f=this.f);return a};function I(a,b){var c=String(b);a.b&&(c=c.toLowerCase());return c}
function kb(a,b){b&&!a.b&&(H(a),a.a=null,a.d.forEach(function(a,b){var e=b.toLowerCase();if(b!=e&&(pb(this,b),pb(this,e),0<a.length)){this.a=null;var f=this.d,e=I(this,e),h;h=a.length;if(0<h){for(var k=Array(h),l=0;l<h;l++)k[l]=a[l];h=k}else h=[];A(f,e,h);this.f+=a.length}},a));a.b=b};function J(a){var b=a.type;if(!p(b))return null;switch(b.toLowerCase()){case "checkbox":case "radio":return a.checked?a.value:null;case "select-one":return b=a.selectedIndex,0<=b?a.options[b].value:null;case "select-multiple":for(var b=[],c,d=0;c=a.options[d];d++)c.selected&&b.push(c.value);return b.length?b:null;default:return p(a.value)?a.value:null}};var qb=!E||E&&9<=Wa,rb=E&&!G("9");!Ra||G("528");F&&G("1.9b")||E&&G("8")||Qa&&G("9.5")||Ra&&G("528");F&&!G("8")||E&&G("9");function K(){0!=sb&&(tb[this[t]||(this[t]=++ga)]=this);this.g=this.g;this.O=this.O}var sb=0,tb={};K.prototype.g=!1;K.prototype.w=function(){if(!this.g&&(this.g=!0,this.j(),0!=sb)){var a=this[t]||(this[t]=++ga);delete tb[a]}};K.prototype.j=function(){if(this.O)for(;this.O.length;)this.O.shift()()};function L(a,b){this.type=a;this.a=this.target=b;this.pa=!0}L.prototype.w=function(){};L.prototype.b=function(){this.pa=!1};function ub(a){ub[" "](a);return a}ub[" "]=ca;function vb(a,b){L.call(this,a?a.type:"");this.a=this.target=null;this.clientY=this.clientX=0;this.c=this.state=null;if(a){this.type=a.type;this.target=a.target||a.srcElement;this.a=b;var c=a.relatedTarget;if(c&&F)try{ub(c.nodeName)}catch(d){}this.clientX=void 0!==a.clientX?a.clientX:a.pageX;this.clientY=void 0!==a.clientY?a.clientY:a.pageY;this.state=a.state;this.c=a;a.defaultPrevented&&this.b()}}v(vb,L);
vb.prototype.b=function(){vb.n.b.call(this);var a=this.c;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,rb)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var wb="closure_listenable_"+(1E6*Math.random()|0);function xb(a){return!(!a||!a[wb])}var yb=0;function zb(a,b,c,d,e){this.s=a;this.a=null;this.src=b;this.type=c;this.H=!!d;this.L=e;this.na=++yb;this.u=this.G=!1}function Ab(a){a.u=!0;a.s=null;a.a=null;a.src=null;a.L=null};function Bb(a){this.src=a;this.a={};this.b=0}function Cb(a,b,c,d,e,f){var h=b.toString();b=a.a[h];b||(b=a.a[h]=[],a.b++);var k=Db(b,c,e,f);-1<k?(a=b[k],d||(a.G=!1)):(a=new zb(c,a.src,h,!!e,f),a.G=d,b.push(a));return a}function Eb(a,b){var c=b.type;if(!(c in a.a))return!1;var d=a.a[c],e=za(d,b),f;(f=0<=e)&&y.splice.call(d,e,1);f&&(Ab(b),0==a.a[c].length&&(delete a.a[c],a.b--));return f}function Fb(a,b,c,d,e){a=a.a[b.toString()];b=-1;a&&(b=Db(a,c,d,e));return-1<b?a[b]:null}
function Db(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.u&&f.s==b&&f.H==!!c&&f.L==d)return e}return-1};var Gb="closure_lm_"+(1E6*Math.random()|0),Hb={},Ib=0;function M(a,b,c,d,e){if(q(b)){for(var f=0;f<b.length;f++)M(a,b[f],c,d,e);return null}c=Jb(c);return xb(a)?a.da(b,c,d,e):Kb(a,b,c,!1,d,e)}function Kb(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var h=!!e,k=Lb(a);k||(a[Gb]=k=new Bb(a));c=Cb(k,b,c,d,e,f);if(c.a)return c;d=Mb();c.a=d;d.src=a;d.s=c;a.addEventListener?a.addEventListener(b.toString(),d,h):a.attachEvent(Nb(b.toString()),d);Ib++;return c}
function Mb(){var a=Ob,b=qb?function(c){return a.call(b.src,b.s,c)}:function(c){c=a.call(b.src,b.s,c);if(!c)return c};return b}function Pb(a,b,c,d,e){if(q(b))for(var f=0;f<b.length;f++)Pb(a,b[f],c,d,e);else c=Jb(c),xb(a)?Cb(a.o,String(b),c,!0,d,e):Kb(a,b,c,!0,d,e)}function Qb(a,b,c,d,e){if(q(b))for(var f=0;f<b.length;f++)Qb(a,b[f],c,d,e);else c=Jb(c),xb(a)?a.B(b,c,d,e):a&&(a=Lb(a))&&(b=Fb(a,b,c,!!d,e))&&Rb(b)}
function Rb(a){if("number"==typeof a||!a||a.u)return!1;var b=a.src;if(xb(b))return Eb(b.o,a);var c=a.type,d=a.a;b.removeEventListener?b.removeEventListener(c,d,a.H):b.detachEvent&&b.detachEvent(Nb(c),d);Ib--;(c=Lb(b))?(Eb(c,a),0==c.b&&(c.src=null,b[Gb]=null)):Ab(a);return!0}function Nb(a){return a in Hb?Hb[a]:Hb[a]="on"+a}function Sb(a,b,c,d){var e=1;if(a=Lb(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.H==c&&!f.u&&(e&=!1!==Tb(f,d))}return Boolean(e)}
function Tb(a,b){var c=a.s,d=a.L||a.src;a.G&&Rb(a);return c.call(d,b)}
function Ob(a,b){if(a.u)return!0;if(!qb){var c=b||ba("window.event"),d=new vb(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(h){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.a;f;f=f.parentNode)c.push(f);for(var f=a.type,k=c.length-1;0<=k;k--)d.a=c[k],e&=Sb(c[k],f,!0,d);for(k=0;k<c.length;k++)d.a=c[k],e&=Sb(c[k],f,!1,d)}return e}return Tb(a,new vb(b,this))}function Lb(a){a=a[Gb];return a instanceof Bb?a:null}
var Ub="__closure_events_fn_"+(1E9*Math.random()>>>0);function Jb(a){if(fa(a))return a;a[Ub]||(a[Ub]=function(b){return a.handleEvent(b)});return a[Ub]};function N(a){K.call(this);this.b=a;this.a={}}v(N,K);var Vb=[];N.prototype.da=function(a,b,c,d){q(b)||(b&&(Vb[0]=b.toString()),b=Vb);for(var e=0;e<b.length;e++){var f=M(a,b[e],c||this.handleEvent,d||!1,this.b||this);if(!f)break;this.a[f.na]=f}return this};
N.prototype.B=function(a,b,c,d,e){if(q(b))for(var f=0;f<b.length;f++)this.B(a,b[f],c,d,e);else c=c||this.handleEvent,e=e||this.b||this,c=Jb(c),d=!!d,b=xb(a)?Fb(a.o,String(b),c,d,e):a?(a=Lb(a))?Fb(a,b,c,d,e):null:null,b&&(Rb(b),delete this.a[b.na]);return this};N.prototype.j=function(){N.n.j.call(this);var a=this.a,b=Rb,c;for(c in a)b.call(void 0,a[c],c,a);this.a={}};N.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function O(){K.call(this);this.o=new Bb(this);this.Aa=this;this.ha=null}v(O,K);O.prototype[wb]=!0;g=O.prototype;g.addEventListener=function(a,b,c,d){M(this,a,b,c,d)};g.removeEventListener=function(a,b,c,d){Qb(this,a,b,c,d)};
function P(a,b){var c,d=a.ha;if(d)for(c=[];d;d=d.ha)c.push(d);var d=a.Aa,e=b,f=e.type||e;if(s(e))e=new L(e,d);else if(e instanceof L)e.target=e.target||d;else{var h=e,e=new L(f,d);Ia(e,h)}var h=!0,k;if(c)for(var l=c.length-1;0<=l;l--)k=e.a=c[l],h=Wb(k,f,!0,e)&&h;k=e.a=d;h=Wb(k,f,!0,e)&&h;h=Wb(k,f,!1,e)&&h;if(c)for(l=0;l<c.length;l++)k=e.a=c[l],h=Wb(k,f,!1,e)&&h}
g.j=function(){O.n.j.call(this);if(this.o){var a=this.o,b=0,c;for(c in a.a){for(var d=a.a[c],e=0;e<d.length;e++)++b,Ab(d[e]);delete a.a[c];a.b--}}this.ha=null};g.da=function(a,b,c,d){return Cb(this.o,String(a),b,!1,c,d)};g.B=function(a,b,c,d){var e;e=this.o;a=String(a).toString();if(a in e.a){var f=e.a[a];b=Db(f,b,c,d);-1<b?(Ab(f[b]),y.splice.call(f,b,1),0==f.length&&(delete e.a[a],e.b--),e=!0):e=!1}else e=!1;return e};
function Wb(a,b,c,d){b=a.o.a[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.u&&h.H==c){var k=h.s,l=h.L||h.src;h.G&&Eb(a.o,h);e=!1!==k.call(l,d)&&e}}return e&&0!=d.pa};[].push(function(){});function Xb(a,b,c){if(fa(a))c&&(a=u(a,c));else if(a&&"function"==typeof a.handleEvent)a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<b?-1:m.setTimeout(a,b||0)};function Yb(a){this.a=new z;if(a){a=Ka(a);for(var b=a.length,c=0;c<b;c++){var d=a[c];A(this.a,Zb(d),d)}}}function Zb(a){var b=typeof a;return"object"==b&&a||"function"==b?"o"+(a[t]||(a[t]=++ga)):b.substr(0,1)+a}g=Yb.prototype;g.e=function(){return this.a.e()};g.clear=function(){this.a.clear()};g.p=function(){return this.a.p()};g.contains=function(a){a=Zb(a);return B(this.a.b,a)};g.i=function(){return this.a.i()};g.clone=function(){return new Yb(this)};function $b(a){var b;b||(b=ac(a||arguments.callee.caller,[]));return b}
function ac(a,b){var c=[];if(0<=za(b,a))c.push("[...circular reference...]");else if(a&&50>b.length){c.push(bc(a)+"(");for(var d=a.arguments,e=0;d&&e<d.length;e++){0<e&&c.push(", ");var f;f=d[e];switch(typeof f){case "object":f=f?"object":"null";break;case "string":break;case "number":f=String(f);break;case "boolean":f=f?"true":"false";break;case "function":f=(f=bc(f))?f:"[fn]";break;default:f=typeof f}40<f.length&&(f=f.substr(0,40)+"...");c.push(f)}b.push(a);c.push(")\n");try{c.push(ac(a.caller,
b))}catch(h){c.push("[exception trying to get caller]\n")}}else a?c.push("[...long stack...]"):c.push("[end]");return c.join("")}function bc(a){if(cc[a])return cc[a];a=String(a);if(!cc[a]){var b=/function ([^\(]+)/.exec(a);cc[a]=b?b[1]:"[Anonymous]"}return cc[a]}var cc={};function dc(a,b,c,d,e){"number"==typeof e||ec++;d||ja();this.c=b;delete this.b;delete this.a}dc.prototype.b=null;dc.prototype.a=null;var ec=0;function Q(){this.b=this.c=this.a=null}function fc(a,b){this.name=a;this.value=b}fc.prototype.toString=function(){return this.name};var gc=new fc("SEVERE",1E3),hc=new fc("CONFIG",700),ic=new fc("FINE",500);function jc(a){if(a.c)return a.c;if(a.a)return jc(a.a);ya("Root logger has no level set.");return null}
Q.prototype.log=function(a,b,c){if(a.value>=jc(this).value)for(fa(b)&&(b=b()),a="log:"+this.g(0,b,c,Q.prototype.log).c,m.console&&(m.console.timeStamp?m.console.timeStamp(a):m.console.markTimeline&&m.console.markTimeline(a)),m.msWriteProfilerMark&&m.msWriteProfilerMark(a),a=this;a;)a=a.a};
Q.prototype.g=function(a,b,c,d){a=new dc(0,String(b));if(c){a.b=c;var e;d=d||Q.prototype.g;try{var f;var h=ba("window.location.href");if(s(c))f={message:c,name:"Unknown error",lineNumber:"Not available",fileName:h,stack:"Not available"};else{var k,l;b=!1;try{k=c.lineNumber||c.Da||"Not available"}catch(n){k="Not available",b=!0}try{l=c.fileName||c.filename||c.sourceURL||m.$googDebugFname||h}catch(S){l="Not available",b=!0}f=!b&&c.lineNumber&&c.fileName&&c.stack&&c.message&&c.name?c:{message:c.message||
"Not available",name:c.name||"UnknownError",lineNumber:k,fileName:l,stack:c.stack||"Not available"}}e="Message: "+x(f.message)+'\nUrl: <a href="view-source:'+f.fileName+'" target="_new">'+f.fileName+"</a>\nLine: "+f.lineNumber+"\n\nBrowser stack:\n"+x(f.stack+"-> ")+"[end]\n\nJS stack traversal:\n"+x($b(d)+"-> ")}catch(r){e="Exception trying to expose exception! You win, we lose. "+r}a.a=e}return a};var kc={},lc=null;
function mc(a){lc||(lc=new Q,kc[""]=lc,lc.c=hc);var b;if(!(b=kc[a])){b=new Q;var c=a.lastIndexOf("."),d=a.substr(c+1),c=mc(a.substr(0,c));c.b||(c.b={});c.b[d]=b;b.a=c;kc[a]=b}return b};function R(a,b){a&&a.log(ic,b,void 0)};function nc(){}nc.prototype.a=null;function oc(a){var b;(b=a.a)||(b={},pc(a)&&(b[0]=!0,b[1]=!0),b=a.a=b);return b};var qc;function rc(){}v(rc,nc);function sc(a){return(a=pc(a))?new ActiveXObject(a):new XMLHttpRequest}function pc(a){if(!a.b&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.b=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.b}qc=new rc;function tc(a){O.call(this);this.qa=new z;this.T=a||null;this.b=!1;this.S=this.a=null;this.ra=this.N="";this.k=0;this.q="";this.c=this.ga=this.M=this.fa=!1;this.h=0;this.P=null;this.t=uc;this.Q=this.X=!1}v(tc,O);var uc="",vc=tc.prototype,wc=mc("goog.net.XhrIo");vc.l=wc;var xc=/^https?$/i,yc=["POST","PUT"];g=tc.prototype;g.ma=function(){return this.t};
g.send=function(a,b,c,d){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request="+this.N+"; newUri="+a);b=b?b.toUpperCase():"GET";this.N=a;this.q="";this.k=0;this.ra=b;this.fa=!1;this.b=!0;this.a=this.T?sc(this.T):sc(qc);this.S=this.T?oc(this.T):oc(qc);this.a.onreadystatechange=u(this.oa,this);try{R(this.l,T(this,"Opening Xhr")),this.ga=!0,this.a.open(b,String(a),!0),this.ga=!1}catch(e){R(this.l,T(this,"Error opening Xhr: "+e.message));zc(this,e);return}a=c||"";var f=this.qa.clone();
d&&La(d,function(a,b){A(f,b,a)});d=Ca(f.m(),Ac);c=m.FormData&&a instanceof m.FormData;!(0<=za(yc,b))||d||c||A(f,"Content-Type","application/x-www-form-urlencoded;charset=utf-8");f.forEach(function(a,b){this.a.setRequestHeader(b,a)},this);this.t&&(this.a.responseType=this.t);"withCredentials"in this.a&&(this.a.withCredentials=this.X);try{Bc(this),0<this.h&&(this.Q=Cc(this.a),R(this.l,T(this,"Will abort after "+this.h+"ms if incomplete, xhr2 "+this.Q)),this.Q?(this.a.timeout=this.h,this.a.ontimeout=
u(this.sa,this)):this.P=Xb(this.sa,this.h,this)),R(this.l,T(this,"Sending request")),this.M=!0,this.a.send(a),this.M=!1}catch(h){R(this.l,T(this,"Send error: "+h.message)),zc(this,h)}};function Cc(a){return E&&G(9)&&"number"==typeof a.timeout&&p(a.ontimeout)}function Ac(a){return"content-type"==a.toLowerCase()}g.sa=function(){"undefined"!=typeof aa&&this.a&&(this.q="Timed out after "+this.h+"ms, aborting",this.k=8,R(this.l,T(this,this.q)),P(this,"timeout"),this.abort(8))};
function zc(a,b){a.b=!1;a.a&&(a.c=!0,a.a.abort(),a.c=!1);a.q=b;a.k=5;Dc(a);Ec(a)}function Dc(a){a.fa||(a.fa=!0,P(a,"complete"),P(a,"error"))}g.abort=function(a){this.a&&this.b&&(R(this.l,T(this,"Aborting")),this.b=!1,this.c=!0,this.a.abort(),this.c=!1,this.k=a||7,P(this,"complete"),P(this,"abort"),Ec(this))};g.j=function(){this.a&&(this.b&&(this.b=!1,this.c=!0,this.a.abort(),this.c=!1),Ec(this,!0));tc.n.j.call(this)};g.oa=function(){this.g||(this.ga||this.M||this.c?Fc(this):this.za())};g.za=function(){Fc(this)};
function Fc(a){if(a.b&&"undefined"!=typeof aa)if(a.S[1]&&4==Gc(a)&&2==Hc(a))R(a.l,T(a,"Local request error detected and ignored"));else if(a.M&&4==Gc(a))Xb(a.oa,0,a);else if(P(a,"readystatechange"),4==Gc(a)){R(a.l,T(a,"Request complete"));a.b=!1;try{if(Ic(a))P(a,"complete"),P(a,"success");else{a.k=6;var b;try{b=2<Gc(a)?a.a.statusText:""}catch(c){R(a.l,"Can not get status: "+c.message),b=""}a.q=b+" ["+Hc(a)+"]";Dc(a)}}finally{Ec(a)}}}
function Ec(a,b){if(a.a){Bc(a);var c=a.a,d=a.S[0]?ca:null;a.a=null;a.S=null;b||P(a,"ready");try{c.onreadystatechange=d}catch(e){(c=a.l)&&c.log(gc,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}}function Bc(a){a.a&&a.Q&&(a.a.ontimeout=null);"number"==typeof a.P&&(m.clearTimeout(a.P),a.P=null)}
function Ic(a){var b=Hc(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=Ya(String(a.N))[1]||null,!a&&self.location&&(a=self.location.protocol,a=a.substr(0,a.length-1)),b=!xc.test(a?a.toLowerCase():"");c=b}return c}function Gc(a){return a.a?a.a.readyState:0}function Hc(a){try{return 2<Gc(a)?a.a.status:-1}catch(b){return-1}}function T(a,b){return b+" ["+a.ra+" "+a.N+" "+Hc(a)+"]"};function Jc(){this.b=[];this.a=[]}function Kc(a){0==a.b.length&&(a.b=a.a,a.b.reverse(),a.a=[]);return a.b.pop()}g=Jc.prototype;g.e=function(){return this.b.length+this.a.length};g.p=function(){return 0==this.b.length&&0==this.a.length};g.clear=function(){this.b=[];this.a=[]};g.contains=function(a){return 0<=za(this.b,a)||0<=za(this.a,a)};g.i=function(){for(var a=[],b=this.b.length-1;0<=b;--b)a.push(this.b[b]);for(var c=this.a.length,b=0;b<c;++b)a.push(this.a[b]);return a};function Lc(a,b){K.call(this);this.q=a||0;this.c=b||10;if(this.q>this.c)throw Error(Mc);this.a=new Jc;this.b=new Yb;this.k=null;this.D()}v(Lc,K);var Mc="[goog.structs.Pool] Min can not be greater than max";g=Lc.prototype;g.K=function(){var a=ja();if(!(null!=this.k&&0>a-this.k)){for(var b;0<this.a.e()&&(b=Kc(this.a),!this.ea(b));)this.D();!b&&this.e()<this.c&&(b=this.aa());b&&(this.k=a,A(this.b.a,Zb(b),b));return b}};function Nc(a,b){Na(a.b.a,Zb(b))&&a.Y(b)}
g.Y=function(a){Na(this.b.a,Zb(a));this.ea(a)&&this.e()<this.c?this.a.a.push(a):Oc(a)};g.D=function(){for(var a=this.a;this.e()<this.q;){var b=this.aa();a.a.push(b)}for(;this.e()>this.c&&0<this.a.e();)Oc(Kc(a))};g.aa=function(){return{}};function Oc(a){if("function"==typeof a.w)a.w();else for(var b in a)a[b]=null}g.ea=function(a){return"function"==typeof a.ta?a.ta():!0};g.contains=function(a){return this.a.contains(a)||this.b.contains(a)};g.e=function(){return this.a.e()+this.b.e()};
g.p=function(){return this.a.p()&&this.b.p()};g.j=function(){Lc.n.j.call(this);if(0<this.b.e())throw Error("[goog.structs.Pool] Objects not released");delete this.b;for(var a=this.a;!a.p();)Oc(Kc(a));delete this.a};function Pc(a,b){this.a=a;this.b=b}Pc.prototype.clone=function(){return new Pc(this.a,this.b)};function Qc(a){this.a=[];if(a)a:{var b,c;if(a instanceof Qc){if(b=a.m(),c=a.i(),0>=a.e()){a=this.a;for(var d=0;d<b.length;d++)a.push(new Pc(b[d],c[d]));break a}}else b=Ga(a),c=Fa(a);for(d=0;d<b.length;d++)Rc(this,b[d],c[d])}}function Rc(a,b,c){var d=a.a;d.push(new Pc(b,c));b=d.length-1;a=a.a;for(c=a[b];0<b;)if(d=b-1>>1,a[d].a>c.a)a[b]=a[d],b=d;else break;a[b]=c}g=Qc.prototype;g.i=function(){for(var a=this.a,b=[],c=a.length,d=0;d<c;d++)b.push(a[d].b);return b};
g.m=function(){for(var a=this.a,b=[],c=a.length,d=0;d<c;d++)b.push(a[d].a);return b};g.clone=function(){return new Qc(this)};g.e=function(){return this.a.length};g.p=function(){return 0==this.a.length};g.clear=function(){Da(this.a)};function Sc(){Qc.call(this)}v(Sc,Qc);function U(a,b){this.h=new Sc;Lc.call(this,a,b)}v(U,Lc);g=U.prototype;g.K=function(a,b){if(!a)return U.n.K.call(this);Rc(this.h,p(b)?b:100,a);this.ca()};g.ca=function(){for(var a=this.h;0<a.e();){var b=this.K();if(b){var c;var d=a,e=d.a,f=e.length;c=e[0];if(0>=f)c=void 0;else{if(1==f)Da(e);else{e[0]=e.pop();for(var e=0,d=d.a,f=d.length,h=d[e];e<f>>1;){var k=2*e+1,l=2*e+2,k=l<f&&d[l].a<d[k].a?l:k;if(d[k].a>h.a)break;d[e]=d[k];e=k}d[e]=h}c=c.b}c.apply(this,[b])}else break}};
g.Y=function(a){U.n.Y.call(this,a);this.ca()};g.D=function(){U.n.D.call(this);this.ca()};g.j=function(){U.n.j.call(this);m.clearTimeout(void 0);this.h.clear();this.h=null};function Tc(a,b,c){U.call(this,b,c);this.t=a}v(Tc,U);Tc.prototype.aa=function(){var a=new tc,b=this.t;b&&b.forEach(function(b,d){A(a.qa,d,b)});return a};Tc.prototype.ea=function(a){return!a.g&&!a.a};function Uc(a,b,c,d,e){O.call(this);this.h=p(a)?a:1;this.k=p(e)?Math.max(0,e):0;this.b=new Tc(b,c,d);this.a=new z;this.c=new N(this)}v(Uc,O);var Vc="ready complete success error abort timeout".split(" ");g=Uc.prototype;g.send=function(a,b,c,d,e,f,h,k,l,n){if(C(this.a,a))throw Error("[goog.net.XhrManager] ID in use");b=new Wc(b,u(this.xa,this,a),c,d,e,h,p(k)?k:this.h,l,n);A(this.a,a,b);a=u(this.wa,this,a);this.b.K(a,f);return b};
g.abort=function(a,b){var c=C(this.a,a);if(c){var d=c.C;c.ja=!0;b&&(d&&(this.c.B(d,Vc,c.ia),Pb(d,"ready",function(){Nc(this.b,d)},!1,this)),Na(this.a,a));d&&d.abort()}};g.wa=function(a,b){var c=C(this.a,a);c&&!c.C?(this.c.da(b,Vc,c.ia),b.h=Math.max(0,this.k),b.t=c.ma(),c.C=b,c.C.X=c.X,P(this,new V("ready",this,a,b)),Xc(this,a,b),c.ja&&b.abort()):Nc(this.b,b)};
g.xa=function(a,b){var c=b.target;switch(b.type){case "ready":Xc(this,a,c);break;case "complete":a:{var d=C(this.a,a);if(7==c.k||Ic(c)||d.F>d.ba)if(P(this,new V("complete",this,a,c)),d&&(d.la=!0,d.ka)){c=d.ka.call(c,b);break a}c=null}return c;case "success":P(this,new V("success",this,a,c));break;case "timeout":case "error":d=C(this.a,a);d.F>d.ba&&P(this,new V("error",this,a,c));break;case "abort":P(this,new V("abort",this,a,c))}return null};
function Xc(a,b,c){var d=C(a.a,b);!d||d.la||d.F>d.ba?(d&&(a.c.B(c,Vc,d.ia),Na(a.a,b)),Nc(a.b,c)):(d.F++,c.send(d.Ba,d.ya,d.J(),d.va))}g.j=function(){Uc.n.j.call(this);this.b.w();this.b=null;this.c.w();this.c=null;this.a.clear();this.a=null};function V(a,b,c,d){L.call(this,a,b);this.id=c;this.C=d}v(V,L);function Wc(a,b,c,d,e,f,h,k,l){this.X=!!l;this.Ba=a;this.ya=c||"GET";this.a=d;this.va=e||null;this.ba=p(h)?h:1;this.F=0;this.ja=this.la=!1;this.ia=b;this.ka=f;this.b=k||uc;this.C=null}
Wc.prototype.J=function(){return this.a};Wc.prototype.ma=function(){return this.b};!F&&!E||E&&E&&9<=Wa||F&&G("1.9.1");E&&G("9");function Yc(a){this.a=a||m.document||document}Yc.prototype.appendChild=function(a,b){a.appendChild(b)};Yc.prototype.contains=function(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};E&&G(8);Ja("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));function Zc(){this.a="";this.b=$c;this.c=null}Zc.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};Ja("action","cite","data","formaction","href","manifest","poster","src");Ja("link","script","style");var $c={};var ad={Ea:!0},bd={Fa:!0};function W(){throw Error("Do not instantiate directly");}W.prototype.Z=null;W.prototype.J=function(){return this.a};W.prototype.toString=function(){return this.a};function X(a,b){var c;c=(ka||(ka=new Yc)).a.createElement("DIV");var d=cd(a(b||dd,void 0,void 0));d.match(ed);c.innerHTML=d;return 1==c.childNodes.length&&(d=c.firstChild,1==d.nodeType)?d:c}function cd(a){var b=typeof a;if(("object"!=b||null==a)&&"function"!=b)return String(a);if(a instanceof W){if(a.$===ad)return a.J();if(a.$===bd)return x(a.J())}ya("Soy template output is unsafe for use as HTML: "+a);return"zSoyz"}var ed=/^<(body|caption|col|colgroup|head|html|tr|td|tbody|thead|tfoot)>/i,dd={};function fd(a){if(null!=a)switch(a.Z){case 1:return 1;case -1:return-1;case 0:return 0}return null}function gd(){W.call(this)}v(gd,W);gd.prototype.$=ad;function Y(a){if(null==a||a.$!==ad)if(a instanceof Zc){var b=hd,c;a instanceof Zc&&a.constructor===Zc&&a.b===$c?c=a.a:(ya("expected object of type SafeHtml, got '"+a+"'"),c="type_error:SafeHtml");a=b(c,a.c)}else a=hd(x(String(String(a))),fd(a));return a}
var hd=function(a){function b(a){this.a=a}b.prototype=a.prototype;return function(a,d){var e=new b(String(a));void 0!==d&&(e.Z=d);return e}}(gd);(function(a){function b(a){this.a=a}b.prototype=a.prototype;return function(a,d){var e=String(a);if(!e)return"";e=new b(e);void 0!==d&&(e.Z=d);return e}})(gd);function id(a){return'<div><div class="file-info-title">'+Y(a.title)+"</div>"+(a.file?'<span><a href="'+Y(a.file.url)+'" target="_blank">'+Y(a.file.name)+"</a> ("+Y(a.file.size)+" KB)</span>":"")+(a.R?'<span title="source map file" target="_blank"> (<a href="'+Y(a.R.url)+'">source map</a>)</span>':"")+"</div>"}
function jd(a){for(var b="<div><table><thead><tr><th>Name</th><th>Size</th><th>Date</th></tr></thead><tbody>",c=a.list,d=c.length,e=0;e<d;e++)var f=c[e],b=b+('<tr><td><a target="_blank" href="'+Y(f.url)+'">'+Y(a.path)+Y(f.name)+"</a></td><td>"+Y(f.size)+"</td><td>"+Y(f.ua)+"</td></tr>");return b+"</tbody></table></div>"}function kd(a){var b="<ul>";a=a.list;for(var c=a.length,d=0;d<c;d++)var e=a[d],b=b+('<li><a href="#'+Y(e)+'">'+Y(e)+"</a></li>");return b+"</ul>"}
function ld(){return'<h3>Download archive</h3><div id="archive"></div><div id="archive-files"></div>'};function md(a){if("undefined"!=typeof DOMParser)return(new DOMParser).parseFromString(a,"application/xml");if("undefined"!=typeof ActiveXObject){var b=new ActiveXObject("MSXML2.DOMDocument");if(b){b.resolveExternals=!1;b.validateOnParse=!1;try{b.setProperty("ProhibitDTD",!0),b.setProperty("MaxXMLSize",2048),b.setProperty("MaxElementDepth",256)}catch(c){}}b.loadXML(a);return b}throw Error("Your browser does not support loading xml documents");};function nd(a,b){function c(a){var b;if(b=d)b=0==a.lastIndexOf("atom:",0);b&&(a=a.substring(5,a.length));return a.replace("#text","$t").replace(/:/g,"$")}var d="atom"==b,e=!b;s(a)&&(a=md(a));var f={};if(1==a.nodeType){if(!e&&0<a.attributes.length)for(var h=0,k=a.attributes.length;h<k;h++){var l=a.attributes.item(h);f[c(l.nodeName)]=l.nodeValue}}else 3==a.nodeType&&(f=a.nodeValue);if(a.hasChildNodes())for(h=0,k=a.childNodes.length;h<k;h++){var l=a.childNodes.item(h),n=c(l.nodeName);if(e&&"$t"==n)f=
l.nodeValue;else if(p(f[n])){if(!q(f[n])){var S=f[n];f[n]=[];f[n].push(S)}f[n].push(nd(l,b))}else f[n]=nd(l,b)}return f};function od(){this.c=new Uc(0);this.a=this.b=null}function pd(a,b,c){var d=new $a("https://ydn-db-d1.storage.googleapis.com/"),e={delimiter:"/","max-keys":"200"};b&&(e.prefix=b);for(var f in e)mb(d,f,e[f]);b=d.toString();a.c.send(b,b,"GET",null,null,1,function(a){var b;a=a.target;try{b=a.a?a.a.responseText:""}catch(d){R(a.l,"Can not get responseText: "+d.message),b=""}b=md(b);b=nd(b);c.call(void 0,b.ListBucketResult);c=null})}
function qd(a,b){pd(a,"",function(a){a=a.CommonPrefixes;a=q(a)?a:a?[a]:[];a=a.map(function(a){return a.Prefix.replace(/\/$/,"")});b.call(void 0,a)})}function rd(a,b,c,d){sd(a,b,function(a){this.b=a;c.call(d,this.b)},a)}
function sd(a,b,c,d){var e="https://storage.googleapis.com/ydn-db-d1",e="https://storage.cloud.google.com/ydn-db-d1";pd(a,b+"/",function(a){var b=[];a=a.Contents;for(var k=a.length,l=0;l<k;l++){var n=a[l].Key,S=n.substring(n.lastIndexOf("/")+1),r=a[l].Size,r=r.substr(0,r.length-3)+"."+r.substr(r.length-3,1);b.push({name:S,size:r,ua:(new Date(a[l].LastModified)).toLocaleDateString(),url:e+"/"+n})}c.call(d,b)})}
function td(a,b,c){var d;sd(a,b,function(a){a=X(jd,{path:b+"/",list:a});c.appendChild(a);d&&(d.call(void 0),d=void 0)})}function ud(a,b,c,d,e){qd(a,function(f){var h=X(kd,{list:f});b.appendChild(h);M(h,"click",function(b){"A"==b.target.tagName&&td(a,b.target.textContent,c)},!1,this);d&&(d.call(e,f),d=void 0)})}function vd(a,b){return Ca(a.b,function(a){return a.name==b})}
function wd(a,b){for(var c=[],d=0;d<b.length;d++)la(b[d].name)&&Ba(a,function(a){return 0<=b[d].name.indexOf(a)})&&c.push(b[d]);c.sort(function(a,b){return parseFloat(a.size)>parseFloat(b.size)?1:-1});return c[0]}function xd(){var a=new od;yd(a)}
function zd(a){var b=a.b,c=J(document.getElementById("db-indexeddb")),d=J(document.getElementById("db-websql")),e=J(document.getElementById("db-ls")),f=J(document.getElementById("db-userdata")),c=(c?"i":"")+(d?"s":""),c=c+(e?"w":""),c=c+(f?"u":""),e=J(document.getElementById("fs-text")),f=J(document.getElementById("fs-sync")),d=J(document.getElementById("fs-query")),h=J(document.getElementById("fs-sql")),k=J(document.getElementById("fs-crypt")),l=J(document.getElementById("fs-event")),n=J(document.getElementById("fs-cursor")),
c=[c];e&&c.push("-text");l&&c.push("-e");f&&c.push("-sync");k&&c.push("-crypt");d&&c.push("-qry");h&&c.push("-sql");n&&c.push("-cur");f=wd(c,b);c.push("-dev");e=wd(c,b);c.pop();c.push("-raw");c=Ad()?wd(c,b):null;b=document.getElementById("download");d=document.getElementById("no-download");d.style.display=e&&f?"none":"";d.textContent="No custom build file available having all these features.";b.innerHTML="";f&&(d=vd(a,f.name+".map"),f=X(id,{title:"Production: ",file:f,R:d}),b.appendChild(f));e&&(a=
vd(a,e.name+".map"),a=X(id,{title:"Development: ",file:e,R:a}),b.appendChild(a));c&&(a=X(id,{title:"Source code: ",file:c,R:null}),b.appendChild(a))}function Ad(){var a=!1;if(m.gapi&&m.gapi.auth){var b=gapi.auth.getToken();b&&b.access_token&&(a=!0)}return a}
function yd(a){var b=Ad();if(!a.a){a.a=X(ld);var c;c=document;c.querySelectorAll&&c.querySelector?c=c.querySelectorAll("ARTICLE"):c=c.getElementsByTagName("ARTICLE");c[0].appendChild(a.a)}a.a.style.display=b?"":"none";document.getElementById("download-login-msg").style.display=b?"none":"";document.getElementById("customize").setAttribute("disabled",!b)}
function Bd(){var a=document.getElementById("download-login-msg"),b=window.setInterval(function(){a.style.color="white"==a.style.color?"gray":"white"},400);window.setTimeout(function(){clearInterval(b);a.style.color="black"},3E3)}
function Cd(){var a=new od;yd(a);M(document.getElementById("download"),"click",function(a){"A"==a.target.tagName&&la(a.target.textContent)&&m.googleAnalytic&&m.googleAnalytic("send","event","download/ydn-db/"+document.getElementById("fs-version").value,a.target.textContent,document.getElementById("user-name").textContent)},!1,a);M(document.getElementById("fs-version"),"change",function(a){rd(this,a.target.value,function(){zd(this)},this)},!1,a);var b=document.getElementById("archive");ud(a,b,b,function(b){b.sort(va);
b.reverse();for(var d=b[0],e=document.getElementById("fs-version"),f=0;f<b.length;f++){var h=document.createElement("option");h.textContent=b[f];h.value=b[f];e.appendChild(h)}rd(a,d,function(){zd(a);M(document.getElementById("customize"),"click",function(){Ad()?zd(this):Bd()},!1,a)})},a)}var Dd=xd=function(){Cd()},Ed=["runApp"],Z=m;Ed[0]in Z||!Z.execScript||Z.execScript("var "+Ed[0]);for(var Fd;Ed.length&&(Fd=Ed.shift());)!Ed.length&&p(Dd)?Z[Fd]=Dd:Z[Fd]?Z=Z[Fd]:Z=Z[Fd]={};})();app=runApp();

            //# sourceMappingURL=download-app.js.map
        
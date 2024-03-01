/*!
* CookieConsent 3.0.0-rc.17
* https://github.com/orestbida/cookieconsent/tree/v3
* Author Orest Bida
* Released under the MIT License
*/
var t,e;t=this,e=function(t){'use strict';const e='opt-in',r='opt-out',n='data-category';class o{constructor(){this.t={mode:e,revision:0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},this.o={i:{},h:'',u:{},l:{},v:{},p:[],_:!1,m:null,C:null,A:null,S:'',D:!0,T:!1,k:!0,N:[],P:!1,B:'',I:!1,O:[],j:[],R:[],U:[],F:!1,G:{},J:{},K:{},X:{},Y:{},V:[]},this.q={},this.W={Z:'cc:onFirstConsent',$:'cc:onConsent',tt:'cc:onChange'}}}const i=new o,s=(t,e)=>t.indexOf(e),a=(t,e)=>-1!==s(t,e),c=t=>Array.isArray(t),f=t=>'string'==typeof t,h=t=>!!t&&'object'==typeof t&&!c(t),u=t=>'function'==typeof t,l=t=>Object.keys(t),d=t=>Array.from(new Set(t)),v=t=>{const e=document.createElement(t);return'button'===t&&(e.type=t),e},g=(t,e,r)=>t.setAttribute(e,r),p=(t,e,r)=>{t.removeAttribute(r?'data-'+e:e)},w=(t,e,r)=>t.getAttribute(r?'data-'+e:e),_=t=>{if('object'!=typeof t)return t;if(t instanceof Date)return new Date(t.getTime());let e=Array.isArray(t)?[]:{};for(let r in t){let n=t[r];e[r]=_(n)}return e},m=()=>{const t={},{O:e,G:r,J:n}=i.o;for(const o of e)t[o]=C(n[o],l(r[o]));return t},y=()=>{const t=i.t.cookie.expiresAfterDays;return u(t)?t(i.o.B):t},C=(t,e)=>{const r=t||[],n=e||[];return r.filter((t=>!a(n,t))).concat(n.filter((t=>!a(r,t))))},A=t=>{i.o.j=d(t),i.o.B=(()=>{let t='custom';const{j:e,O:r,R:n}=i.o,o=e.length;return o===r.length?t='all':o===n.length&&(t='necessary'),t})()},S=(t,e,r)=>{const{tt:n,$:o,Z:s,et:a,rt:c,nt:f}=i.q,h=i.W,l={cookie:i.o.v};t===h.Z?u(s)&&s(_(l)):t===h.$?u(o)&&o(_(l)):(l.changedCategories=i.o.N,l.changedServices=i.o.X,u(n)&&n(_(l))),((t,e)=>{dispatchEvent(new CustomEvent(t,{detail:e}))})(t,_(l))},b=(t,e)=>{try{return t()}catch(t){return!e&&console.warn('CookieConsent:',t),!1}};var E;!function(){function t(t){this.mode=r.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=0,n=this.data.length;e<n;e++){var o=[],i=this.data.charCodeAt(e);i>65536?(o[0]=240|(1835008&i)>>>18,o[1]=128|(258048&i)>>>12,o[2]=128|(4032&i)>>>6,o[3]=128|63&i):i>2048?(o[0]=224|(61440&i)>>>12,o[1]=128|(4032&i)>>>6,o[2]=128|63&i):i>128?(o[0]=192|(1984&i)>>>6,o[1]=128|63&i):o[0]=i,this.parsedData.push(o)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function e(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}t.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var e=0,r=this.parsedData.length;e<r;e++)t.put(this.parsedData[e],8)}},e.prototype={addData:function(e){var r=new t(e);this.dataList.push(r),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+','+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,r){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++){this.modules[n]=new Array(this.moduleCount);for(var o=0;o<this.moduleCount;o++)this.modules[n][o]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,r),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=e.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,r)},setupPositionProbePattern:function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var n=-1;n<=7;n++)e+n<=-1||this.moduleCount<=e+n||(this.modules[t+r][e+n]=0<=r&&r<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=n&&n<=4)},getBestMaskPattern:function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var n=o.getLostPoint(this);(0==r||t>n)&&(t=n,e=r)}return e},createMovieClip:function(t,e,r){var n=t.createEmptyMovieClip(e,r);this.make();for(var o=0;o<this.modules.length;o++)for(var i=1*o,s=0;s<this.modules[o].length;s++){var a=1*s;this.modules[o][s]&&(n.beginFill(0,100),n.moveTo(a,i),n.lineTo(a+1,i),n.lineTo(a+1,i+1),n.lineTo(a,i+1),n.endFill())}return n},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=o.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var n=t[e],i=t[r];if(null==this.modules[n][i])for(var s=-2;s<=2;s++)for(var a=-2;a<=2;a++)this.modules[n+s][i+a]=-2==s||2==s||-2==a||2==a||0==s&&0==a}},setupTypeNumber:function(t){for(var e=o.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var n=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=n}for(r=0;r<18;r++)n=!t&&1==(e>>r&1),this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=n},setupTypeInfo:function(t,e){for(var r=this.errorCorrectLevel<<3|e,n=o.getBCHTypeInfo(r),i=0;i<15;i++){var s=!t&&1==(n>>i&1);i<6?this.modules[i][8]=s:i<8?this.modules[i+1][8]=s:this.modules[this.moduleCount-15+i][8]=s}for(i=0;i<15;i++)s=!t&&1==(n>>i&1),i<8?this.modules[8][this.moduleCount-i-1]=s:i<9?this.modules[8][15-i-1+1]=s:this.modules[8][15-i-1]=s;this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var r=-1,n=this.moduleCount-1,i=7,s=0,a=this.moduleCount-1;a>0;a-=2)for(6==a&&a--;;){for(var c=0;c<2;c++)if(null==this.modules[n][a-c]){var f=!1;s<t.length&&(f=1==(t[s]>>>i&1)),o.getMask(e,n,a-c)&&(f=!f),this.modules[n][a-c]=f,-1==--i&&(s++,i=7)}if((n+=r)<0||this.moduleCount<=n){n-=r,r=-r;break}}}},e.PAD0=236,e.PAD1=17,e.createData=function(t,r,n){for(var i=c.getRSBlocks(t,r),s=new f,a=0;a<n.length;a++){var h=n[a];s.put(h.mode,4),s.put(h.getLength(),o.getLengthInBits(h.mode,t)),h.write(s)}var u=0;for(a=0;a<i.length;a++)u+=i[a].dataCount;if(s.getLengthInBits()>8*u)throw new Error('code length overflow. ('+s.getLengthInBits()+'>'+8*u+')');for(s.getLengthInBits()+4<=8*u&&s.put(0,4);s.getLengthInBits()%8!=0;)s.putBit(!1);for(;!(s.getLengthInBits()>=8*u||(s.put(e.PAD0,8),s.getLengthInBits()>=8*u));)s.put(e.PAD1,8);return e.createBytes(s,i)},e.createBytes=function(t,e){for(var r=0,n=0,i=0,s=new Array(e.length),c=new Array(e.length),f=0;f<e.length;f++){var h=e[f].dataCount,u=e[f].totalCount-h;n=Math.max(n,h),i=Math.max(i,u),s[f]=new Array(h);for(var l=0;l<s[f].length;l++)s[f][l]=255&t.buffer[l+r];r+=h;var d=o.getErrorCorrectPolynomial(u),v=new a(s[f],d.getLength()-1).mod(d);for(c[f]=new Array(d.getLength()-1),l=0;l<c[f].length;l++){var g=l+v.getLength()-c[f].length;c[f][l]=g>=0?v.get(g):0}}var p=0;for(l=0;l<e.length;l++)p+=e[l].totalCount;var w=new Array(p),_=0;for(l=0;l<n;l++)for(f=0;f<e.length;f++)l<s[f].length&&(w[_++]=s[f][l]);for(l=0;l<i;l++)for(f=0;f<e.length;f++)l<c[f].length&&(w[_++]=c[f][l]);return w};for(var r={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},n={L:1,M:0,Q:3,H:2},o={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;o.getBCHDigit(e)-o.getBCHDigit(o.G15)>=0;)e^=o.G15<<o.getBCHDigit(e)-o.getBCHDigit(o.G15);return(t<<10|e)^o.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;o.getBCHDigit(e)-o.getBCHDigit(o.G18)>=0;)e^=o.G18<<o.getBCHDigit(e)-o.getBCHDigit(o.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return o.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case 0:return(e+r)%2==0;case 1:return e%2==0;case 2:return r%3==0;case 3:return(e+r)%3==0;case 4:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case 5:return e*r%2+e*r%3==0;case 6:return(e*r%2+e*r%3)%2==0;case 7:return(e*r%3+(e+r)%2)%2==0;default:throw new Error('bad maskPattern:'+t)}},getErrorCorrectPolynomial:function(t){for(var e=new a([1],0),r=0;r<t;r++)e=e.multiply(new a([1,i.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case r.MODE_NUMBER:return 10;case r.MODE_ALPHA_NUM:return 9;case r.MODE_8BIT_BYTE:case r.MODE_KANJI:return 8;default:throw new Error('mode:'+t)}else if(e<27)switch(t){case r.MODE_NUMBER:return 12;case r.MODE_ALPHA_NUM:return 11;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 10;default:throw new Error('mode:'+t)}else{if(!(e<41))throw new Error('type:'+e);switch(t){case r.MODE_NUMBER:return 14;case r.MODE_ALPHA_NUM:return 13;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 12;default:throw new Error('mode:'+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,n=0;n<e;n++)for(var o=0;o<e;o++){for(var i=0,s=t.isDark(n,o),a=-1;a<=1;a++)if(!(n+a<0||e<=n+a))for(var c=-1;c<=1;c++)o+c<0||e<=o+c||0==a&&0==c||s==t.isDark(n+a,o+c)&&i++;i>5&&(r+=3+i-5)}for(n=0;n<e-1;n++)for(o=0;o<e-1;o++){var f=0;t.isDark(n,o)&&f++,t.isDark(n+1,o)&&f++,t.isDark(n,o+1)&&f++,t.isDark(n+1,o+1)&&f++,0!=f&&4!=f||(r+=3)}for(n=0;n<e;n++)for(o=0;o<e-6;o++)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(r+=40);for(o=0;o<e;o++)for(n=0;n<e-6;n++)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(r+=40);var h=0;for(o=0;o<e;o++)for(n=0;n<e;n++)t.isDark(n,o)&&h++;return r+Math.abs(100*h/e/e-50)/5*10}},i={glog:function(t){if(t<1)throw new Error('glog('+t+')');return i.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return i.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},s=0;s<8;s++)i.EXP_TABLE[s]=1<<s;for(s=8;s<256;s++)i.EXP_TABLE[s]=i.EXP_TABLE[s-4]^i.EXP_TABLE[s-5]^i.EXP_TABLE[s-6]^i.EXP_TABLE[s-8];for(s=0;s<255;s++)i.LOG_TABLE[i.EXP_TABLE[s]]=s;function a(t,e){if(null==t.length)throw new Error(t.length+'/'+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=new Array(t.length-r+e);for(var n=0;n<t.length-r;n++)this.num[n]=t[n+r]}function c(t,e){this.totalCount=t,this.dataCount=e}function f(){this.buffer=[],this.length=0}a.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var n=0;n<t.getLength();n++)e[r+n]^=i.gexp(i.glog(this.get(r))+i.glog(t.get(n)));return new a(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=i.glog(this.get(0))-i.glog(t.get(0)),r=new Array(this.getLength()),n=0;n<this.getLength();n++)r[n]=this.get(n);for(n=0;n<t.getLength();n++)r[n]^=i.gexp(i.glog(t.get(n))+e);return new a(r,0).mod(t)}},c.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],c.getRSBlocks=function(t,e){var r=c.getRsBlockTable(t,e);if(null==r)throw new Error('bad rs block @ typeNumber:'+t+'/errorCorrectLevel:'+e);for(var n=r.length/3,o=[],i=0;i<n;i++)for(var s=r[3*i+0],a=r[3*i+1],f=r[3*i+2],h=0;h<s;h++)o.push(new c(a,f));return o},c.getRsBlockTable=function(t,e){switch(e){case n.L:return c.RS_BLOCK_TABLE[4*(t-1)+0];case n.M:return c.RS_BLOCK_TABLE[4*(t-1)+1];case n.Q:return c.RS_BLOCK_TABLE[4*(t-1)+2];case n.H:return c.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},f.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var h=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];function u(){var t=!1,e=navigator.userAgent;if(/android/i.test(e)){t=!0;var r=e.toString().match(/android ([0-9]\.[0-9])/i);r&&r[1]&&(t=parseFloat(r[1]))}return t}var l=function(){var t=function(t,e){this.ot=t,this.it=e};return t.prototype.draw=function(t){var e=this.it,r=this.ot,n=t.getModuleCount();function o(t,e){var r=document.createElementNS('http://www.w3.org/2000/svg',t);for(var n in e)e.hasOwnProperty(n)&&r.setAttribute(n,e[n]);return r}Math.floor(e.width/n),Math.floor(e.height/n),this.clear();var i=o('svg',{viewBox:'0 0 '+String(n)+' '+String(n),width:'100%',height:'100%',fill:e.colorLight});i.setAttributeNS('http://www.w3.org/2000/xmlns/','xmlns:xlink','http://www.w3.org/1999/xlink'),r.appendChild(i),i.appendChild(o('rect',{fill:e.colorLight,width:'100%',height:'100%'})),i.appendChild(o('rect',{fill:e.colorDark,width:'1',height:'1',id:'template'}));for(var s=0;s<n;s++)for(var a=0;a<n;a++)if(t.isDark(s,a)){var c=o('use',{x:String(a),y:String(s)});c.setAttributeNS('http://www.w3.org/1999/xlink','href','#template'),i.appendChild(c)}},t.prototype.clear=function(){for(;this.ot.hasChildNodes();)this.ot.removeChild(this.ot.lastChild)},t}(),d='svg'===document.documentElement.tagName.toLowerCase()?l:'undefined'==typeof CanvasRenderingContext2D?function(){var t=function(t,e){this.ot=t,this.it=e};return t.prototype.draw=function(t){for(var e=this.it,r=this.ot,n=t.getModuleCount(),o=Math.floor(e.width/n),i=Math.floor(e.height/n),s=['<table style="border:0;border-collapse:collapse;">'],a=0;a<n;a++){s.push('<tr>');for(var c=0;c<n;c++)s.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+o+'px;height:'+i+'px;background-color:'+(t.isDark(a,c)?e.colorDark:e.colorLight)+';"></td>');s.push('</tr>')}s.push('</table>'),r.innerHTML=s.join('');var f=r.childNodes[0],h=(e.width-f.offsetWidth)/2,u=(e.height-f.offsetHeight)/2;h>0&&u>0&&(f.style.margin=u+'px '+h+'px')},t.prototype.clear=function(){this.ot.innerHTML=''},t}():function(){function t(){this.st.src=this.ct.toDataURL('image/png'),this.st.style.display='block',this.ct.style.display='none'}function e(t,e){var r=this;if(r.ft=e,r.ht=t,null===r.ut){var n=document.createElement('img'),o=function(){r.ut=!1,r.ft&&r.ft.call(r)};return n.onabort=o,n.onerror=o,n.onload=function(){r.ut=!0,r.ht&&r.ht.call(r)},void(n.src='data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==')}!0===r.ut&&r.ht?r.ht.call(r):!1===r.ut&&r.ft&&r.ft.call(r)}var r=function(t,e){this.lt=!1,this.dt=u(),this.it=e,this.ct=document.createElement('canvas'),this.ct.width=e.width,this.ct.height=e.height,t.appendChild(this.ct),this.ot=t,this.vt=this.ct.getContext('2d'),this.lt=!1,this.st=document.createElement('img'),this.st.alt='Scan me!',this.st.style.display='none',this.ot.appendChild(this.st),this.ut=null};return r.prototype.draw=function(t){var e=this.st,r=this.vt,n=this.it,o=t.getModuleCount(),i=n.width/o,s=n.height/o,a=Math.round(i),c=Math.round(s);e.style.display='none',this.clear();for(var f=0;f<o;f++)for(var h=0;h<o;h++){var u=t.isDark(f,h),l=h*i,d=f*s;r.strokeStyle=u?n.colorDark:n.colorLight,r.lineWidth=1,r.fillStyle=u?n.colorDark:n.colorLight,r.fillRect(l,d,i,s),r.strokeRect(Math.floor(l)+.5,Math.floor(d)+.5,a,c),r.strokeRect(Math.ceil(l)-.5,Math.ceil(d)-.5,a,c)}this.lt=!0},r.prototype.makeImage=function(){this.lt&&e.call(this,t)},r.prototype.isPainted=function(){return this.lt},r.prototype.clear=function(){this.vt.clearRect(0,0,this.ct.width,this.ct.height),this.lt=!1},r.prototype.round=function(t){return t?Math.floor(1e3*t)/1e3:t},r}();E=function(t,e){if(this.it={width:163,height:163,typeNumber:4,colorDark:'#000000',colorLight:'#ffffff',correctLevel:n.H},'string'==typeof e&&(e={text:e}),e)for(var r in e)this.it[r]=e[r];'string'==typeof t&&(t=document.getElementById(t)),this.it.useSVG&&(d=l),this.dt=u(),this.ot=t,this.gt=null,this.wt=new d(this.ot,this.it),this.it.text&&this.makeCode(this.it.text)},E.prototype.makeCode=function(t){this.gt=new e(function(t,e){for(var r=1,o=function(t){var e=encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g,'a');return e.length+(e.length!=t?3:0)}(t),i=0,s=h.length;i<=s;i++){var a=0;switch(e){case n.L:a=h[i][0];break;case n.M:a=h[i][1];break;case n.Q:a=h[i][2];break;case n.H:a=h[i][3]}if(o<=a)break;r++}if(r>h.length)throw new Error('Too long data');return r}(t,this.it.correctLevel),this.it.correctLevel),this.gt.addData(t),this.gt.make(),this.ot.title=t,this.wt.draw(this.gt),this.makeImage()},E.prototype.makeImage=function(){'function'==typeof this.wt.makeImage&&(!this.dt||this.dt>=3)&&this.wt.makeImage()},E.prototype.clear=function(){this.wt.clear()},E.CorrectLevel=n}();const M=t=>{const{J:e,X:r,O:o,G:s,V:c,v:f,N:h}=i.o;for(const t of o){const n=r[t]||e[t]||[];for(const r of n){const n=s[t][r];if(!n)continue;const{onAccept:o,onReject:i}=n;!n._t&&a(e[t],r)&&u(o)?(n._t=!0,o()):n._t&&!a(e[t],r)&&u(i)&&(n._t=!1,i())}}if(!i.t.manageScriptTags)return;const l=c,d=t||f.categories||[],_=(t,o)=>{if(o>=t.length)return;const i=c[o];if(i.yt)return _(t,o+1);const s=i.Ct,f=i.At,u=i.St,l=a(d,f),m=!!u&&a(e[f],u);if(!u&&!i.bt&&l||!u&&i.bt&&!l&&a(h,f)||u&&!i.bt&&m||u&&i.bt&&!m&&a(r[f]||[],u)){i.yt=!0;const e=w(s,'type',!0);p(s,'type',!!e),p(s,n);let r=w(s,'src',!0);r&&p(s,'src',!0);const a=v('script');a.textContent=s.innerHTML;for(const{nodeName:t}of s.attributes)g(a,t,s[t]||w(s,t));e&&(a.type=e),r?a.src=r:r=s.src;const c=!!r&&(!e||['text/javascript','module'].includes(e));if(c&&(a.onload=a.onerror=()=>{_(t,++o)}),s.replaceWith(a),c)return}_(t,++o)};_(l,0)},D=t=>b((()=>localStorage.removeItem(t))),T=(t,e)=>{if(e instanceof RegExp)return t.filter((t=>e.test(t)));{const r=s(t,e);return r>-1?[t[r]]:[]}},k=t=>{const{hostname:e,protocol:r}=location,{name:n,path:o,domain:s,sameSite:c,useLocalStorage:f}=i.t.cookie,h=t?(()=>{const t=i.o.A,e=t?new Date-t:0;return 864e5*y()-e})():864e5*y(),u=new Date;u.setTime(u.getTime()+h),i.o.v.expirationTime=u.getTime();const l=JSON.stringify(i.o.v);let d=n+'='+encodeURIComponent(l)+(0!==h?'; expires='+u.toUTCString():'')+'; Path='+o+'; SameSite='+c;a(e,'.')&&(d+='; Domain='+s),'https:'===r&&(d+='; Secure'),f?((t,e)=>{b((()=>localStorage.setItem(t,e)))})(n,l):document.cookie=d,i.o.v},N=(t,e,r)=>{if(0===t.length)return;const n=r||i.t.cookie.domain,o=e||i.t.cookie.path,s='www.'===n.slice(0,4),a=s&&n.substring(4),c=(t,e)=>{document.cookie=t+'=; path='+o+(e?'; domain=.'+e:'')+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;'};for(const e of t)c(e),c(e,n),s&&c(e,a)},x=t=>{const e=t||i.t.cookie.name,r=i.t.cookie.useLocalStorage;return((t,e)=>{let r;return r=b((()=>JSON.parse(e?t:decodeURIComponent(t))),!0)||{},r})(r?(n=e,b((()=>localStorage.getItem(n)))||''):P(e,!0),r);var n},P=(t,e)=>{const r=document.cookie.match('(^|;)\\s*'+t+'\\s*=\\s*([^;]+)');return r?e?r.pop():t:''},B=t=>{const e=document.cookie.split(/;\s*/),r=[];for(const n of e){let e=n.split('=')[0];t?b((()=>{t.test(e)&&r.push(e)})):r.push(e)}return r};window.QRCode=E;const L=(t,n=[])=>{((t,e)=>{const{O:r,j:n,R:o,Et:s,K:h,G:u}=i.o;let d=[];if(t){c(t)?d.push(...t):f(t)&&(d='all'===t?r:[t]);for(const t of r)h[t]=a(d,t)?l(u[t]):[]}else d=n;d=d.filter((t=>!a(r,t)||!a(e,t))),d.push(...o),A(d)})(t,n),(t=>{const e=i.o,{K:r,R:n,J:o,G:s,O:c}=e,f=c;e.Y=_(o);for(const t of f){const e=s[t],i=l(e),c=r[t]&&r[t].length>0,f=a(n,t);if(0!==i.length){if(o[t]=[],f)o[t].push(...i);else if(c){const e=r[t];o[t].push(...e)}else o[t]=[];o[t]=d(o[t])}}})(),(()=>{const t=i.o;t.N=i.t.mode===r&&t.D?C(t.U,t.j):C(t.j,t.v.categories);let n=t.N.length>0,o=!1;for(const e of t.O)t.X[e]=C(t.J[e],t.Y[e]),t.X[e].length>0&&(o=!0);t.C||(t.C=new Date),t.S||(t.S=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(t=>(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)))),t.v={categories:_(t.j),revision:i.t.revision,data:t.m,consentTimestamp:t.C.toISOString(),consentId:t.S,services:_(t.J)};let s=!1;const c=n||o;(t.D||c)&&(t.D&&(t.D=!1,s=!0),t.A=t.A?new Date:t.C,t.v.lastConsentTimestamp=t.A.toISOString(),k(),i.t.autoClearCookies&&(s||c)&&(t=>{const e=i.o,r=B(),n=(t=>{const e=i.o;return(t?e.O:e.N).filter((t=>{const r=e.I[t];return!!r&&!r.readOnly&&!!r.autoClear}))})(t);for(const t in e.X)for(const n of e.X[t]){const o=e.G[t][n].cookies;if(!a(e.J[t],n)&&o)for(const t of o){const e=T(r,t.name);N(e,t.path,t.domain)}}for(const o of n){const n=e.I[o].autoClear,i=n&&n.cookies||[],s=a(e.N,o),c=!a(e.j,o),f=s&&c;if(t?c:f){n.reloadPage&&f&&(e.P=!0);for(const t of i){const e=T(r,t.name);N(e,t.path,t.domain)}}}})(s),M()),s&&(S(i.W.Z),S(i.W.$),i.t.mode===e)||(c&&S(i.W.tt),t.P&&(t.P=!1,location.reload()))})()},I=(t,e,r)=>{let n=[];const o=t=>{if(f(t)){let e=P(t);''!==e&&n.push(e)}else n.push(...B(t))};if(c(t))for(let e of t)o(e);else o(t);N(n,e,r)},O=(t,e)=>{const r=x(e);return t?r[t]:r},j=()=>!i.o.D;t.acceptCategory=L,t.acceptService=(t,e)=>{const{O:r,G:n}=i.o;if(!(t&&e&&f(e)&&a(r,e)&&0!==l(n[e]).length))return!1;L()},t.acceptedCategory=t=>{const e=i.o.D?[]:i.o.j;return a(e,t)},t.acceptedService=(t,e)=>{const r=i.o.D?[]:i.o.J[e];return a(r,t)},t.eraseCookies=I,t.getConfig=t=>{const e=i.t,r=i.o.i;return t?e[t]||r[t]:{...e,...r,cookie:{...e.cookie}}},t.getCookie=O,t.getUserPreferences=()=>{const{B:t,J:e}=i.o,{accepted:r,rejected:n}=(()=>{const{D:t,j:e,O:r}=i.o;return{accepted:e,rejected:t?[]:r.filter((t=>!a(e,t)))}})();return _({acceptType:t,acceptedCategories:r,rejectedCategories:n,acceptedServices:e,rejectedServices:m()})},t.loadScript=(t,e)=>{let r=document.querySelector('script[src="'+t+'"]');return new Promise((n=>{if(r)return n(!0);if(r=v('script'),h(e))for(const t in e)g(r,t,e[t]);var o,i;r.onload=()=>n(!0),r.onerror=()=>{r.remove(),n(!1)},r.src=t,o=document.head,i=r,o.appendChild(i)}))},t.reset=t=>{const{name:e,path:r,domain:n,useLocalStorage:s}=i.t.cookie;t&&(s?D(e):I(e,r,n));for(const{Mt:t,Dt:e,Tt:r}of i.o.p)t.removeEventListener(e,r);const a=new o;for(const t in i)i[t]=a[t];window._ccRun=!1},t.run=async t=>{const{o:e,t:o,W:s}=i,u=window;if(!u._ccRun){if(u._ccRun=!0,(t=>{const{kt:e,t:o,o:s}=i,c=o,f=s,{cookie:u}=c,d=i.q,v=t.cookie,g=t.categories,p=l(g)||[],_=navigator,m=document;e.Nt=m,u.domain=location.hostname,f.i=t,f.I=g,f.O=p,d.Z=t.onFirstConsent,d.$=t.onConsent,d.tt=t.onChange;const{mode:y,autoClearCookies:C,revision:A,manageScriptTags:S,hideFromBots:b}=t;y===r&&(c.mode=y),'boolean'==typeof C&&(c.autoClearCookies=C),'boolean'==typeof S&&(c.manageScriptTags=S),'number'==typeof A&&A>=0&&(c.revision=A,f.T=!0),!1===b&&(c.hideFromBots=!1),!0===c.hideFromBots&&_&&(f.F=_.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(_.userAgent)||_.webdriver),h(v)&&(c.cookie={...u,...v}),c.autoClearCookies,f.T,c.manageScriptTags,(t=>{const{I:e,G:r,J:n,K:o,R:s}=i.o;for(let a of t){const t=e[a],c=t.services||{},f=h(c)&&l(c)||[];r[a]={},n[a]=[],o[a]=[],t.readOnly&&(s.push(a),n[a]=f),i.kt.xt[a]={};for(let t of f){const e=c[t];e._t=!1,r[a][t]=e}}})(p),(()=>{if(!i.t.manageScriptTags)return;const t=i.o,e=(r=document,o='script['+n+']',r.querySelectorAll(o));var r,o;for(const r of e){let e=w(r,n),o=r.dataset.service||'',i=!1;if(e&&'!'===e.charAt(0)&&(e=e.slice(1),i=!0),'!'===o.charAt(0)&&(o=o.slice(1),i=!0),a(t.O,e)&&(t.V.push({Ct:r,yt:!1,bt:i,At:e,St:o}),o)){const r=t.G[e];r[o]||(r[o]={_t:!1})}}})()})(t),e.F)return;if((()=>{const t=i.o,e=i.t,n=x(),{categories:o,services:s,consentId:a,consentTimestamp:h,lastConsentTimestamp:u,data:l,revision:d}=n,v=c(o);t.v=n,t.S=a;const g=!!a&&f(a);t.C=h,t.C&&(t.C=new Date(h)),t.A=u,t.A&&(t.A=new Date(u)),t.m=void 0!==l?l:null,t.T&&g&&d!==e.revision&&(t.k=!1),t.D=!(g&&t.k&&t.C&&t.A&&v),e.cookie.useLocalStorage&&!t.D&&(t.D=(new Date).getTime()>(n.expirationTime||0),t.D&&D(e.cookie.name)),t.D,(()=>{const t=i.o;for(const e of t.O){const n=t.I[e];if(n.readOnly||n.enabled&&t.i.mode===r){t.U.push(e);const r=t.G[e]||{};for(let n in r)t.J[e].push(n)}}})(),t.D?e.mode===r&&(t.j=[...t.U]):(t.J={...t.J,...s},A([...t.R,...o])),t.K={...t.J}})(),j())return M(),S(s.$);o.mode===r&&M(e.U)}},t.setCookieData=t=>{let e,r=t.value,n=t.mode,o=!1;const s=i.o;if('update'===n){s.m=e=O('data');const t=typeof e==typeof r;if(t&&'object'==typeof e){!e&&(e={});for(let t in r)e[t]!==r[t]&&(e[t]=r[t],o=!0)}else!t&&e||e===r||(e=r,o=!0)}else e=r,o=!0;return o&&(s.m=e,s.v.data=e,k(!0)),o},t.validConsent=j,t.validCookie=t=>''!==P(t,!0)},'object'==typeof exports&&'undefined'!=typeof module?e(exports):'function'==typeof define&&define.amd?define(['exports'],e):e((t='undefined'!=typeof globalThis?globalThis:t||self).CookieConsent={});

import{cM as f,r as S,j as ae,p as se}from"./main-e8681952.js";function d(n,e=-1/0,a=1/0){return Math.min(Math.max(n,e),a)}function p(n,e){let a=n,t=e.toString(),s=t.indexOf("."),r=s>=0?t.length-s:0;if(r>0){let h=Math.pow(10,r);a=Math.round(a*h)/h}return a}function be(n,e,a,t){e=Number(e),a=Number(a);let s=(n-(isNaN(e)?0:e))%t,r=p(Math.abs(s)*2>=t?n+Math.sign(s)*(t-Math.abs(s)):n-s,t);return isNaN(e)?!isNaN(a)&&r>a&&(r=Math.floor(p(a/t,t))*t):r<e?r=e:!isNaN(a)&&r>a&&(r=e+Math.floor(p((a-e)/t,t))*t),r=p(r,t),r}function l(n,e,a=10){const t=Math.pow(a,e);return Math.round(n*t)/t}class re{getStringForLocale(e,a){let t=this.strings[a];t||(t=ne(a,this.strings,this.defaultLocale),this.strings[a]=t);let s=t[e];if(!s)throw new Error(`Could not find intl message ${e} in ${a} locale`);return s}constructor(e,a="en-US"){this.strings={...e},this.defaultLocale=a}}function ne(n,e,a="en-US"){if(e[n])return e[n];let t=ie(n);if(e[t])return e[t];for(let s in e)if(s.startsWith(t+"-"))return e[s];return e[a]}function ie(n){return Intl.Locale?new Intl.Locale(n).language:n.split("-")[0]}function he(n){return n&&n.__esModule?n.default:n}var w={},m={};m={alpha:"ألفا",blue:"أزرق",brightness:"السطوع",green:"أخضر",hue:"درجة اللون",lightness:"الإضاءة",red:"أحمر",saturation:"التشبع"};var v={};v={alpha:"Алфа",blue:"Синьо",brightness:"Яркост",green:"Зелено",hue:"Оттенък",lightness:"Лекота",red:"Червено",saturation:"Наситеност"};var C={};C={alpha:"Alfa",blue:"Modrá",brightness:"Jas",green:"Zelená",hue:"Odstín",lightness:"Světlost",red:"Červená",saturation:"Sytost"};var V={};V={alpha:"Alfa",blue:"Blå",brightness:"Lysstyrke",green:"Grøn",hue:"Tone",lightness:"Lyshed",red:"Rød",saturation:"Farvemætning"};var k={};k={alpha:"Alpha",blue:"Blau",brightness:"Helligkeit",green:"Grün",hue:"Farbton",lightness:"Leuchtkraft",red:"Rot",saturation:"Sättigung"};var y={};y={alpha:"Άλφα",blue:"Μπλε",brightness:"Φωτεινότητα",green:"Πράσινο",hue:"Τόνος",lightness:"Φωτεινότητα",red:"Κόκκινο",saturation:"Κορεσμός"};var M={};M={hue:"Hue",saturation:"Saturation",lightness:"Lightness",brightness:"Brightness",red:"Red",green:"Green",blue:"Blue",alpha:"Alpha"};var L={};L={alpha:"Alpha",blue:"Azul",brightness:"Brillo",green:"Verde",hue:"Tono",lightness:"Luminosidad",red:"Rojo",saturation:"Saturación"};var R={};R={alpha:"Alfa",blue:"Sinine",brightness:"Heledus",green:"Roheline",hue:"Värv",lightness:"Valgus",red:"Punane",saturation:"Küllastus"};var A={};A={alpha:"Alpha",blue:"Sininen",brightness:"Kirkkaus",green:"Vihreä",hue:"Sävy",lightness:"Valomäärä",red:"Punainen",saturation:"Värikylläisyys"};var F={};F={alpha:"Alpha",blue:"Bleu",brightness:"Luminosité",green:"Vert",hue:"Teinte",lightness:"Luminosité",red:"Rouge",saturation:"Saturation"};var N={};N={alpha:"אלפא",blue:"כחול",brightness:"בהירות",green:"ירוק",hue:"גוון",lightness:"כמות אור",red:"אדום",saturation:"רוויה"};var B={};B={alpha:"Alfa",blue:"Plava",brightness:"Svjetlina",green:"Zelena",hue:"Nijansa",lightness:"Osvijetljenost",red:"Crvena",saturation:"Zasićenost"};var E={};E={alpha:"Alfa",blue:"Kék",brightness:"Fényesség",green:"Zöld",hue:"Színárnyalat",lightness:"Világosság",red:"Piros",saturation:"Telítettség"};var z={};z={alpha:"Alfa",blue:"Blu",brightness:"Luminosità",green:"Verde",hue:"Tonalità",lightness:"Luminosità",red:"Rosso",saturation:"Saturazione"};var j={};j={alpha:"アルファ",blue:"青",brightness:"明るさ",green:"緑",hue:"色相",lightness:"明度",red:"赤",saturation:"彩度"};var H={};H={alpha:"알파",blue:"파랑",brightness:"명도",green:"초록",hue:"색조",lightness:"밝기",red:"빨강",saturation:"채도"};var U={};U={alpha:"Alfa",blue:"Mėlyna",brightness:"Ryškumas",green:"Žalia",hue:"Atspalvis",lightness:"Šviesumas",red:"Raudona",saturation:"Įsotinimas"};var G={};G={alpha:"Alfa",blue:"Zila",brightness:"Spilgtums",green:"Zaļa",hue:"Nokrāsa",lightness:"Gaišums",red:"Sarkana",saturation:"Piesātinājums"};var I={};I={alpha:"Alfa",blue:"Blå",brightness:"Lysstyrke",green:"Grønn",hue:"Fargetone",lightness:"Lyshet",red:"Rød",saturation:"Metning"};var O={};O={alpha:"Alfa",blue:"Blauw",brightness:"Helderheid",green:"Groen",hue:"Kleurtoon",lightness:"Lichtsterkte",red:"Rood",saturation:"Verzadiging"};var T={};T={alpha:"Alfa",blue:"Niebieski",brightness:"Jasność",green:"Zielony",hue:"Odcień",lightness:"Jaskrawość",red:"Czerwony",saturation:"Nasycenie"};var Z={};Z={alpha:"Alfa",blue:"Azul",brightness:"Brilho",green:"Verde",hue:"Matiz",lightness:"Luminosidade",red:"Vermelho",saturation:"Saturação"};var P={};P={alpha:"Alfa",blue:"Azul",brightness:"Luminosidade",green:"Verde",hue:"Tonalidade",lightness:"Claridade",red:"Vermelho",saturation:"Saturação"};var K={};K={alpha:"Alfa",blue:"Albastru",brightness:"Luminozitate",green:"Verde",hue:"Nuanță",lightness:"Luminozitate",red:"Roșu",saturation:"Saturație"};var D={};D={alpha:"Альфа",blue:"Синий",brightness:"Яркость",green:"Зеленый",hue:"Оттенок",lightness:"Освещенность",red:"Красный",saturation:"Насыщенность"};var J={};J={alpha:"Alfa",blue:"Modrá",brightness:"Jas",green:"Zelená",hue:"Odtieň",lightness:"Svetlosť",red:"Červená",saturation:"Sýtosť"};var X={};X={alpha:"Alfa",blue:"Modra",brightness:"Svetlost",green:"Zelena",hue:"Barva",lightness:"Lahkost",red:"Rdeča",saturation:"Nasičenost"};var W={};W={alpha:"Alfa",blue:"Plava",brightness:"Osvetljenost",green:"Zelena",hue:"Nijansa",lightness:"Osvetljenje",red:"Crvena",saturation:"Zasićenje"};var Y={};Y={alpha:"Alfa",blue:"Blått",brightness:"Ljusstyrka",green:"Grönt",hue:"Nyans",lightness:"Ljushet",red:"Rött",saturation:"Mättnad"};var q={};q={alpha:"Alfa",blue:"Mavi",brightness:"Parlaklık",green:"Yeşil",hue:"Ton",lightness:"Canlılık",red:"Kırmızı",saturation:"Doygunluk"};var Q={};Q={alpha:"Альфа",blue:"Синій",brightness:"Яскравість",green:"Зелений",hue:"Тон",lightness:"Освітленість",red:"Червоний",saturation:"Насиченість"};var _={};_={alpha:"Alpha",blue:"蓝色",brightness:"亮度",green:"绿色",hue:"色相",lightness:"明亮度",red:"红色",saturation:"饱和度"};var ee={};ee={alpha:"Alpha",blue:"藍色",brightness:"亮度",green:"綠色",hue:"色相",lightness:"明亮",red:"紅色",saturation:"飽和度"};w={"ar-AE":m,"bg-BG":v,"cs-CZ":C,"da-DK":V,"de-DE":k,"el-GR":y,"en-US":M,"es-ES":L,"et-EE":R,"fi-FI":A,"fr-FR":F,"he-IL":N,"hr-HR":B,"hu-HU":E,"it-IT":z,"ja-JP":j,"ko-KR":H,"lt-LT":U,"lv-LV":G,"nb-NO":I,"nl-NL":O,"pl-PL":T,"pt-BR":Z,"pt-PT":P,"ro-RO":K,"ru-RU":D,"sk-SK":J,"sl-SI":X,"sr-SP":W,"sv-SE":Y,"tr-TR":q,"uk-UA":Q,"zh-CN":_,"zh-TW":ee};const le=new re(he(w));function b(n){let e=u.parse(n)||g.parse(n)||c.parse(n);if(e)return e;throw new Error("Invalid color value: "+n)}class x{toHexInt(){return this.toFormat("rgb").toHexInt()}getChannelValue(e){if(e in this)return this[e];throw new Error("Unsupported color channel: "+e)}withChannelValue(e,a){if(e in this){let t=this.clone();return t[e]=a,t}throw new Error("Unsupported color channel: "+e)}getChannelName(e,a){return le.getStringForLocale(e,a)}getColorSpaceAxes(e){let{xChannel:a,yChannel:t}=e,s=a||this.getColorChannels().find(i=>i!==t),r=t||this.getColorChannels().find(i=>i!==s),h=this.getColorChannels().find(i=>i!==s&&i!==r);return{xChannel:s,yChannel:r,zChannel:h}}}class u extends x{static parse(e){let a=[];if(/^#[\da-f]+$/i.test(e)&&[4,5,7,9].includes(e.length)){const r=(e.length<6?e.replace(/[^#]/gi,"$&$&"):e).slice(1).split("");for(;r.length>0;)a.push(parseInt(r.splice(0,2).join(""),16));a[3]=a[3]!==void 0?a[3]/255:void 0}const t=e.match(/^rgba?\((.*)\)$/);t!=null&&t[1]&&(a=t[1].split(",").map(r=>Number(r.trim())),a=a.map((r,h)=>d(r,0,h<3?255:1)));var s;return a.length<3?void 0:new u(a[0],a[1],a[2],(s=a[3])!==null&&s!==void 0?s:1)}toString(e){switch(e){case"hex":return"#"+(this.red.toString(16).padStart(2,"0")+this.green.toString(16).padStart(2,"0")+this.blue.toString(16).padStart(2,"0")).toUpperCase();case"hexa":return"#"+(this.red.toString(16).padStart(2,"0")+this.green.toString(16).padStart(2,"0")+this.blue.toString(16).padStart(2,"0")+Math.round(this.alpha*255).toString(16).padStart(2,"0")).toUpperCase();case"rgb":return`rgb(${this.red}, ${this.green}, ${this.blue})`;case"css":case"rgba":return`rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;default:return this.toFormat(e).toString(e)}}toFormat(e){switch(e){case"hex":case"hexa":case"rgb":case"rgba":return this;case"hsb":case"hsba":return this.toHSB();case"hsl":case"hsla":return this.toHSL();default:throw new Error("Unsupported color conversion: rgb -> "+e)}}toHexInt(){return this.red<<16|this.green<<8|this.blue}toHSB(){const e=this.red/255,a=this.green/255,t=this.blue/255,s=Math.min(e,a,t),r=Math.max(e,a,t),h=r-s,i=r===0?0:h/r;let o=0;if(h!==0){switch(r){case e:o=(a-t)/h+(a<t?6:0);break;case a:o=(t-e)/h+2;break;case t:o=(e-a)/h+4;break}o/=6}return new g(l(o*360,2),l(i*100,2),l(r*100,2),this.alpha)}toHSL(){const e=this.red/255,a=this.green/255,t=this.blue/255,s=Math.min(e,a,t),r=Math.max(e,a,t),h=(r+s)/2,i=r-s;let o,$;if(i===0)o=$=0;else{switch($=i/(h<.5?r+s:2-r-s),r){case e:o=(a-t)/i+(a<t?6:0);break;case a:o=(t-e)/i+2;break;case t:o=(e-a)/i+4;break}o/=6}return new c(l(o*360,2),l($*100,2),l(h*100,2),this.alpha)}clone(){return new u(this.red,this.green,this.blue,this.alpha)}getChannelRange(e){switch(e){case"red":case"green":case"blue":return{minValue:0,maxValue:255,step:1,pageSize:17};case"alpha":return{minValue:0,maxValue:1,step:.01,pageSize:.1};default:throw new Error("Unknown color channel: "+e)}}formatChannelValue(e,a){let t,s=this.getChannelValue(e);switch(e){case"red":case"green":case"blue":t={style:"decimal"};break;case"alpha":t={style:"percent"};break;default:throw new Error("Unknown color channel: "+e)}return new f(a,t).format(s)}getColorSpace(){return"rgb"}getColorChannels(){return u.colorChannels}constructor(e,a,t,s){super(),this.red=e,this.green=a,this.blue=t,this.alpha=s}}u.colorChannels=["red","green","blue"];const oe=/hsb\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%)\)|hsba\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d(.\d+)?)\)/;class g extends x{static parse(e){let a;if(a=e.match(oe)){var t;const[s,r,h,i]=((t=a[1])!==null&&t!==void 0?t:a[2]).split(",").map(o=>Number(o.trim().replace("%","")));return new g(te(s,360),d(r,0,100),d(h,0,100),d(i??1,0,1))}}toString(e){switch(e){case"css":return this.toHSL().toString("css");case"hex":return this.toRGB().toString("hex");case"hexa":return this.toRGB().toString("hexa");case"hsb":return`hsb(${this.hue}, ${l(this.saturation,2)}%, ${l(this.brightness,2)}%)`;case"hsba":return`hsba(${this.hue}, ${l(this.saturation,2)}%, ${l(this.brightness,2)}%, ${this.alpha})`;default:return this.toFormat(e).toString(e)}}toFormat(e){switch(e){case"hsb":case"hsba":return this;case"hsl":case"hsla":return this.toHSL();case"rgb":case"rgba":return this.toRGB();default:throw new Error("Unsupported color conversion: hsb -> "+e)}}toHSL(){let e=this.saturation/100,a=this.brightness/100,t=a*(1-e/2);return e=t===0||t===1?0:(a-t)/Math.min(t,1-t),new c(l(this.hue,2),l(e*100,2),l(t*100,2),this.alpha)}toRGB(){let e=this.hue,a=this.saturation/100,t=this.brightness/100,s=(r,h=(r+e/60)%6)=>t-a*t*Math.max(Math.min(h,4-h,1),0);return new u(Math.round(s(5)*255),Math.round(s(3)*255),Math.round(s(1)*255),this.alpha)}clone(){return new g(this.hue,this.saturation,this.brightness,this.alpha)}getChannelRange(e){switch(e){case"hue":return{minValue:0,maxValue:360,step:1,pageSize:15};case"saturation":case"brightness":return{minValue:0,maxValue:100,step:1,pageSize:10};case"alpha":return{minValue:0,maxValue:1,step:.01,pageSize:.1};default:throw new Error("Unknown color channel: "+e)}}formatChannelValue(e,a){let t,s=this.getChannelValue(e);switch(e){case"hue":t={style:"unit",unit:"degree",unitDisplay:"narrow"};break;case"saturation":case"brightness":t={style:"percent"},s/=100;break;case"alpha":t={style:"percent"};break;default:throw new Error("Unknown color channel: "+e)}return new f(a,t).format(s)}getColorSpace(){return"hsb"}getColorChannels(){return g.colorChannels}constructor(e,a,t,s){super(),this.hue=e,this.saturation=a,this.brightness=t,this.alpha=s}}g.colorChannels=["hue","saturation","brightness"];const ue=/hsl\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%)\)|hsla\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d(.\d+)?)\)/;function te(n,e){return(n%e+e)%e}class c extends x{static parse(e){let a;if(a=e.match(ue)){var t;const[s,r,h,i]=((t=a[1])!==null&&t!==void 0?t:a[2]).split(",").map(o=>Number(o.trim().replace("%","")));return new c(te(s,360),d(r,0,100),d(h,0,100),d(i??1,0,1))}}toString(e){switch(e){case"hex":return this.toRGB().toString("hex");case"hexa":return this.toRGB().toString("hexa");case"hsl":return`hsl(${this.hue}, ${l(this.saturation,2)}%, ${l(this.lightness,2)}%)`;case"css":case"hsla":return`hsla(${this.hue}, ${l(this.saturation,2)}%, ${l(this.lightness,2)}%, ${this.alpha})`;default:return this.toFormat(e).toString(e)}}toFormat(e){switch(e){case"hsl":case"hsla":return this;case"hsb":case"hsba":return this.toHSB();case"rgb":case"rgba":return this.toRGB();default:throw new Error("Unsupported color conversion: hsl -> "+e)}}toHSB(){let e=this.saturation/100,a=this.lightness/100,t=a+e*Math.min(a,1-a);return e=t===0?0:2*(1-a/t),new g(l(this.hue,2),l(e*100,2),l(t*100,2),this.alpha)}toRGB(){let e=this.hue,a=this.saturation/100,t=this.lightness/100,s=a*Math.min(t,1-t),r=(h,i=(h+e/30)%12)=>t-s*Math.max(Math.min(i-3,9-i,1),-1);return new u(Math.round(r(0)*255),Math.round(r(8)*255),Math.round(r(4)*255),this.alpha)}clone(){return new c(this.hue,this.saturation,this.lightness,this.alpha)}getChannelRange(e){switch(e){case"hue":return{minValue:0,maxValue:360,step:1,pageSize:15};case"saturation":case"lightness":return{minValue:0,maxValue:100,step:1,pageSize:10};case"alpha":return{minValue:0,maxValue:1,step:.01,pageSize:.1};default:throw new Error("Unknown color channel: "+e)}}formatChannelValue(e,a){let t,s=this.getChannelValue(e);switch(e){case"hue":t={style:"unit",unit:"degree",unitDisplay:"narrow"};break;case"saturation":case"lightness":t={style:"percent"},s/=100;break;case"alpha":t={style:"percent"};break;default:throw new Error("Unknown color channel: "+e)}return new f(a,t).format(s)}getColorSpace(){return"hsl"}getColorChannels(){return c.colorChannels}constructor(e,a,t,s){super(),this.hue=e,this.saturation=a,this.lightness=t,this.alpha=s}}c.colorChannels=["hue","saturation","lightness"];b("#ffffff");b("hsl(0, 100%, 50%)");const ge=b("#000000"),ce=b("#FFFFFF");ge.toHexInt();ce.toHexInt();function pe(n){try{return b(`rgb(${n.split(" ").join(",")})`).toString("hex")}catch{return n}}const $e=S.memo(({bytes:n})=>ae.jsx(S.Fragment,{children:se(n)}));export{b as $,$e as F,be as a,pe as t};
//# sourceMappingURL=formatted-bytes-070efe27.js.map

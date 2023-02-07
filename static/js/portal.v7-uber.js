/*! For license information please see portal.v7-uber.js.LICENSE.txt */
  font-size: 16px;
  line-height: 1.75;
  direction: ltr;
  text-align: left;
  text-align: start;
  font-family: ${xr};
  color: ${e=>e.theme.colors.C800};
  font-style: normal;
  font-weight: normal;
  text-decoration: none;
  ${e=>{let{theme:{cssStyles:t}}=e;return t&&Cr(t.body.text1)}};
`,Ar=vr.b`
  background-attachment: scroll;
  background-color: transparent;
  background-image: none;
  background-position: 0 0;
  background-repeat: repeat;
  border-color: black;
  border-color: currentColor;
  border-radius: 0;
  border-style: none;
  border-width: medium;
  bottom: auto;
  clear: none;
  clip: auto;
  color: inherit;
  counter-increment: none;
  counter-reset: none;
  cursor: auto;
  direction: inherit;
  display: inline;
  float: none;
  font-family: inherit;
  font-size: inherit;
  font-style: inherit;
  font-variant: normal;
  font-weight: inherit;
  left: auto;
  letter-spacing: normal;
  line-height: inherit;
  margin: 0;
  max-height: none;
  max-width: none;
  min-height: 0;
  min-width: 0;
  opacity: 1;
  outline: invert none medium;
  overflow: visible;
  padding: 0;
  position: static;
  quotes: '' '';
  right: auto;
  table-layout: auto;
  text-align: inherit;
  text-decoration: inherit;
  text-indent: 0;
  text-transform: none;
  top: auto;
  unicode-bidi: normal;
  vertical-align: baseline;
  visibility: inherit;
  white-space: normal;
  word-spacing: normal;
  z-index: auto;
  /* CSS3 */
  background-origin: padding-box;
  background-clip: border-box;
  background-size: auto;
  border-image: none;
  border-radius: 0;
  box-shadow: none;
  box-sizing: border-box;
  column-count: auto;
  column-gap: normal;
  column-rule: medium none black;
  column-span: 1;
  column-width: auto;
  font-feature-settings: normal;
  overflow-x: visible;
  overflow-y: visible;
  hyphens: manual;
  perspective: none;
  perspective-origin: 50% 50%;
  backface-visibility: visible;
  text-shadow: none;
  transition: all 0s ease 0s;
  transform: none;
  transform-origin: 50% 50%;
  transform-style: flat;
  word-break: normal;
  ${kr};
`,Or=vr.b`
  font-size: inherit;
  line-height: inherit;
`,Sr=vr.b`
  display: block;
  height: auto;
  width: auto;
  /* These are technically the same, but use both */
  overflow-wrap: break-word;
  word-wrap: break-word;
`,Tr=vr.c.div`
  ${Ar};
  ${Sr};
  ${Or};
`;Tr.displayName="CS.Div";const jr=vr.b`
  ${Ar};
  color: ${e=>e.theme.linkColor};
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  ${Or} > code {
    color: ${e=>e.theme.linkColor};
    border: none;
    background: none;
  }
  &:visited {
    opacity: 0.8;
  }
  &:active,
  &:hover {
    outline: 0;
    text-decoration: underline;
  }
  &:hover,
  &:focus {
    opacity: 0.8;
    color: ${e=>e.theme.linkColor};
  }
  &:focus {
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
  }
`,Dr=vr.c.a`
  ${jr};
`;Dr.displayName="CS.A";const Mr=vr.b`
  padding: 0;
  ${Or} color: inherit;
  white-space: pre-wrap;
  background-color: transparent;
  border-radius: 0;
`,Nr=vr.b`
  ${Ar};
  ${Mr};
  ${e=>{let{theme:{cssStyles:t}}=e;return t&&Cr(t.code.blockCode)}};
`,Pr=vr.b`
  ${Ar};
  ${Mr};
  ${e=>{let{theme:{cssStyles:t}}=e;return t&&Cr(t.code.inlineCode)}};
`,Rr=vr.c.code`
  ${Pr};
  color: ${e=>{let{theme:{colors:t}}=e;return t.C700}};
  background: ${e=>{let{theme:{colors:t}}=e;return t.C200}};
  border: 1px solid ${e=>{let{theme:{colors:t}}=e;return t.C300}};
  border-radius: 4px;
  padding: 1px 5px;
  ${Dr} & {
    cursor: pointer;
  }
`;Rr.displayName="CS.InlineCode";const Lr=vr.b`
  padding: 16px;
  margin: 0 0 10px;
  word-wrap: break-word;
  word-break: break-word;
  background-color: ${e=>e.theme.colors.C200};
`,Ir=vr.c.pre`
  ${Ar};
  ${Lr};
  ${Sr};
  code {
    ${Nr};
  }
`;Ir.displayName="CS.Pre";const Fr=vr.c.hr`
  ${Ar};
  ${Sr};
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid ${e=>e.theme.colors.C300};
  height: 0;
`;Fr.displayName="CS.Hr";const Br=vr.c.img`
  max-width: 100%;
  max-height: 100%;
  border: 0;
  vertical-align: middle;
`;Br.displayName="CS.Img";const Hr=vr.c.strong`
  font-weight: 500;
  ${Or};
  color: inherit;
`;Hr.displayName="CS.Strong";const zr=vr.c.em`
  font-style: italic;
  ${Or};
  font-weight: inherit;
  color: inherit;

  > ${Hr} {
    font-style: inherit;
  }
`;zr.displayName="CS.Em";const Ur=vr.c.span`
  ${Ar};
`;Ur.displayName="CS.Span";const $r=vr.b`
  ${Ar};
  height: 32px;
  font: inherit;
  font-weight: 400;
  font-size: 13.33px;
  padding: 0 24px;
  line-height: 30px;
  display: flex;
  text-align: center;
  border: 1px solid transparent;
  border-color: 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  white-space: no-wrap;
  -webkit-appearance: none;
  outline: initial;
  vertical-align: middle;
  user-select: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
  @media screen and (max-width: 1200px) {
    padding: 0 12px;
  }
  &:hover,
  &:visited,
  &:focus {
    /* IE 8 */
    -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=85)';

    /* IE 5-7 */
    filter: alpha(opacity=85);

    /* Netscape */
    -moz-opacity: 0.85;

    /* Safari 1.x */
    -khtml-opacity: 0.85;

    /* Good browsers */
    opacity: 0.85;
    text-decoration: none !important;
  }
`,Wr=vr.c.button`
  ${$r};
`;Wr.displayName="CS.Button";const Vr=vr.c.p`
  ${Ar};
  ${Sr};
  margin: 20px 0;
  color: ${e=>e.theme.colors.C800};
  ${Or}
  ${Rr}, ${Dr} {
    font-size: inherit;
    line-height: inherit;
  }

  &.display-block {
    img {
      max-width: 100%;
      display: block;
      margin: 30px auto;
    }
  }
`;Vr.displayName="CS.P";const Gr=vr.b`
  ${Ar};
  ${Sr};
  font-weight: 500;
  margin: 60px 0 20px;
  color: ${e=>e.theme.colors.C900};
  ${e=>{let{theme:{cssStyles:t}}=e;return t&&Cr(t.headings.h1)}};
  ${Rr}, ${Dr} {
    font-size: inherit;
    line-height: inherit;
  }

  .heading-markdown {
    display: inline;
  }

  > .heading-link {
    display: none;
    margin-left: 5px;
    transition: opacity 1s;
  }

  :hover {
    .heading-link {
      display: initial;
    }
  }
`,qr=vr.c.h1`
  ${Gr};
`;qr.displayName="CS.H1";const Yr=vr.c.h2`
  ${Gr};
  ${e=>{let{theme:{cssStyles:t}}=e;return t&&Cr(t.headings.h2)}};
`;Yr.displayName="CS.H2";const Kr=vr.c.h3`
  ${Gr};
  ${e=>{let{theme:{cssStyles:t}}=e;return t&&Cr(t.headings.h3)}};
`;Kr.displayName="CS.H3";const Qr=vr.c.h4`
  ${Gr};
  ${e=>{let{theme:{cssStyles:t}}=e;return t&&Cr(t.headings.h4)}};
`;Qr.displayName="CS.H4";const Zr=vr.c.h5`
  ${Gr};
  ${e=>{let{theme:{cssStyles:t}}=e;return t&&Cr(t.headings.h5)}};
`;Zr.displayName="CS.H5";const Xr=vr.c.h6`
  ${Gr};
  ${e=>{let{theme:{cssStyles:t}}=e;return t&&Cr(t.headings.h6)}};
`;Xr.displayName="CS.H6";const Jr=vr.b`
  ${Vr}, ${qr} {
    margin: 0;
  }
`,eo=vr.c.blockquote`
  ${Ar};
  ${Sr};
  margin: 20px 0;
  padding: 10px 20px;
  border-left: 4px solid ${e=>e.theme.colors.C300};
  quotes: none;
  ${Or};
  ${Jr};
  &:before,
  &:after {
    content: '';
  }
`;eo.displayName="CS.Blockquote";const to=vr.b`
  ${Ar};
  ${Sr};
  margin: 20px 0;
  padding-left: 22px;
  ${Or} list-style-position: outside;
  list-style-image: none;
  ul,
  ol {
    margin: 10px 0;
  }
`,no=vr.c.ul`
  ${to};
`;no.displayName="CS.Ul";const ro=vr.c.ol`
  ${to};
`;ro.displayName="CS.Ol";const oo=vr.c.li`
  ${Ar};
  display: list-item;
  min-height: auto;
  min-width: auto;
  padding: 0;
  margin: 0;
  margin-bottom: 2px;
  ${Or} &:before,
   &:after {
    content: '';
  }
  ${Jr};
  ${Rr}, ${Dr} {
    font-size: inherit;
    line-height: inherit;
  }
  .code-with-copy {
    margin: 8px 0;
  }
`;oo.displayName="CS.Li";const io=Object(vr.c)(oo)`
  list-style-type: none;
  margin-left: -20px;
  margin-bottom: 3px;
`;io.displayName="CS.CheckedLi";const ao=vr.c.table`
  ${Ar};
  display: table;
  width: 100%;
  max-width: 100%;
  margin: 20px 0;
  border-collapse: separate;
  border-spacing: 0;
  text-align: left;
  border-radius: 4px 4px 0 0;
  font-size: ${e=>e.theme.cssStyles.body.text2.fontSize};
  line-height: ${e=>e.theme.cssStyles.body.text2.lineHeight};
  overflow-y: hidden;
  ${Jr};
`;ao.displayName="CS.Table";const so=vr.c.tbody`
  ${Ar};
  display: table-row-group;
  vertical-align: middle;
  border-spacing: 0;
  border-collapse: separate;
  ${Or};
`;so.displayName="CS.Tbody";const lo=vr.c.thead`
  ${Ar};
  display: table-header-group;
  vertical-align: middle;
  ${Or};
`;lo.displayName="CS.Thead";const co=vr.c.tr`
  ${Ar};
  display: table-row;
  word-wrap: break-word;
  ${Or};
`;co.displayName="CS.Tr";const uo=vr.c.th`
  ${Ar};
  padding: 16px;
  display: table-cell;
  text-align: left;
  font-weight: 500;
  border-top: 0;
  vertical-align: middle;
  word-wrap: break-word;
  ${Or};
  ${Jr};
  color: ${e=>{let{theme:t}=e;return t.colors.C600}};
`;uo.displayName="CS.Th";const po=vr.c.td`
  ${Ar};
  display: table-cell;
  padding: 16px;
  vertical-align: top;
  word-wrap: break-word;
  ${Or};
  ${Jr};
`;po.displayName="CS.Td";const fo={Table:ao,Thead:lo,Tbody:so,Th:uo,Td:po,Tr:co},ho=vr.c.select`
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  cursor: default;
  background: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  align-items: center;
  white-space: pre;
`;ho.displayName="CS.Select";const mo=vr.c.svg`
  fill: '#000';
  pointer-events: none;
`;function go(e){return go=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},go(e)}ho.displayName="CS.Svg";var vo=n(82);function bo(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function yo(e,t,n){return yo=bo()?Reflect.construct.bind():function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&Object(vo.a)(o,n.prototype),o},yo.apply(null,arguments)}function xo(e){var t="function"===typeof Map?new Map:void 0;return xo=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return yo(e,arguments,go(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),Object(vo.a)(r,e)},xo(e)}var Eo=function(e){function t(t){return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+t+" for more information.")||this)}return Object(en.a)(t,e),t}(xo(Error));function _o(e){return Math.round(255*e)}function Co(e,t,n){return _o(e)+","+_o(t)+","+_o(n)}function wo(e,t,n,r){if(void 0===r&&(r=Co),0===t)return r(n,n,n);var o=(e%360+360)%360/60,i=(1-Math.abs(2*n-1))*t,a=i*(1-Math.abs(o%2-1)),s=0,l=0,c=0;o>=0&&o<1?(s=i,l=a):o>=1&&o<2?(s=a,l=i):o>=2&&o<3?(l=i,c=a):o>=3&&o<4?(l=a,c=i):o>=4&&o<5?(s=a,c=i):o>=5&&o<6&&(s=i,c=a);var u=n-i/2;return r(s+u,l+u,c+u)}var ko={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};var Ao=/^#[a-fA-F0-9]{6}$/,Oo=/^#[a-fA-F0-9]{8}$/,So=/^#[a-fA-F0-9]{3}$/,To=/^#[a-fA-F0-9]{4}$/,jo=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,Do=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,Mo=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,No=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function Po(e){if("string"!==typeof e)throw new Eo(3);var t=function(e){if("string"!==typeof e)return e;var t=e.toLowerCase();return ko[t]?"#"+ko[t]:e}(e);if(t.match(Ao))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(Oo)){var n=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:n}}if(t.match(So))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(To)){var r=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:r}}var o=jo.exec(t);if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10)};var i=Do.exec(t.substring(0,50));if(i)return{red:parseInt(""+i[1],10),green:parseInt(""+i[2],10),blue:parseInt(""+i[3],10),alpha:parseFloat(""+i[4])>1?parseFloat(""+i[4])/100:parseFloat(""+i[4])};var a=Mo.exec(t);if(a){var s="rgb("+wo(parseInt(""+a[1],10),parseInt(""+a[2],10)/100,parseInt(""+a[3],10)/100)+")",l=jo.exec(s);if(!l)throw new Eo(4,t,s);return{red:parseInt(""+l[1],10),green:parseInt(""+l[2],10),blue:parseInt(""+l[3],10)}}var c=No.exec(t.substring(0,50));if(c){var u="rgb("+wo(parseInt(""+c[1],10),parseInt(""+c[2],10)/100,parseInt(""+c[3],10)/100)+")",p=jo.exec(u);if(!p)throw new Eo(4,t,u);return{red:parseInt(""+p[1],10),green:parseInt(""+p[2],10),blue:parseInt(""+p[3],10),alpha:parseFloat(""+c[4])>1?parseFloat(""+c[4])/100:parseFloat(""+c[4])}}throw new Eo(5)}function Ro(e){return function(e){var t,n=e.red/255,r=e.green/255,o=e.blue/255,i=Math.max(n,r,o),a=Math.min(n,r,o),s=(i+a)/2;if(i===a)return void 0!==e.alpha?{hue:0,saturation:0,lightness:s,alpha:e.alpha}:{hue:0,saturation:0,lightness:s};var l=i-a,c=s>.5?l/(2-i-a):l/(i+a);switch(i){case n:t=(r-o)/l+(r<o?6:0);break;case r:t=(o-n)/l+2;break;default:t=(n-r)/l+4}return t*=60,void 0!==e.alpha?{hue:t,saturation:c,lightness:s,alpha:e.alpha}:{hue:t,saturation:c,lightness:s}}(Po(e))}var Lo=function(e){return 7===e.length&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e};function Io(e){var t=e.toString(16);return 1===t.length?"0"+t:t}function Fo(e){return Io(Math.round(255*e))}function Bo(e,t,n){return Lo("#"+Fo(e)+Fo(t)+Fo(n))}function Ho(e,t,n){return wo(e,t,n,Bo)}function zo(e,t,n){if("number"===typeof e&&"number"===typeof t&&"number"===typeof n)return Ho(e,t,n);if("object"===typeof e&&void 0===t&&void 0===n)return Ho(e.hue,e.saturation,e.lightness);throw new Eo(1)}function Uo(e,t,n,r){if("number"===typeof e&&"number"===typeof t&&"number"===typeof n&&"number"===typeof r)return r>=1?Ho(e,t,n):"rgba("+wo(e,t,n)+","+r+")";if("object"===typeof e&&void 0===t&&void 0===n&&void 0===r)return e.alpha>=1?Ho(e.hue,e.saturation,e.lightness):"rgba("+wo(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new Eo(2)}function $o(e,t,n){if("number"===typeof e&&"number"===typeof t&&"number"===typeof n)return Lo("#"+Io(e)+Io(t)+Io(n));if("object"===typeof e&&void 0===t&&void 0===n)return Lo("#"+Io(e.red)+Io(e.green)+Io(e.blue));throw new Eo(6)}function Wo(e,t,n,r){if("string"===typeof e&&"number"===typeof t){var o=Po(e);return"rgba("+o.red+","+o.green+","+o.blue+","+t+")"}if("number"===typeof e&&"number"===typeof t&&"number"===typeof n&&"number"===typeof r)return r>=1?$o(e,t,n):"rgba("+e+","+t+","+n+","+r+")";if("object"===typeof e&&void 0===t&&void 0===n&&void 0===r)return e.alpha>=1?$o(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")";throw new Eo(7)}function Vo(e){if("object"!==typeof e)throw new Eo(8);if(function(e){return"number"===typeof e.red&&"number"===typeof e.green&&"number"===typeof e.blue&&"number"===typeof e.alpha}(e))return Wo(e);if(function(e){return"number"===typeof e.red&&"number"===typeof e.green&&"number"===typeof e.blue&&("number"!==typeof e.alpha||"undefined"===typeof e.alpha)}(e))return $o(e);if(function(e){return"number"===typeof e.hue&&"number"===typeof e.saturation&&"number"===typeof e.lightness&&"number"===typeof e.alpha}(e))return Uo(e);if(function(e){return"number"===typeof e.hue&&"number"===typeof e.saturation&&"number"===typeof e.lightness&&("number"!==typeof e.alpha||"undefined"===typeof e.alpha)}(e))return zo(e);throw new Eo(8)}function Go(e,t,n){return function(){var r=n.concat(Array.prototype.slice.call(arguments));return r.length>=t?e.apply(this,r):Go(e,t,r)}}function qo(e){return Go(e,e.length,[])}function Yo(e,t,n){return Math.max(e,Math.min(t,n))}function Ko(e,t){if("transparent"===t)return t;var n=Ro(t);return Vo(rn({},n,{lightness:Yo(0,1,n.lightness-parseFloat(e))}))}var Qo=qo(Ko);function Zo(e){if("transparent"===e)return 0;var t=Po(e),n=Object.keys(t).map((function(e){var n=t[e]/255;return n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)})),r=n[0],o=n[1],i=n[2];return parseFloat((.2126*r+.7152*o+.0722*i).toFixed(3))}function Xo(e,t){var n=Zo(e),r=Zo(t);return parseFloat((n>r?(n+.05)/(r+.05):(r+.05)/(n+.05)).toFixed(2))}var Jo="#000",ei="#fff";const ti=e=>{const{primaryColor:t,colors:n}=e;return"#0c7ff2"===t?n.C000:function(e,t,n,r){void 0===t&&(t=Jo),void 0===n&&(n=ei),void 0===r&&(r=!0);var o=Zo(e)>.179,i=o?t:n;return!r||Xo(e,i)>=4.5?i:o?Jo:ei}(t,n.C900,n.C000)};function ni(e){const t=(e.length>4?/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i:/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i).exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}const ri=Object(vr.c)(Tr)`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  * {
    box-sizing: border-box;
  }
`;ri.displayName="Container";const oi=vr.b`
  display: flex;
  flex-direction: ${e=>e.type||"row"};
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: stretch;
`,ii=Object(vr.c)(Tr)`
  ${oi};
`;ii.displayName="FlexParent";Object(vr.c)(Tr)`
  flex: ${e=>e.flex||"none"};
`;const ai=vr.b`
  &::-webkit-scrollbar {
    width: ${e=>e.scrollWidth||"8px"};
    height: ${e=>e.scrollHeight||"8px"};
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${e=>e.invert?e.theme.colors.C900:e.theme.colors.C300};
  }
  &::-webkit-scrollbar-corner {
    background: rgba(0, 0, 0, 0);
  }

  &:hover,
  &:focus {
    &::-webkit-scrollbar-thumb {
      background: ${e=>e.invert?e.theme.colors.C800:e.theme.colors.C400};
    }
  }

  @media screen and (max-width: 990px) {
    &::-webkit-scrollbar-thumb {
      background: ${e=>e.invert?e.theme.colors.C800:e.theme.colors.C400};
    }
  }
`,si=vr.b`
  overflow-y: ${e=>!1===e.overflowY?"hidden":"auto"};
  overflow-x: ${e=>e.overflowX?"auto":"hidden"};
  -webkit-overflow-scrolling: touch;
  ${ai}
`,li=vr.b`
  overflow-y: ${e=>!1===e.overflowY?"hidden":"auto"};
  overflow-x: ${e=>e.overflowX?"auto":"hidden"};

  &::-webkit-scrollbar {
    width: 7px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #162033;
  }

  &::-webkit-scrollbar-thumb {
    background: #3d4c6a;
  }
`,ci=Object(vr.c)(Tr)`
  ${si};
`;ci.displayName="Scrollable";Object(vr.c)(Tr)`
  ${li};
`.displayName="InvertedScrollable";const ui=Object(vr.c)(Tr)`
  width: 100%;
  height: 100%;
  background-color: ${e=>e.opaque?"transparent":"rgba(255, 255, 255, 0.3)"};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  display: flex;

  flex-direction: ${e=>e.direction};
  justify-content: center;
  align-items: center;

  ${Yr}, ${Vr} {
    padding: 0;
    margin: 0;
  }
`;ui.displayName="Overlay";const pi=Object(vr.c)(Tr)`
  & a {
    ${jr};
  }
  & a ${Rr} {
    padding-bottom: 1px;
    color: ${e=>e.theme.linkColor};
  }
  &.reference-modal-fields {
    ul {
      margin: 5px 0px;
    }
  }

  .model-table-link {
    display: inline;

    > a {
      > code {
        padding: 1px 0;
      }
    }
  }
`,di=Object(vr.c)(ii)`
  width: 100%;
  height: 100%;
  position: relative;
`;di.displayName="ExpandableCodeBlock";const fi=Object(vr.c)(ii)`
  width: 100%;
  height: 100%;
  position: relative;
  background: ${e=>e.theme.colors.C900};
  z-index: 7;
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;

  @media screen and (max-width: 990px) {
    z-index: 0;
  }

  #outsideClickWrapper {
    width: 100%;
  }

  ${e=>{let{isExpanded:t}=e;return t&&" \n    width: calc(100% + 300px);\n    position:absolute;\n    -webkit-transform: translate(-300px,0);\n    -moz-transform: translate(-300px,0);\n    -o-transform: translate(-300px,0);\n    -ms-transform: translate(-300px,0);\n    transform: translate(-300px,0);"}};
`;fi.displayName="CodeBlock";const hi=Object(vr.c)(ci)`
  ${Nr};
  flex: 1;
  overflow-x: auto;
  overflow-y: auto;
  &.code-block-code {
    padding: 18px 24px 18px 10px;
  }
  & pre {
    background: transparent !important;
    border: none;
    word-break: normal;
    overflow: visible !important;
  }

  & pre > code {
    white-space: unset !important;
    padding-right: 16px;
  }
`;hi.displayName="CodeBlockCode";const mi={Info:{bg:"#d9edf7",bc:"#9acfea",fg:"#31708f"},Warning:{bg:"#fcf8e3",bc:"#faebcc",fg:"#8a6d3b"},Danger:{bg:"#f2dede",bc:"#ebccd1",fg:"#a94442"}},gi=Object(vr.c)(Tr)`
  padding: 15px;
  margin-bottom: 20px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);
  color: ${e=>{let{type:t}=e;return mi[t].fg}};
  background-color: ${e=>{let{type:t}=e;return mi[t].bg}};
  background-repeat: repeat-x;
  border-color: ${e=>{let{type:t}=e;return mi[t].bc}};

  ${zr} {
    color: ${e=>{let{type:t}=e;return mi[t].fg}};
  }

  ${Hr} {
    color: ${e=>{let{type:t}=e;return mi[t].fg}};
  }
`;gi.displayName="Alert";const vi=Object(vr.c)(Ur)`
  color: #ff4451;
  font-size: 10px;
  font-weight: 400;
  padding: 0;
  word-break: break-word;
`;vi.displayName="DangerLabel";const bi=Object(vr.c)(Ur)`
  display: inline-flex;
  align-items: center;
  padding: 0;
  word-break: break-word;
  font-family: ${e=>{let{theme:t}=e;return t.cssStyles.code.inlineCode.fontFamily}};
`;bi.displayName="Param";const yi=Object(vr.c)(bi)`
  font-size: ${e=>{let{theme:t}=e;return t.cssStyles.body.text2.fontSize}};
  font-weight: bold;
  color: ${e=>{let{theme:t}=e;return t.colors.C900}};
`;yi.displayName="ParamName";const xi=Object(vr.c)(bi)`
  display: inline-flex;
  position: relative;
  align-items: center;
  color: ${e=>{let{theme:t}=e;return t.colors.C700}};
  font-size: ${e=>{let{theme:t}=e;return t.cssStyles.body.text2.fontSize}};
  font-weight: 400;
  margin-left: ${e=>e.marginLeft};
  padding-left: ${e=>e.marginLeft};

  ${e=>{let{theme:{colors:t},marginLeft:n}=e;return n&&`\n  &::before {\n    position: absolute;\n    width: 1px;\n    height: 60%;\n    background-color: ${t.C700};\n    content: '';\n    display: block;\n    left: 1px;\n    top: 21%;\n  }`}};
`;xi.displayName="ParamType";const Ei=vr.b`
  ${$r} background: #fff;
  color: ${e=>e.theme.colors.C800}!important;
  border-color: ${e=>e.theme.colors.C300||"#E7E9F2"} !important;
`,_i=vr.b`
  ${$r}

  /* theme color variables to use in RGB declarations */
  --red: ${e=>{var t;return null===(t=ni(e.theme.primaryColor))||void 0===t?void 0:t.r}};
  --green: ${e=>{var t;return null===(t=ni(e.theme.primaryColor))||void 0===t?void 0:t.g}};
  --blue: ${e=>{var t;return null===(t=ni(e.theme.primaryColor))||void 0===t?void 0:t.b}};

  /*
    the threshold at which colors are considered "light". 
    Range: decimals from 0 to 1,
    recommended 0.5 - 0.6

    Any lightness value above the threshold will be 
    considered "light", therefore apply a black text 
    color. Any bellow will be considered dark, 
    and use white color. 
  */
  --threshold: 0.5;

  background: ${e=>e.theme.primaryColor};

  /* 
    Calcs perceived brightness using the 
    sRGB Luma method
    lightness = (red * 0.2126 + green * 0.7152 + blue * 0.0722) / 255
  */
  --r: calc(var(--red) * 0.2126);
  --g: calc(var(--green) * 0.7152);
  --b: calc(var(--blue) * 0.0722);
  --sum: calc(var(--r) + var(--g) + var(--b));

  --perceived-lightness: calc(var(--sum) / 255);

  color: hsl(
    0,
    0%,
    calc((var(--perceived-lightness) - var(--threshold)) * -10000000%)
  );

  border-color: ${e=>(e=>{const{primaryColor:t,colors:n}=e;return ti(e)===n.C000?"transparent":Qo(.1,t)})(e.theme)};

  &:hover,
  &:focus {
    color: hsl(
      0,
      0%,
      calc((var(--perceived-lightness) - var(--threshold)) * -10000000%)
    );
  }
`,Ci=vr.b`
  ${$r}
  background: ${e=>e.theme.colors.C800||"#0058a9"} !important;
  color: ${e=>e.theme.colors.C000};
  border-color: ${e=>e.theme.colors.C800||"#0058a9"} !important;
`,wi=Object(vr.c)(Wr)`
  ${Ei};
`,ki=Object(vr.c)(Wr)`
  ${_i};
`;ki.displayName="PrimaryButton";const Ai=Object(vr.c)(Wr)`
  ${Ci};
`;Ai.displayName="DarkButton";const Oi=Object(vr.c)(Wr)`
  color: ${e=>e.color};
  :hover {
    opacity: 0.7;
  }
`,Si=vr.b`
  width: ${e=>e.width?e.width:"32px"};
  height: ${e=>e.width?e.width:"32px"};
  background: ${e=>"primary"===e.varient?e.theme.primaryColor:"dark"===e.varient?e.theme.colors.C800:"light"===e.varient?e.theme.colors.C300:"transparent"};
  padding: 0;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1200px) {
    padding: 0;
  }
`,Ti=Object(vr.c)(Wr)`
  ${Si};
`,ji=Object(vr.c)(Ir)`
  ${si};
  max-height: 400px;
  overflow: auto;
  border-radius: 8px;
  margin: 20px 0;

  &::-webkit-scrollbar {
    height: 8px;
  }

  & pre {
    overflow: visible !important;
    margin-bottom: 0 !important;
  }

  & pre > code {
    white-space: pre !important;
  }
`;ji.displayName="StyledPre";const Di=vr.b`
  transition: all 1s ease-in-out, left 1.5s ease-in-out;
`,Mi=vr.b`
  box-shadow: ${e=>e.theme.colors.C400} 1px 5px 6px;
`,Ni=Object(vr.c)(Tr)`
  ${si};
  margin-bottom: 20px;
  border: 1px solid ${e=>e.theme.colors.C300};
  margin-bottom: 30px;
  border-radius: 8px;

  > table {
    border: none;
    margin: 0;
    thead {
      border-radius: 4px 4px 0 0;
      background: ${e=>e.theme.colors.C200};
    }
    thead,
    tbody {
      th,
      td {
        border-bottom: 1px solid ${e=>e.theme.colors.C300};
        border-radius: 4px 4px 0 0;
      }
      tr:last-child td {
        border-bottom-color: transparent;
      }
    }
  }
  &.enum-table-data {
    td:first-child {
      width: 25%;
    }
  }
`,Pi=Object(vr.c)(Tr)`
  width: 100%;
  height: 100%;
  background: #fff;
  opacity: 0.7;
  position: absolute;
  z-index: 1;
  border-top-left-radius: 8px;
`,Ri=vr.b`
  min-width: 105px;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  padding: 12px;

  @media screen and (max-width: 1200px) {
    min-width: 80px;
  }

  @media screen and (max-width: 500px) {
    min-width: 89px;
    height: 50px;
    background: transparent !important;
    color: ${e=>e.theme.colors.C800}!important;
    border: none !important;
    border-left: 4px solid #fff !important;
    border-radius: 0px;
    margin-right: 0;
  }
`,Li=vr.b`
  width: 100%;
  max-width: 250px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.C300}};
  margin-top: 5px;
  padding: 0;
  border-radius: 8px;
  color: ${e=>{let{theme:t}=e;return t.colors.C800}};
  font-size: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text3.fontSize||"12.64px"}};
  line-height: normal;
  &:hover,
  &:focus {
    outline: none;
    border: 1px solid ${e=>e.theme.primaryColor||"#0058a9"};
  }
`,Ii=vr.b`
  .react-datepicker {
    border: none;
    box-shadow: 0 1px 5px ${e=>e.theme.colors.C400};
  }
  .react-datepicker__day--selected {
    background-color: ${e=>e.theme.primaryColor};
    color: ${e=>ti(e.theme)};
    font-weight: bold;
  }
  .react-datepicker__time-list-item--selected {
    background-color: ${e=>e.theme.primaryColor} !important;
    color: ${e=>ti(e.theme)} !important;
  }
  .react-datepicker__year-dropdown,
  .react-datepicker__month-dropdown,
  .react-datepicker__month-year-dropdown {
    border: none;
    box-shadow: 0 1px 5px ${e=>e.theme.colors.C400};
    background: ${e=>e.theme.colors.C000};
  }
  .react-datepicker__navigation {
    border-width: 5.6px;
  }
  .react-datepicker__header {
    background: ${e=>e.theme.colors.C000};
    border-bottom: 1px solid ${e=>e.theme.colors.C300};
  }
  .react-datepicker__day-name {
    font-weight: bold;
  }
  .react-datepicker__today-button {
    background: ${e=>e.theme.colors.C000};
    border-top: 1px solid ${e=>e.theme.colors.C300};
    border-bottom-left-radius: 4.8px;
    border-bottom-right-radius: 4.8px;

    :hover {
      background: #f0f0f0; // date picker default hover color
    }
  }
  .react-datepicker__time {
    border-bottom-left-radius: 4.8px;
    border-bottom-right-radius: 4.8px;
    height: 100% !important;
  }
  .react-datepicker__time-box {
    height: calc(100% - 43px);
  }
  .react-datepicker__time-list {
    height: 100% !important;
  }
  .react-datepicker__time-container--with-today-button {
    border: none;
    box-shadow: 0 1px 5px ${e=>e.theme.colors.C400};
    height: 100%;
    overflow: hidden;
  }
  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow {
    border-width: 5.6px;
    border-top-color: ${e=>e.theme.colors.C900};
  }
  .react-datepicker__navigation--next {
    border-left-color: ${e=>e.theme.colors.C900};
  }
  .react-datepicker__navigation--previous {
    border-right-color: ${e=>e.theme.colors.C900};
  }
  .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle {
    border-top-color: ${e=>e.theme.colors.C000} !important;
  }
  .react-datepicker__triangle {
    border-bottom-color: ${e=>e.theme.colors.C000} !important;
  }
`,Fi=vr.b`
  .react-select--is-disabled {
    .react-select__value-container {
      background: ${e=>e.theme.colors.C300};
      .react-select__placeholder {
        color: ${e=>e.theme.colors.C600};
      }
    }
    .react-select__control {
      border: 1px solid ${e=>e.theme.colors.C400};
      overflow: hidden;
    }
    .react-select__indicators {
      background: ${e=>e.theme.colors.C300};

      svg {
        fill: ${e=>e.theme.colors.C400};
      }

      .react-select__indicator-separator {
        background-color: ${e=>e.theme.colors.C400};
      }
    }
  }

  .react-select__control {
    height: auto;
    min-height: 32px;
    box-shadow: none;
    ${Li};
  }

  .react-select__value-container {
    min-height: 32px;
    padding: 2px 8px 2px 12px;
    cursor: text;
    .react-select__placeholder {
      color: ${e=>e.theme.colors.C800};
    }
  }
  .react-select__indicators {
    cursor: pointer;

    svg {
      width: 15px;
      height: 15px;
      fill: ${e=>e.theme.colors.C800};
    }

    .react-select__indicator-separator {
      background-color: ${e=>e.theme.colors.C300};
    }
  }

  .react-select__multi-value {
    .react-select__multi-value__label,
    .react-select__multi-value__remove {
      color: ${e=>e.theme.colors.C800};
      background-color: ${e=>e.theme.colors.C200};
    }
    .react-select__multi-value__remove {
      cursor: pointer;
    }
  }

  .react-select__input,
  .react-select__input input {
    height: 20px;
    margin-top: 0;
  }
  .react-select__menu {
    width: 100%;
    max-width: 250px;
    border-radius: 8px;
    border: 1px solid ${e=>e.theme.colors.C300};
    box-shadow: 0 0 4px ${e=>e.theme.colors.C300};
    z-index: 100;

    .react-select__menu-list {
      padding: 6px 0;
      .react-select__option {
        min-height: 30px;
        font-size: 14.22px;
        line-height: 18px;
        font-weight: 400;
        padding: 8px 12px;
        cursor: pointer;

        &.react-select__option--is-focused:not(.react-select__option--is-selected) {
          color: ${e=>e.theme.colors.C800}!important;
          background-color: ${e=>e.theme.colors.C100};
        }
      }
    }
  }
`,Bi=vr.b`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Hi=vr.b`
  justify-content: center;
  .__title {
    &.--tag {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-top: 0;
      margin-bottom: 0;
      padding-top: 8px;
    }
  }
  .__tags-wrapper {
    &.--variant-tag {
      display: none;
    }

    &.--variant-select {
      display: inline-flex;
      align-items: center;
      align-content: center;

      .rjsf-form-control {
        min-width: 250px;
      }
    }
  }
`,zi=vr.b`
  .tag-selector {
    display: flex;
    margin-bottom: 15px;

    &.anyof-child,
    &.object-child {
      margin-bottom: 0;
    }

    &.select-container {
      ${Hi}
    }

    .__tags-wrapper {
      display: inline-flex;
      flex-wrap: wrap;
      flex: 1;

      &.--variant-tag {
        display: inline-flex;
      }

      .tag-selector-button-link {
        svg {
          stroke: #fff;
          top: 2px;
          position: relative;
          pointer-events: none;
        }
      }

      &.--variant-select {
        display: none;
        .tags-variant-select-link {
          display: flex;
          align-content: center;
          align-items: center;
          margin-left: 15px;
          margin-top: 5px;
          svg {
            margin-right: 2px;
            position: relative;
            top: 1px;
            stroke: ${e=>e.theme.linkColor};
            pointer-events: none;
          }
          a {
            font-size: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text3.fontSize||"12.64px"}};
          }
        }
      }
    }

    .__title {
      text-transform: uppercase;
      font-weight: bold;
      color: ${e=>e.theme.colors.C900};
    }

    .__title.--tag {
      border: none;
      align-items: start;
      cursor: default;
      padding-left: 0;
      padding-top: 3px;
      margin-right: 5px;
      color: ${e=>e.theme.colors.C900};
    }

    .tag-wrapper-item {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 8px;
      .tag-label {
        margin-right: 1px;
      }
    }

    .--tag {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-bottom: 5px;
      padding: 1px 7px;
      color: ${e=>e.theme.colors.C700};
      border: 1px solid ${e=>e.theme.colors.C700};

      cursor: pointer;
      font-size: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text3.fontSize||"11.85px"}};

      &.tag-label {
        border-radius: 3px 0 0 3px;
      }
      &.tag-link {
        border-radius: 0 3px 3px 0;
        display: inline-block;
        position: relative;
        top: -1px;
      }
    }

    .--tag.--active {
      background: ${e=>e.theme.colors.C700};
      color: ${e=>e.theme.colors.C000};
    }

    @media (max-width: 1024px) {
      ${Hi}
    }
  }
`,Ui=Object(vr.c)(hr)`
  ${jr};
`;Ui.displayName="CS.Link";const $i=e=>vr.b`
  transform: rotate(${e}deg);
`,Wi=vr.b`
  padding: 6px 12px !important;
  min-width: 250px;
  min-height: 100px;
  resize: none;
`;var Vi=n(41),Gi=n.n(Vi),qi=n(0);const Yi=vr.d`
    0%,
    39%,
    100% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
`,Ki=Object(vr.c)(Tr)`
  margin: ${e=>e.margin||"20px 20px 18px"};
  width: ${e=>e.size||"30px"};
  height: ${e=>e.size||"30px"};
  position: relative;

  & .sk-circle {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
`;Ki.displayName="SpinnerWrapper";const Qi=Object(vr.c)(Tr)`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  transform: rotate(
    ${e=>e.degree}deg
  );

  &:before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    /* background-color: ${e=>e.theme.primaryColor}; */
    background-color: ${e=>e.color?e.color:Gi()("#333333").mix(Gi()(e.theme.primaryColor),.1).toString()};
    border-radius: 100%;
    animation: ${Yi} 1.2s infinite ease-in-out both;
    animation-delay: ${e=>e.delay}s;
  }
`;function Zi(e){return Object(qi.jsxs)(Ki,{size:e.size,margin:e.margin,children:[Object(qi.jsx)(Qi,{color:e.color,degree:"0",delay:"0"}),Object(qi.jsx)(Qi,{color:e.color,degree:"30",delay:"-1.1"}),Object(qi.jsx)(Qi,{color:e.color,degree:"60",delay:"-1"}),Object(qi.jsx)(Qi,{color:e.color,degree:"90",delay:"-0.9"}),Object(qi.jsx)(Qi,{color:e.color,degree:"120",delay:"-0.8"}),Object(qi.jsx)(Qi,{color:e.color,degree:"150",delay:"-0.7"}),Object(qi.jsx)(Qi,{color:e.color,degree:"180",delay:"-0.6"}),Object(qi.jsx)(Qi,{color:e.color,degree:"210",delay:"-0.5"}),Object(qi.jsx)(Qi,{color:e.color,degree:"240",delay:"-0.4"}),Object(qi.jsx)(Qi,{color:e.color,degree:"270",delay:"-0.3"}),Object(qi.jsx)(Qi,{color:e.color,degree:"300",delay:"-0.2"}),Object(qi.jsx)(Qi,{color:e.color,degree:"330",delay:"-0.1"})]})}Qi.displayName="SpinnerCircle";const Xi=mo;function Ji(e){return Object(qi.jsx)(Xi,{width:e.width||"100%",style:e.style,height:e.height||"100%",xmlns:"http://www.w3.org/2000/svg",viewBox:e.viewBox,xmlnsXlink:"http://www.w3.org/1999/xlink",fill:e.fill,stroke:e.stroke,className:e.className,transform:e.transform,children:e.children})}const ea=e=>Object(qi.jsx)(Ji,{...e,width:e.width||"15.62",height:e.height||"12.596",viewBox:e.viewBox||"0 0 15.62 12.596",children:Object(qi.jsxs)("g",{id:"refresh-cw",transform:"translate(0.06 -2.225)",children:[Object(qi.jsx)("path",{id:"Path_93","data-name":"Path 93",d:"M20.682,4V7.682H17",transform:"translate(-6.182 -0.386)",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"}),Object(qi.jsx)("path",{id:"Path_94","data-name":"Path 94",d:"M1,17.682V14H4.682",transform:"translate(0 -4.249)",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"}),Object(qi.jsx)("path",{id:"Path_95","data-name":"Path 95",d:"M2.54,6.683a5.523,5.523,0,0,1,9.113-2.062L14.5,7.3M1,9.751l2.847,2.675a5.523,5.523,0,0,0,9.112-2.062",transform:"translate(0 0)",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"})]})}),ta=Object(vr.c)(ki)`
  padding: 0 14px;
  display: flex;
  justify-content: center;
  align-items: center;

  .refresh-icon {
    margin-right: 7px;
  }
`;function na(e){const{onClick:t,className:n=""}=e;return Object(qi.jsxs)(ta,{className:n,onClick:t,children:[Object(qi.jsx)(ea,{className:"refresh-icon"}),"Try Again"]})}function ra(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function oa(e){return e instanceof ra(e).Element||e instanceof Element}function ia(e){return e instanceof ra(e).HTMLElement||e instanceof HTMLElement}function aa(e){return"undefined"!==typeof ShadowRoot&&(e instanceof ra(e).ShadowRoot||e instanceof ShadowRoot)}var sa=Math.max,la=Math.min,ca=Math.round;function ua(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,o=1;if(ia(e)&&t){var i=e.offsetHeight,a=e.offsetWidth;a>0&&(r=ca(n.width)/a||1),i>0&&(o=ca(n.height)/i||1)}return{width:n.width/r,height:n.height/o,top:n.top/o,right:n.right/r,bottom:n.bottom/o,left:n.left/r,x:n.left/r,y:n.top/o}}function pa(e){var t=ra(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function da(e){return e?(e.nodeName||"").toLowerCase():null}function fa(e){return((oa(e)?e.ownerDocument:e.document)||window.document).documentElement}function ha(e){return ua(fa(e)).left+pa(e).scrollLeft}function ma(e){return ra(e).getComputedStyle(e)}function ga(e){var t=ma(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function va(e,t,n){void 0===n&&(n=!1);var r=ia(t),o=ia(t)&&function(e){var t=e.getBoundingClientRect(),n=ca(t.width)/e.offsetWidth||1,r=ca(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),i=fa(t),a=ua(e,o),s={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!n)&&(("body"!==da(t)||ga(i))&&(s=function(e){return e!==ra(e)&&ia(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:pa(e);var t}(t)),ia(t)?((l=ua(t,!0)).x+=t.clientLeft,l.y+=t.clientTop):i&&(l.x=ha(i))),{x:a.left+s.scrollLeft-l.x,y:a.top+s.scrollTop-l.y,width:a.width,height:a.height}}function ba(e){var t=ua(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function ya(e){return"html"===da(e)?e:e.assignedSlot||e.parentNode||(aa(e)?e.host:null)||fa(e)}function xa(e){return["html","body","#document"].indexOf(da(e))>=0?e.ownerDocument.body:ia(e)&&ga(e)?e:xa(ya(e))}function Ea(e,t){var n;void 0===t&&(t=[]);var r=xa(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=ra(r),a=o?[i].concat(i.visualViewport||[],ga(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(Ea(ya(a)))}function _a(e){return["table","td","th"].indexOf(da(e))>=0}function Ca(e){return ia(e)&&"fixed"!==ma(e).position?e.offsetParent:null}function wa(e){for(var t=ra(e),n=Ca(e);n&&_a(n)&&"static"===ma(n).position;)n=Ca(n);return n&&("html"===da(n)||"body"===da(n)&&"static"===ma(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&ia(e)&&"fixed"===ma(e).position)return null;var n=ya(e);for(aa(n)&&(n=n.host);ia(n)&&["html","body"].indexOf(da(n))<0;){var r=ma(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var ka="top",Aa="bottom",Oa="right",Sa="left",Ta="auto",ja=[ka,Aa,Oa,Sa],Da="start",Ma="end",Na="viewport",Pa="popper",Ra=ja.reduce((function(e,t){return e.concat([t+"-"+Da,t+"-"+Ma])}),[]),La=[].concat(ja,[Ta]).reduce((function(e,t){return e.concat([t,t+"-"+Da,t+"-"+Ma])}),[]),Ia=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function Fa(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function Ba(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var Ha={placement:"bottom",modifiers:[],strategy:"absolute"};function za(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function Ua(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?Ha:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ha,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,l={state:o,setOptions:function(n){var s="function"===typeof n?n(o.options):n;c(),o.options=Object.assign({},i,o.options,s),o.scrollParents={reference:oa(e)?Ea(e):e.contextElement?Ea(e.contextElement):[],popper:Ea(t)};var u=function(e){var t=Fa(e);return Ia.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=u.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var s=i({state:o,name:t,instance:l,options:r}),c=function(){};a.push(s||c)}})),l.update()},forceUpdate:function(){if(!s){var e=o.elements,t=e.reference,n=e.popper;if(za(t,n)){o.rects={reference:va(t,wa(n),"fixed"===o.options.strategy),popper:ba(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,c=i.options,u=void 0===c?{}:c,p=i.name;"function"===typeof a&&(o=a({state:o,options:u,name:p,instance:l})||o)}else o.reset=!1,r=-1}}},update:Ba((function(){return new Promise((function(e){l.forceUpdate(),e(o)}))})),destroy:function(){c(),s=!0}};if(!za(e,t))return l;function c(){a.forEach((function(e){return e()})),a=[]}return l.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),l}}var $a={passive:!0};function Wa(e){return e.split("-")[0]}function Va(e){return e.split("-")[1]}function Ga(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function qa(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?Wa(o):null,a=o?Va(o):null,s=n.x+n.width/2-r.width/2,l=n.y+n.height/2-r.height/2;switch(i){case ka:t={x:s,y:n.y-r.height};break;case Aa:t={x:s,y:n.y+n.height};break;case Oa:t={x:n.x+n.width,y:l};break;case Sa:t={x:n.x-r.width,y:l};break;default:t={x:n.x,y:n.y}}var c=i?Ga(i):null;if(null!=c){var u="y"===c?"height":"width";switch(a){case Da:t[c]=t[c]-(n[u]/2-r[u]/2);break;case Ma:t[c]=t[c]+(n[u]/2-r[u]/2)}}return t}var Ya={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Ka(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,l=e.gpuAcceleration,c=e.adaptive,u=e.roundOffsets,p=e.isFixed,d=a.x,f=void 0===d?0:d,h=a.y,m=void 0===h?0:h,g="function"===typeof u?u({x:f,y:m}):{x:f,y:m};f=g.x,m=g.y;var v=a.hasOwnProperty("x"),b=a.hasOwnProperty("y"),y=Sa,x=ka,E=window;if(c){var _=wa(n),C="clientHeight",w="clientWidth";if(_===ra(n)&&"static"!==ma(_=fa(n)).position&&"absolute"===s&&(C="scrollHeight",w="scrollWidth"),o===ka||(o===Sa||o===Oa)&&i===Ma)x=Aa,m-=(p&&_===E&&E.visualViewport?E.visualViewport.height:_[C])-r.height,m*=l?1:-1;if(o===Sa||(o===ka||o===Aa)&&i===Ma)y=Oa,f-=(p&&_===E&&E.visualViewport?E.visualViewport.width:_[w])-r.width,f*=l?1:-1}var k,A=Object.assign({position:s},c&&Ya),O=!0===u?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:ca(t*r)/r||0,y:ca(n*r)/r||0}}({x:f,y:m}):{x:f,y:m};return f=O.x,m=O.y,l?Object.assign({},A,((k={})[x]=b?"0":"",k[y]=v?"0":"",k.transform=(E.devicePixelRatio||1)<=1?"translate("+f+"px, "+m+"px)":"translate3d("+f+"px, "+m+"px, 0)",k)):Object.assign({},A,((t={})[x]=b?m+"px":"",t[y]=v?f+"px":"",t.transform="",t))}var Qa={left:"right",right:"left",bottom:"top",top:"bottom"};function Za(e){return e.replace(/left|right|bottom|top/g,(function(e){return Qa[e]}))}var Xa={start:"end",end:"start"};function Ja(e){return e.replace(/start|end/g,(function(e){return Xa[e]}))}function es(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&aa(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function ts(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ns(e,t){return t===Na?ts(function(e){var t=ra(e),n=fa(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,s=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,s=r.offsetTop)),{width:o,height:i,x:a+ha(e),y:s}}(e)):oa(t)?function(e){var t=ua(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ts(function(e){var t,n=fa(e),r=pa(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=sa(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=sa(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+ha(e),l=-r.scrollTop;return"rtl"===ma(o||n).direction&&(s+=sa(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:l}}(fa(e)))}function rs(e,t,n){var r="clippingParents"===t?function(e){var t=Ea(ya(e)),n=["absolute","fixed"].indexOf(ma(e).position)>=0&&ia(e)?wa(e):e;return oa(n)?t.filter((function(e){return oa(e)&&es(e,n)&&"body"!==da(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=ns(e,n);return t.top=sa(r.top,t.top),t.right=la(r.right,t.right),t.bottom=la(r.bottom,t.bottom),t.left=sa(r.left,t.left),t}),ns(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function os(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function is(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function as(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.boundary,a=void 0===i?"clippingParents":i,s=n.rootBoundary,l=void 0===s?Na:s,c=n.elementContext,u=void 0===c?Pa:c,p=n.altBoundary,d=void 0!==p&&p,f=n.padding,h=void 0===f?0:f,m=os("number"!==typeof h?h:is(h,ja)),g=u===Pa?"reference":Pa,v=e.rects.popper,b=e.elements[d?g:u],y=rs(oa(b)?b:b.contextElement||fa(e.elements.popper),a,l),x=ua(e.elements.reference),E=qa({reference:x,element:v,strategy:"absolute",placement:o}),_=ts(Object.assign({},v,E)),C=u===Pa?_:x,w={top:y.top-C.top+m.top,bottom:C.bottom-y.bottom+m.bottom,left:y.left-C.left+m.left,right:C.right-y.right+m.right},k=e.modifiersData.offset;if(u===Pa&&k){var A=k[o];Object.keys(w).forEach((function(e){var t=[Oa,Aa].indexOf(e)>=0?1:-1,n=[ka,Aa].indexOf(e)>=0?"y":"x";w[e]+=A[n]*t}))}return w}function ss(e,t,n){return sa(e,la(t,n))}function ls(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function cs(e){return[ka,Oa,Aa,Sa].some((function(t){return e[t]>=0}))}var us=Ua({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,l=ra(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach((function(e){e.addEventListener("scroll",n.update,$a)})),s&&l.addEventListener("resize",n.update,$a),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",n.update,$a)})),s&&l.removeEventListener("resize",n.update,$a)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=qa({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,l=void 0===s||s,c={placement:Wa(t.placement),variation:Va(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Ka(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:l})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ka(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];ia(o)&&da(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});ia(r)&&da(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=La.reduce((function(e,n){return e[n]=function(e,t,n){var r=Wa(e),o=[Sa,ka].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[Sa,Oa].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],l=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,l=n.fallbackPlacements,c=n.padding,u=n.boundary,p=n.rootBoundary,d=n.altBoundary,f=n.flipVariations,h=void 0===f||f,m=n.allowedAutoPlacements,g=t.options.placement,v=Wa(g),b=l||(v===g||!h?[Za(g)]:function(e){if(Wa(e)===Ta)return[];var t=Za(e);return[Ja(e),t,Ja(t)]}(g)),y=[g].concat(b).reduce((function(e,n){return e.concat(Wa(n)===Ta?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,l=n.allowedAutoPlacements,c=void 0===l?La:l,u=Va(r),p=u?s?Ra:Ra.filter((function(e){return Va(e)===u})):ja,d=p.filter((function(e){return c.indexOf(e)>=0}));0===d.length&&(d=p);var f=d.reduce((function(t,n){return t[n]=as(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[Wa(n)],t}),{});return Object.keys(f).sort((function(e,t){return f[e]-f[t]}))}(t,{placement:n,boundary:u,rootBoundary:p,padding:c,flipVariations:h,allowedAutoPlacements:m}):n)}),[]),x=t.rects.reference,E=t.rects.popper,_=new Map,C=!0,w=y[0],k=0;k<y.length;k++){var A=y[k],O=Wa(A),S=Va(A)===Da,T=[ka,Aa].indexOf(O)>=0,j=T?"width":"height",D=as(t,{placement:A,boundary:u,rootBoundary:p,altBoundary:d,padding:c}),M=T?S?Oa:Sa:S?Aa:ka;x[j]>E[j]&&(M=Za(M));var N=Za(M),P=[];if(i&&P.push(D[O]<=0),s&&P.push(D[M]<=0,D[N]<=0),P.every((function(e){return e}))){w=A,C=!1;break}_.set(A,P)}if(C)for(var R=function(e){var t=y.find((function(t){var n=_.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return w=t,"break"},L=h?3:1;L>0;L--){if("break"===R(L))break}t.placement!==w&&(t.modifiersData[r]._skip=!0,t.placement=w,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,l=n.boundary,c=n.rootBoundary,u=n.altBoundary,p=n.padding,d=n.tether,f=void 0===d||d,h=n.tetherOffset,m=void 0===h?0:h,g=as(t,{boundary:l,rootBoundary:c,padding:p,altBoundary:u}),v=Wa(t.placement),b=Va(t.placement),y=!b,x=Ga(v),E="x"===x?"y":"x",_=t.modifiersData.popperOffsets,C=t.rects.reference,w=t.rects.popper,k="function"===typeof m?m(Object.assign({},t.rects,{placement:t.placement})):m,A="number"===typeof k?{mainAxis:k,altAxis:k}:Object.assign({mainAxis:0,altAxis:0},k),O=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,S={x:0,y:0};if(_){if(i){var T,j="y"===x?ka:Sa,D="y"===x?Aa:Oa,M="y"===x?"height":"width",N=_[x],P=N+g[j],R=N-g[D],L=f?-w[M]/2:0,I=b===Da?C[M]:w[M],F=b===Da?-w[M]:-C[M],B=t.elements.arrow,H=f&&B?ba(B):{width:0,height:0},z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},U=z[j],$=z[D],W=ss(0,C[M],H[M]),V=y?C[M]/2-L-W-U-A.mainAxis:I-W-U-A.mainAxis,G=y?-C[M]/2+L+W+$+A.mainAxis:F+W+$+A.mainAxis,q=t.elements.arrow&&wa(t.elements.arrow),Y=q?"y"===x?q.clientTop||0:q.clientLeft||0:0,K=null!=(T=null==O?void 0:O[x])?T:0,Q=N+G-K,Z=ss(f?la(P,N+V-K-Y):P,N,f?sa(R,Q):R);_[x]=Z,S[x]=Z-N}if(s){var X,J="x"===x?ka:Sa,ee="x"===x?Aa:Oa,te=_[E],ne="y"===E?"height":"width",re=te+g[J],oe=te-g[ee],ie=-1!==[ka,Sa].indexOf(v),ae=null!=(X=null==O?void 0:O[E])?X:0,se=ie?re:te-C[ne]-w[ne]-ae+A.altAxis,le=ie?te+C[ne]+w[ne]-ae-A.altAxis:oe,ce=f&&ie?function(e,t,n){var r=ss(e,t,n);return r>n?n:r}(se,te,le):ss(f?se:re,te,f?le:oe);_[E]=ce,S[E]=ce-te}t.modifiersData[r]=S}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=Wa(n.placement),l=Ga(s),c=[Sa,Oa].indexOf(s)>=0?"height":"width";if(i&&a){var u=function(e,t){return os("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:is(e,ja))}(o.padding,n),p=ba(i),d="y"===l?ka:Sa,f="y"===l?Aa:Oa,h=n.rects.reference[c]+n.rects.reference[l]-a[l]-n.rects.popper[c],m=a[l]-n.rects.reference[l],g=wa(i),v=g?"y"===l?g.clientHeight||0:g.clientWidth||0:0,b=h/2-m/2,y=u[d],x=v-p[c]-u[f],E=v/2-p[c]/2+b,_=ss(y,E,x),C=l;n.modifiersData[r]=((t={})[C]=_,t.centerOffset=_-E,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&es(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=as(t,{elementContext:"reference"}),s=as(t,{altBoundary:!0}),l=ls(a,r),c=ls(s,o,i),u=cs(l),p=cs(c);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":p})}}]}),ps=n(138),ds=n.n(ps),fs=function(e){return e.reduce((function(e,t){var n=t[0],r=t[1];return e[n]=r,e}),{})},hs="undefined"!==typeof window&&window.document&&window.document.createElement?tn.useLayoutEffect:tn.useEffect,ms=[];const gs=["top-start","bottom-start","top"],vs="bottom-start",bs=[0,10],ys=Object(vr.c)(Tr)``;function xs(e){const{children:t,fallbackPlacements:n=gs,placement:r=vs,offset:o=bs,onMouseEnter:i}=e,[s,l]=Object(tn.useState)(!1),[c,u]=Object(tn.useState)(!1),[p,d]=Object(tn.useState)(null),[f,h]=Object(tn.useState)(null),[m,g]=Object(tn.useState)(null),{styles:v,attributes:b}=function(e,t,n){void 0===n&&(n={});var r=tn.useRef(null),o={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||ms},i=tn.useState({styles:{popper:{position:o.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),s=i[0],l=i[1],c=tn.useMemo((function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,n=Object.keys(t.elements);a.flushSync((function(){l({styles:fs(n.map((function(e){return[e,t.styles[e]||{}]}))),attributes:fs(n.map((function(e){return[e,t.attributes[e]]})))})}))},requires:["computeStyles"]}}),[]),u=tn.useMemo((function(){var e={onFirstUpdate:o.onFirstUpdate,placement:o.placement,strategy:o.strategy,modifiers:[].concat(o.modifiers,[c,{name:"applyStyles",enabled:!1}])};return ds()(r.current,e)?r.current||e:(r.current=e,e)}),[o.onFirstUpdate,o.placement,o.strategy,o.modifiers,c]),p=tn.useRef();return hs((function(){p.current&&p.current.setOptions(u)}),[u]),hs((function(){if(null!=e&&null!=t){var r=(n.createPopper||us)(e,t,u);return p.current=r,function(){r.destroy(),p.current=null}}}),[e,t,n.createPopper]),{state:p.current?p.current.state:null,styles:s.styles,attributes:s.attributes,update:p.current?p.current.update:null,forceUpdate:p.current?p.current.forceUpdate:null}}(p,f,{placement:r,modifiers:[{name:"arrow",options:{element:m}},{name:"flip",options:{fallbackPlacements:n}},{name:"offset",options:{offset:o}}]}),y=Object(tn.useCallback)((()=>{u((e=>!e))}),[]),x=Object(tn.useCallback)((()=>{l((e=>!e))}),[]);return Object(qi.jsx)(ys,{onMouseEnter:i,children:t({setArrowElement:g,setPopperElement:h,setReferenceElement:d,setVisible:u,toggleVisibility:y,hoverVisibility:x,isHover:s,visible:c,attributes:b,styles:v})})}const Es=e=>Object(qi.jsx)(Ji,{...e,children:Object(qi.jsx)("path",{d:"M9.017,13.000 C8.354,12.999 7.816,13.548 7.816,14.223 L7.817,19.345 C7.817, 20.022 8.355,20.569 9.019,20.569 C9.682,20.569 10.220,20.022 10.219,19.346 L10.219, 14.222 C10.219,13.548 9.681,12.999 9.017,13.000 M18.704,8.399 L19.542,6.840 C19.587, 6.759 19.558,6.655 19.476,6.609 C19.395,6.565 19.294,6.595 19.250,6.677 L18.403, 8.252 C17.691,7.929 16.894,7.748 16.050,7.749 C15.208,7.748 14.411,7.929 13.702,8.250 L12.854, 6.678 C12.810,6.596 12.708,6.566 12.628,6.611 C12.547,6.656 12.517,6.759 12.562,6.841 L13.401, 8.399 C11.753,9.264 10.640,10.913 10.641,12.805 L21.460,12.804 C21.461,10.912 20.349,9.267 18.704, 8.399 M13.589,10.809 C13.340,10.808 13.137,10.602 13.137,10.347 C13.137,10.093 13.339,9.885 13.590, 9.885 C13.840,9.885 14.043,10.093 14.043,10.347 C14.043,10.602 13.840,10.809 13.589,10.809 M18.515, 10.808 C18.265,10.808 18.062,10.602 18.062,10.346 C18.063,10.093 18.265,9.884 18.516,9.883 C18.765, 9.884 18.969,10.093 18.969,10.346 C18.969,10.601 18.766,10.808 18.515,10.808 M10.685,13.231 L10.686, 21.169 C10.686,21.891 11.260,22.474 11.968,22.474 L12.841,22.475 L12.842,25.185 C12.842,25.860 13.381, 26.409 14.042,26.409 C14.706,26.409 15.244,25.860 15.244,25.184 L15.243,22.474 L16.865,22.474 L16.865, 25.184 C16.865,25.859 17.404,26.409 18.066,26.407 C18.730,26.408 19.268,25.859 19.268,25.183 L19.267, 22.474 L20.143,22.473 C20.850,22.473 21.425,21.890 21.425,21.167 L21.424,13.229 L10.685,13.231 L10.685, 13.231 ZM24.289,14.221 C24.289,13.545 23.751,12.998 23.088,12.998 C22.424,12.997 21.887,13.546 21.887, 14.222 L21.888,19.344 C21.888,20.021 22.425,20.567 23.089,20.567 C23.752,20.567 24.290,20.021 24.290, 19.343 L24.289,14.221 L24.289,14.221 Z"})}),_s=e=>Object(qi.jsx)(Ji,{...e,children:Object(qi.jsx)("path",{d:"M15.716,17.498 L19.434,17.498 L17.458,13.590 L15.716,17.498 ZM17.465, 7.988 L8.001,11.137 L9.496,22.861 L17.475,27.007 L25.494,22.805 L26.988,11.082 L17.465, 7.988 L17.465,7.988 ZM14.947,19.159 L13.786,21.903 L11.618,21.912 L17.464,9.668 L17.453, 9.645 L17.443,9.645 L17.443,9.625 L17.453,9.645 L17.475,9.645 L17.495,9.604 L17.495,9.645 L17.475, 9.645 L17.464,9.668 L23.563,21.963 L21.475,21.919 L20.191,19.114 L17.448,19.126 "})}),Cs=e=>Object(qi.jsx)(Ji,{...e,children:Object(qi.jsx)("path",{d:"M21.645,17.525 C21.672,20.356 24.155,21.298 24.183,21.310 C24.162, 21.376 23.786,22.653 22.875,23.971 C22.087,25.111 21.269,26.246 19.981, 26.270 C18.715,26.293 18.308,25.527 16.860,25.527 C15.414,25.527 14.961, 26.246 13.763,26.293 C12.519,26.340 11.572,25.060 10.778,23.925 C9.154,21.602 7.914, 17.361 9.580,14.498 C10.407,13.077 11.886,12.177 13.491,12.154 C14.713,12.130 15.865, 12.966 16.612,12.966 C17.358,12.966 18.758,11.961 20.231,12.109 C20.847,12.134 22.577, 12.355 23.689,13.965 C23.599,14.020 21.624,15.158 21.645,17.525 M19.267,10.572 C19.927, 9.781 20.371,8.680 20.250,7.585 C19.298,7.623 18.147,8.212 17.465,9.003 C16.853,9.703 16.318, 10.823 16.462,11.897 C17.523,11.978 18.606,11.363 19.267,10.572 "})}),ws=e=>Object(qi.jsx)(Ji,{...e,children:Object(qi.jsx)("path",{d:"M26.491,20.212 C25.650,21.091 24.625,21.640 23.451,21.879 C23.118, 21.947 22.775,21.962 22.437,22.001 C21.278,21.978 20.231,21.636 19.350, 20.853 C18.721,20.294 18.305,19.600 18.092,18.793 C17.941,19.111 17.788,19.427 17.576, 19.717 C16.667,20.957 15.477,21.728 13.969,21.931 C12.729,22.098 11.576,21.849 10.566, 21.064 C9.633,20.340 9.095,19.364 8.956,18.170 C8.789,16.744 9.192,15.474 10.028, 14.348 C10.929,13.135 12.115,12.366 13.578,12.093 C14.766,11.871 15.904,12.021 16.932, 12.728 C17.602,13.189 18.079,13.812 18.400,14.573 C18.445,14.681 18.393,14.746 18.251, 14.782 C17.455,14.984 16.908,15.153 16.125,15.356 C15.932,15.406 15.917,15.424 15.755, 15.230 C15.564,15.002 15.429,14.871 15.160,14.735 C14.362,14.330 13.587,14.442 12.872, 14.925 C12.015,15.504 11.565,16.341 11.576,17.410 C11.587,18.454 12.289,19.318 13.288, 19.461 C14.145,19.584 14.870,19.267 15.446,18.604 C15.566,18.466 15.663,18.307 15.793, 18.127 C15.330,18.127 14.769,18.127 13.350,18.127 C13.086,18.127 13.024,17.960 13.114, 17.735 C13.274,17.337 13.583,16.648 13.761,16.310 C13.803,16.230 13.890,16.096 14.072, 16.096 C14.645,16.096 16.604,16.096 18.146,16.096 C18.331,15.497 18.616,14.927 19.014, 14.391 C19.941,13.141 21.058,12.485 22.558,12.209 C23.848,11.971 25.067,12.108 26.165, 12.880 C27.169,13.586 27.792,14.536 27.949,15.786 C28.170,17.541 27.669,18.980 26.491, 20.212 ZM25.424,16.292 C25.198,15.002 24.046,14.276 22.838,14.553 C21.653,14.824 20.898, 15.594 20.623,16.821 C20.394,17.842 20.880,18.869 21.785,19.284 C22.480,19.603 23.182, 19.555 23.852,19.205 C24.849,18.685 25.395,17.848 25.460,16.725 C25.447,16.556 25.447, 16.422 25.424,16.292 ZM8.662,14.937 C8.637,14.977 8.578,15.010 8.531,15.010 L3.935, 15.013 C3.889,15.013 3.874,14.982 3.903,14.944 L4.168,14.596 C4.196,14.558 4.258,14.527 4.305, 14.527 L8.833,14.525 C8.880,14.524 8.898,14.558 8.873,14.598 L8.662,14.937 ZM8.241,15.805 L8.138,16.125 C8.124, 16.170 8.073,16.208 8.027,16.208 L2.030,16.212 C1.983,16.212 1.968,16.181 1.997,16.143 L2.262,15.795 C2.291, 15.757 2.353,15.726 2.400,15.726 L8.182,15.722 C8.229,15.722 8.256,15.760 8.241,15.805 ZM5.236,17.001 C5.259, 16.958 5.316,16.924 5.363,16.924 L7.900,16.922 C7.947,16.922 7.982,16.961 7.978,17.009 L7.949, 17.320 C7.944, 17.368 7.902,17.408 7.855,17.408 L5.100,17.410 C5.053,17.410 5.034,17.375 5.056,17.333 L5.236,17.001 Z"})}),ks=e=>Object(qi.jsx)(Ji,{...e,children:Object(qi.jsx)("path",{d:"M21.346,22.266 C21.346,22.265 21.419,22.203 21.441,22.146 C26.199, 19.786 23.998,17.519 22.463,17.824 C22.088,17.899 21.919,17.964 21.919, 17.964 C21.919,17.964 22.059,17.754 22.325,17.664 C25.363,16.645 27.699, 20.671 21.346,22.266 ZM18.573,15.091 C19.999,17.008 16.893,18.539 16.893, 18.539 C16.893,18.539 18.438,17.330 17.214,15.984 C13.068,11.423 21.749,9.354 21.749, 9.353 C16.219,12.416 17.240,13.303 18.573,15.091 ZM16.074,10.794 C11.957, 13.898 15.135,15.668 16.072,17.691 C13.669,15.621 11.906,13.798 13.088,12.102 C14.825, 9.612 19.635,8.405 18.573,4.408 C18.573,4.408 21.207,6.925 16.074,10.794 ZM13.173, 17.734 C13.173,17.734 8.565,18.780 11.542,19.159 C12.799,19.320 15.303,19.283 17.638, 19.096 C19.546,18.943 21.460,18.616 21.460,18.616 C21.460,18.616 20.788,18.892 20.301, 19.209 C15.620,20.384 6.580,19.837 9.183,18.635 C11.383,17.619 13.173,17.734 13.173,17.734 ZM13.397, 23.851 C15.407,24.070 16.434,24.039 18.647,23.639 C18.647,23.639 19.231,23.987 20.044,24.289 C15.079, 26.320 8.808,24.171 12.707,23.131 C12.707,23.131 11.739,23.669 13.397,23.851 ZM12.674,21.413 C14.820, 21.624 16.515,21.642 19.449,21.103 C19.449,21.103 19.854,21.495 20.492,21.710 C14.491,23.386 7.806, 21.842 12.100,20.481 C12.100,20.481 11.014,21.249 12.674,21.413 ZM10.748,25.025 C10.748,25.025 10.430, 25.004 9.873,25.119 C9.340,25.229 7.643,25.750 8.548,26.126 C11.064,27.171 20.125,26.921 22.990,26.093 C24.497, 25.656 23.780,25.092 23.780,25.092 C26.405,26.223 18.076,28.495 7.956,26.928 C4.244,26.353 9.741,24.348 10.748, 25.025 ZM21.612,27.727 C25.067,27.107 25.386,26.325 25.386,26.325 C25.220,28.388 18.207,28.822 13.641, 28.543 C10.640,28.359 10.056,27.897 10.056,27.897 C12.907,28.346 17.715,28.428 21.612,27.727 Z"})}),As=e=>Object(qi.jsx)(Ji,{...e,children:Object(qi.jsx)("path",{d:"M27.161,18.398 L26.727,18.127 C26.710,18.117 26.700,18.098 26.700,18.078 L26.700, 17.536 C26.700,17.516 26.710,17.497 26.727,17.487 L27.161,17.211 C27.169,17.207 27.179, 17.207 27.188,17.207 C27.197,17.207 27.203,17.206 27.211,17.211 L27.645,17.487 C27.661, 17.497 27.672,17.516 27.672,17.536 L27.672,18.078 C27.672,18.098 27.661,18.117 27.645, 18.127 L27.211,18.398 C27.195,18.408 27.177,18.408 27.161,18.398 ZM29.573,17.344 L28.220, 18.201 C28.178,18.228 28.126,18.228 28.084,18.201 C28.042,18.175 28.016,18.126 28.016, 18.073 L28.016,17.374 C28.016,17.321 27.991,17.272 27.948,17.246 L27.243,16.803 C27.200, 16.776 27.149,16.776 27.107,16.803 L26.401,17.246 C26.359,17.272 26.329,17.321 26.329, 17.374 L26.329,18.260 C26.329,18.313 26.358,18.367 26.401,18.393 L28.672,19.811 C28.715, 19.838 28.740,19.886 28.740,19.939 C28.740,19.993 28.711,20.042 28.668,20.068 L27.310, 20.890 C27.227,20.940 27.126,20.937 27.044,20.885 L24.804,19.496 C24.719,19.444 24.664, 19.347 24.664,19.240 L24.664,16.404 C24.664,16.298 24.715,16.201 24.799,16.148 L27.057, 14.730 C27.099,14.703 27.146,14.690 27.193,14.690 C27.240,14.690 27.286,14.703 27.329, 14.729 L29.573,16.148 C29.657,16.201 29.708,16.298 29.708,16.404 L29.708,17.088 C29.708, 17.194 29.657,17.291 29.573,17.344 ZM20.587,20.954 C20.502,21.007 20.400,21.007 20.315, 20.954 L18.057,19.536 C17.973,19.483 17.922,19.386 17.922,19.280 L17.922,16.443 C17.922, 16.337 17.973,16.235 18.057,16.182 L20.315,14.764 C20.399,14.711 20.502,14.711 20.587, 14.764 L21.152,15.118 C21.182,15.137 21.218,15.137 21.247,15.118 C21.277,15.100 21.293, 15.067 21.293,15.030 L21.293,11.263 C21.293,11.210 21.319,11.161 21.360,11.134 C21.381, 11.121 21.405,11.115 21.428,11.115 C21.452,11.114 21.475,11.117 21.496,11.130 L22.840, 11.947 C22.926,11.999 22.980,12.101 22.980,12.208 L22.980,19.280 C22.980,19.386 22.929, 19.483 22.845,19.536 L20.587,20.954 ZM21.288,17.369 C21.288,17.343 21.273,17.318 21.252, 17.305 L20.478,16.817 C20.468,16.811 20.454,16.807 20.442,16.807 L20.442,16.808 C20.430, 16.808 20.421,16.811 20.410,16.817 L19.637,17.305 C19.616,17.318 19.600,17.343 19.600, 17.369 L19.600,18.344 C19.600,18.370 19.615,18.395 19.637,18.408 L20.410,18.896 C20.431, 8.909 20.457,18.909 20.478,18.896 L21.252,18.408 C21.273,18.395 21.288,18.370 21.288, 18.344 L21.288,17.369 ZM13.822,20.900 C13.738,20.953 13.635,20.953 13.551,20.900 L11.293, 19.481 C11.209,19.429 11.157,19.332 11.157,19.225 L11.157,16.389 C11.157,16.283 11.209, 16.181 11.293,16.128 L13.551,14.715 C13.593,14.688 13.640,14.675 13.687,14.675 C13.734, 14.675 13.780,14.688 13.822,14.715 L16.080,16.128 C16.165,16.181 16.216,16.283 16.216, 16.389 L16.216,19.225 C16.216,19.332 16.164,19.429 16.080,19.481 L13.822,20.900 ZM9.375, 20.299 C9.333,20.326 9.281,20.326 9.239,20.299 L7.900,19.462 C7.815,19.408 7.759, 19.312 7.759,19.206 L7.759,17.428 C7.759,17.322 7.708,17.225 7.624,17.172 L7.053, 16.813 C7.012,16.786 6.964,16.773 6.918,16.773 C6.870,16.773 6.825,16.786 6.782, 16.813 L6.212,17.172 C6.127,17.225 6.076,17.322 6.076,17.428 L6.076,19.206 C6.076, 19.312 6.021,19.407 5.936,19.462 L4.597,20.299 C4.555,20.326 4.503,20.326 4.461, 20.299 C4.418,20.273 4.393,20.224 4.393,20.171 L4.388,16.364 C4.388,16.258 4.440, 16.161 4.524,16.108 L6.782,14.690 C6.821,14.666 6.861,14.657 6.904,14.655 L6.931, 14.655 C6.975,14.657 7.015,14.666 7.053,14.690 L9.311,16.108 C9.396,16.161 9.447, 16.258 9.447,16.364 L9.442,20.171 C9.442,20.224 9.416,20.273 9.375,20.299 Z"})}),Os=e=>Object(qi.jsx)(Ji,{...e,children:Object(qi.jsx)("path",{d:"M16.482,9.989 C9.800,9.989 4.382,12.703 4.382,16.051 C4.382, 19.399 9.800,22.113 16.482, 22.113 C23.165,22.113 28.583,19.399 28.583,16.051 C28.583, 12.703 23.165,9.989 16.482,9.989 ZM13.334,17.232 C13.045,17.499 12.724, 17.609 12.371,17.723 C12.018,17.836 11.569,17.813 11.022,17.813 L9.784, 17.813 L9.441,19.771 L7.994,19.771 L9.285,13.114 L12.065,13.114 C12.902, 13.114 13.512,13.352 13.896,13.786 C14.280,14.220 14.395,14.836 14.242, 15.614 C14.179,15.934 14.073,16.233 13.922,16.498 C13.772,16.764 13.576, 17.012 13.334,17.232 ZM17.555,17.813 L18.125,14.990 C18.190,14.659 18.166, 14.414 18.054,14.294 C17.941,14.173 17.701,14.093 17.334,14.093 L16.187, 14.093 L15.448,17.813 L14.013,17.813 L15.304,11.352 L16.739,11.352 L16.395, 13.114 L17.673,13.114 C18.478,13.114 19.032,13.274 19.338,13.551 C19.643, 13.828 19.734,14.208 19.612,14.829 L19.012,17.813 L17.555,17.813 ZM25.528,15.624 C25.465, 15.945 25.359,16.238 25.209,16.503 C25.059,16.769 24.863,17.012 24.620,17.232 C24.332, 17.499 24.011,17.609 23.658,17.723 C23.305,17.836 22.855,17.813 22.309,17.813 L21.070, 17.813 L20.727,19.771 L19.281,19.771 L20.571,13.114 L23.352,13.114 C24.189,13.114 24.799, 13.352 25.183,13.786 C25.566,14.220 25.681,14.847 25.528,15.624 ZM22.804,14.093 L21.814, 14.093 L21.274,16.834 L22.154,16.834 C22.736,16.834 23.171,16.777 23.456,16.560 C23.741, 16.343 23.934,16.006 24.034,15.499 C24.130,15.011 24.086,14.630 23.903,14.430 C23.720, 14.229 23.354,14.093 22.804,14.093 L22.804,14.093 ZM11.518,14.093 L10.527,14.093 L9.987, 16.834 L10.867,16.834 C11.449,16.834 11.884,16.777 12.169,16.560 C12.455,16.343 12.647, 16.006 12.747,15.499 C12.843,15.011 12.799,14.630 12.616,14.430 C12.433,14.229 12.067, 14.093 11.518,14.093 L11.518,14.093 Z"})}),Ss=e=>Object(qi.jsx)(Ji,{...e,children:Object(qi.jsx)("path",{d:"M13.782,15.744 L18.283,15.744 C19.535,15.744 20.522,14.696 20.522,13.452 L20.522, 9.211 C20.522,8.004 19.498,7.097 18.276,6.896 C17.502,6.769 16.702,6.711 15.932,6.714 C15.162, 6.718 14.448,6.783 13.801,6.896 C11.895,7.229 11.571,7.926 11.571,9.211 L11.571,10.862 L16.046, 10.862 L16.046,11.472 L9.839,11.472 C8.529,11.472 7.382,12.251 7.024,13.731 C6.610,15.428 6.592, 16.465 7.024,18.236 C7.344,19.555 8.109,20.473 9.418,20.473 L10.953,20.473 L10.953,18.482 C10.953, 17.012 12.254,15.744 13.782,15.744 L13.782,15.744 ZM13.499,9.777 C13.032,9.777 12.653,9.399 12.653, 8.931 C12.653,8.461 13.032,8.080 13.499,8.080 C13.964,8.080 14.344,8.461 14.344,8.931 C14.344,9.399 13.964, 9.777 13.499,9.777 ZM25.041,13.731 C24.717,12.443 24.099,11.472 22.788,11.472 L21.139,11.472 L21.139, 13.452 C21.139,14.985 19.782,16.201 18.283,16.201 L13.782,16.201 C12.549,16.201 11.571,17.319 11.571, 18.539 L11.571,22.780 C11.571,23.987 12.612,24.697 13.803,25.043 C15.229,25.458 16.580,25.533 18.286, 25.043 C19.420,24.719 20.522,24.065 20.522,22.780 L20.522,21.083 L16.046,21.083 L16.046,20.473 L22.788, 20.473 C24.097,20.473 24.586,19.592 25.041,18.236 C25.511,16.841 25.491,15.521 25.041,13.731 L25.041, 13.731 ZM18.566,22.215 C19.033,22.215 19.412,22.593 19.412,23.061 C19.412,23.530 19.033,23.912 18.566, 23.912 C18.101,23.912 17.721,23.530 17.721,23.061 C17.721,22.593 18.101,22.215 18.566,22.215 L18.566, 22.215 Z"})}),Ts=e=>Object(qi.jsx)(Ji,{...e,children:Object(qi.jsx)("path",{d:"M12.025,24.406 C16.409,24.997 20.715,25.576 25.107,26.168 C23.611, 23.711 22.153,21.316 20.683,18.902 L12.025,24.406 L12.025,24.406 ZM26.344, 10.804 C25.958,11.377 25.571,11.949 25.185,12.522 C23.859,14.489 22.534, 16.456 21.210,18.424 C21.136,18.534 21.040,18.620 21.144,18.789 C22.424, 20.874 23.693,22.964 24.966,25.053 C25.167,25.383 25.370,25.711 25.629, 26.028 C25.887,20.959 26.144,15.889 26.401,10.820 L26.344,10.804 L26.344, 10.804 ZM8.877,17.303 C8.937,17.359 9.087,17.392 9.156,17.358 C10.384,16.762 11.619, 16.181 12.819,15.537 C13.211,15.327 13.512,14.950 13.849,14.645 C14.966,13.635 16.081, 12.622 17.196,11.610 C17.264,11.548 17.345,11.488 17.385,11.409 C17.786,10.637 18.179, 9.861 18.586,9.063 C18.101,8.883 17.640,8.707 17.174,8.547 C17.111,8.525 17.011,8.568 16.943, 8.606 C15.864,9.200 14.764,9.763 13.719,10.412 C13.196,10.736 12.771,11.215 12.308,11.631 C11.562, 12.303 10.816,12.976 10.081,13.660 C9.886,13.841 9.708,14.048 9.556,14.267 C9.054,14.989 8.566, 15.721 8.056,16.475 C8.341,16.766 8.600,17.044 8.877,17.303 L8.877,17.303 ZM13.363,16.316 C12.753, 18.860 12.146,21.390 11.519,24.003 C14.459,22.134 17.332,20.308 20.186,18.494 C17.915,17.769 15.651, 17.046 13.363,16.316 L13.363,16.316 ZM25.595,10.829 C23.110,11.238 20.685,11.638 18.228,12.043 C19.065, 14.050 19.885,16.018 20.728,18.041 C22.360,15.623 23.959,13.253 25.595,10.829 L25.595,10.829 ZM13.466, 15.795 C15.703,16.512 17.896,17.214 20.152,17.937 C19.314,15.923 18.505,13.979 17.679,11.995 C16.272, 13.264 14.886,14.514 13.466,15.795 L13.466,15.795 ZM8.970,18.787 C8.176,20.658 7.410,22.466 6.630, 24.305 C8.129,24.262 9.583,24.219 11.087,24.176 C10.381,22.379 9.689,20.617 8.970,18.787 ZM11.140, 22.896 L11.195,22.884 C11.730,20.689 12.273,18.509 12.819,16.228 C11.600,16.853 10.438,17.449 9.243, 18.061 C9.853,19.624 10.503,21.273 11.140,22.896 L11.140,22.896 ZM24.695,10.473 C23.984,10.287 23.272, 10.100 22.560,9.916 C21.537,9.650 20.512,9.388 19.489,9.120 C19.361,9.086 19.269,9.065 19.194,9.216 C18.832, 9.947 18.460,10.672 18.092,11.400 C18.081,11.423 18.084,11.452 18.075,11.508 C20.291,11.177 22.493,10.848 24.694, 10.519 L24.695,10.473 L24.695,10.473 ZM20.566,8.811 L26.367,10.394 C26.035, 9.459 25.726,8.592 25.409,7.699 L20.575, 8.757 L20.566,8.811 ZM11.631,24.827 C10.913,24.746 10.175,24.821 9.447,24.833 C8.848,24.844 8.249,24.866 7.651, 24.884 C7.589,24.886 7.528,24.898 7.466,24.964 C12.415,25.415 17.363,25.867 22.312, 26.318 L22.322,26.253 C20.736,26.039 19.149,25.826 17.563,25.612 C15.587,25.346 13.613, 25.053 11.631,24.827 L11.631,24.827 ZM6.727,22.621 C7.365,21.161 8.000,19.701 8.640, 18.242 C8.704,18.096 8.699,17.997 8.574,17.879 C8.306,17.627 8.057,17.356 7.765,17.056 C7.369, 18.983 6.983,20.863 6.597,22.742 L6.640,22.762 C6.670,22.716 6.706,22.671 6.727,22.621 ZM19.296, 8.425 C20.371,8.152 21.462,7.938 22.547,7.699 C22.617,7.684 22.685,7.661 22.755,7.641 L22.744, 7.589 C21.216,7.791 19.689,7.994 18.084,8.207 C18.522,8.396 18.859,8.537 19.296,8.425 L19.296,8.425 Z"})}),js=e=>Object(qi.jsxs)(Ji,{width:e.width||"33",height:e.height||"33",viewBox:e.viewBox||"0 0 33 33",...e,children:[Object(qi.jsx)("rect",{fill:"none",width:"33",height:"33",rx:"6"}),Object(qi.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M28.923,61.215v2.723a5.74,5.74,0,0,0,1.565.51,10.268,10.268,0,0,0,1.9.17,8.87,8.87,0,0,0,1.854-.187,4.535,4.535,0,0,0,1.54-.617,3.141,3.141,0,0,0,1.048-1.123A3.97,3.97,0,0,0,37,59.68a3.035,3.035,0,0,0-.636-.991,4.662,4.662,0,0,0-1-.779,10.668,10.668,0,0,0-1.311-.651q-.534-.221-.959-.43a4.858,4.858,0,0,1-.721-.425,1.852,1.852,0,0,1-.458-.46.969.969,0,0,1-.161-.549.92.92,0,0,1,.144-.506,1.247,1.247,0,0,1,.407-.387,2.173,2.173,0,0,1,.645-.251,3.727,3.727,0,0,1,.848-.089,5.361,5.361,0,0,1,.717.051,5.648,5.648,0,0,1,.759.157,5.272,5.272,0,0,1,.742.268,4.091,4.091,0,0,1,.666.374V52.468a6.607,6.607,0,0,0-1.353-.353A10.988,10.988,0,0,0,33.648,52a7.8,7.8,0,0,0-1.832.208,4.653,4.653,0,0,0-1.523.651,3.248,3.248,0,0,0-1.039,1.127,3.315,3.315,0,0,0-.382,1.638,3.183,3.183,0,0,0,.7,2.076A5.325,5.325,0,0,0,31.7,59.156q.56.23,1.044.451a5.8,5.8,0,0,1,.836.459,2.193,2.193,0,0,1,.556.519,1.059,1.059,0,0,1,.2.638.978.978,0,0,1-.127.489,1.131,1.131,0,0,1-.386.391,2.11,2.11,0,0,1-.645.26,3.869,3.869,0,0,1-.9.094,5.138,5.138,0,0,1-1.748-.311A5.211,5.211,0,0,1,28.923,61.215Zm-4.574-6.778H27.9V52.194H18v2.243h3.535v9.988h2.814Z",transform:"translate(-11.11 -41.81)"})]}),Ds=e=>Object(qi.jsx)(Ji,{...e,children:Object(qi.jsx)("path",{d:"M16.500,7.000 C21.745,7.000 26.000,11.255 26.000,16.500 C26.000,21.745 21.745,26.000 16.500, 26.000 C11.255,26.000 7.000,21.745 7.000,16.500 C7.000,11.255 11.255,7.000 16.500,7.000 ZM19.889, 13.445 C19.790,13.519 19.728,13.656 19.605,13.680 C19.667,13.667 19.728,13.445 19.766,13.396 C19.840, 13.310 19.939, 13.260 20.038,13.211 C20.249,13.124 20.458,13.099 20.681,13.063 C20.891,13.013 21.151,13.013 21.312, 13.199 C21.275,13.162 21.571,12.902 21.609,12.889 C21.720,12.827 21.905,12.852 21.980,12.741 C22.004, 12.704 22.004,12.469 22.004,12.469 C21.794,12.493 21.720,12.295 21.708,12.122 C21.708,12.135 21.683, 12.172 21.633,12.221 C21.646,12.036 21.411,12.171 21.324,12.147 C21.039,12.072 21.076,11.874 20.990, 11.664 C20.940,11.553 20.804,11.516 20.754,11.405 C20.705,11.330 20.680,11.170 20.569,11.157 C20.495, 11.144 20.359,11.417 20.334,11.405 C20.222,11.343 20.173,11.429 20.086,11.479 C20.012,11.529 19.950, 11.504 19.876,11.541 C20.098,11.467 19.777,11.343 19.665,11.368 C19.838,11.318 19.751,11.132 19.652, 11.046 L19.714, 11.046 C19.690,10.935 19.343,10.836 19.232,10.762 C19.121,10.688 18.527,10.564 18.403, 10.638 C18.255,10.725 18.440,10.973 18.440,11.096 C18.453,11.244 18.292,11.281 18.292,11.406 C18.292, 11.616 18.688,11.579 18.589,11.863 C18.527,12.037 18.292,12.074 18.193,12.210 C18.094,12.333 18.206,12.557 18.305, .643 C18.404,12.717 18.132,12.841 18.094,12.865 C17.884,12.964 17.723,12.655 17.674,12.470 C17.637,12.333 17.624, 12.173 17.476,12.098 C17.402,12.074 17.167,12.037 17.117,12.111 C17.043,11.926 16.783,11.851 16.610, 11.790 C16.362,11.703 16.152,11.703 15.893,11.740 C15.979,11.727 15.868,11.344 15.658,11.406 C15.719, 11.282 15.695,11.146 15.719,11.022 C15.744,10.923 15.794,10.825 15.867,10.738 C15.892,10.688 16.164,10.404 16.078, 10.391 C16.289,10.416 16.523,10.429 16.696,10.255 C16.808, 10.144 16.857,9.958 16.969,9.835 C17.129,9.650 17.327,9.885 17.501,9.897 C17.748, 9.909 17.736,9.637 17.600,9.514 C17.760,9.526 17.624,9.229 17.538,9.192 C17.426,9.155 17.006, 9.267 17.228,9.353 C17.178,9.328 16.882,9.947 16.709,9.637 C16.659, 9.575 16.635,9.316 16.524,9.303 C16.425,9.303 16.363,9.415 16.326,9.488 C16.388,9.327 15.979, 9.216 15.893,9.204 C16.078,9.080 15.930,8.944 15.794,8.870 C15.695,8.808 15.385,8.758 15.299, 8.857 C15.064,9.141 15.547,9.179 15.670,9.253 C15.708,9.278 15.856,9.365 15.769, 9.426 C15.695,9.464 15.472,9.525 15.448,9.574 C15.373,9.686 15.534,9.810 15.423, 9.921 C15.312,9.810 15.312,9.624 15.225, 9.501 C15.337,9.637 14.780,9.563 14.792,9.563 C14.607,9.563 14.310,9.686 14.174,9.501 C14.150, 9.451 14.150,9.167 14.224,9.229 C14.112,9.142 14.039,9.055 13.964,9.006 C13.556,9.142 13.173,9.316 12.801, 9.514 C12.851,9.526 12.888,9.526 12.949,9.501 C13.048,9.464 13.135,9.402 13.234,9.353 C13.357,9.303 13.617, 9.155 13.753,9.267 C13.766,9.242 13.803,9.217 13.815,9.205 C13.901,9.304 13.988,9.403 14.062,9.514 C13.963, 9.464 13.803,9.490 13.691,9.502 C13.605,9.526 13.456,9.552 13.419,9.650 C13.456,9.711 13.505,9.810 13.481, 9.872 C13.320,9.761 13.196,9.575 12.973,9.551 C12.874,9.551 12.775,9.551 12.701,9.563 C11.513,10.219 10.511, 11.171 9.794,12.310 C9.844,12.360 9.893,12.396 9.942,12.409 C10.065,12.446 9.942,12.804 10.177, 12.619 C10.251,12.681 10.263,12.767 10.214,12.854 C10.227,12.842 10.722,13.164 10.759,13.188 C10.845, 13.263 10.981,13.349 11.018,13.448 C11.043,13.534 10.969,13.633 10.895,13.671 C10.882,13.646 10.697, 13.460 10.673,13.510 C10.635,13.572 10.673,13.906 10.809,13.893 C10.611,13.906 10.697,14.672 10.648, 14.821 C10.648,14.834 10.673,14.834 10.673,14.834 C10.635,14.982 10.759,15.563 11.007,15.502 C10.846, 15.539 11.291,16.108 11.353,16.145 C11.514,16.256 11.700,16.330 11.811,16.491 C11.934,16.665 11.934, 16.924 12.108,17.060 C12.058,17.209 12.367,17.382 12.356,17.592 C12.331,17.605 12.318,17.605 12.294, 17.617 C12.356,17.790 12.591,17.790 12.677,17.951 C12.727,18.050 12.677,18.285 12.838,18.235 C12.862, 17.963 12.677,17.691 12.541,17.468 C12.466,17.345 12.393,17.233 12.330,17.110 C12.269,16.998 12.256, 16.862 12.207,16.738 C12.257,16.751 12.528,16.850 12.504,16.886 C12.405,17.134 12.899,17.566 13.036, 17.727 C13.073,17.764 13.357,18.136 13.209,18.136 C13.370,18.136 13.592,18.383 13.667,18.507 C13.778, 18.692 13.753,18.927 13.827,19.125 C13.902,19.373 14.248,19.484 14.446,19.595 C14.619,19.682 14.767, 19.806 14.940,19.868 C15.200,19.967 15.262,19.880 15.485,19.843 C15.806,19.793 15.844,20.153 16.103, 20.288 C16.264,20.374 16.611,20.499 16.783,20.424 C16.709,20.449 17.043,20.956 17.068,20.993 C17.179, 21.142 17.389,21.216 17.513,21.365 C17.550,21.340 17.587,21.303 17.599,21.253 C17.549,21.389 17.784, 21.649 17.908,21.624 C18.045,21.600 18.082,21.328 18.082,21.229 C17.834,21.352 17.611,21.253 17.475, 21.006 C17.451,20.944 17.253,20.598 17.425,20.598 C17.661,20.598 17.500,20.412 17.475,20.239 C17.451, 20.066 17.277,19.955 17.191,19.806 C17.117,19.954 16.870,19.918 16.795,19.793 C16.795,19.831 16.758, 19.892 16.758,19.941 C16.696,19.941 16.635,19.954 16.573,19.929 C16.597,19.781 16.610,19.595 16.647, 19.434 C16.709,19.211 17.117,18.778 16.585,18.803 C16.400,18.816 16.326,18.889 16.264,19.051 C16.202, 19.199 16.227,19.335 16.053,19.409 C15.942,19.459 15.571,19.434 15.460,19.372 C15.225,19.236 15.064, 18.803 15.064,18.556 C15.051,18.222 15.225,17.925 15.064,17.615 C15.138,17.554 15.212,17.430 15.299, 17.368 C15.373,17.318 15.460,17.405 15.497,17.256 C15.460,17.231 15.411,17.182 15.398,17.182 C15.583, 17.268 15.930,17.058 16.091,17.182 C16.190,17.256 16.301,17.281 16.363,17.157 C16.376,17.120 16.277, 16.972 16.326,16.873 C16.363,17.083 16.499,17.121 16.684,16.984 C16.759,17.059 16.957,17.034 17.093, 17.108 C17.229,17.194 17.254,17.330 17.414,17.145 C17.513,17.293 17.526,17.293 17.562,17.442 C17.600, 17.578 17.674,17.924 17.798,17.987 C18.057,18.147 17.995,17.714 17.971,17.566 C17.958,17.554 17.958, 17.146 17.946,17.146 C17.551,17.060 17.699,16.750 17.922,16.540 C17.959,16.515 18.243,16.416 18.367, 16.317 C18.478,16.218 18.615,16.045 18.552,15.884 C18.614,15.884 18.664,15.834 18.688,15.772 C18.651, 15.760 18.503,15.636 18.478,15.649 C18.564,15.599 18.552,15.525 18.502,15.451 C18.626,15.377 18.564, 15.240 18.687,15.191 C18.824,15.377 19.096,15.167 18.960,15.018 C19.083,14.845 19.368,14.932 19.442, 14.770 C19.627,14.820 19.492,14.585 19.590,14.449 C19.676,14.337 19.825,14.337 19.937,14.275 C19.937, 14.288 20.246,14.102 20.147,14.090 C20.358,14.115 20.778,13.892 20.457,13.707 C20.507,13.595 20.345, 13.546 20.234,13.522 C20.321,13.497 20.432,13.546 20.507,13.497 C20.667,13.386 20.556,13.336 20.420, 13.299 C20.247,13.249 20.024,13.361 19.888,13.447 L19.889,13.445 ZM17.873,24.293 C19.568,23.996 21.077, 23.156 22.214,21.955 C22.140,21.881 22.004,21.905 21.905,21.856 C21.806,21.819 21.731,21.782 21.608, 21.757 C21.632,21.510 21.360,21.423 21.187,21.300 C21.027,21.176 20.928,21.040 20.693,21.089 C20.668, 21.102 20.420,21.188 20.470,21.237 C20.309,21.101 20.235,21.027 20.025,20.965 C19.827,20.903 19.691, 20.655 19.493,20.879 C19.394,20.978 19.443,21.126 19.394,21.225 C19.234,21.089 19.542,20.929 19.419, 20.781 C19.271,20.607 19.010,20.892 18.887,20.966 C18.812,21.028 18.726,21.052 18.676,21.126 C18.615, 21.213 18.590,21.324 18.540,21.411 C18.503,21.312 18.292,21.336 18.280,21.263 C18.330,21.560 18.330, 21.869 18.392,22.166 C18.429,22.339 18.392,22.624 18.244,22.760 C18.096,22.896 17.910,23.044 17.885, 23.254 C17.861,23.403 17.898,23.539 18.033,23.576 C18.046,23.761 17.836,23.897 17.848,24.095 C17.848, 24.108 17.861,24.231 17.873,24.293 Z"})}),Ms=e=>Object(qi.jsx)(Ji,{...e,children:Object(qi.jsx)("path",{d:"M25.383,6.718 L15.314,8.191 L15.314,15.655 L25.383,15.575 L25.383, 6.718 ZM6.696,16.465 L6.696,22.816 L14.329,23.862 L14.323,16.515 L6.696, 16.465 ZM15.234,16.567 L15.248,23.976 L25.373,25.400 L25.376,16.583 L15.234, 16.567 ZM6.690,9.363 L6.697,15.712 L14.330,15.668 L14.326,8.326 L6.690,9.363 Z"})}),Ns=e=>Object(qi.jsx)(Ji,{...e,width:e.width||"10",height:e.height||"10",viewBox:e.height||"0 0 10 10",children:Object(qi.jsx)("path",{fill:e.fill||"#FFF",fillRule:"evenodd",d:"M7,12A5,5,0,1,0,2,7,5,5,0,0,0,7,12ZM9.317,6.192a.625.625,0,1,0-.884-.884L6.375,7.366l-.808-.808a.625.625,0,1,0-.884.884l1.25,1.25a.625.625,0,0,0,.884,0l2.5-2.5Z",transform:"translate(-2 -2)"})}),Ps=e=>Object(qi.jsx)(Ji,{...e,children:Object(qi.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4",d:"M19 9l-7 7-7-7"})}),Rs=e=>Object(qi.jsx)(Ji,{...e,width:e.width||"11.192",height:e.height||"11.192",viewBox:e.viewBox||"0 0 11.192 11.192",children:Object(qi.jsx)("path",{fill:e.fill||"#606E8A",fillRule:"evenodd",d:"M7.6,13.191A5.6,5.6,0,1,0,2,7.6,5.6,5.6,0,0,0,7.6,13.191ZM8.3,4.8a.7.7,0,0,0-1.4,0V7.6a.7.7,0,0,0,.2.494l1.978,1.979a.7.7,0,0,0,.99-.99L8.3,7.306Z",transform:"translate(-2 -2)"})}),Ls=e=>Object(qi.jsx)(Ji,{width:e.width||"21.944",height:e.height||"21.944",viewBox:e.viewBox||"0 0 21.944 21.944",...e,children:Object(qi.jsxs)("g",{transform:"translate(-5 -5)",children:[Object(qi.jsx)("rect",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5px",width:"16.205",height:"16.205",rx:"2",transform:"translate(9.74 9.74)"}),Object(qi.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5px",d:"M2,15.712V4.493A2.493,2.493,0,0,1,4.493,2H15.712",transform:"translate(4 4)"})]})}),Is=e=>Object(qi.jsx)(Ji,{...e,children:Object(qi.jsxs)("g",{transform:"translate(6.93 -4.384) rotate(45)",children:[Object(qi.jsx)("line",{stroke:e.stroke||"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.8",y2:"16",transform:"translate(8 0)"}),Object(qi.jsx)("line",{stroke:e.stroke||"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.8",x2:"16",transform:"translate(0 8)"})]})}),Fs=e=>Object(qi.jsx)(Ji,{width:e.width||"11.643",height:e.height||"12.587",viewBox:e.viewBox||"0 0 11.643 12.587",...e,children:Object(qi.jsxs)("g",{transform:"translate(0.6 0.608)",children:[Object(qi.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.2px",d:"M13.443,15v2.492a1.205,1.205,0,0,1-1.16,1.246H4.16A1.205,1.205,0,0,1,3,17.492V15",transform:"translate(-3 -7.359)"}),Object(qi.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.2px",d:"M7,10l2.9,3.115L12.8,10",transform:"translate(-4.679 -5.474)"}),Object(qi.jsx)("line",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.2px",x1:"0.085",y1:"6.646",transform:"translate(5.118)"})]})}),Bs=e=>Object(qi.jsxs)(Ji,{width:"20",height:"20",viewBox:"0 0 20 20",...e,children:[Object(qi.jsx)("defs",{children:Object(qi.jsx)("style",{children:".a,.b{fill:none;}.a{stroke:#455666;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}"})}),Object(qi.jsx)("path",{className:"a",d:"M8.5,5.5h-3A1.5,1.5,0,0,0,4,7v7.5A1.5,1.5,0,0,0,5.5,16H13a1.5,1.5,0,0,0,1.5-1.5v-3M11.5,4H16m0,0V8.5M16,4,8.5,11.5"}),Object(qi.jsx)("rect",{className:"b",width:"20",height:"20"})]}),Hs=e=>Object(qi.jsx)(Ji,{viewBox:"0 0 384 512",...e,children:Object(qi.jsx)("path",{d:"M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm76.45 211.36l-96.42 95.7c-6.65 6.61-17.39 6.61-24.04 0l-96.42-95.7C73.42 337.29 80.54 320 94.82 320H160v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80h65.18c14.28 0 21.4 17.29 11.27 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"})}),zs=e=>Object(qi.jsx)(Ji,{width:"19.724",height:"19.241",viewBox:"0 0 19.724 19.241",...e,children:Object(qi.jsx)("path",{d:"M18.4,10.277a9.819,9.819,0,0,0-3.589-3.589,9.646,9.646,0,0,0-4.95-1.323,9.647,9.647,0,0,0-4.95,1.323,9.818,9.818,0,0,0-3.589,3.589A9.647,9.647,0,0,0,0,15.227a9.584,9.584,0,0,0,1.881,5.8,9.659,9.659,0,0,0,4.86,3.563.575.575,0,0,0,.514-.09.5.5,0,0,0,.167-.385q0-.039-.006-.693t-.006-1.143l-.3.051a3.768,3.768,0,0,1-.713.045,5.43,5.43,0,0,1-.892-.09,1.994,1.994,0,0,1-.86-.385,1.629,1.629,0,0,1-.565-.79l-.128-.3a3.209,3.209,0,0,0-.4-.655,1.55,1.55,0,0,0-.559-.488l-.09-.064a.943.943,0,0,1-.167-.154.7.7,0,0,1-.116-.18q-.039-.09.064-.148a.833.833,0,0,1,.372-.057l.257.038a1.874,1.874,0,0,1,.636.308,2.073,2.073,0,0,1,.623.668,2.264,2.264,0,0,0,.713.8,1.512,1.512,0,0,0,.841.276,3.652,3.652,0,0,0,.732-.064,2.554,2.554,0,0,0,.578-.193,2.081,2.081,0,0,1,.629-1.323,8.794,8.794,0,0,1-1.316-.231,5.241,5.241,0,0,1-1.207-.5,3.457,3.457,0,0,1-1.034-.86,4.134,4.134,0,0,1-.674-1.348,6.412,6.412,0,0,1-.263-1.926,3.745,3.745,0,0,1,1.015-2.645,3.452,3.452,0,0,1,.09-2.619,1.8,1.8,0,0,1,1.1.173,7.721,7.721,0,0,1,1.072.494q.34.205.546.347a9.274,9.274,0,0,1,4.931,0l.488-.308A6.911,6.911,0,0,1,14,9.589a1.683,1.683,0,0,1,1.04-.141,3.419,3.419,0,0,1,.1,2.619,3.746,3.746,0,0,1,1.015,2.645,6.483,6.483,0,0,1-.263,1.932,3.974,3.974,0,0,1-.68,1.348,3.59,3.59,0,0,1-1.04.854,5.251,5.251,0,0,1-1.207.5,8.783,8.783,0,0,1-1.316.231,2.287,2.287,0,0,1,.668,1.823v2.709a.512.512,0,0,0,.161.385.558.558,0,0,0,.507.09,9.658,9.658,0,0,0,4.861-3.563,9.586,9.586,0,0,0,1.881-5.8A9.655,9.655,0,0,0,18.4,10.277Z",transform:"translate(0 -5.365)"})}),Us=e=>Object(qi.jsx)(Ji,{...e,width:e.width||"16.968",height:e.height||"16.968",viewBox:e.viewBox||"0 0 16.968 16.968",children:Object(qi.jsx)("path",{fill:e.fill||"#fff",fillRule:"evenodd",d:"M12,7.5A4.5,4.5,0,0,0,6.193,3.193L6,3l-.75-.75L4.5,1.5H3V0H0V3L3.193,6.193A4.5,4.5,0,1,0,12,7.5Zm-4.5,3A.75.75,0,0,1,7.5,9,1.5,1.5,0,0,0,9,7.5a.75.75,0,1,1,1.5,0A3,3,0,0,1,7.5,10.5Z",transform:"translate(16.968 8.482) rotate(135)"})}),$s=e=>Object(qi.jsx)(Ji,{width:"11.328",height:"11.345",viewBox:"0 0 11.328 11.345",...e,children:Object(qi.jsx)("g",{transform:"translate(0 0.021)",children:Object(qi.jsx)("path",{d:"M15.47,8.182v4.906H7.235V4.853h4.906V3.618H6.618A.618.618,0,0,0,6,4.235v9.47a.618.618,0,0,0,.618.618h9.47a.618.618,0,0,0,.618-.618V8.182Zm-1.8-5.2V4.214l1.543.021-3.07,3.07h0a.617.617,0,0,0,.872.872h0l3.071-3.07,0,1.558h1.235L17.313,3Z",transform:"translate(-6 -3)"})})}),Ws=e=>Object(qi.jsx)(Ji,{...e,children:Object(qi.jsx)("path",{d:"M12.000,-0.001 L3.000,-0.001 C1.346,-0.001 0.000,1.304 0.000,2.908 L0.000,13.091 C0.000,14.695 1.346,16.000 3.000,16.000 L12.000,16.000 C13.654,16.000 15.000,14.695 15.000,13.091 L15.000,2.908 C15.000,1.304 13.654,-0.001 12.000,-0.001 ZM9.250,11.636 L2.750,11.636 L2.750,10.181 L9.250,10.181 L9.250,11.636 ZM12.250,8.727 L2.750,8.727 L2.750,7.272 L12.250,7.272 L12.250,8.727 ZM12.250,5.818 L2.750,5.818 L2.750,4.363 L12.250,4.363 L12.250,5.818 Z"})}),Vs=e=>Object(qi.jsx)(Ji,{...e,width:e.width||"10.5",height:e.height||"12",viewBox:e.viewBox||"0 0 10.5 12",children:Object(qi.jsx)("path",{d:"M3.75,2a.75.75,0,0,1,.75.75V4.326A5.252,5.252,0,0,1,13.2,6.25a.75.75,0,1,1-1.414.5,3.752,3.752,0,0,0-6.538-1H7.5a.75.75,0,0,1,0,1.5H3.75A.75.75,0,0,1,3,6.5V2.75A.75.75,0,0,1,3.75,2Zm.006,6.793a.75.75,0,0,1,.957.458,3.752,3.752,0,0,0,6.538,1H9a.75.75,0,0,1,0-1.5h3.75a.75.75,0,0,1,.75.75v3.75a.75.75,0,1,1-1.5,0V11.674A5.252,5.252,0,0,1,3.3,9.75a.75.75,0,0,1,.457-.957Z",transform:"translate(-3 -2)"})}),Gs=e=>Object(qi.jsx)(Ji,{width:e.width||"11.811px",height:e.height||"11.811px",viewBox:e.viewBox||"0 0 11.811 11.811",...e,children:Object(qi.jsx)("g",{transform:"translate(0.75 0.75)",children:Object(qi.jsx)("path",{fill:e.fill||"none",stroke:e.stroke||"#858ba5",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5px",d:"M13,13,9.667,9.667m1.111-2.778A3.889,3.889,0,1,1,6.889,3,3.889,3.889,0,0,1,10.778,6.889Z",transform:"translate(-3 -3)"})})}),qs=e=>Object(qi.jsx)(Ji,{width:e.width||"12px",height:e.height||"12px",viewBox:"0 0 12 12",...e,children:Object(qi.jsx)("g",{transform:"translate(-2 -2)",children:Object(qi.jsx)("g",{transform:"translate(2 2)",children:Object(qi.jsx)("path",{d:"M12.9,8c0-.138-.006-.27-.019-.408l1.148-.846a.593.593,0,0,0,.16-.78L13.041,4.028a.618.618,0,0,0-.771-.252l-1.327.546a4.715,4.715,0,0,0-.722-.408l-.179-1.386A.613.613,0,0,0,9.431,2h-2.3a.615.615,0,0,0-.617.528L6.333,3.914a4.715,4.715,0,0,0-.722.408L4.284,3.776a.618.618,0,0,0-.771.252L2.359,5.972a.594.594,0,0,0,.16.78L3.667,7.6c-.012.132-.019.264-.019.4s.006.27.019.408l-1.148.846a.593.593,0,0,0-.16.78l1.154,1.938a.618.618,0,0,0,.771.252l1.327-.546a4.715,4.715,0,0,0,.722.408l.179,1.386A.613.613,0,0,0,7.123,14h2.3a.613.613,0,0,0,.611-.528l.179-1.386a4.715,4.715,0,0,0,.722-.408l1.327.546a.618.618,0,0,0,.771-.252l1.154-1.938a.594.594,0,0,0-.16-.78L12.88,8.408A3.017,3.017,0,0,0,12.9,8ZM8.3,10.1A2.1,2.1,0,1,1,10.461,8,2.133,2.133,0,0,1,8.3,10.1Z",transform:"translate(-2.277 -2)"})})})}),Ys=e=>Object(qi.jsx)(Ji,{...e,width:e.width||"10",height:e.height||"9.179",viewBox:"0 0 10 9.179",children:Object(qi.jsx)("path",{fill:e.fill||"#FFF",fillRule:"evenodd",d:"M6.268,2.752a1.318,1.318,0,0,1,2.3,0l3.679,6.541A1.318,1.318,0,0,1,11.1,11.258H3.738A1.318,1.318,0,0,1,2.588,9.293L6.268,2.752ZM8.077,9.28a.659.659,0,1,1-.659-.659A.659.659,0,0,1,8.077,9.28ZM7.417,4.005a.659.659,0,0,0-.659.659V6.643a.659.659,0,1,0,1.319,0V4.664A.659.659,0,0,0,7.417,4.005Z",transform:"translate(-2.417 -2.079)"})}),Ks=e=>Object(qi.jsx)(Ji,{...e,width:e.width||"14.717",height:e.height||"10.13",viewBox:e.viewBox||"0 0 14.717 10.13",children:Object(qi.jsxs)("g",{transform:"translate(-715.347 -503.054)",children:[Object(qi.jsx)("path",{d:"M598.064,10022.192H586.731",transform:"translate(131 -9514)",fill:"none",stroke:e.fill||"currentColor",strokeLinecap:"round",strokeWidth:e.strokeWidth||"2"}),Object(qi.jsx)("path",{d:"M589,10018.469l-3.651,3.651,3.651,3.65",transform:"translate(131 -9514)",fill:"none",stroke:e.fill||"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:e.strokeWidth||"2"})]})}),Qs=e=>Object(qi.jsx)(Ji,{...e,width:e.width||"12",height:e.height||"12",viewBox:"0 0 12 12",children:Object(qi.jsx)("path",{transform:"translate(-2 -2)",fill:e.fill||"#6b7e8f",fillRule:"evenodd",d:"M14,8A6,6,0,1,1,8,2,6,6,0,0,1,14,8ZM8.75,11A.75.75,0,1,1,8,10.25.75.75,0,0,1,8.75,11ZM8,4.25A.75.75,0,0,0,7.25,5V8a.75.75,0,0,0,1.5,0V5A.75.75,0,0,0,8,4.25Z"})}),Zs=e=>Object(qi.jsx)(Ji,{...e,width:e.width||"12",height:e.height||"12",viewBox:e.height||"0 0 12 12",children:Object(qi.jsxs)("g",{transform:"translate(-2.089 -1.994)",children:[Object(qi.jsxs)("g",{transform:"translate(2.089 1.994)",fill:"none",stroke:"#50cba7",strokeWidth:"1.5",children:[Object(qi.jsx)("circle",{cx:"6.5",cy:"6.5",r:"6.5",stroke:"none"}),Object(qi.jsx)("circle",{cx:"6.5",cy:"6.5",r:"5.75",fill:"none"})]}),Object(qi.jsx)("path",{d:"M13.593,3.283,9.785,6.659,8.579,5.072",transform:"translate(-2.497 3.523)",fill:"none",stroke:"#50cba7",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"})]})}),Xs=e=>Object(qi.jsx)(Ji,{...e,width:e.width||"14.5",height:e.height||"14.5",viewBox:"0 0 14.5 14.5",children:Object(qi.jsxs)("g",{transform:"translate(-1.25 -1.25)",fill:e.fill||"#6b7e8f",children:[Object(qi.jsx)("circle",{cx:"6.5",cy:"6.5",r:"6.5",transform:"translate(2 2)",fill:"none",stroke:"#ff4451",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"}),Object(qi.jsx)("line",{y1:"4",x2:"4",transform:"translate(6.5 6.5)",fill:"none",stroke:"#ff4451",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"}),Object(qi.jsx)("line",{x1:"4",y1:"4",transform:"translate(6.5 6.5)",fill:"none",stroke:"#ff4451",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"})]})}),Js=e=>Object(qi.jsx)(Ji,{...e,width:e.width||"15.087",height:e.height||"15.087",viewBox:e.height||"0 0 15.087 13.236",children:Object(qi.jsxs)("g",{transform:"translate(-0.783 -2.147)",children:[Object(qi.jsx)("path",{d:"M7.217,3.521,1.726,12.688a1.3,1.3,0,0,0,1.109,1.945H13.816a1.3,1.3,0,0,0,1.109-1.945L9.434,3.521a1.3,1.3,0,0,0-2.217,0Z",fill:"none",stroke:"#ff8a70",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"}),Object(qi.jsx)("line",{y2:"3.48",transform:"translate(8.325 6.265)",fill:"none",stroke:"#ff8a70",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"}),Object(qi.jsx)("line",{x2:"0.01",transform:"translate(8.324 12.04)",fill:"none",stroke:"#ff8a70",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"})]})}),el=e=>{const{stroke:t="#6b7e8f"}=e;return Object(qi.jsx)(Ji,{width:"15.311",height:"15.311",viewBox:"0 0 15.311 15.311",...e,children:Object(qi.jsx)("g",{transform:"translate(-1113.344 -427.743)",children:Object(qi.jsxs)("g",{transform:"translate(1111.094 425.493)",children:[Object(qi.jsx)("path",{d:"M15,3h6V9",transform:"translate(-4.189)",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"}),Object(qi.jsx)("path",{d:"M9,21H3V15",transform:"translate(0 -4.189)",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"}),Object(qi.jsx)("line",{x1:"5",y2:"5",transform:"translate(10.906 3.906)",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"}),Object(qi.jsx)("line",{y1:"5",x2:"5",transform:"translate(3.906 10.906)",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"})]})})})},tl=e=>Object(qi.jsxs)(Ji,{...e,viewBox:e.viewBox||"0 0 128 128",width:e.width||"128",height:e.height||"128",children:[Object(qi.jsx)("circle",{fill:"#3E445D",cx:"64",cy:"64",r:"62"}),Object(qi.jsx)("circle",{fill:"#FF4451",stroke:"#BA1E45",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"64.1",cy:"64",r:"39.7"}),Object(qi.jsx)("circle",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"64.1",cy:"64",r:"29.1"}),Object(qi.jsx)("rect",{x:"60.9",y:"45.5",fill:"#FF4451",stroke:"#BA1E45",strokeWidth:"0.5",strokeMiterlimit:"10",width:"6.3",height:"25.8"}),Object(qi.jsx)("rect",{x:"60.9",y:"73.7",fill:"#FF4451",stroke:"#BA1E45",strokeWidth:"0.5",strokeMiterlimit:"10",width:"6.3",height:"5.5"})]}),nl=e=>Object(qi.jsxs)(Ji,{...e,viewBox:e.viewBox||"0 0 128 128",width:e.width||"128",height:e.height||"128",children:[Object(qi.jsx)("circle",{fill:"#EBF0F5",cx:"64",cy:"64",r:"62"}),Object(qi.jsx)("circle",{fill:"#FF4451",stroke:"#BA1E45",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"64.1",cy:"64",r:"39.7"}),Object(qi.jsx)("circle",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"64.1",cy:"64",r:"29.1"}),Object(qi.jsx)("rect",{x:"60.9",y:"45.5",fill:"#FF4451",stroke:"#BA1E45",strokeWidth:"0.5",strokeMiterlimit:"10",width:"6.3",height:"25.8"}),Object(qi.jsx)("rect",{x:"60.9",y:"73.7",fill:"#FF4451",stroke:"#BA1E45",strokeWidth:"0.5",strokeMiterlimit:"10",width:"6.3",height:"5.5"})]}),rl=e=>Object(qi.jsxs)(Ji,{...e,viewBox:e.viewBox||"0 0 128 128",width:e.width||"128",height:e.height||"128",children:[Object(qi.jsx)("circle",{fill:"#EBF0F5",cx:"64",cy:"64",r:"62"}),Object(qi.jsxs)("g",{children:[Object(qi.jsx)("g",{children:Object(qi.jsx)("g",{children:Object(qi.jsx)("path",{fill:"#9199A5",stroke:"#49505A",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M121.4,87.2c-2.7,6.7-6.6,12.9-11.3,18.2 H94.9c-3.6,0-6.5-2.9-6.5-6.5V89H93v9.8c0,1.3,1.1,2.4,2.4,2.4h15.1c1.3,0,2.4-1.1,2.4-2.4C113,93.5,116.6,88.8,121.4,87.2z"})})}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M53.8,93H18.9c-2.8,0-5-2.3-5-5V43.4 c0-2.8,2.3-5,5-5h34.9c2.8,0,5,2.3,5,5V88C58.9,90.7,56.6,93,53.8,93z"}),Object(qi.jsx)("path",{fill:"#9199A5",stroke:"#49505A",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M37,59.1l-1.3,0c-1.5,0-2.7-1.2-2.7-2.7l0-0.8 c0-1.5,1.2-2.7,2.7-2.7l1.3,0c1.5,0,2.7,1.2,2.7,2.7l0,0.8C39.7,57.9,38.5,59.1,37,59.1z"}),Object(qi.jsx)("path",{fill:"#9199A5",stroke:"#49505A",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M28.4,72.4l-1.3,0c-1.5,0-2.7-1.2-2.7-2.7 l0-0.8c0-1.5,1.2-2.7,2.7-2.7l1.3,0c1.5,0,2.7,1.2,2.7,2.7l0,0.8C31.1,71.2,29.9,72.4,28.4,72.4z"}),Object(qi.jsx)("path",{fill:"#9199A5",stroke:"#49505A",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M44.9,72.4l-1.3,0c-1.5,0-2.7-1.2-2.7-2.7 l0-0.8c0-1.5,1.2-2.7,2.7-2.7l1.3,0c1.5,0,2.7,1.2,2.7,2.7l0,0.8C47.6,71.2,46.4,72.4,44.9,72.4z"}),Object(qi.jsx)("path",{fill:"#9199A5",stroke:"#49505A",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M91.3,72.6H61.7c-0.9,0-1.6-0.7-1.6-1.6v-0.5 c0-0.9,0.7-1.6,1.6-1.6h29.6c0.9,0,1.6,0.7,1.6,1.6V71C92.9,71.9,92.2,72.6,91.3,72.6z"}),Object(qi.jsx)("path",{fill:"#9199A5",stroke:"#49505A",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M91.4,59.4H61.8c-0.9,0-1.6-0.7-1.6-1.6v-0.5 c0-0.9,0.7-1.6,1.6-1.6h29.6c0.9,0,1.6,0.7,1.6,1.6v0.5C93,58.6,92.3,59.4,91.4,59.4z"}),Object(qi.jsx)("path",{fill:"#9199A5",stroke:"#49505A",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M99.7,90.3H78c-1.6,0-2.8-1.3-2.8-2.8V52.9 c0-1.6,1.3-2.8,2.8-2.8h21.7c1.6,0,2.8,1.3,2.8,2.8v34.6C102.5,89,101.3,90.3,99.7,90.3z"}),Object(qi.jsx)("path",{fill:"#3E445D",stroke:"#1D2236",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M101.1,90.3H81.4c-0.8,0-1.4-0.6-1.4-1.4V51.5 c0-0.8,0.6-1.4,1.4-1.4h19.7c0.8,0,1.4,0.6,1.4,1.4v37.4C102.5,89.6,101.9,90.3,101.1,90.3z"}),Object(qi.jsx)("rect",{x:"80",y:"53.3",fill:"#9199A5",stroke:"#49505A",strokeWidth:"0.5",strokeMiterlimit:"10",width:"22.5",height:"2.8"}),Object(qi.jsx)("rect",{x:"80",y:"59.1",fill:"#9199A5",stroke:"#49505A",strokeWidth:"0.5",strokeMiterlimit:"10",width:"22.5",height:"2.8"}),Object(qi.jsx)("rect",{x:"80",y:"65",fill:"#9199A5",stroke:"#49505A",strokeWidth:"0.5",strokeMiterlimit:"10",width:"22.5",height:"2.8"}),Object(qi.jsx)("rect",{x:"80",y:"70.9",fill:"#9199A5",stroke:"#49505A",strokeWidth:"0.5",strokeMiterlimit:"10",width:"22.5",height:"2.8"}),Object(qi.jsx)("rect",{x:"80",y:"76.8",fill:"#9199A5",stroke:"#49505A",strokeWidth:"0.5",strokeMiterlimit:"10",width:"22.5",height:"2.8"}),Object(qi.jsxs)("g",{children:[Object(qi.jsx)("path",{fill:"#3E445D",stroke:"#1D2236",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M69.4,72.6h-7.7c-0.9,0-1.6-0.7-1.6-1.6v-0.5 c0-0.9,0.7-1.6,1.6-1.6h7.7V72.6z"}),Object(qi.jsx)("path",{fill:"#3E445D",stroke:"#1D2236",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M69.5,59.4h-7.7c-0.9,0-1.6-0.7-1.6-1.6v-0.5 c0-0.9,0.7-1.6,1.6-1.6h7.7V59.4z"})]}),Object(qi.jsx)("rect",{x:"88.4",y:"90.3",opacity:"0.33",fill:"#49505A",stroke:"#49505A",strokeWidth:"0.5",strokeMiterlimit:"10",width:"4.6",height:"2.1"})]}),Object(qi.jsx)("circle",{fill:"none",cx:"64",cy:"64",r:"62"})]}),ol=Object(vr.c)(Tr)`
  .lh {
    line-height: 1.5;
  }

  text-align: center;
  color: ${e=>"light"===e.themeVariant?e.theme.colors.C000:e.theme.colors.C800};

  > ${Ur} {
    color: inherit;
  }

  > ${Tr} {
    padding: 0 16px;
    margin: 16px 0;

    > ${no} {
      margin: 0;
      color: ${e=>"light"===e.themeVariant?e.theme.colors.C000:e.theme.colors.C800};

      ${oo} {
        color: inherit;
        margin-top: 10px;
      }
    }
  }
`;function il(e){let{themeVariant:t,isProxy:n}=e;return Object(qi.jsxs)(ol,{themeVariant:t,children:[Object(qi.jsx)(Ur,{className:"lh",children:"An unexpected error has occurred while calling the API Server. This could be due one of the following reasons:"}),Object(qi.jsx)(Tr,{className:"lh",children:Object(qi.jsxs)(no,{children:[!n&&Object(qi.jsx)(oo,{children:"Cross-Origin Resource Sharing (CORS) not supported by the API Server."}),Object(qi.jsx)(oo,{children:"Server could not complete the request due to temporary issues."}),Object(qi.jsx)(oo,{children:"Server could not access the API endpoint."})]})}),Object(qi.jsx)(Ur,{className:"lh",children:"Please Try Again. If the issue exists, please contact the API provider for further detail."})]})}ol.displayName="DefaultErrorMessageStyled";const al={errorDefaultTryOut:{title:"Unexpected Error",icon:tl,theme:"light",message:Object(qi.jsx)(il,{themeVariant:"light"}),details:null},errorConnectionTryOut:{title:"Connection Lost",icon:e=>Object(qi.jsxs)(Ji,{...e,viewBox:e.viewBox||"0 0 128 128",width:e.width||"128",height:e.height||"128",children:[Object(qi.jsx)("circle",{fill:"#3E445D",cx:"64",cy:"64",r:"62"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M35.7,41.3L35.7,41.3c-1.1,0-2.1,0.9-2.1,2.1 v43.3c0,1.1,0.9,2.1,2.1,2.1h0c1.1,0,2.1-0.9,2.1-2.1V43.3C37.8,42.2,36.9,41.3,35.7,41.3z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M97.4,41.3L97.4,41.3c-1.1,0-2.1,0.9-2.1,2.1 v43.3c0,1.1,0.9,2.1,2.1,2.1h0c1.1,0,2.1-0.9,2.1-2.1V43.3C99.4,42.2,98.5,41.3,97.4,41.3z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M101.4,100.9h-72c-3.5,0-6.4-2.9-6.4-6.4v-5.2 c0-3.5,2.9-6.4,6.4-6.4h72c3.5,0,6.4,2.9,6.4,6.4v5.2C107.9,98,105,100.9,101.4,100.9z"}),Object(qi.jsx)("path",{fill:"#FF4451",stroke:"#BA1E45",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M78.8,94.2L78.8,94.2c-1.5,0-2.7-1.2-2.7-2.7v0 c0-1.5,1.2-2.7,2.7-2.7l0,0c1.5,0,2.7,1.2,2.7,2.7v0C81.6,93,80.3,94.2,78.8,94.2z"}),Object(qi.jsx)("path",{fill:"#9199A5",stroke:"#49505A",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M88.1,94.2L88.1,94.2c-1.5,0-2.7-1.2-2.7-2.7v0 c0-1.5,1.2-2.7,2.7-2.7h0c1.5,0,2.7,1.2,2.7,2.7v0C90.8,93,89.6,94.2,88.1,94.2z"}),Object(qi.jsx)("path",{fill:"#9199A5",stroke:"#49505A",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M96.7,94.2L96.7,94.2c-1.5,0-2.7-1.2-2.7-2.7v0 c0-1.5,1.2-2.7,2.7-2.7l0,0c1.5,0,2.7,1.2,2.7,2.7v0C99.4,93,98.2,94.2,96.7,94.2z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",d:"M101.1,85.6H27c-0.5,0-0.9-0.4-0.9-0.9l0,0c0-0.5,0.4-0.9,0.9-0.9h74.1c0.5,0,0.9,0.4,0.9,0.9l0,0 C102,85.1,101.6,85.6,101.1,85.6z"}),Object(qi.jsx)("path",{opacity:"0.1",fill:"#606774",d:"M106.9,100.9H30c-0.5,0-0.9-0.4-0.9-0.9v0c0-0.5,0.4-0.9,0.9-0.9h76.9c0.5,0,0.9,0.4,0.9,0.9 v0C107.9,100.5,107.4,100.9,106.9,100.9z"}),Object(qi.jsx)("rect",{x:"33.7",y:"80.1",opacity:"0.1",fill:"#606774",width:"4.1",height:"2.8"}),Object(qi.jsx)("rect",{x:"95.3",y:"80.1",opacity:"0.1",fill:"#606774",width:"4.1",height:"2.8"}),Object(qi.jsx)("g",{children:Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M71.8,39.3v3.2H56.9v-2.6l9.4-11.3h-9.2v-3.2 h14.4V28l-9.3,11.3H71.8z"})}),Object(qi.jsx)("g",{children:Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M53,54v1.8h-8.3v-1.4l5.2-6.3h-5.1v-1.8h8v1.4 L47.5,54H53z"})}),Object(qi.jsx)("path",{opacity:"0.1",fill:"#606774",d:"M108.1,102.8H21.6c-0.5,0-0.9-0.4-0.9-0.9l0,0c0-0.5,0.4-0.9,0.9-0.9h86.5 c0.5,0,0.9,0.4,0.9,0.9l0,0C109,102.3,108.6,102.8,108.1,102.8z"})]}),theme:"light",message:"A network connection is required to continue the request. Please check your internet and try again.",details:null},errorNotFoundTryOut:{title:"API Specification Not Found",icon:e=>Object(qi.jsxs)(Ji,{...e,viewBox:e.viewBox||"0 0 128 128",width:e.width||"128",height:e.height||"128",children:[Object(qi.jsx)("circle",{fill:"#3E445D",cx:"64",cy:"64",r:"62"}),Object(qi.jsx)("path",{fill:"#01A9DB",stroke:"#0B76B7",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M69.1,59.5v3.7H22.8c-1,0-1.8-0.8-1.8-1.8l0,0 c0-1,0.8-1.8,1.8-1.8H69.1z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M80.2,25.8v70.9c0,1.9-1.5,3.4-3.4,3.4H28.1 c-1.9,0-3.4-1.5-3.4-3.4V41l18.5-18.5h33.6C78.7,22.5,80.2,24,80.2,25.8z"}),Object(qi.jsx)("path",{opacity:"0.15",fill:"#9199A5",d:"M78.6,96.5H26.2c-0.9,0-1.5,0.7-1.5,1.5v0.6c0,0.9,0.7,1.5,1.5,1.5h52.4 c0.9,0,1.5-0.7,1.5-1.5V98C80.2,97.1,79.5,96.5,78.6,96.5z"}),Object(qi.jsx)("path",{opacity:"0.15",fill:"#9199A5",d:"M24.7,42.8l0-1.8l18.5-18.5l1.9,0l0,18.6c0,1-0.8,1.7-1.7,1.7L24.7,42.8z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M25,40.7l17.9-17.9c0.1-0.1,0.3,0,0.3,0.1 l0,17.9c0,0.1-0.1,0.2-0.2,0.2l-17.9,0C25,41,24.9,40.8,25,40.7z"}),Object(qi.jsx)("g",{opacity:"0.5",children:Object(qi.jsx)("path",{fill:"#F1F2F4",d:"M69.1,66.8v18.5H68c-0.3,0-0.6-0.3-0.6-0.6V67.4c0-1.5-1.2-2.6-2.6-2.6H21.5c-0.2,0-0.4-0.1-0.5-0.4 c0-0.1,0-0.1,0-0.2v-2.1c0-0.1,0-0.2,0-0.2c0,0,0-0.1,0.1-0.1c0.2,0.8,0.9,1.4,1.8,1.4h42.6C67.5,63.2,69.1,64.8,69.1,66.8z"})}),Object(qi.jsx)("path",{opacity:"0",fill:"#F1F2F4",d:"M69.1,66.8v18.5H68c-0.3,0-0.6-0.3-0.6-0.6V67.4c0-1.5-1.2-2.6-2.6-2.6H21.5 c-0.2,0-0.4-0.1-0.5-0.4v-3.1c0,0.2,0,0.3,0.1,0.5c0.2,0.8,0.9,1.4,1.8,1.4h42.6C67.5,63.2,69.1,64.8,69.1,66.8z"}),Object(qi.jsx)("circle",{fill:"#FF4451",stroke:"#BA1E45",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"85.2",cy:"68.7",r:"31.4"}),Object(qi.jsx)("circle",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"85.2",cy:"68.7",r:"25.2"}),Object(qi.jsx)("circle",{fill:"#CACFD6",cx:"85.2",cy:"68.7",r:"24"}),Object(qi.jsx)("circle",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"85.2",cy:"68.7",r:"23.1"}),Object(qi.jsx)("g",{children:Object(qi.jsx)("path",{fill:"#FF4451",stroke:"#BA1E45",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M89.2,78.9l-5.1-7.3l-5,7.3 c-0.1,0.1-0.2,0.2-0.3,0.2H74c-0.3,0-0.5-0.3-0.3-0.6l7.5-10.3l-7.1-10c-0.2-0.2,0-0.6,0.3-0.6h4.8c0.1,0,0.2,0.1,0.3,0.2l4.8,6.8 l4.7-6.8c0.1-0.1,0.2-0.2,0.3-0.2h4.5c0.3,0,0.5,0.3,0.3,0.6L87,68l7.6,10.5c0.2,0.2,0,0.6-0.3,0.6h-4.8 C89.3,79.1,89.2,79,89.2,78.9z"})}),Object(qi.jsx)("path",{opacity:"0.15",fill:"#9199A5",d:"M69.1,68.7v18.6c0,2-1.6,3.7-3.7,3.7H24.7V65h40.7C67.5,65,69.1,66.6,69.1,68.7z"}),Object(qi.jsx)("path",{fill:"#0C7FF2",stroke:"#2750AE",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M69.1,66.8v18.6c0,2-1.6,3.7-3.7,3.7h-43 c-0.8,0-1.4-0.6-1.4-1.4V61.3c0,1,0.8,1.8,1.8,1.8h42.6C67.5,63.2,69.1,64.8,69.1,66.8z"}),Object(qi.jsxs)("g",{children:[Object(qi.jsx)("path",{fill:"#F6F6F9",d:"M34,72.7h-3.3L30,74.3h-1.7l3.2-7.2h1.6l3.2,7.2h-1.7L34,72.7z M33.5,71.4l-1.1-2.8l-1.1,2.8H33.5z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",d:"M43.4,69.7c0,1.6-1.2,2.6-3.1,2.6h-1.5v2h-1.7v-7.2h3.1C42.2,67.1,43.4,68.1,43.4,69.7z M41.7,69.7 c0-0.8-0.5-1.3-1.5-1.3h-1.4v2.5h1.4C41.2,70.9,41.7,70.5,41.7,69.7z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",d:"M44.5,67.1h1.7v7.2h-1.7V67.1z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",d:"M28.7,82.6l0.6-1.3c0.6,0.4,1.5,0.8,2.4,0.8c1,0,1.4-0.3,1.4-0.8c0-1.3-4.2-0.4-4.2-3.1c0-1.2,1-2.2,3-2.2 c0.9,0,1.8,0.2,2.5,0.6l-0.5,1.3c-0.7-0.4-1.4-0.6-2-0.6c-1,0-1.4,0.4-1.4,0.8c0,1.3,4.2,0.4,4.2,3.1c0,1.2-1,2.2-3.1,2.2 C30.5,83.4,29.3,83.1,28.7,82.6z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",d:"M42,78.7c0,1.6-1.2,2.6-3.1,2.6h-1.5v2h-1.7v-7.2h3.1C40.8,76.1,42,77.1,42,78.7z M40.4,78.7 c0-0.8-0.5-1.3-1.5-1.3h-1.4V80h1.4C39.8,80,40.4,79.5,40.4,78.7z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",d:"M48.8,82v1.3h-5.6v-7.2h5.4v1.3h-3.8V79h3.3v1.3h-3.3V82H48.8z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",d:"M49.6,79.7c0-2.2,1.7-3.7,3.9-3.7c1.2,0,2.3,0.5,3,1.3l-1.1,1c-0.5-0.6-1.1-0.8-1.8-0.8 c-1.3,0-2.3,0.9-2.3,2.3s1,2.3,2.3,2.3c0.7,0,1.3-0.3,1.8-0.9l1.1,1c-0.7,0.8-1.7,1.3-3,1.3C51.3,83.4,49.6,81.9,49.6,79.7z"})]})]}),theme:"light",message:"The API Specification resource you are trying to access does not exist. Please \n    contact the API provider for further detail.",details:null},errorServerTryOut:{title:"Internal Error",icon:e=>Object(qi.jsxs)(Ji,{...e,viewBox:e.viewBox||"0 0 128 128",width:e.width||"128",height:e.height||"128",children:[Object(qi.jsx)("circle",{fill:"#3E445D",cx:"64",cy:"64",r:"62"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M102.5,30.6v17.5c0,1.5-1.2,2.7-2.7,2.7H47.4 c-1.5,0-2.7-1.2-2.7-2.7V30.6c0-2.7,2.2-4.8,4.8-4.8h48.1C100.3,25.7,102.5,27.9,102.5,30.6z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M102.5,54.8v19.6c0,1.5-1.2,2.7-2.7,2.7H47.4 c-1.5,0-2.7-1.2-2.7-2.7V54.8c0-1.5,1.2-2.7,2.7-2.7h52.3C101.3,52.1,102.5,53.3,102.5,54.8z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M102.5,81.2v17.5c0,2.7-2.2,4.8-4.8,4.8H49.5 c-2.7,0-4.8-2.2-4.8-4.8V81.2c0-1.5,1.2-2.7,2.7-2.7h52.3C101.3,78.5,102.5,79.7,102.5,81.2z"}),Object(qi.jsx)("path",{fill:"#FF4451",stroke:"#BA1E45",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M82.9,37.5h-1.3c-0.6,0-1.1-0.5-1.1-1.1v-1.3 c0-0.6,0.5-1.1,1.1-1.1h1.3c0.6,0,1.1,0.5,1.1,1.1v1.3C84.1,37,83.6,37.5,82.9,37.5z"}),Object(qi.jsx)("path",{fill:"#9199A5",stroke:"#49505A",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M88.9,37.5h-1.3c-0.6,0-1.1-0.5-1.1-1.1v-1.3 c0-0.6,0.5-1.1,1.1-1.1h1.3c0.6,0,1.1,0.5,1.1,1.1v1.3C90.1,37,89.6,37.5,88.9,37.5z"}),Object(qi.jsx)("path",{fill:"#9199A5",stroke:"#49505A",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M94.6,37.5h-1.3c-0.6,0-1.1-0.5-1.1-1.1v-1.3 c0-0.6,0.5-1.1,1.1-1.1h1.3c0.6,0,1.1,0.5,1.1,1.1v1.3C95.7,37,95.2,37.5,94.6,37.5z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",d:"M97,27.2H48.4c-0.2,0-0.4-0.2-0.4-0.4v-0.4c0-0.2,0.2-0.4,0.4-0.4H97c0.2,0,0.4,0.2,0.4,0.4v0.4 C97.4,27,97.2,27.2,97,27.2z"}),Object(qi.jsx)("path",{fill:"#CACFD6",d:"M76.4,75.4c0,0.6,0,1.2-0.1,1.8H47.4c-1.5,0-2.7-1.2-2.7-2.7V54.8c0-1.5,1.2-2.7,2.7-2.7h16.8 C71.6,57.3,76.4,65.8,76.4,75.4z"}),Object(qi.jsx)("path",{fill:"#CACFD6",d:"M47.4,78.5h28.8c-1.4,13-11.6,23.4-24.5,25.1h-2.2c-2.7,0-4.8-2.2-4.8-4.8V81.2 C44.7,79.7,45.9,78.5,47.4,78.5z"}),Object(qi.jsx)("circle",{fill:"#FF4451",stroke:"#BA1E45",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"45.6",cy:"75.4",r:"28.4"}),Object(qi.jsx)("circle",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"45.6",cy:"75.4",r:"22.8"}),Object(qi.jsx)("circle",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"45.6",cy:"75.4",r:"22.8"}),Object(qi.jsx)("circle",{fill:"#CACFD6",cx:"45.6",cy:"75.4",r:"21.7"}),Object(qi.jsx)("circle",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"45.6",cy:"75.4",r:"20.9"}),Object(qi.jsx)("g",{children:Object(qi.jsx)("path",{fill:"#FF4451",stroke:"#BA1E45",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M49.2,84.6L44.6,78l-4.5,6.6 c-0.1,0.1-0.2,0.1-0.3,0.1h-4.3c-0.3,0-0.4-0.3-0.3-0.5l6.8-9.4l-6.5-9c-0.2-0.2,0-0.5,0.3-0.5h4.3c0.1,0,0.2,0.1,0.3,0.1l4.4,6.2 l4.3-6.2c0.1-0.1,0.2-0.1,0.3-0.1h4c0.3,0,0.4,0.3,0.3,0.5l-6.4,8.9l6.9,9.5c0.2,0.2,0,0.5-0.3,0.5h-4.4 C49.4,84.8,49.3,84.7,49.2,84.6z"})})]}),theme:"light",message:"We encountered an internal error and were unable to call the API.",details:null},error400TryOut:{title:"Validation Failure",icon:e=>Object(qi.jsxs)(Ji,{...e,viewBox:e.viewBox||"0 0 128 128",width:e.width||"128",height:e.height||"128",children:[Object(qi.jsx)("circle",{fill:"#3E445D",cx:"64",cy:"64",r:"62"}),Object(qi.jsxs)("g",{children:[Object(qi.jsx)("path",{fill:"#FF4451",stroke:"#BA1E45",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M88.7,60.2V76c0,0.9-0.8,1.7-1.7,1.7H68.1 c-0.9,0-1.7-0.8-1.7-1.7V60.2H88.7z"}),Object(qi.jsx)("path",{fill:"#CACFD6",d:"M88.7,60.2v3c-3.1,2.3-7,3.6-11.2,3.6c-4.1,0-7.9-1.3-11.1-3.5v-3.1H88.7z"}),Object(qi.jsx)("g",{children:Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M74.9,74.6H60.6c-2,13.5-13.7,23.8-27.7,23.8 V90c10.8,0,19.6-8.8,19.6-19.6s-8.8-19.6-19.6-19.6v-8.5c14,0,25.7,10.3,27.7,23.8H74V68l-2.9,2.9L74.9,74.6z"})}),Object(qi.jsx)("circle",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"27.2",cy:"93.5",r:"7.6"}),Object(qi.jsx)("polygon",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",points:"97.7,73.2 94.5,81 79.7,75 77.6,70  81.3,68.5 82,66.8 \t"}),Object(qi.jsx)("ellipse",{transform:"matrix(0.3699 -0.9291 0.9291 0.3699 -9.8329 143.3732)",fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"100.8",cy:"78.9",rx:"7.6",ry:"7.6"}),Object(qi.jsx)("ellipse",{transform:"matrix(0.3699 -0.9291 0.9291 0.3699 -9.8329 143.3732)",fill:"#0C7FF2",stroke:"#2750AE",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"100.8",cy:"78.9",rx:"4.7",ry:"4.7"}),Object(qi.jsx)("circle",{fill:"#0C7FF2",stroke:"#2750AE",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"27.2",cy:"93.5",r:"4.7"}),Object(qi.jsx)("circle",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"27.2",cy:"46.2",r:"7.6"}),Object(qi.jsx)("circle",{fill:"#0C7FF2",stroke:"#2750AE",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"27.2",cy:"46.2",r:"4.7"}),Object(qi.jsx)("circle",{fill:"#FF4451",stroke:"#BA1E45",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"77.5",cy:"46.2",r:"19.2"}),Object(qi.jsx)("circle",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"77.5",cy:"46.2",r:"14.1"}),Object(qi.jsx)("g",{children:Object(qi.jsx)("path",{fill:"#FF4451",stroke:"#BA1E45",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M79.9,52.4l-3.1-4.4l-3,4.4 c0,0.1-0.1,0.1-0.2,0.1h-2.9c-0.2,0-0.3-0.2-0.2-0.3l4.6-6.3l-4.4-6.1c-0.1-0.1,0-0.3,0.2-0.3h2.9c0.1,0,0.1,0,0.2,0.1l2.9,4.2 l2.9-4.2c0-0.1,0.1-0.1,0.2-0.1h2.7c0.2,0,0.3,0.2,0.2,0.3l-4.3,6l4.6,6.4c0.1,0.1,0,0.3-0.2,0.3h-3C80,52.4,80,52.4,79.9,52.4z"})})]})]}),theme:"light",message:"The server was unable to process your request due to validation failure.\n      Please review the required API parameters' inputs and try again.",details:null},error422TryOut:{title:"Validation Failure",icon:e=>Object(qi.jsxs)(Ji,{...e,viewBox:e.viewBox||"0 0 128 128",width:e.width||"128",height:e.height||"128",children:[Object(qi.jsx)("circle",{fill:"#3E445D",cx:"64",cy:"64",r:"62"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M101,96H27c-1.3,0-2.4-1.1-2.4-2.4V60.2 c0-1.3,1.1-2.4,2.4-2.4h74c1.3,0,2.4,1.1,2.4,2.4v33.4C103.4,94.9,102.3,96,101,96z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M101,55.2H27c-1.3,0-2.4-1.1-2.4-2.4v-8.5 c0-1.3,1.1-2.4,2.4-2.4h74c1.3,0,2.4,1.1,2.4,2.4v8.5C103.4,54.1,102.3,55.2,101,55.2z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M61.9,40.2H27c-1.3,0-2.4-1.1-2.4-2.4v-8.5 c0-1.3,1.1-2.4,2.4-2.4h34.9c1.3,0,2.4,1.1,2.4,2.4v8.5C64.3,39.1,63.2,40.2,61.9,40.2z"}),Object(qi.jsx)("circle",{fill:"#0C7FF2",stroke:"#2750AE",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"65.6",cy:"86",r:"24.4"}),Object(qi.jsx)("circle",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"65.6",cy:"86",r:"17.9"}),Object(qi.jsx)("g",{children:Object(qi.jsx)("path",{fill:"#0C7FF2",stroke:"#2750AE",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M68.2,81.8c0-1.4-1.2-2.2-3-2.2 c-1.8,0-3.2,0.8-4.1,2.1l-3.4-2c1.5-2.3,4.1-3.7,7.9-3.7c4.2,0,7.1,1.9,7.1,5.2c0,4.5-4.7,5-4.7,7.9h-4.2 C63.9,85.2,68.2,84.3,68.2,81.8z M63.3,93.5c0-1.4,1.1-2.5,2.7-2.5c1.6,0,2.7,1.1,2.7,2.5c0,1.4-1.1,2.5-2.7,2.5 C64.4,96.1,63.3,94.9,63.3,93.5z"})}),Object(qi.jsxs)("g",{children:[Object(qi.jsx)("defs",{children:Object(qi.jsx)("circle",{id:"SVGID_00000171685296077070765470000001445492370768942259_",cx:"207.4",cy:"64",r:"62"})}),Object(qi.jsx)("g",{clipPath:"url(#SVGID_00000158017139732982531870000018325621697327141043_)",children:Object(qi.jsx)("g",{children:Object(qi.jsx)("ellipse",{opacity:"0.1",fill:"#606774",cx:"154",cy:"98",rx:"35.3",ry:"1.3"})})})]})]}),theme:"light",message:"The server was unable to process your request due to validation failure.\n      Please review the required API parameters' inputs and try again.",details:null},errorTimeOutTryOut:{title:"Request Timed Out",icon:e=>Object(qi.jsxs)(Ji,{...e,viewBox:e.viewBox||"0 0 128 128",width:e.width||"128",height:e.height||"128",children:[Object(qi.jsx)("circle",{fill:"#3E445D",cx:"64",cy:"64",r:"62"}),Object(qi.jsxs)("g",{children:[Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M100,31.3V48c0,1.4-1.2,2.6-2.6,2.6h-50 c-1.4,0-2.6-1.2-2.6-2.6V31.3c0-2.6,2.1-4.6,4.6-4.6h45.9C98,26.7,100,28.8,100,31.3z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M100,54.5v18.7c0,1.4-1.2,2.6-2.6,2.6h-50 c-1.4,0-2.6-1.2-2.6-2.6V54.5c0-1.4,1.2-2.6,2.6-2.6h50C98.9,51.9,100,53.1,100,54.5z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M100,79.7v16.7c0,2.6-2.1,4.6-4.6,4.6H49.5 c-2.6,0-4.6-2.1-4.6-4.6V79.7c0-1.4,1.2-2.6,2.6-2.6h50C98.9,77.1,100,78.3,100,79.7z"}),Object(qi.jsx)("path",{fill:"#FF4451",stroke:"#BA1E45",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M81.4,38h-1.2c-0.6,0-1.1-0.5-1.1-1.1v-1.2 c0-0.6,0.5-1.1,1.1-1.1h1.2c0.6,0,1.1,0.5,1.1,1.1v1.2C82.5,37.5,82,38,81.4,38z"}),Object(qi.jsx)("path",{fill:"#9199A5",stroke:"#49505A",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M87.1,38h-1.2c-0.6,0-1.1-0.5-1.1-1.1v-1.2 c0-0.6,0.5-1.1,1.1-1.1h1.2c0.6,0,1.1,0.5,1.1,1.1v1.2C88.2,37.5,87.7,38,87.1,38z"}),Object(qi.jsx)("path",{fill:"#9199A5",stroke:"#49505A",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M92.5,38h-1.2c-0.6,0-1.1-0.5-1.1-1.1v-1.2 c0-0.6,0.5-1.1,1.1-1.1h1.2c0.6,0,1.1,0.5,1.1,1.1v1.2C93.6,37.5,93.1,38,92.5,38z"}),Object(qi.jsxs)("g",{children:[Object(qi.jsx)("rect",{x:"42.5",y:"38",fill:"#3E445D",stroke:"#1D2236",strokeWidth:"0.5",strokeMiterlimit:"10",width:"7.3",height:"14.8"}),Object(qi.jsx)("path",{fill:"#CACFD6",d:"M49.2,45.1h-6.2c-0.3,0-0.5-0.2-0.5-0.5V44c0-0.3,0.2-0.5,0.5-0.5h6.2c0.3,0,0.5,0.2,0.5,0.5v0.6 C49.8,44.8,49.5,45.1,49.2,45.1z"}),Object(qi.jsx)("path",{fill:"#CACFD6",d:"M49.2,48h-6.2c-0.3,0-0.5-0.2-0.5-0.5v-0.6c0-0.3,0.2-0.5,0.5-0.5h6.2c0.3,0,0.5,0.2,0.5,0.5v0.6 C49.8,47.8,49.5,48,49.2,48z"}),Object(qi.jsx)("circle",{fill:"#606774",stroke:"#3E445D",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"45.8",cy:"74.1",r:"27.1"}),Object(qi.jsx)("circle",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"45.8",cy:"74.1",r:"21.7"}),Object(qi.jsx)("path",{fill:"#606774",stroke:"#3E445D",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M57,38H34.5c-1.8,0-3.2,1.4-3.2,3.2v0 c0,1.8,1.4,3.2,3.2,3.2H57c1.8,0,3.2-1.4,3.2-3.2v0C60.2,39.4,58.8,38,57,38z"}),Object(qi.jsx)("g",{children:Object(qi.jsx)("path",{fill:"#2750AE",d:"M45.2,91.2c-15,0.5-22.7-17.7-12.5-28.6c3.1-3.4,7.7-5.5,12.5-5.7v4c-3.7-0.2-7.5,1.2-10.3,3.8 C24.9,74.1,31.6,90.8,45.2,91.2L45.2,91.2z"})}),Object(qi.jsx)("path",{fill:"#3E445D",stroke:"#1D2236",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M46,56.3l-0.5,0c-0.3,0-0.5,0.2-0.5,0.5 L45,72.9c0,0.3,0.2,0.5,0.5,0.5l0.5,0c0.3,0,0.5-0.2,0.5-0.5l-0.1-16.1C46.5,56.5,46.3,56.3,46,56.3z"}),Object(qi.jsx)("path",{fill:"#3E445D",stroke:"#1D2236",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M60.9,74.4l0-0.5c0-0.3-0.2-0.5-0.5-0.5 l-13.2,0.1c-0.3,0-0.5,0.2-0.5,0.5l0,0.5c0,0.3,0.2,0.5,0.5,0.5l13.2-0.1C60.7,74.9,60.9,74.7,60.9,74.4z"}),Object(qi.jsx)("circle",{fill:"#3E445D",stroke:"#1D2236",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"45.8",cy:"74.1",r:"2.9"})]})]})]}),theme:"light",message:"The server is taking too long to respond. Please try again.",details:null},errorStatusUnknownTryOut:{title:"Unexpected Error",icon:tl,theme:"light",message:"We encountered an unexpected error and were unable to call the API. Please try again.",details:null},errorDocsDefault:{title:"Unexpected Error",icon:nl,theme:"dark",message:"An unexpected error occurred in loading the documentation. \n      Please try again; if the issue persists, please report the issue.",details:null},errorDocsConnection:{title:"Connection Lost",icon:e=>Object(qi.jsxs)(Ji,{...e,viewBox:e.viewBox||"0 0 128 128",width:e.width||"128",height:e.height||"128",children:[Object(qi.jsx)("circle",{fill:"#EBF0F5",cx:"64",cy:"64",r:"62"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M37.7,43.5L37.7,43.5c-1.1,0-2.1,0.9-2.1,2.1 v43.3c0,1.1,0.9,2.1,2.1,2.1h0c1.1,0,2.1-0.9,2.1-2.1V45.5C39.8,44.4,38.9,43.5,37.7,43.5z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M99.3,43.5L99.3,43.5c-1.1,0-2.1,0.9-2.1,2.1 v43.3c0,1.1,0.9,2.1,2.1,2.1l0,0c1.1,0,2.1-0.9,2.1-2.1V45.5C101.4,44.4,100.5,43.5,99.3,43.5z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M103.4,103.1h-72c-3.5,0-6.4-2.9-6.4-6.4v-5.2 c0-3.5,2.9-6.4,6.4-6.4h72c3.5,0,6.4,2.9,6.4,6.4v5.2C109.8,100.2,107,103.1,103.4,103.1z"}),Object(qi.jsx)("path",{fill:"#FF4451",stroke:"#BA1E45",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M80.8,96.4L80.8,96.4c-1.5,0-2.7-1.2-2.7-2.7 l0,0c0-1.5,1.2-2.7,2.7-2.7h0c1.5,0,2.7,1.2,2.7,2.7l0,0C83.5,95.2,82.3,96.4,80.8,96.4z"}),Object(qi.jsx)("path",{fill:"#9199A5",stroke:"#49505A",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M90,96.4L90,96.4c-1.5,0-2.7-1.2-2.7-2.7l0,0 c0-1.5,1.2-2.7,2.7-2.7h0c1.5,0,2.7,1.2,2.7,2.7l0,0C92.8,95.2,91.5,96.4,90,96.4z"}),Object(qi.jsx)("path",{fill:"#9199A5",stroke:"#49505A",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M98.7,96.4L98.7,96.4c-1.5,0-2.7-1.2-2.7-2.7 l0,0c0-1.5,1.2-2.7,2.7-2.7h0c1.5,0,2.7,1.2,2.7,2.7l0,0C101.4,95.2,100.2,96.4,98.7,96.4z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",d:"M103.1,87.8H29c-0.5,0-0.9-0.4-0.9-0.9v0c0-0.5,0.4-0.9,0.9-0.9h74.1c0.5,0,0.9,0.4,0.9,0.9v0 C104,87.3,103.6,87.8,103.1,87.8z"}),Object(qi.jsx)("g",{children:Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M73.8,41.5v3.2H58.9v-2.6l9.4-11.3h-9.2v-3.2 h14.4v2.6l-9.3,11.3H73.8z"})}),Object(qi.jsx)("g",{children:Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M54.9,56.2V58h-8.3v-1.4l5.2-6.3h-5.1v-1.8h8 v1.4l-5.2,6.3H54.9z"})})]}),theme:"dark",message:"A network connection is required to\n      continue the request. Please check your\n      internet and try again.",details:null},errorDocsCode400:{title:"Bad Request",icon:e=>Object(qi.jsxs)(Ji,{...e,viewBox:e.viewBox||"0 0 128 128",width:e.width||"128",height:e.height||"128",children:[Object(qi.jsx)("circle",{fill:"#EBF0F5",cx:"64",cy:"64",r:"62"}),Object(qi.jsx)("rect",{x:"29.5",y:"70.2",fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",width:"30.1",height:"7.4"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M55.9,82.5l0-17.2c0-0.9,1.1-1.3,1.7-0.7 l8.6,8.6c0.4,0.4,0.4,1,0,1.4l-8.6,8.6C57,83.8,55.9,83.4,55.9,82.5z"}),Object(qi.jsxs)("g",{children:[Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M118,35.9v14.3c0,1.2-1,2.2-2.2,2.2H73 c-1.2,0-2.2-1-2.2-2.2V35.9c0-2.2,1.8-4,4-4H114C116.2,32,118,33.7,118,35.9z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M118,55.7v16c0,1.2-1,2.2-2.2,2.2H73 c-1.2,0-2.2-1-2.2-2.2v-16c0-1.2,1-2.2,2.2-2.2h42.7C117,53.5,118,54.5,118,55.7z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M118,77.3v14.3c0,2.2-1.8,4-4,4H74.7 c-2.2,0-4-1.8-4-4V77.3c0-1.2,1-2.2,2.2-2.2h42.7C117,75.1,118,76.1,118,77.3z"}),Object(qi.jsx)("path",{fill:"#FF4451",stroke:"#BA1E45",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M102.3,41.6h-1.6c-0.4,0-0.6-0.3-0.6-0.6v-1.6 c0-0.4,0.3-0.6,0.6-0.6h1.6c0.4,0,0.6,0.3,0.6,0.6v1.6C102.9,41.3,102.6,41.6,102.3,41.6z"}),Object(qi.jsx)("path",{fill:"#9199A5",stroke:"#49505A",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M107.2,41.6h-1.6c-0.4,0-0.6-0.3-0.6-0.6v-1.6 c0-0.4,0.3-0.6,0.6-0.6h1.6c0.4,0,0.6,0.3,0.6,0.6v1.6C107.8,41.3,107.5,41.6,107.2,41.6z"}),Object(qi.jsx)("path",{fill:"#9199A5",stroke:"#49505A",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M111.8,41.6h-1.6c-0.4,0-0.6-0.3-0.6-0.6v-1.6 c0-0.4,0.3-0.6,0.6-0.6h1.6c0.4,0,0.6,0.3,0.6,0.6v1.6C112.4,41.3,112.1,41.6,111.8,41.6z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",d:"M113.6,33.2H73.7c-0.1,0-0.2-0.1-0.2-0.2v-0.6c0-0.1,0.1-0.2,0.2-0.2h39.9c0.1,0,0.2,0.1,0.2,0.2v0.6 C113.8,33.1,113.7,33.2,113.6,33.2z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",d:"M113.6,54.6H73.7c-0.1,0-0.2-0.1-0.2-0.2v-0.6c0-0.1,0.1-0.2,0.2-0.2h39.9c0.1,0,0.2,0.1,0.2,0.2v0.6 C113.8,54.5,113.7,54.6,113.6,54.6z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",d:"M113.6,76.1H73.7c-0.1,0-0.2-0.1-0.2-0.2v-0.6c0-0.1,0.1-0.2,0.2-0.2h39.9c0.1,0,0.2,0.1,0.2,0.2v0.6 C113.8,76,113.7,76.1,113.6,76.1z"}),Object(qi.jsx)("path",{opacity:"0.1",fill:"#606774",d:"M116.7,52.4H72.1c-0.1,0-0.2-0.1-0.2-0.2v-0.6c0-0.1,0.1-0.2,0.2-0.2h44.6 c0.1,0,0.2,0.1,0.2,0.2v0.6C116.9,52.3,116.8,52.4,116.7,52.4z"}),Object(qi.jsx)("path",{opacity:"0.1",fill:"#606774",d:"M116.7,73.8H72.1c-0.1,0-0.2-0.1-0.2-0.2v-0.6c0-0.1,0.1-0.2,0.2-0.2h44.6 c0.1,0,0.2,0.1,0.2,0.2v0.6C116.9,73.7,116.8,73.8,116.7,73.8z"}),Object(qi.jsx)("path",{opacity:"0.1",fill:"#606774",d:"M116.7,95.3H72.1c-0.1,0-0.2-0.1-0.2-0.2v-0.6c0-0.1,0.1-0.2,0.2-0.2h44.6 c0.1,0,0.2,0.1,0.2,0.2v0.6C116.9,95.2,116.8,95.3,116.7,95.3z"})]}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M44,52.4v40.8c0,0.7-0.3,1.3-0.8,1.8 c-0.4,0.4-1,0.7-1.6,0.7H10.7c-0.3-0.4-0.5-0.9-0.8-1.3c-2.9-5.2-5.1-10.9-6.4-17c-0.2-0.9-0.4-1.9-0.5-2.8 c-0.1-0.6-0.2-1.2-0.3-1.8c-0.1-0.9-0.2-1.9-0.3-2.8c-0.1-0.6-0.1-1.2-0.1-1.8c-0.1-0.9-0.1-1.9-0.1-2.8c0-0.5,0-0.9,0-1.4 c0-0.1,0-0.3,0-0.4c0-0.9,0-1.9,0.1-2.8c0.1-1.1,0.1-2.1,0.2-3.2c0.3-2.6,0.7-5.2,1.3-7.7h37.9C42.9,49.9,44,51,44,52.4z"}),Object(qi.jsx)("path",{fill:"#20D9D2",stroke:"#06A09B",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M44,52.4v5.3H2.4c0.3-2.6,0.7-5.2,1.3-7.7h37.9 C42.9,49.9,44,51,44,52.4z"}),Object(qi.jsx)("path",{fill:"#3E445D",stroke:"#1D2236",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M42,95.6H18.5V57.4h25.5v36 C44.1,94.6,43.1,95.6,42,95.6z"}),Object(qi.jsx)("path",{fill:"#9199A5",d:"M16.1,60.8v2.8h-14c0-0.9,0-1.9,0.1-2.8H16.1z"}),Object(qi.jsx)("path",{fill:"#9199A5",d:"M16.1,65.4v2.8H2.2c-0.1-0.9-0.1-1.9-0.1-2.8H16.1z"}),Object(qi.jsx)("path",{fill:"#9199A5",d:"M16.1,70v2.8H2.7c-0.1-0.9-0.2-1.9-0.3-2.8H16.1z"}),Object(qi.jsx)("path",{fill:"#9199A5",d:"M16.1,74.5v2.8H3.5c-0.2-0.9-0.4-1.9-0.5-2.8H16.1z"}),Object(qi.jsx)("circle",{fill:"#FF4451",stroke:"#BA1E45",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"44.5",cy:"48.1",r:"14.5"}),Object(qi.jsx)("circle",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"44.5",cy:"48.1",r:"10.7"}),Object(qi.jsx)("g",{children:Object(qi.jsx)("path",{fill:"#FF4451",stroke:"#BA1E45",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M46.4,52.8L44,49.4l-2.3,3.4 c0,0-0.1,0.1-0.1,0.1h-2.2c-0.1,0-0.2-0.2-0.1-0.3l3.5-4.8l-3.3-4.6c-0.1-0.1,0-0.3,0.1-0.3h2.2c0.1,0,0.1,0,0.1,0.1l2.2,3.1 l2.2-3.1c0,0,0.1-0.1,0.1-0.1h2.1c0.1,0,0.2,0.2,0.1,0.3l-3.3,4.5l3.5,4.9c0.1,0.1,0,0.3-0.1,0.3h-2.2 C46.4,52.8,46.4,52.8,46.4,52.8z"})}),Object(qi.jsx)("circle",{fill:"none",cx:"63.9",cy:"64",r:"61.5"})]}),theme:"dark",message:"Your browser sent a request that the\n      server could not understand. Please Try\n      again later.\n      ",details:{heading:"Bad Request",message:"If you are the maintainer of this site, \n      the server cannot process the request due to invalid API key or platform template. \n      Please contact support for further details."}},errorDocsCode402:{title:"Documentation Unavailable/Documentation Access Denied",icon:e=>Object(qi.jsxs)(Ji,{...e,viewBox:e.viewBox||"0 0 128 128",width:e.width||"128",height:e.height||"128",children:[Object(qi.jsx)("circle",{fill:"#EBF0F5",cx:"64",cy:"64",r:"62"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M76,25.9v70.9c0,1.9-1.5,3.4-3.4,3.4H23.8 c-1.9,0-3.4-1.5-3.4-3.4V41L39,22.5h33.6C74.5,22.5,76,24,76,25.9z"}),Object(qi.jsx)("path",{opacity:"0.15",fill:"#9199A5",d:"M74.4,96.5H22c-0.9,0-1.5,0.7-1.5,1.5v0.6c0,0.9,0.7,1.5,1.5,1.5h52.4c0.9,0,1.5-0.7,1.5-1.5 v-0.6C76,97.2,75.3,96.5,74.4,96.5z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M80.4,29.6v70.9c0,1.9-1.5,3.4-3.4,3.4H28.3 c-1.9,0-3.4-1.5-3.4-3.4V44.7l18.5-18.5H77C78.9,26.2,80.4,27.7,80.4,29.6z"}),Object(qi.jsx)("path",{opacity:"0.15",fill:"#9199A5",d:"M78.8,100.2H26.4c-0.9,0-1.5,0.7-1.5,1.5v0.6c0,0.9,0.7,1.5,1.5,1.5h52.4 c0.9,0,1.5-0.7,1.5-1.5v-0.6C80.4,100.9,79.7,100.2,78.8,100.2z"}),Object(qi.jsx)("path",{opacity:"0.15",fill:"#9199A5",d:"M24.9,46.6l0-1.8l18.5-18.5l1.9,0l0,18.6c0,1-0.8,1.7-1.7,1.7L24.9,46.6z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M25.2,44.4l17.9-17.9c0.1-0.1,0.3,0,0.3,0.1 v17.9c0,0.1-0.1,0.2-0.2,0.2l-17.9,0C25.1,44.7,25.1,44.5,25.2,44.4z"}),Object(qi.jsx)("rect",{x:"30.9",y:"54.1",fill:"#9199A5",stroke:"#49505A",strokeWidth:"0.5",strokeMiterlimit:"10",width:"41.7",height:"5.8"}),Object(qi.jsx)("rect",{x:"30.9",y:"65.1",fill:"#9199A5",stroke:"#49505A",strokeWidth:"0.5",strokeMiterlimit:"10",width:"41.7",height:"5.8"}),Object(qi.jsx)("rect",{x:"30.9",y:"77.2",fill:"#9199A5",stroke:"#49505A",strokeWidth:"0.5",strokeMiterlimit:"10",width:"41.7",height:"5.8"}),Object(qi.jsx)("circle",{fill:"#FF4451",stroke:"#BA1E45",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"84.3",cy:"72.5",r:"31.4"}),Object(qi.jsx)("circle",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"84.3",cy:"72.5",r:"25.2"}),Object(qi.jsx)("circle",{fill:"#CACFD6",cx:"84.3",cy:"72.5",r:"24"}),Object(qi.jsx)("circle",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"84.3",cy:"72.5",r:"23.1"}),Object(qi.jsx)("g",{children:Object(qi.jsx)("path",{fill:"#FF4451",stroke:"#BA1E45",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M88.3,82.7l-5.1-7.3l-5,7.3 c-0.1,0.1-0.2,0.2-0.3,0.2h-4.8c-0.3,0-0.5-0.3-0.3-0.6l7.5-10.3l-7.1-10c-0.2-0.2,0-0.6,0.3-0.6h4.8c0.1,0,0.2,0.1,0.3,0.2 l4.8,6.8l4.7-6.8c0.1-0.1,0.2-0.2,0.3-0.2h4.5c0.3,0,0.5,0.3,0.3,0.6l-7.1,9.8l7.6,10.5c0.2,0.2,0,0.6-0.3,0.6h-4.8 C88.5,82.8,88.4,82.8,88.3,82.7z"})})]}),theme:"dark",message:"We are having trouble in loading\n      documentation. Please contact the API\n      provider for further details.\n    ",details:{heading:"Documentation Unavailable",message:"If you are the maintainer of this site, \n      looks like the language being accessed is not enabled. \n      Please check the language settings or contact support for further details."}},errorDocsCode403:{title:"Forbidden",icon:e=>Object(qi.jsxs)(Ji,{...e,viewBox:e.viewBox||"0 0 128 128",width:e.width||"128",height:e.height||"128",children:[Object(qi.jsx)("circle",{fill:"#EBF0F5",cx:"64",cy:"64",r:"62"}),Object(qi.jsx)("circle",{fill:"#FF4451",stroke:"#BA1E45",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"64.7",cy:"64",r:"39.7"}),Object(qi.jsx)("circle",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"64.7",cy:"64",r:"29.1"}),Object(qi.jsx)("path",{fill:"#FF4451",stroke:"#BA1E45",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M72,58.6v5.9h-1V50.8c0-1-0.8-1.9-1.9-1.9h0 c-1,0-1.9,0.8-1.9,1.9v13.7h-0.8v-16c0-1-0.8-1.9-1.9-1.9h0c-1,0-1.9,0.8-1.9,1.9v16h-0.9V50.8c0-1-0.8-1.9-1.9-1.9h0 c-1,0-1.9,0.8-1.9,1.9v13.7h-0.7V54.4c0-1-0.8-1.9-1.9-1.9h0c-1,0-1.9,0.8-1.9,1.9v10.1v6c0,6.1,4.9,11,11,11h0c6.1,0,11-4.9,11-11 v-6v-5.9c0-1-0.8-1.9-1.9-1.9l0,0C72.8,56.7,72,57.5,72,58.6z"})]}),theme:"dark",message:"Sorry, you don't have access to this page.",details:{heading:"Forbidden",message:"If you are the maintainer of this site, the server refuses access to the resource."}},errorDocsCode404:{title:"Page Not Found",icon:e=>Object(qi.jsxs)(Ji,{...e,viewBox:e.viewBox||"0 0 128 128",width:e.width||"128",height:e.height||"128",children:[Object(qi.jsx)("circle",{fill:"#EBF0F5",cx:"64",cy:"64",r:"62"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M62.9,38.8V93c0,1.4-1.2,2.6-2.6,2.6H23.1 c-1.4,0-2.6-1.2-2.6-2.6V50.3l14.1-14.1h25.7C61.8,36.2,62.9,37.3,62.9,38.8z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M73,44.2v56.5c0,1.5-1.2,2.7-2.7,2.7H31.5 c-1.5,0-2.7-1.2-2.7-2.7V56.3l14.7-14.7h26.8C71.8,41.5,73,42.7,73,44.2z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M29.1,56l14.3-14.3c0.1-0.1,0.2,0,0.2,0.1 l0,14.3c0,0.1-0.1,0.1-0.1,0.1l-14.3,0C29,56.3,29,56.1,29.1,56z"}),Object(qi.jsx)("rect",{x:"33.6",y:"63.8",fill:"#9199A5",stroke:"#49505A",strokeWidth:"0.5",strokeMiterlimit:"10",width:"33.2",height:"4.6"}),Object(qi.jsx)("rect",{x:"33.6",y:"72.5",fill:"#9199A5",stroke:"#49505A",strokeWidth:"0.5",strokeMiterlimit:"10",width:"33.2",height:"4.6"}),Object(qi.jsx)("rect",{x:"33.6",y:"82.1",fill:"#9199A5",stroke:"#49505A",strokeWidth:"0.5",strokeMiterlimit:"10",width:"33.2",height:"4.6"}),Object(qi.jsx)("path",{fill:"#0C7FF2",stroke:"#2750AE",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M97.9,93.9l-14.6-29 c9.5-6.5,12.9-19.2,7.6-29.7C85.1,23.7,71,19.1,59.5,24.9C48,30.7,43.4,44.7,49.2,56.2c5.3,10.5,17.6,15.3,28.4,11.5l14.6,29 L97.9,93.9z M54.8,53.5c-4.3-8.5-0.9-18.8,7.6-23c8.5-4.3,18.8-0.9,23,7.6c4.3,8.4,0.9,18.8-7.6,23C69.3,65.3,59,61.9,54.8,53.5z"}),Object(qi.jsx)("path",{fill:"#3E445D",stroke:"#1D2236",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M101.9,101.9l-5.5,2.8c-1.1,0.6-2.5,0.1-3.1-1 l-10.6-21c-0.6-1.1-0.1-2.5,1-3.1l5.5-2.8c1.1-0.6,2.5-0.1,3.1,1l10.6,21C103.5,99.9,103.1,101.3,101.9,101.9z"})]}),theme:"dark",message:"The page you are looking for does not\n      exist or is temporarily unavailable.\n      Please contact the API provider for\n      further detail.",details:{heading:"Documentation Not Found",message:"If you are the maintainer of this site, \n      the resource being accessed does not exist or is temporarily unavailable. \n      Please check the publishing settings for details."}},errorDocsCode406:{title:"Not Acceptable",icon:e=>Object(qi.jsxs)(Ji,{...e,viewBox:e.viewBox||"0 0 128 128",width:e.width||"128",height:e.height||"128",children:[Object(qi.jsx)("circle",{fill:"#EBF0F5",cx:"64",cy:"64",r:"62"}),Object(qi.jsxs)("g",{children:[Object(qi.jsxs)("g",{children:[Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M51.4,38.6v43.9c0,1.2-0.9,2.1-2.1,2.1H19.1 c-1.2,0-2.1-0.9-2.1-2.1V48l11.5-11.5h20.8C50.5,36.6,51.4,37.5,51.4,38.6z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M48.7,36.2v43.9c0,1.2-0.9,2.1-2.1,2.1H16.4 c-1.2,0-2.1-0.9-2.1-2.1V45.5l11.5-11.5h20.8C47.8,34.1,48.7,35,48.7,36.2z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M14.5,45.4l11.1-11.1c0.1-0.1,0.2,0,0.2,0.1 l0,11.1c0,0.1,0,0.1-0.1,0.1H14.6C14.5,45.5,14.5,45.4,14.5,45.4z"}),Object(qi.jsx)("rect",{x:"17.9",y:"52.5",fill:"#606774",stroke:"#3E445D",strokeWidth:"0.5",strokeMiterlimit:"10",width:"27.3",height:"2.5"}),Object(qi.jsx)("rect",{x:"17.9",y:"58.4",fill:"#606774",stroke:"#3E445D",strokeWidth:"0.5",strokeMiterlimit:"10",width:"27.3",height:"2.5"}),Object(qi.jsx)("rect",{x:"17.9",y:"64.3",fill:"#606774",stroke:"#3E445D",strokeWidth:"0.5",strokeMiterlimit:"10",width:"27.3",height:"2.5"}),Object(qi.jsx)("rect",{x:"17.9",y:"70.2",fill:"#606774",stroke:"#3E445D",strokeWidth:"0.5",strokeMiterlimit:"10",width:"27.3",height:"2.5"})]}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M104.1,39.7v15.1c0,1.3-1.1,2.3-2.3,2.3H56.7 c-1.3,0-2.3-1.1-2.3-2.3V39.7c0-2.3,1.9-4.2,4.2-4.2h41.4C102.2,35.5,104.1,37.4,104.1,39.7z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M104.1,60.6v16.9c0,1.3-1.1,2.3-2.3,2.3H56.7 c-1.3,0-2.3-1.1-2.3-2.3V60.6c0-1.3,1.1-2.3,2.3-2.3h45.1C103.1,58.2,104.1,59.3,104.1,60.6z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M104.1,83.3v15.1c0,2.3-1.9,4.2-4.2,4.2H58.5 c-2.3,0-4.2-1.9-4.2-4.2V83.3c0-1.3,1.1-2.3,2.3-2.3h45.1C103.1,80.9,104.1,82,104.1,83.3z"}),Object(qi.jsx)("path",{fill:"#FF4451",stroke:"#BA1E45",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M87.1,45.7h-0.7c-0.7,0-1.2-0.5-1.2-1.2v-0.7 c0-0.7,0.5-1.2,1.2-1.2h0.7c0.7,0,1.2,0.5,1.2,1.2v0.7C88.3,45.1,87.7,45.7,87.1,45.7z"}),Object(qi.jsx)("path",{fill:"#9199A5",stroke:"#49505A",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M92.3,45.7h-0.7c-0.7,0-1.2-0.5-1.2-1.2v-0.7 c0-0.7,0.5-1.2,1.2-1.2h0.7c0.7,0,1.2,0.5,1.2,1.2v0.7C93.4,45.1,92.9,45.7,92.3,45.7z"}),Object(qi.jsx)("path",{fill:"#9199A5",stroke:"#49505A",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M97.1,45.7h-0.7c-0.7,0-1.2-0.5-1.2-1.2v-0.7 c0-0.7,0.5-1.2,1.2-1.2h0.7c0.7,0,1.2,0.5,1.2,1.2v0.7C98.3,45.1,97.8,45.7,97.1,45.7z"}),Object(qi.jsx)("circle",{fill:"#FF4451",stroke:"#BA1E45",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"52.2",cy:"57.7",r:"15.3"}),Object(qi.jsx)("circle",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"52.2",cy:"57.7",r:"11.2"}),Object(qi.jsx)("g",{children:Object(qi.jsx)("path",{fill:"#FF4451",stroke:"#BA1E45",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M54.1,62.6l-2.5-3.5l-2.4,3.5 c0,0-0.1,0.1-0.1,0.1h-2.3c-0.1,0-0.2-0.2-0.1-0.3l3.7-5l-3.5-4.9c-0.1-0.1,0-0.3,0.1-0.3h2.3c0.1,0,0.1,0,0.1,0.1l2.3,3.3 l2.3-3.3c0,0,0.1-0.1,0.1-0.1h2.2c0.1,0,0.2,0.2,0.1,0.3l-3.4,4.8l3.7,5.1c0.1,0.1,0,0.3-0.1,0.3h-2.4 C54.2,62.7,54.2,62.7,54.1,62.6z"})})]})]}),theme:"dark",message:"An appropriate representation of the\n    requested resource could not be found\n    on the server.\n    ",details:{heading:"Not Acceptable",message:"If you are the maintainer of this site, \n      the server could not find the appropriate representation of the requested resource."}},errorDocsCode422:{title:"Unprocessable Entity",icon:e=>Object(qi.jsxs)(Ji,{...e,viewBox:e.viewBox||"0 0 128 128",width:e.width||"128",height:e.height||"128",children:[Object(qi.jsx)("circle",{fill:"#EBF0F5",cx:"64",cy:"64",r:"62"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M45.4,66.3L45.4,66.3c0,1.6,1.3,3,3,3h8 c1.6,0,3-1.3,3-3v0c0-1.6-1.3-3-3-3h-8C46.7,63.3,45.4,64.7,45.4,66.3z M56.2,67.8h-7.6c-0.8,0-1.5-0.7-1.5-1.5l0,0 c0-0.8,0.7-1.5,1.5-1.5h7.6c0.8,0,1.5,0.7,1.5,1.5l0,0C57.7,67.1,57.1,67.8,56.2,67.8z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M62.9,64.8h4.9l-0.5-0.5l0.9-0.9h-5.5 c-1.6,0-3,1.3-3,3c0,1.6,1.3,3,3,3h4.2l0.3-0.3l-0.6-0.6l0.5-0.5h-4.4c-0.8,0-1.5-0.7-1.5-1.5c0-0.4,0.2-0.8,0.4-1.1 C62.1,65,62.5,64.8,62.9,64.8z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M61.4,67.2h-4c-0.4,0-0.7-0.3-0.7-0.7v0 c0-0.4,0.3-0.7,0.7-0.7h4c0.4,0,0.7,0.3,0.7,0.7v0C62.1,66.9,61.8,67.2,61.4,67.2z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M72.8,73.3L72.8,73.3c0.5,1.6,2.1,2.5,3.7,2 l7.7-2.3c1.6-0.5,2.5-2.1,2-3.7v0c-0.5-1.6-2.1-2.5-3.7-2l-7.7,2.3C73.2,70.1,72.3,71.7,72.8,73.3z M83.6,71.7l-7.3,2.2 c-0.8,0.2-1.7-0.2-1.9-1h0c-0.2-0.8,0.2-1.7,1-1.9l7.3-2.2c0.8-0.2,1.7,0.2,1.9,1l0,0C84.8,70.6,84.4,71.4,83.6,71.7z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M73.7,74.8c1.2,1.1,1.3,3,0.2,4.2l-2.5,2.8 l0-0.5l-0.8,0l0-0.8l2.2-2.4c0.3-0.3,0.4-0.7,0.4-1.1c0-0.4-0.2-0.8-0.5-1c-0.6-0.6-1.6-0.5-2.1,0.1l-1.8,2.1l-0.7,0l-0.1-1.3 l1.7-1.9c0.5-0.6,1.3-0.9,2-1C72.3,74,73.1,74.2,73.7,74.8z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M75.6,74.1l-2.3,2.3c-0.4,0.4-1,0.4-1.4,0v0 c-0.4-0.4-0.4-1,0-1.4l2.3-2.3c0.4-0.4,1-0.4,1.4,0l0,0C76,73,76,73.7,75.6,74.1z"}),Object(qi.jsxs)("g",{children:[Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M52.3,42.4v11.8c0,1-0.8,1.8-1.8,1.8H15.4 c-1,0-1.8-0.8-1.8-1.8V42.4c0-1.8,1.5-3.3,3.3-3.3h32.3C50.9,39.2,52.3,40.6,52.3,42.4z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M52.3,58.7v13.2c0,1-0.8,1.8-1.8,1.8H15.4 c-1,0-1.8-0.8-1.8-1.8V58.7c0-1,0.8-1.8,1.8-1.8h35.2C51.5,56.9,52.3,57.7,52.3,58.7z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M52.3,76.4v11.8c0,1.8-1.5,3.3-3.3,3.3H16.8 c-1.8,0-3.3-1.5-3.3-3.3V76.4c0-1,0.8-1.8,1.8-1.8h35.2C51.5,74.6,52.3,75.4,52.3,76.4z"}),Object(qi.jsx)("path",{fill:"#FF4451",stroke:"#BA1E45",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M38.8,47.1L38.8,47.1c-0.7,0-1.2-0.5-1.2-1.2 v0c0-0.7,0.5-1.2,1.2-1.2h0c0.7,0,1.2,0.5,1.2,1.2v0C40,46.5,39.4,47.1,38.8,47.1z"}),Object(qi.jsx)("path",{fill:"#9199A5",stroke:"#49505A",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M42.8,47.1L42.8,47.1c-0.7,0-1.2-0.5-1.2-1.2 v0c0-0.7,0.5-1.2,1.2-1.2h0c0.7,0,1.2,0.5,1.2,1.2v0C44,46.5,43.5,47.1,42.8,47.1z"}),Object(qi.jsx)("path",{fill:"#9199A5",stroke:"#49505A",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M46.6,47.1L46.6,47.1c-0.7,0-1.2-0.5-1.2-1.2 v0c0-0.7,0.5-1.2,1.2-1.2h0c0.7,0,1.2,0.5,1.2,1.2v0C47.8,46.5,47.3,47.1,46.6,47.1z"})]}),Object(qi.jsx)("circle",{fill:"#FF4451",stroke:"#BA1E45",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"67.8",cy:"47.7",r:"11.9"}),Object(qi.jsx)("circle",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"67.8",cy:"47.7",r:"8.8"}),Object(qi.jsx)("g",{children:Object(qi.jsx)("path",{fill:"#FF4451",stroke:"#BA1E45",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M69.3,51.6l-1.9-2.8l-1.9,2.8 c0,0-0.1,0.1-0.1,0.1h-1.8c-0.1,0-0.2-0.1-0.1-0.2l2.9-3.9l-2.7-3.8c-0.1-0.1,0-0.2,0.1-0.2h1.8c0,0,0.1,0,0.1,0.1l1.8,2.6l1.8-2.6 c0,0,0.1-0.1,0.1-0.1h1.7c0.1,0,0.2,0.1,0.1,0.2l-2.7,3.7l2.9,4c0.1,0.1,0,0.2-0.1,0.2h-1.8C69.4,51.6,69.3,51.6,69.3,51.6z"})}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M113.9,43.3v43.1c0,1.1-0.9,2.1-2.1,2.1H82.2 c-1.1,0-2.1-0.9-2.1-2.1V52.5l11.2-11.2h20.4C113,41.3,113.9,42.2,113.9,43.3z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M80.3,52.3l10.9-10.9c0.1-0.1,0.2,0,0.2,0.1 v10.9c0,0.1,0,0.1-0.1,0.1l-10.9,0C80.3,52.5,80.3,52.4,80.3,52.3z"}),Object(qi.jsx)("rect",{x:"83.6",y:"59.3",fill:"#606774",stroke:"#3E445D",strokeWidth:"0.5",strokeMiterlimit:"10",width:"26.8",height:"2.4"}),Object(qi.jsx)("rect",{x:"83.6",y:"65.1",fill:"#606774",stroke:"#3E445D",strokeWidth:"0.5",strokeMiterlimit:"10",width:"26.8",height:"2.4"}),Object(qi.jsx)("rect",{x:"83.6",y:"70.9",fill:"#606774",stroke:"#3E445D",strokeWidth:"0.5",strokeMiterlimit:"10",width:"26.8",height:"2.4"}),Object(qi.jsx)("rect",{x:"83.6",y:"76.7",fill:"#606774",stroke:"#3E445D",strokeWidth:"0.5",strokeMiterlimit:"10",width:"26.8",height:"2.4"})]}),theme:"dark",message:"An error occurred validating the API\n      Specification while loading\n      documentation. Please contact the API\n      provider for further detail.\n      ",details:{heading:"API Validation Failure",message:"If you are the maintainer of this site, \n      an error occurred while validating the API specification. \n      Please resolve the validation error and try again."}},errorDocsCode500:{title:"Internal Server Error",icon:e=>Object(qi.jsxs)(Ji,{...e,viewBox:e.viewBox||"0 0 128 128",width:e.width||"128",height:e.height||"128",children:[Object(qi.jsx)("circle",{fill:"#EBF0F5",cx:"64",cy:"64",r:"62"}),Object(qi.jsx)("path",{fill:"#9199A5",stroke:"#49505A",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M79.2,41.6v-4.3h-2c-0.1-0.6-0.3-1.1-0.6-1.7 l1.4-1.4l-3-3l-1.4,1.4c-0.5-0.3-1.1-0.5-1.7-0.6v-2h-4.3v2c-0.6,0.1-1.1,0.3-1.7,0.6l-1.4-1.4l-3,3l1.4,1.4 c-0.3,0.5-0.5,1.1-0.6,1.7h-2v4.3h2c0.1,0.6,0.3,1.1,0.6,1.7l-1.4,1.4l3,3l1.4-1.4c0.5,0.3,1.1,0.5,1.7,0.6v2h4.3v-2 c0.6-0.1,1.1-0.3,1.7-0.6l1.4,1.4l3-3l-1.4-1.4c0.3-0.5,0.5-1.1,0.6-1.7H79.2z M72.5,42.1c-0.7,0.7-1.6,1.1-2.7,1.1 c-2.1,0-3.8-1.7-3.8-3.8c0-1,0.4-2,1.1-2.7c0.7-0.7,1.6-1.1,2.7-1.1c1,0,2,0.4,2.7,1.1c0.7,0.7,1.1,1.6,1.1,2.7S73.1,41.4,72.5,42.1 z"}),Object(qi.jsx)("path",{fill:"#9199A5",stroke:"#49505A",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M94.1,36.4V33h-1.6c-0.1-0.5-0.3-0.9-0.5-1.3 l1.1-1.1l-2.4-2.4l-1.1,1.1c-0.4-0.2-0.9-0.4-1.3-0.5v-1.6h-3.4v1.6c-0.5,0.1-0.9,0.3-1.3,0.5l-1.1-1.1l-2.4,2.4l1.1,1.1 c-0.2,0.4-0.4,0.9-0.5,1.3h-1.6v3.4h1.6c0.1,0.5,0.3,0.9,0.5,1.3l-1.1,1.1l2.4,2.4l1.1-1.1c0.4,0.2,0.9,0.4,1.3,0.5v1.6h3.4v-1.6 c0.5-0.1,0.9-0.3,1.3-0.5l1.1,1.1l2.4-2.4L92,37.7c0.2-0.4,0.4-0.9,0.5-1.3H94.1z M88.6,36.8c-0.5,0.5-1.3,0.9-2.1,0.9 c-1.7,0-3-1.4-3-3c0-0.8,0.3-1.6,0.9-2.2c0.6-0.5,1.3-0.9,2.2-0.9c0.8,0,1.6,0.3,2.1,0.9c0.6,0.6,0.9,1.3,0.9,2.2 S89.2,36.3,88.6,36.8z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M95.9,45.9v19c0,1.3-1,2.3-2.3,2.3H49.2 c-1.3,0-2.3-1-2.3-2.3v-19H95.9z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M81.6,11.2L81.6,11.2L46.9,45.9l0,0 c-2.1-2.1-2.1-5.5,0-7.6L74,11.2C76.1,9.1,79.5,9.1,81.6,11.2z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M95.9,70.6v16.7c0,1.3-1,2.3-2.3,2.3H49.2 c-1.3,0-2.3-1-2.3-2.3V70.6c0-1.3,1-2.3,2.3-2.3h44.5C94.9,68.3,95.9,69.4,95.9,70.6z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M95.9,93.1v14.9c0,2.3-1.8,4.1-4.1,4.1H51 c-2.3,0-4.1-1.8-4.1-4.1V93.1c0-1.3,1-2.3,2.3-2.3h44.5C94.9,90.7,95.9,91.8,95.9,93.1z"}),Object(qi.jsx)("path",{fill:"#FF4451",stroke:"#BA1E45",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M79.2,55.9h-0.7c-0.6,0-1.1-0.5-1.1-1.1V54 c0-0.6,0.5-1.1,1.1-1.1h0.7c0.6,0,1.1,0.5,1.1,1.1v0.7C80.3,55.4,79.8,55.9,79.2,55.9z"}),Object(qi.jsx)("path",{fill:"#9199A5",stroke:"#49505A",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M84.3,55.9h-0.7c-0.6,0-1.1-0.5-1.1-1.1V54 c0-0.6,0.5-1.1,1.1-1.1h0.7c0.6,0,1.1,0.5,1.1,1.1v0.7C85.4,55.4,84.9,55.9,84.3,55.9z"}),Object(qi.jsx)("path",{fill:"#9199A5",stroke:"#49505A",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M89,55.9h-0.7c-0.6,0-1.1-0.5-1.1-1.1V54 c0-0.6,0.5-1.1,1.1-1.1H89c0.6,0,1.1,0.5,1.1,1.1v0.7C90.2,55.4,89.7,55.9,89,55.9z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",d:"M91.2,47.2H50c-0.2,0-0.4-0.2-0.4-0.4v-0.2c0-0.2,0.2-0.4,0.4-0.4h41.2c0.2,0,0.4,0.2,0.4,0.4v0.2 C91.6,47,91.4,47.2,91.2,47.2z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",d:"M91.2,69.5H50c-0.2,0-0.4-0.2-0.4-0.4v-0.2c0-0.2,0.2-0.4,0.4-0.4h41.2c0.2,0,0.4,0.2,0.4,0.4v0.2 C91.6,69.3,91.4,69.5,91.2,69.5z"}),Object(qi.jsx)("path",{fill:"#CACFD6",d:"M73.8,88.1c0,0.5,0,1,0,1.5H49.2c-1.3,0-2.3-1-2.3-2.3V70.6c0-1.3,1-2.3,2.3-2.3h14.3 C69.7,72.7,73.8,79.9,73.8,88.1z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",d:"M91.2,91.8H50c-0.2,0-0.4-0.2-0.4-0.4v-0.2c0-0.2,0.2-0.4,0.4-0.4h41.2c0.2,0,0.4,0.2,0.4,0.4v0.2 C91.6,91.6,91.4,91.8,91.2,91.8z"}),Object(qi.jsx)("path",{fill:"#CACFD6",d:"M49.2,90.7h24.5c-1.2,11.1-9.9,19.9-20.8,21.3H51c-2.3,0-4.1-1.8-4.1-4.1V93.1 C46.8,91.8,47.9,90.7,49.2,90.7z"}),Object(qi.jsx)("path",{opacity:"0.1",fill:"#606774",d:"M94.4,67.2H48.3c-0.2,0-0.4-0.2-0.4-0.4v-0.2c0-0.2,0.2-0.4,0.4-0.4h46.1 c0.2,0,0.4,0.2,0.4,0.4v0.2C94.8,67,94.6,67.2,94.4,67.2z"}),Object(qi.jsx)("path",{opacity:"0.1",fill:"#606774",d:"M94.4,89.5H48.3c-0.2,0-0.4-0.2-0.4-0.4v-0.2c0-0.2,0.2-0.4,0.4-0.4h46.1 c0.2,0,0.4,0.2,0.4,0.4v0.2C94.8,89.3,94.6,89.5,94.4,89.5z"}),Object(qi.jsx)("path",{opacity:"0.1",fill:"#606774",d:"M94.4,111.8H48.3c-0.2,0-0.4-0.2-0.4-0.4v-0.2c0-0.2,0.2-0.4,0.4-0.4h46.1 c0.2,0,0.4,0.2,0.4,0.4v0.2C94.8,111.6,94.6,111.8,94.4,111.8z"}),Object(qi.jsx)("circle",{fill:"#FF4451",stroke:"#BA1E45",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"47.6",cy:"88.1",r:"24.1"}),Object(qi.jsx)("circle",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"47.6",cy:"88.1",r:"19.3"}),Object(qi.jsx)("circle",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"47.6",cy:"88.1",r:"19.3"}),Object(qi.jsx)("circle",{fill:"#CACFD6",cx:"47.6",cy:"88.1",r:"18.4"}),Object(qi.jsx)("circle",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"47.6",cy:"88.1",r:"17.7"}),Object(qi.jsx)("g",{children:Object(qi.jsx)("path",{fill:"#FF4451",stroke:"#BA1E45",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M45.7,77.6h4.5l-0.8,14.4h-3L45.7,77.6z"})}),Object(qi.jsx)("g",{children:Object(qi.jsx)("path",{fill:"#FF4451",stroke:"#BA1E45",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M48.1,97.7h-0.3c-1.1,0-2-0.9-1.9-2v0 c0-1,0.9-1.9,1.9-1.9h0.3c1.1,0,1.9,0.8,1.9,1.9l0,0C50.1,96.9,49.2,97.7,48.1,97.7z"})})]}),theme:"dark",message:"The server encountered an internal error\n    or misconfiguration and was unable to\n    complete your request.",details:{heading:"Internal Error",message:"If you are the maintainer of this site, \n      the server encountered an internal error while loading the documentation. \n      Please try again after a while, or contact support for further details."}},technicalIssues:{title:"Unknown Error",icon:nl,theme:"dark",message:"If you are the maintainer of this site, \n      the browser has encountered an unknown error. \n      Please contact support for further details.",details:null},errorDocsCode502:{title:"Service Temporarily Unavailable",icon:rl,theme:"dark",message:"The server is temporarily unable to process your request. Please try again in a moment.\n    ",details:null},errorDocsCode503:{title:"Service Temporarily Unavailable",icon:rl,theme:"dark",message:"The server is temporarily unable to process your request. Please try again in a moment.\n    ",details:null},errorDocsCode524:{title:"Request Timed Out",icon:e=>Object(qi.jsxs)(Ji,{...e,viewBox:e.viewBox||"0 0 128 128",width:e.width||"128",height:e.height||"128",children:[Object(qi.jsx)("circle",{fill:"#EBF0F5",cx:"64",cy:"64",r:"62"}),Object(qi.jsxs)("g",{children:[Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M100,31.3V48c0,1.4-1.2,2.6-2.6,2.6h-50 c-1.4,0-2.6-1.2-2.6-2.6V31.3c0-2.6,2.1-4.6,4.6-4.6h45.9C98,26.7,100,28.8,100,31.3z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M100,54.5v18.7c0,1.4-1.2,2.6-2.6,2.6h-50 c-1.4,0-2.6-1.2-2.6-2.6V54.5c0-1.4,1.2-2.6,2.6-2.6h50C98.9,51.9,100,53.1,100,54.5z"}),Object(qi.jsx)("path",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M100,79.7v16.7c0,2.6-2.1,4.6-4.6,4.6H49.5 c-2.6,0-4.6-2.1-4.6-4.6V79.7c0-1.4,1.2-2.6,2.6-2.6h50C98.9,77.1,100,78.3,100,79.7z"}),Object(qi.jsx)("path",{fill:"#FF4451",stroke:"#BA1E45",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M81.4,38h-1.2c-0.6,0-1.1-0.5-1.1-1.1v-1.2 c0-0.6,0.5-1.1,1.1-1.1h1.2c0.6,0,1.1,0.5,1.1,1.1v1.2C82.5,37.5,82,38,81.4,38z"}),Object(qi.jsx)("path",{fill:"#9199A5",stroke:"#49505A",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M87.1,38h-1.2c-0.6,0-1.1-0.5-1.1-1.1v-1.2 c0-0.6,0.5-1.1,1.1-1.1h1.2c0.6,0,1.1,0.5,1.1,1.1v1.2C88.2,37.5,87.7,38,87.1,38z"}),Object(qi.jsx)("path",{fill:"#9199A5",stroke:"#49505A",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M92.5,38h-1.2c-0.6,0-1.1-0.5-1.1-1.1v-1.2 c0-0.6,0.5-1.1,1.1-1.1h1.2c0.6,0,1.1,0.5,1.1,1.1v1.2C93.6,37.5,93.1,38,92.5,38z"}),Object(qi.jsxs)("g",{children:[Object(qi.jsx)("rect",{x:"42.5",y:"38",fill:"#3E445D",stroke:"#1D2236",strokeWidth:"0.5",strokeMiterlimit:"10",width:"7.3",height:"14.8"}),Object(qi.jsx)("path",{fill:"#CACFD6",d:"M49.2,45.1h-6.2c-0.3,0-0.5-0.2-0.5-0.5V44c0-0.3,0.2-0.5,0.5-0.5h6.2c0.3,0,0.5,0.2,0.5,0.5v0.6 C49.8,44.8,49.5,45.1,49.2,45.1z"}),Object(qi.jsx)("path",{fill:"#CACFD6",d:"M49.2,48h-6.2c-0.3,0-0.5-0.2-0.5-0.5v-0.6c0-0.3,0.2-0.5,0.5-0.5h6.2c0.3,0,0.5,0.2,0.5,0.5v0.6 C49.8,47.8,49.5,48,49.2,48z"}),Object(qi.jsx)("circle",{fill:"#606774",stroke:"#3E445D",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"45.8",cy:"74.1",r:"27.1"}),Object(qi.jsx)("circle",{fill:"#F6F6F9",stroke:"#9CAAB8",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"45.8",cy:"74.1",r:"21.7"}),Object(qi.jsx)("g",{children:Object(qi.jsx)("path",{fill:"#2750AE",d:"M45.2,91.2c-15,0.5-22.7-17.7-12.5-28.6c3.1-3.4,7.7-5.5,12.5-5.7v4c-3.7-0.2-7.5,1.2-10.3,3.8 C24.9,74.1,31.6,90.8,45.2,91.2L45.2,91.2z"})}),Object(qi.jsx)("path",{fill:"#606774",stroke:"#3E445D",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M57,38H34.5c-1.8,0-3.2,1.4-3.2,3.2v0 c0,1.8,1.4,3.2,3.2,3.2H57c1.8,0,3.2-1.4,3.2-3.2v0C60.2,39.4,58.8,38,57,38z"}),Object(qi.jsx)("path",{fill:"#3E445D",stroke:"#1D2236",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M46,56.3l-0.5,0c-0.3,0-0.5,0.2-0.5,0.5 L45,72.9c0,0.3,0.2,0.5,0.5,0.5l0.5,0c0.3,0,0.5-0.2,0.5-0.5l-0.1-16.1C46.5,56.5,46.3,56.3,46,56.3z"}),Object(qi.jsx)("path",{fill:"#3E445D",stroke:"#1D2236",strokeWidth:"0.5",strokeMiterlimit:"10",d:"M60.9,74.4l0-0.5c0-0.3-0.2-0.5-0.5-0.5 l-13.2,0.1c-0.3,0-0.5,0.2-0.5,0.5l0,0.5c0,0.3,0.2,0.5,0.5,0.5l13.2-0.1C60.7,74.9,60.9,74.7,60.9,74.4z"}),Object(qi.jsx)("circle",{fill:"#3E445D",stroke:"#1D2236",strokeWidth:"0.5",strokeMiterlimit:"10",cx:"45.8",cy:"74.1",r:"2.9"})]})]})]}),theme:"dark",message:"The server is taking too long to respond.\n     Please try again.",details:null}},sl=Object(vr.c)(Tr)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  @media (max-width: 767px), (max-height: 500px) {
    align-items: flex-start;
  }
  .scrollable {
    width: 100%;
  }
`,ll=Object(vr.c)(Tr)`
  height: 100%;
  padding: 40px 32px;
  color: ${e=>"light"===e.themeVariant?e.theme.colors.C000:e.theme.colors.C800};
  position: relative;
  min-height: 500px;

  @media (max-width: 767px), (max-height: 500px) {
    min-height: 300px;
  }

  .error-icon-container {
    width: 128px;
    height: 128px;
    margin: 0 auto 16px auto;
  }

  .title-container {
    display: flex;
    justify-content: center;
    flex: 1;

    .title-inner-container {
      max-width: 340px;
    }

    ${Vr} {
      text-align: center;
      font-size: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text1.fontSize||"15px"}};
      font-weight: 600;
      letter-spacing: 0.3px;
      line-height: 1.5;
      color: ${e=>e.theme.colors.C1000};
      opacity: 1;
      margin: unset;
    }
  }

  .error-title {
    color: inherit;
    font-weight: bold;
    text-align: center;
    margin: 0 auto 16px auto;
  }

  .error-message {
    text-align: center;
    color: inherit;
    max-width: 390px;
    margin: 0 auto 16px auto;
    ${e=>{let{theme:{cssStyles:t}}=e;return t&&Cr(t.body.text1)}};
    line-height: 1.5;
  }

  .try-again {
    margin: 0 auto 16px auto;
  }

  .go-back-container {
    height: 50px;
  }

  .go-back {
    height: 24px;
    line-height: 23px;
    color: ${e=>e.theme.linkColor};
    margin: 0 auto;

    > svg {
      margin-right: 10px;
    }
  }

  .more-details-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .more-details {
    color: ${e=>e.theme.colors.C800};
    margin: 12px 0;
    cursor: pointer;
    user-select: none;
    font-size: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text3.fontSize||"12px"}};
  }

  .details-container {
    position: relative;
    background: ${e=>e.theme.colors.C200} 0% 0% no-repeat
      padding-box;
    border-radius: 8px;
    padding: 20px;
    max-width: 500px;

    ${Tr} {
      text-align: center;
      font-weight: 600;
      font-size: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text2.fontSize||"15px"}};
      margin-bottom: 10px;
      opacity: 0.66;
    }

    ${Vr} {
      margin: unset;
      text-align: center;
      font-size: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text2.fontSize||"15px"}};
      letter-spacing: 0.3px;
      line-height: 1.5;
      color: ${e=>e.theme.colors.C800};
      opacity: 0.66;
    }

    :after {
      content: '';
      position: absolute;
      top: -20px;
      left: 50%;
      margin-left: -5px;
      border-width: 10px;
      border-style: solid;
      border-color: ${e=>e.theme.colors.C200} transparent
        transparent transparent;
      transform: rotate(180deg);
    }
  }
`;function cl(e){const{variant:t="errorDefaultTryOut",onRetry:n,onBack:r,isProxy:o}=e,{icon:i,message:a,theme:s,title:l,details:c}=al[t],[u,p]=Object(tn.useState)(!1),d=Object(tn.useMemo)((()=>"string"===typeof a?a:Object(tn.cloneElement)(a,{isProxy:o})),[a,o]);return Object(qi.jsx)(sl,{children:Object(qi.jsx)(ci,{overflowY:!0,invert:!0,className:"scrollable",children:Object(qi.jsxs)(ll,{themeVariant:s,className:"error-screen",children:[Object(qi.jsx)(Tr,{className:"error-icon-container",children:Object(qi.jsx)(i,{})}),c?Object(qi.jsx)(Tr,{className:"title-container",children:Object(qi.jsx)(Tr,{className:"title-inner-container",children:Object(qi.jsx)(Vr,{children:"There is a problem loading the documentation."})})}):Object(qi.jsxs)(qi.Fragment,{children:[Object(qi.jsx)(Qr,{className:"error-title",children:l}),Object(qi.jsx)(Tr,{className:"error-message",children:d})]}),n&&Object(qi.jsx)(na,{className:"try-again",onClick:n}),r&&Object(qi.jsxs)(Oi,{onClick:r,className:"go-back",children:[Object(qi.jsx)(Ks,{height:"100%"}),"Go Back"]}),c&&Object(qi.jsxs)(Tr,{className:"more-details-container",children:[Object(qi.jsxs)(Tr,{className:"more-details",onClick:()=>p((e=>!e)),children:[u?"Hide":"More"," Details"]}),u&&Object(qi.jsxs)(Tr,{className:"details-container",children:[Object(qi.jsx)(Tr,{children:null===c||void 0===c?void 0:c.heading}),Object(qi.jsx)(Vr,{children:null===c||void 0===c?void 0:c.message})]})]})]})})})}function ul(e){const{response:t,onRetry:n,onBack:r,isProxy:o}=e;return window.navigator.onLine?404===t.StatusCode?Object(qi.jsx)(cl,{variant:"errorNotFoundTryOut",onBack:r}):400===t.StatusCode?Object(qi.jsx)(cl,{variant:"error400TryOut",onBack:r}):422===t.StatusCode?Object(qi.jsx)(cl,{variant:"error422TryOut",onBack:r}):500===t.StatusCode?Object(qi.jsx)(cl,{variant:"errorServerTryOut",onRetry:n,onBack:r}):504===t.StatusCode||524===t.StatusCode?Object(qi.jsx)(cl,{variant:"errorTimeOutTryOut",onRetry:n,onBack:r}):t.StatusCode?Object(qi.jsx)(cl,{variant:"errorStatusUnknownTryOut",onRetry:n,onBack:r}):Object(qi.jsx)(cl,{onBack:r,isProxy:o}):Object(qi.jsx)(cl,{variant:"errorConnectionTryOut",onRetry:n,onBack:r})}function pl(){return Object(qi.jsxs)(ui,{direction:"row",children:[Object(qi.jsx)(Zi,{}),Object(qi.jsx)(Yr,{children:"Loading"})]})}cl.displayName="ErrorScreen";function dl(e){const{statusCode:t,onRetry:n}=e;return window.navigator.onLine?400===t?Object(qi.jsx)(cl,{variant:"errorDocsCode400"}):402===t?Object(qi.jsx)(cl,{variant:"errorDocsCode402"}):403===t?Object(qi.jsx)(cl,{variant:"errorDocsCode403"}):404===t?Object(qi.jsx)(cl,{variant:"errorDocsCode404"}):406===t?Object(qi.jsx)(cl,{variant:"errorDocsCode406"}):422===t?Object(qi.jsx)(cl,{variant:"errorDocsCode422"}):500===t?Object(qi.jsx)(cl,{variant:"errorDocsCode500"}):502===t?Object(qi.jsx)(cl,{variant:"errorDocsCode502",onRetry:n}):503===t?Object(qi.jsx)(cl,{variant:"errorDocsCode503",onRetry:n}):504===t||524===t?Object(qi.jsx)(cl,{variant:"errorDocsCode524",onRetry:n}):900===t?Object(qi.jsx)(cl,{variant:"technicalIssues"}):Object(qi.jsx)(cl,{variant:"errorDocsDefault",onRetry:n}):Object(qi.jsx)(cl,{variant:"errorDocsConnection",onRetry:n})}Object(vr.c)(Yr)`
  color: #f56f6f;
  max-width: 200px;
  padding: 6.4px;
  position: absolute;

  &.bottom {
    top: ${e=>e.top||"-45px"};
    left: ${e=>e.left||"-20px"};
    right: ${e=>e.right};
    bottom: ${e=>e.bottom};
  }
`;om.displayName="Toolttip";const im=Object(vr.c)(Tr)`
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  padding: 4px 8px;
  font-size: 11.85px;
  color: #fff;
  text-align: center;
  border-radius: 4px;
`;im.displayName="TooltipInner";const am=Object(vr.c)(Tr)`
  position: absolute;
  display: block;
  width: 12.8px;
  height: 6.4px;
  bottom: ${e=>"bottom"===e.placement?"0":""};
  top: ${e=>"top"===e.placement?"0":""};
  left: ${e=>"left"===e.placement?"0":""};
  right: ${e=>"right"===e.placement?"0":""};

  &.arrow-bottom {
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 6px solid rgba(0, 0, 0, 0.8);
    margin: 0 auto;
    left: 50%;
    transform: translate(-50%, -3px);
  }
`;am.displayName="Arrow";class sm extends tn.PureComponent{render(){return Object(a.createPortal)(Object(qi.jsxs)(om,{...this.props,className:this.props.placement,children:[Object(qi.jsx)(am,{placement:this.props.placement,className:"arrow-"+this.props.placement}),Object(qi.jsx)(im,{children:" copied "})]}),document.body)}}var lm=n(349),cm=n.n(lm);const um=Object(vr.c)(Tr)`
  position: relative;
`;class pm extends tn.PureComponent{constructor(e){super(e),this.buttonRef=void 0,this.showCopiedTooltip=()=>{const{portalSettings:e,analyticsData:t,tooltip:n}=this.props;if(t&&function(e,t,n,r,o){_l(e,"Docs Code Copied",{Template:t,EndpointName:r,EndpointGroupName:o,SectionType:n})}(e,t.template,t.sectionType,t.endpointName,t.endpointGroupName),this.buttonRef.current){const e=this.buttonRef.current.getBoundingClientRect(),t=n?e.top-n.adjustTop+"px":e.top-e.height-5+"px",r=n?e.left-n.adjustLeft+"px":e.left-e.width/2+"px";this.setState({toggleTooltip:!0,top:t,left:r}),setTimeout((()=>{this.setState((e=>({...e,toggleTooltip:!1})))}),1e3)}},this.state={toggleTooltip:!1},this.showCopiedTooltip=this.showCopiedTooltip.bind(this),this.buttonRef=Object(tn.createRef)()}render(){const{text:e,iconButtonType:t,children:n,className:r="copy-to-clip-board"}=this.props;return Object(qi.jsxs)(um,{className:r,children:[this.state.toggleTooltip&&Object(qi.jsx)(sm,{placement:"bottom",top:this.state.top,left:this.state.left}),Object(qi.jsx)(cm.a,{text:e,onCopy:this.showCopiedTooltip,children:n?Object(qi.jsx)(Tr,{ref:this.buttonRef,children:n}):Object(qi.jsx)(Tr,{ref:this.buttonRef,children:Object(qi.jsx)(Ti,{varient:t,children:Object(qi.jsx)(Ls,{width:"18",height:"18",stroke:"dark"===t?"#fff":"#3e445d",fill:"none"})})})})]})}}const dm=vl(pm);var fm=n(351),hm=n.n(fm),mm=n(352),gm=n.n(mm),vm=n(13),bm=n.n(vm),ym=n(42),xm=n.n(ym);function Em(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Em(Object(n),!0).forEach((function(t){bm()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Em(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Cm={};function wm(e){if(0===e.length||1===e.length)return e;var t=e.join(".");return Cm[t]||(Cm[t]=function(e){var t=e.length;return 0===t||1===t?e:2===t?[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])]:3===t?[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])]:t>=4?[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]:void 0}(e)),Cm[t]}function km(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=e.filter((function(e){return"token"!==e})),o=wm(r);return o.reduce((function(e,t){return _m(_m({},e),n[t])}),t)}function Am(e){return e.join(" ")}function Om(e){var t=e.node,n=e.stylesheet,r=e.style,o=void 0===r?{}:r,i=e.useInlineStyles,a=e.key,s=t.properties,l=t.type,c=t.tagName,u=t.value;if("text"===l)return u;if(c){var p,d=function(e,t){var n=0;return function(r){return n+=1,r.map((function(r,o){return Om({node:r,stylesheet:e,useInlineStyles:t,key:"code-segment-".concat(n,"-").concat(o)})}))}}(n,i);if(i){var f=Object.keys(n).reduce((function(e,t){return t.split(".").forEach((function(t){e.includes(t)||e.push(t)})),e}),[]),h=s.className&&s.className.includes("token")?["token"]:[],m=s.className&&h.concat(s.className.filter((function(e){return!f.includes(e)})));p=_m(_m({},s),{},{className:Am(m)||void 0,style:km(s.className,Object.assign({},s.style,o),n)})}else p=_m(_m({},s),{},{className:Am(s.className)});var g=d(t.children);return nn.a.createElement(c,xm()({key:a},p),g)}}var Sm=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function Tm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function jm(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Tm(Object(n),!0).forEach((function(t){bm()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tm(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Dm=/\n/g;function Mm(e){var t=e.codeString,n=e.codeStyle,r=e.containerStyle,o=void 0===r?{float:"left",paddingRight:"10px"}:r,i=e.numberStyle,a=void 0===i?{}:i,s=e.startingLineNumber;return nn.a.createElement("code",{style:Object.assign({},n,o)},function(e){var t=e.lines,n=e.startingLineNumber,r=e.style;return t.map((function(e,t){var o=t+n;return nn.a.createElement("span",{key:"line-".concat(t),className:"react-syntax-highlighter-line-number",style:"function"===typeof r?r(o):r},"".concat(o,"\n"))}))}({lines:t.replace(/\n$/,"").split("\n"),style:a,startingLineNumber:s}))}function Nm(e,t){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:t},children:[{type:"text",value:e}]}}function Pm(e,t,n){var r,o={display:"inline-block",minWidth:(r=n,"".concat(r.toString().length,".25em")),paddingRight:"1em",textAlign:"right",userSelect:"none"},i="function"===typeof e?e(t):e;return jm(jm({},o),i)}function Rm(e){var t=e.children,n=e.lineNumber,r=e.lineNumberStyle,o=e.largestLineNumber,i=e.showInlineLineNumbers,a=e.lineProps,s=void 0===a?{}:a,l=e.className,c=void 0===l?[]:l,u=e.showLineNumbers,p=e.wrapLongLines,d="function"===typeof s?s(n):s;if(d.className=c,n&&i){var f=Pm(r,n,o);t.unshift(Nm(n,f))}return p&u&&(d.style=jm(jm({},d.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:d,children:t}}function Lm(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=0;r<e.length;r++){var o=e[r];if("text"===o.type)n.push(Rm({children:[o],className:gm()(new Set(t))}));else if(o.children){var i=t.concat(o.properties.className);Lm(o.children,i).forEach((function(e){return n.push(e)}))}}return n}function Im(e,t,n,r,o,i,a,s,l){var c,u=Lm(e.value),p=[],d=-1,f=0;function h(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return Rm({children:e,lineNumber:t,lineNumberStyle:s,largestLineNumber:a,showInlineLineNumbers:o,lineProps:n,className:i,showLineNumbers:r,wrapLongLines:l})}function m(e,t){if(r&&t&&o){var n=Pm(s,t,a);e.unshift(Nm(t,n))}return e}function g(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return t||r.length>0?h(e,n,r):m(e,n)}for(var v=function(){var e=u[f],t=e.children[0].value;if(t.match(Dm)){var n=t.split("\n");n.forEach((function(t,o){var a=r&&p.length+i,s={type:"text",value:"".concat(t,"\n")};if(0===o){var l=g(u.slice(d+1,f).concat(Rm({children:[s],className:e.properties.className})),a);p.push(l)}else if(o===n.length-1){var c=u[f+1]&&u[f+1].children&&u[f+1].children[0],h={type:"text",value:"".concat(t)};if(c){var m=Rm({children:[h],className:e.properties.className});u.splice(f+1,0,m)}else{var v=g([h],a,e.properties.className);p.push(v)}}else{var b=g([s],a,e.properties.className);p.push(b)}})),d=f}f++};f<u.length;)v();if(d!==u.length-1){var b=u.slice(d+1,u.length);if(b&&b.length){var y=g(b,r&&p.length+i);p.push(y)}}return t?p:(c=[]).concat.apply(c,p)}function Fm(e){var t=e.rows,n=e.stylesheet,r=e.useInlineStyles;return t.map((function(e,t){return Om({node:e,stylesheet:n,useInlineStyles:r,key:"code-segement".concat(t)})}))}function Bm(e){return e&&"undefined"!==typeof e.highlightAuto}var Hm,zm,Um=n(225),$m=n.n(Um),Wm=(Hm=$m.a,zm={},function(e){var t=e.language,n=e.children,r=e.style,o=void 0===r?zm:r,i=e.customStyle,a=void 0===i?{}:i,s=e.codeTagProps,l=void 0===s?{className:t?"language-".concat(t):void 0,style:jm(jm({},o['code[class*="language-"]']),o['code[class*="language-'.concat(t,'"]')])}:s,c=e.useInlineStyles,u=void 0===c||c,p=e.showLineNumbers,d=void 0!==p&&p,f=e.showInlineLineNumbers,h=void 0===f||f,m=e.startingLineNumber,g=void 0===m?1:m,v=e.lineNumberContainerStyle,b=e.lineNumberStyle,y=void 0===b?{}:b,x=e.wrapLines,E=e.wrapLongLines,_=void 0!==E&&E,C=e.lineProps,w=void 0===C?{}:C,k=e.renderer,A=e.PreTag,O=void 0===A?"pre":A,S=e.CodeTag,T=void 0===S?"code":S,j=e.code,D=void 0===j?(Array.isArray(n)?n[0]:n)||"":j,M=e.astGenerator,N=hm()(e,Sm);M=M||Hm;var P=d?nn.a.createElement(Mm,{containerStyle:v,codeStyle:l.style||{},numberStyle:y,startingLineNumber:g,codeString:D}):null,R=o.hljs||o['pre[class*="language-"]']||{backgroundColor:"#fff"},L=Bm(M)?"hljs":"prismjs",I=u?Object.assign({},N,{style:Object.assign({},R,a)}):Object.assign({},N,{className:N.className?"".concat(L," ").concat(N.className):L,style:Object.assign({},a)});if(l.style=jm(jm({},l.style),{},_?{whiteSpace:"pre-wrap"}:{whiteSpace:"pre"}),!M)return nn.a.createElement(O,I,P,nn.a.createElement(T,l,D));(void 0===x&&k||_)&&(x=!0),k=k||Fm;var F=[{type:"text",value:D}],B=function(e){var t=e.astGenerator,n=e.language,r=e.code,o=e.defaultCodeValue;if(Bm(t)){var i=function(e,t){return-1!==e.listLanguages().indexOf(t)}(t,n);return"text"===n?{value:o,language:"text"}:i?t.highlight(n,r):t.highlightAuto(r)}try{return n&&"text"!==n?{value:t.highlight(r,n)}:{value:o}}catch(a){return{value:o}}}({astGenerator:M,language:t,code:D,defaultCodeValue:F});null===B.language&&(B.value=F);var H=Im(B,x,w,d,h,g,B.value.length+g,y,_);return nn.a.createElement(O,I,nn.a.createElement(T,l,!h&&P,k({rows:H,stylesheet:o,useInlineStyles:u})))});Wm.registerLanguage=$m.a.registerLanguage;var Vm=Wm,Gm={"hljs-comment":{color:"#969896"},"hljs-quote":{color:"#969896"},"hljs-variable":{color:"#cc6666"},"hljs-template-variable":{color:"#cc6666"},"hljs-tag":{color:"#cc6666"},"hljs-name":{color:"#cc6666"},"hljs-selector-id":{color:"#cc6666"},"hljs-selector-class":{color:"#cc6666"},"hljs-regexp":{color:"#cc6666"},"hljs-deletion":{color:"#cc6666"},"hljs-number":{color:"#de935f"},"hljs-built_in":{color:"#de935f"},"hljs-builtin-name":{color:"#de935f"},"hljs-literal":{color:"#de935f"},"hljs-type":{color:"#de935f"},"hljs-params":{color:"#de935f"},"hljs-meta":{color:"#de935f"},"hljs-link":{color:"#de935f"},"hljs-attribute":{color:"#f0c674"},"hljs-string":{color:"#b5bd68"},"hljs-symbol":{color:"#b5bd68"},"hljs-bullet":{color:"#b5bd68"},"hljs-addition":{color:"#b5bd68"},"hljs-title":{color:"#81a2be"},"hljs-section":{color:"#81a2be"},"hljs-keyword":{color:"#b294bb"},"hljs-selector-tag":{color:"#b294bb"},hljs:{display:"block",overflowX:"auto",background:"#1d1f21",color:"#c5c8c6",padding:"0.5em"},"hljs-emphasis":{fontStyle:"italic"},"hljs-strong":{fontWeight:"bold"}},qm={"hljs-comment":{color:"#8e908c"},"hljs-quote":{color:"#8e908c"},"hljs-variable":{color:"#c82829"},"hljs-template-variable":{color:"#c82829"},"hljs-tag":{color:"#c82829"},"hljs-name":{color:"#c82829"},"hljs-selector-id":{color:"#c82829"},"hljs-selector-class":{color:"#c82829"},"hljs-regexp":{color:"#c82829"},"hljs-deletion":{color:"#c82829"},"hljs-number":{color:"#f5871f"},"hljs-built_in":{color:"#f5871f"},"hljs-builtin-name":{color:"#f5871f"},"hljs-literal":{color:"#f5871f"},"hljs-type":{color:"#f5871f"},"hljs-params":{color:"#f5871f"},"hljs-meta":{color:"#f5871f"},"hljs-link":{color:"#f5871f"},"hljs-attribute":{color:"#eab700"},"hljs-string":{color:"#718c00"},"hljs-symbol":{color:"#718c00"},"hljs-bullet":{color:"#718c00"},"hljs-addition":{color:"#718c00"},"hljs-title":{color:"#4271ae"},"hljs-section":{color:"#4271ae"},"hljs-keyword":{color:"#8959a8"},"hljs-selector-tag":{color:"#8959a8"},hljs:{display:"block",overflowX:"auto",background:"white",color:"#4d4d4c",padding:"0.5em"},"hljs-emphasis":{fontStyle:"italic"},"hljs-strong":{fontWeight:"bold"}},Ym=n(358),Km=n.n(Ym).a,Qm=n(359),Zm=n.n(Qm).a,Xm=n(360),Jm=n.n(Xm).a,eg=n(356),tg=n.n(eg).a,ng=n(362),rg=n.n(ng).a,og=n(354),ig=n.n(og).a,ag=n(361),sg=n.n(ag).a,lg=n(357),cg=n.n(lg).a,ug=n(355),pg=n.n(ug).a,dg=n(353),fg=n.n(dg).a,hg=n(363),mg=n.n(hg).a,gg=n(364),vg=n.n(gg).a,bg=n(365),yg=n.n(bg).a,xg=n(350),Eg=n.n(xg);const{registerLanguage:_g}=Vm;_g("bash",fg),_g("cs",ig),_g("csharp",ig),_g("go",pg),_g("html",tg),_g("java",cg),_g("javascript",Km),_g("js",Km),_g("objc",Zm),_g("objectivec",Zm),_g("php",Jm),_g("python",sg),_g("ruby",rg),_g("xml",tg),_g("yaml",mg),_g("md",vg),_g("markdown",vg),_g("json",yg),_g("http",(function(){return{aliases:["https"],illegal:"\\S",contains:[{begin:"^[A-Z]+ (.*?)$",returnBegin:!0,end:"$",contains:[{className:"string",begin:" |\\}",end:" |\\{",excludeBegin:!0,excludeEnd:!0,contains:[{className:"title",begin:"\\{",end:"\\}",excludeBegin:!1,excludeEnd:!1}]},{className:"keyword",begin:"[A-Z]+"}]}]}}));const Cg=Object(vr.c)(Ir)`
  background: transparent !important;
  border: none !important;
  border-radius: 8px !important;
  margin: 0;
  padding: 0;

  .linenumber {
    color: ${e=>e.theme.colors.C600};
    margin-right: 10px;
  }

  & > pre {
    background: transparent !important;
    border: none !important;
    border-radius: 0 !important;
    margin: 0;
  }

  & > code {
    ${Nr};
  }
`;function wg(e){if(null===e.code||void 0===e.code||0===e.code.length||""===e.code.trim())return null;const t=(n=e.code,"xml"===e.lang?Eg()(n):n);var n;return Object(qi.jsx)(Cg,{as:"div",children:Object(qi.jsx)(Vm,{language:e.lang,style:e.dark?Gm:qm,wrapLines:!0,showLineNumbers:e.showLineNumbers,children:t})})}Cg.displayName="PreWrapper";const kg=Object(vr.c)(Tr)`
  position: relative;

  .copy-to-clip-board {
    opacity: 0;
    position: absolute;
    right: 10px;
    top: 10px;
  }
  :hover {
    .copy-to-clip-board {
      opacity: 1;
    }
  }
`;function Ag(e){const{text:t,lang:n,code:r=""}=e;return Object(qi.jsxs)(kg,{children:[Object(qi.jsx)(dm,{text:t,iconButtonType:"light"}),Object(qi.jsx)(ji,{as:"div",className:"code-with-copy",children:Object(qi.jsx)(wg,{lang:n,code:r.trimEnd()})})]})}const Og=Object(vr.c)(hr)`
  ${jr};

  & ${Rr} {
    cursor: pointer;
  }

  ${zr} & {
    font-style: italic;
  }

  ${Hr} & {
    font-weight: 500;
  }
`,Sg=Object(vr.c)(oo)`
  > ${Vr} {
    display: inline-block;
  }
`,Tg={a:e=>{let{href:t="",children:n}=e;return Object(qi.jsx)(qh.Consumer,{children:e=>e.isDxDomLink(t)?Object(qi.jsx)(Og,{to:e(t),children:n}):rm(t)?Object(qi.jsx)(Dr,{href:t,target:"_blank",rel:"nofollow noopener",children:n}):Object(qi.jsx)(Dr,{href:t,children:n})})},h1:e=>{let{children:t}=e;return Object(qi.jsx)(qr,{children:t})},h2:e=>{let{children:t}=e;return Object(qi.jsx)(Yr,{children:t})},h3:e=>{let{children:t}=e;return Object(qi.jsx)(Kr,{children:t})},h4:e=>{let{children:t}=e;return Object(qi.jsx)(Qr,{children:t})},h5:e=>{let{children:t}=e;return Object(qi.jsx)(Zr,{children:t})},h6:e=>{let{children:t}=e;return Object(qi.jsx)(Xr,{children:t})},p:e=>{let{children:t}=e;const n=t;return 1===tn.Children.count(n)&&n[0].hasOwnProperty("type")&&"img"===n[0].type.name?Object(qi.jsx)(Vr,{className:"display-block",children:n}):Object(qi.jsx)(Vr,{children:n})},strong:e=>{let{children:t}=e;return Object(qi.jsx)(Hr,{children:t})},em:e=>{let{children:t}=e;return Object(qi.jsx)(zr,{children:t})},table:e=>{let{children:t}=e;return Object(qi.jsx)(Ni,{overflowX:!0,overflowY:!0,children:Object(qi.jsx)(ao,{className:"table-wrapper",children:t})})},thead:e=>{let{children:t}=e;return Object(qi.jsx)(lo,{children:t})},tr:e=>{let{children:t}=e;return Object(qi.jsx)(co,{children:t})},tbody:e=>{let{children:t}=e;return Object(qi.jsx)(so,{children:t})},td:e=>{let{children:t}=e;return Object(qi.jsx)(po,{children:t})},th:e=>{let{children:t}=e;return Object(qi.jsx)(uo,{className:"testing",children:t})},blockquote:e=>{let{children:t}=e;return Object(qi.jsx)(eo,{children:t})},code:e=>{let{inline:t,children:n,lang:r}=e;return t?Object(qi.jsx)(Rr,{children:n}):Object(qi.jsx)(Ag,{text:String(n),lang:r,code:String(n)})},img:e=>{let{src:t="",alt:n}=e;return rm(t)?Object(qi.jsx)(Br,{src:t,alt:n}):Object(qi.jsx)(gl,{children:e=>e&&Object(qi.jsx)(Br,{src:e.baseUrl+t,alt:n})})},hr:()=>Object(qi.jsx)(Fr,{}),ol:e=>{let{start:t=1,children:n}=e,r={};return 1!==t&&(r={start:t.toString()}),Object(qi.jsx)(ro,{...r,children:n})},ul:e=>{let{children:t}=e;return Object(qi.jsx)(no,{children:t})},li:e=>{let{children:t,checked:n}=e;const r=null!==n?io:Sg;return Object(qi.jsx)(r,{children:t})}},jg={...Tg,p:e=>{let{children:t}=e;return Object(qi.jsx)(tn.Fragment,{children:t})}},Dg=[function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=this.data();function n(e,n){(t[e]?t[e]:t[e]=[]).push(n)}n("micromarkExtensions",cf(e)),n("fromMarkdownExtensions",Xf()),n("toMarkdownExtensions",Jf(e))}],Mg=[function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(t,n)=>zh(t,n,e)}],Ng=tn.memo((function(e){let{source:t,inline:n,className:r}=e;const{isDxDomLink:o}=tn.useContext(qh),i=tn.useCallback((e=>o(e)?e:Ml(e)),[o]);return t?Object(qi.jsx)(jd,{className:r,components:n?jg:Tg,remarkPlugins:Dg,rehypePlugins:Mg,transformLinkUri:i,children:t}):null})),Pg=Object(vr.c)(Tr)`
  background: #ffff;
  width: fit-content;
  display: flex;
  align-items: center;
  border: 1px solid ${e=>{let{color:t}=e;return t}};
  border-radius: 6px;
  padding: 8px 14px;
  border-left: 8px solid ${e=>{let{color:t}=e;return t}};
`,Rg=Object(vr.c)(Tr)`
  display: flex;
  width: 14px;
  flex: unset;
  align-self: flex-start;
`,Lg=Object(vr.c)(Tr)`
  width: fit-content;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0px;
  color: #6b7e8f;
  font-style: italic;
  margin-left: 6px;
`,Ig=e=>{switch(e){case"success":return"#50CBA7";case"error":return"#FF4451";case"alert":return"#FF8A70";default:return"#6B7E8F"}};function Fg(e){const{children:t,icon:n="info"}=e;return Object(qi.jsxs)(Pg,{"data-testid":`${n}_callout`,className:"callout-wrapper",color:Ig(n),children:[Object(qi.jsx)(Rg,{children:(e=>{switch(e){case"success":return Object(qi.jsx)(Zs,{fill:Ig(e),height:"13",width:"13"});case"error":return Object(qi.jsx)(Xs,{fill:Ig(e),height:"12",width:"12"});case"alert":return Object(qi.jsx)(Js,{fill:Ig(e),height:"13",width:"15"});default:return Object(qi.jsx)(Qs,{fill:Ig(e),height:"14",width:"14"})}})(n)}),Object(qi.jsx)(Lg,{children:t})]})}const Bg="http-types-popover-btn",Hg=Object(vr.c)(wi)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px;
  max-height: 20px;
  background: ${e=>{let{theme:t}=e;return t.colors.C700}} !important;
  color: ${e=>{let{theme:t}=e;return t.colors.C000}} !important;
`,zg=Object(vr.c)(Ur)`
  pointer-events: none;
  svg {
    color: ${e=>{let{theme:t}=e;return t.colors.C000}};
  }
`,Ug=e=>{const{refFunc:t,onClick:n}=e;return Object(qi.jsx)(Hg,{id:Bg,type:"button",ref:t,onClick:n,children:Object(qi.jsx)(zg,{children:Object(qi.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25.766",height:"9.33",viewBox:"0 0 25.766 9.33",children:Object(qi.jsx)("path",{d:"M-6.4-.78l-.9.913-5.578-4.657L-7.3-9.181l.9.921-4.524,3.719Zm4.192-.066a1,1,0,0,1-.075.382,1.033,1.033,0,0,1-.2.32A.924.924,0,0,1-2.8.071a.994.994,0,0,1-.4.079.994.994,0,0,1-.4-.079.954.954,0,0,1-.311-.212.982.982,0,0,1-.2-.315,1.02,1.02,0,0,1-.075-.39,1.02,1.02,0,0,1,.075-.39,1.033,1.033,0,0,1,.2-.32.924.924,0,0,1,.311-.216.994.994,0,0,1,.4-.079.994.994,0,0,1,.4.079.954.954,0,0,1,.311.212.972.972,0,0,1,.2.32A1.052,1.052,0,0,1-2.208-.847Zm3.2,0a1,1,0,0,1-.075.382,1.033,1.033,0,0,1-.2.32A.924.924,0,0,1,.4.071.994.994,0,0,1,0,.149.994.994,0,0,1-.4.071.954.954,0,0,1-.71-.141a.982.982,0,0,1-.2-.315,1.02,1.02,0,0,1-.075-.39,1.02,1.02,0,0,1,.075-.39,1.033,1.033,0,0,1,.2-.32A.924.924,0,0,1-.4-1.772.994.994,0,0,1,0-1.851a.994.994,0,0,1,.4.079.954.954,0,0,1,.311.212.972.972,0,0,1,.2.32A1.052,1.052,0,0,1,.988-.847Zm3.2,0a1,1,0,0,1-.075.382,1.033,1.033,0,0,1-.2.32.924.924,0,0,1-.311.216.994.994,0,0,1-.4.079A.994.994,0,0,1,2.8.071a.954.954,0,0,1-.311-.212.982.982,0,0,1-.2-.315,1.02,1.02,0,0,1-.075-.39,1.02,1.02,0,0,1,.075-.39,1.033,1.033,0,0,1,.2-.32A.924.924,0,0,1,2.8-1.772a.994.994,0,0,1,.4-.079.994.994,0,0,1,.4.079.954.954,0,0,1,.311.212.972.972,0,0,1,.2.32A1.052,1.052,0,0,1,4.184-.847ZM6.408-8.259l.9-.921,5.578,4.657L7.3.133l-.9-.913,4.524-3.727Z",transform:"translate(12.883 9.181)",fill:"currentColor"})})})})},$g=Object(tn.forwardRef)(Ug);class Wg extends tn.PureComponent{constructor(e){super(e),this.state={outsideClick:!1},this.currentElement=void 0,this.handleOutsideClick=e=>{const t=a.findDOMNode(this);var n,r,o;!(e.target instanceof HTMLElement)||t&&t.contains(e.target)||(this.setState({outsideClick:!0}),!this.props.onOutsideClick||null!==this&&void 0!==this&&null!==(n=this.props)&&void 0!==n&&null!==(r=n.targetRefrance)&&void 0!==r&&null!==(o=r.current)&&void 0!==o&&o.contains(e.target)||this.props.onOutsideClick(e.target))},this.currentElement=tn.createRef()}componentDidMount(){document.body.addEventListener("click",this.handleOutsideClick,!0),document.body.addEventListener("touchstart",this.handleOutsideClick,!0)}componentWillUnmount(){document.body.removeEventListener("click",this.handleOutsideClick,!0),document.body.removeEventListener("touchstart",this.handleOutsideClick,!0)}render(){return Object(qi.jsx)(Tr,{onClick:this.handleOutsideClick,id:"outsideClickWrapper",ref:this.currentElement,children:this.props.children})}}const Vg=Object(vr.c)(Tr)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40px auto;
  flex-direction: column;
  background: ${e=>e.theme.colors.C000} 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #00000000;
  border-radius: 6px;
  z-index: 1000;

  ${e=>{let{isExpand:t}=e;return t?vr.b`
          position: fixed;
          left: 20px;
          top: 20px;
          width: calc(100vw - 40px);
          height: calc(100vh - 40px);
        `:vr.b`
          width: 100%;
          max-width: 400px;
        `}};

  .popover-header {
    height: 40px;
    background: ${e=>e.theme.colors.C200};
    padding: 0 10px 0 18px;
    display: flex;
    align-items: center;
    ${e=>{let{theme:{cssStyles:t}}=e;return Cr(t.body.text1)}};
    font-weight: 600;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;

    ${Ur} {
      flex: 1;
    }

    ${Wr} {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 12px;
      padding: 0;
      width: 18px;
      height: 18px;
    }
  }

  .popover-body {
    max-height: ${e=>{let{isExpand:t}=e;return t?"unset":"190px"}};
    padding: 15px 25px;
    overflow: auto;

    ${si}

    ${e=>{let{theme:{cssStyles:t}}=e;return Cr(t.body.text1)}};

    ${no} {
      margin: 0;
    }
    ${oo} {
      font-family: ${e=>e.theme.cssStyles.code.fontFamily};
      line-height: normal;
    }
  }
`,Gg=Object(vr.c)(Tr)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: ${e=>{let{theme:t}=e;return t.colors.C1000}};
  opacity: 0.5;
  z-index: 1000;
`;function qg(e){const{title:t="Data types",style:n,children:r,useAlwaysPortal:o,refFunc:i,toggleVisibility:s}=e,[l,c]=Object(tn.useState)(!1),u=Object(tn.useCallback)((e=>{e.id!==Bg&&s()}),[s]),p=Object(qi.jsxs)(Wg,{onOutsideClick:u,children:[l?Object(qi.jsx)(Gg,{}):null,Object(qi.jsxs)(Vg,{id:"types-popover",className:"popover-content",ref:i,style:l?{}:n,isExpand:l,children:[Object(qi.jsxs)(Tr,{className:"popover-header",children:[Object(qi.jsx)(Ur,{children:t}),Object(qi.jsx)(Wr,{onClick:()=>c((e=>!e)),children:Object(qi.jsx)(el,{width:"14px",height:"14px"})}),Object(qi.jsx)(Wr,{onClick:s,children:Object(qi.jsx)(Is,{stroke:"#6b7e8f"})})]}),Object(qi.jsx)(Tr,{className:"popover-body",children:r})]})]});return o||l?Object(a.createPortal)(p,document.body):p}const Yg=["top","bottom","top-start","bottom-start","left","right","left-start","right-start"],Kg="top",Qg="#24313E",Zg={http_curl_v1:"Select a programming language from the language selector on the right.",other:"SDK is unavailable."},Xg=Object(vr.c)(Tr)`
  background: ${Qg};
  color: ${e=>{let{theme:t}=e;return t.colors.C000}};
  padding: 4px 8px;
  font-size: ${e=>{let{theme:t}=e;return t.cssStyles.body.text2.fontSize}};
  font-family: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.fontFamily}};
  border-radius: 4px;
  max-width: 250px;

  .tooltip-arrow {
    position: absolute;
    width: 10px;
    height: 10px;

    &:after {
      content: ' ';
      position: absolute;
      top: 0px; // we account for the PopperContainer padding
      left: 0;
      transform: rotate(45deg);
      width: 10px;
      height: 10px;
      background-color: ${Qg};
    }
  }
  &[data-popper-placement^='top'] > .tooltip-arrow {
    bottom: -14px;

    :after {
      top: -9px;
    }
  }
  &[data-popper-placement^='bottom'] > .tooltip-arrow {
    top: -14px;

    :after {
      top: 9px;
    }
  }
  &[data-popper-placement^='left'] > .tooltip-arrow {
    right: -4px;

    :after {
    }
  }
  &[data-popper-placement^='right'] > .tooltip-arrow {
    left: -4px;

    :after {
    }
  }
`,Jg=e=>{const{hoverVisibility:t,isHover:n,parentRefranceId:r,setReferenceElement:o,children:i}=e,s=r&&document.getElementById(r),l=s||document.body;return Object(qi.jsxs)(Tr,{onMouseEnter:t,onMouseLeave:t,children:[Object(qi.jsx)("span",{ref:o,children:i}),n&&Object(a.createPortal)(Object(qi.jsx)(ev,{...e}),l)]})};class ev extends tn.PureComponent{render(){const{text:e,setPopperElement:t,styles:n,setArrowElement:r,attributes:o}=this.props;return Object(qi.jsxs)(Xg,{ref:t,style:n.popper,...o.popper,children:[Object(qi.jsx)(Ur,{ref:r,className:"tooltip-arrow",style:n.arrow,"data-popper-placement":!0}),e]})}}const tv=[0,10];var nv=e=>{const{children:t,text:n,placement:r=Kg,fallbackPlacements:o=Yg,offset:i=tv,parentRefranceId:a,onMouseEnter:s}=e;return Object(qi.jsx)(xs,{placement:r,fallbackPlacements:o,offset:i,onMouseEnter:s,children:e=>Object(qi.jsx)(Jg,{...e,text:n,parentRefranceId:a,children:t})})};const rv=Object(vr.c)(Tr)`
  display: inline-flex;

  .rjsf-base-type {
    margin-right: 5px;
  }
`,ov=e=>{const{attributes:t,styles:n,visible:r,source:o,label:i,useAlwaysPortal:a,toggleVisibility:s,setPopperElement:l,setReferenceElement:c}=e,u=`${i} data types`;return Object(qi.jsxs)(rv,{children:[Object(qi.jsx)(Ur,{className:"rjsf-base-type",ref:c,children:i}),Object(qi.jsx)(nv,{text:u,parentRefranceId:"app-layout-docs-container",children:Object(qi.jsx)($g,{onClick:s})}),r&&Object(qi.jsx)(qg,{refFunc:l,toggleVisibility:s,style:n.popper,...t.popper,useAlwaysPortal:a,children:o?Object(qi.jsx)(Ng,{source:o}):Object(qi.jsx)(Fg,{icon:"info",children:"There is no type available."})})]})};function iv(e){return"object"===typeof e&&null!==e&&!Array.isArray(e)}function av(e){return!!(e&&iv(e)&&e.hasOwnProperty("$$__case"))}function sv(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=JSON.parse(JSON.stringify(e));if(iv(t))if(av(t))t=sv(t.value);else for(const n in t)t={...t,[n]:sv(t[n])};return Array.isArray(t)&&(t=t.map((e=>e&&iv(e)?sv(e):e))),t}function lv(e){return e.split("*")[1]}function cv(e){return Object.entries(e).reduce(((e,t)=>{let[n,r]=t;return null===r||void 0===r||(e[n]=r),e}),{})}function uv(e){return e?"Guide":"Endpoint"}const pv=Object(vr.c)(Tr)`
  ${Ur} {
    display: inline-flex;
    align-items: center;
    color: ${e=>{let{theme:t}=e;return t.colors.C700}};
    font-size: ${e=>{let{theme:t}=e;return t.cssStyles.body.text2.fontSize}};
  }
`,dv=Object(vr.c)(Tr)`
  margin-top: 4px;
  margin-bottom: 4px;
  &.modal-markdown-table {
    margin-top: 10px;
  }
  & ${Vr} {
    margin-bottom: 6px;
  }

  & ${Vr}:last-child {
    margin-bottom: 0;
  }
`,fv=Object(vr.c)(Ni)`
  ${fo.Table} {
    position: relative;
    width: 100%;

    & tr td:first-child ${Rr} {
      max-width: 280px;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-word;
    }

    & tr td:last-child {
      width: 70%;
    }
  }
`,hv=Object(vr.c)(Tr)`
  display: inline-block;
`,mv=Object(vr.c)(Ur)`
  background: ${e=>{let{theme:t}=e;return t.colors.C300}};
  color: ${e=>{let{theme:t}=e;return t.colors.C700}};
  font-size: ${e=>{let{theme:t}=e;return t.cssStyles.body.text3.fontSize}};
  padding: 3px 6px;
  border-radius: 38px;
  align-items: center;
  margin-right: 6px;
  cursor: default;
  font-weight: bold;
  font-family: ${e=>{let{theme:t}=e;return t.cssStyles.code.fontFamily}};
`,gv="| Type | Value |",vv=e=>{if(e.includes(gv)){const[t,n]=e.split(gv);return`${t} <br>This is the discriminator field and it has a following model/value mapping.<br>  ${gv} ${n}`}return e},bv=e=>e.LinkTo?Object(qi.jsx)(Ng,{className:"model-table-link",source:"[`"+e.DataType+"`]("+e.LinkTo+")",inline:!0}):e.DataTypeMarkdown?Object(qi.jsx)(pv,{children:Object(qi.jsx)(xs,{children:t=>Object(qi.jsx)(ov,{...t,source:e.DataTypeMarkdown||"",label:lv(e.DataTypeMarkdown||""),useAlwaysPortal:!0})})}):Object(qi.jsx)(xi,{children:e.DataType});function yv(e){let{params:t}=e;return Object(qi.jsx)(fv,{overflowX:!0,overflowY:!0,children:Object(qi.jsxs)(fo.Table,{children:[Object(qi.jsx)(fo.Thead,{children:Object(qi.jsxs)(fo.Tr,{children:[Object(qi.jsx)(fo.Th,{children:"Name"}),Object(qi.jsx)(fo.Th,{children:"Description"})]})}),Object(qi.jsx)(fo.Tbody,{children:t.map(((e,t)=>{const n=(e=>{const t={tagName:"Response Only",tagToolTip:"This property is only part of the response. It should not be sent as part of the request"},n={tagName:"Request Only",tagToolTip:"This property is only part of the request. It should not be sent as part of the response"};let r=null;return e.ReadOnly?r=t:e.WriteOnly&&(r=n),r})(e),r=e.ParamType?`This is a ${e.ParamType.toLowerCase()} parameter.`:"";return Object(qi.jsxs)(fo.Tr,{children:[Object(qi.jsxs)(fo.Td,{children:[Object(qi.jsx)(yi,{title:e.Name,children:e.Name}),Object(qi.jsx)(Tr,{children:e.Required&&Object(qi.jsx)(vi,{className:"required",children:"REQUIRED"})})]}),Object(qi.jsxs)(fo.Td,{children:[Object(qi.jsxs)(pi,{children:[bv(e),(e.ParamType||e.Constant)&&Object(qi.jsxs)(tn.Fragment,{children:[e.ParamType&&Object(qi.jsx)(xi,{title:r,marginLeft:"10px",children:e.ParamType}),e.Constant&&Object(qi.jsx)(xi,{marginLeft:"10px",children:"CONSTANT"})]})]}),n&&Object(qi.jsx)(hv,{children:Object(qi.jsx)(nv,{text:n.tagToolTip,parentRefranceId:"app-layout-docs-container",children:Object(qi.jsx)(mv,{children:n.tagName})})}),e.Description&&"-"!==e.Description&&Object(qi.jsx)(dv,{className:e.Description.includes("| Type | Value |")?"modal-markdown-table":"",children:Object(qi.jsx)(Ng,{source:e.Description?vv(e.Description).replace(/<br>/gi,"   \n"):e.Description})})]})]},`paramTable-${t}`)}))})]})})}const xv=Object(vr.c)(Kr)`
  padding: 20px 0px;
  cursor: pointer;
  margin: 0px;
  display: flex;
  span {
    position: relative;
    left: -13px;
  }
`,Ev=Object(vr.c)(Tr)`
  padding: 0px 10px;
`,_v=Object(vr.c)(Ur)`
  cursor: pointer;
  .open {
    transform: rotate(0deg);
  }
  .closed {
    transform: rotate(270deg);
  }
`,Cv=e=>{const{children:t,defaultOpen:n,heading:r}=e,[o,i]=Object(tn.useState)(n);return Object(qi.jsxs)("div",{children:[Object(qi.jsxs)(xv,{onClick:()=>{i((e=>!e))},children:[Object(qi.jsx)(_v,{children:Object(qi.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12.505",height:"8.057",viewBox:"0 0 12.505 8.057",className:o?"open":"closed",children:Object(qi.jsx)("path",{d:"M151.952,104.46l6.225-5.334a.916.916,0,0,0,0-1.391L151.952,92.4a.916.916,0,0,0-1.512.7v10.67A.915.915,0,0,0,151.952,104.46Z",transform:"translate(104.683 -150.44) rotate(90)"})})}),Object(qi.jsx)(Ng,{className:"model-table-link",source:r,inline:!0})]}),o&&Object(qi.jsx)(Ev,{children:t})]})};function wv(e,t){const n=[],r=e=>Tl(e,t);let o=0;const i=e=>n.push(Object(qi.jsx)(tn.Fragment,{children:r(e)},o++));if(e.Description&&i({Type:"paragraph",Text:e.Description}),e.StructureType&&(i({Type:"heading",Text:e.StructureType,Level:2}),n.push(Object(qi.jsx)(pi,{children:r({Type:"paragraph",Text:"`"+e.Name+"`"})},"class-name"))),e.BaseClass&&0===e.Index&&(i({Type:"heading",Text:"Inherits From",Level:2}),n.push(Object(qi.jsx)(pi,{className:"reference-modal-fields",children:r({Type:"paragraph",Text:e.BaseClass})},"base-class-link"))),e.Type&&"enumreference"===e.Type&&(e.ContainedTypesName?i({Type:"heading",Text:e.ContainedTypesName,Level:2}):i({Type:"heading",Text:"Fields",Level:2})),"enumreference"===e.Type){const t=["Name","Description"],n=[],r=e;for(const e in r.Elements)if(r.Elements.hasOwnProperty(e)){const t=r.Elements[e];n.push({Data:[t.Key,t.Value]})}i({Type:"enumtable",Header:{Data:t},Rows:n,Class:"enum-table-data"})}else{const t=e.Index&&e.Index>0?`Fields Inherited From [${e.Title}](${e.LinkTo})`:"Fields";n.push(Object(qi.jsx)(Cv,{heading:t,defaultOpen:0===e.Index,children:Object(qi.jsx)(yv,{params:e.Fields},"fields-table")}))}return e.ChildClassesLink&&(i({Type:"heading",Text:"Child Types",Level:2}),n.push(Object(qi.jsx)(pi,{children:r({Type:"paragraph",Text:e.ChildClassesLink})},"base-class-link"))),e.Example&&0===e.Index&&n.push(Object(qi.jsx)(yk,{children:Object(qi.jsx)(di,{children:Object(qi.jsx)(hi,{invert:!0,scrollWidth:"7px",children:Object(qi.jsx)(wg,{code:e.Example.Text,dark:!0,lang:e.Example.Language})})})},"model-example")),Object(qi.jsx)(tn.Fragment,{children:n})}var kv=n(83),Av=n(369),Ov=n.n(Av);const Sv=tn.createContext(void 0),Tv=Sv.Provider,jv=Sv.Consumer,Dv="8px",Mv="#F23A25";const Nv=Object(vr.c)(Tr)`
  width: 100%;
  padding: 0 15px;
  font-family: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.fontFamily}};
  @media screen and (max-width: 520px) {
    ${si};
    overflow: visible;
  }

  #root__title {
    display: none;
  }
  #root_showFullCode__title,
  #root_showFullCode__title + div {
    display: none;
  }
  svg {
    pointer-events: none;
  }
  .react-code-sample {
    position: relative;
    height: 100%;
  }

  button[type='submit'] {
    display: none;
  }

  .rjsf > p {
    margin: 0;
  }

  button {
    &:not(.react-datepicker__navigation) {
      background: none;
      border: none;

      &:hover,
      &:focus {
        cursor: pointer;
        outline: none;
        border: none;
      }
    }
  }
  .rjsf-panel {
    margin: 15px 10px;
    display: none;
    &.rjsf-errors {
      border-left: 4px solid ${Mv};
      .rjsf-panel-heading h3 {
        margin: 0 0 10px 22px;
        font-size: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text1.fontSize||"16px"}};

        font-weight: 500;
      }
      .rjsf-list-group {
        margin: 0;
        .rjsf-list-group-item {
          font-size: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text3.fontSize||"13px"}};
          line-height: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text3.lineHeight||"1.5"}};
        }
      }
    }
  }
  form {
    max-width: 100%;
    /* min-width: 600px; */
    @media screen and (max-width: 520px) {
      min-width: 520px;
    }
  }
  .rjsf-error-detail {
    font-size: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text3.fontSize||"13px"}};
    line-height: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text3.lineHeight||"1.5"}};
    list-style: none;
    margin: 5px 0px 0px 0px;
    padding: 0px 0px 5px 0px;
    li {
      font-size: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text3.fontSize||"13px"}};
      line-height: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text3.lineHeight||"1.5"}};
      color: ${Mv};
    }
  }
  .config-button {
    border: 1px solid ${e=>{let{theme:t}=e;return t.colors.C300}};
    color: ${e=>{let{theme:t}=e;return t.colors.C800}};
    font-size: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text3.fontSize||"13px"}};
    line-height: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text3.lineHeight||"1.5"}};
    margin: 15px 15px 15px 25px;
    line-height: 25px;
    border-radius: 8px;
    &:hover,
    &:focus {
      border: 1px solid ${e=>{let{theme:t}=e;return t.colors.C300}};
    }
  }
  .config-settings {
    form {
      border: none;
    }
    button[type='submit'] {
      display: none;
    }
    .rjsf-showFullCode {
      display: none;
    }
    fieldset {
      margin-top: 15px;
      border: 1px solid ${e=>{let{theme:t}=e;return t.colors.C300}};
      padding: 5.6px 12px 10px 12px;
      legend {
        color: ${e=>{let{theme:t}=e;return t.colors.C800}};
        font-size: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text3.fontSize||"13px"}};
        line-height: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text3.lineHeight||"1.5"}};
        font-weight: 500;
        text-transform: none;
        width: auto;
        padding: 0 2px;
        margin-bottom: 0;
      }
      label[for='root_showFullCode'] {
        display: none;
        .rjsf-field-radio-group {
          display: none;
        }
      }
      .rjsf-field {
        label {
          font-weight: 700;
          margin: 0;
        }
        .field-description {
          margin: 0px;
          color: ${Mv} !important;
          white-space: pre-wrap;
        }
      }
      textarea {
        ${Wi}
      }

      input,
      textarea,
      select {
        max-width: 250px;
        height: 32px;
        border: 1px solid ${e=>{let{theme:t}=e;return t.colors.C300}};
        margin-top: 14px;
        padding: 0px 12px;
        border-radius: 8px;
        color: ${e=>{let{theme:t}=e;return t.colors.C800}};
        font-size: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text3.fontSize||"12.64"}};
        &:hover,
        &:focus {
          outline: none;
          border: 1px solid ${e=>e.theme.primaryColor||"#0058a9"};
        }
      }
      select[multiple] {
        height: 80px;
      }
      textarea:nth-child(1),
      input:nth-child(1) {
        margin-left: -1px;
      }
    }
  }
  /* border: 1px solid ${e=>{let{theme:t}=e;return t.colors.C300}};
   border: none; */

  fieldset {
    border: none;
    padding: 5.6px 12px 10px 12px;
    legend {
      color: #898fa3;
      font-size: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text1.fontSize||"16px"}};
      font-family: ${e=>{let{theme:t}=e;return t.cssStyles&&t.cssStyles.code.fontFamily||"monospace"}};

      font-weight: 500;
      text-transform: uppercase;
      width: auto;
      padding: 0 2px;
      margin-bottom: 0;
    }
    fieldset {
      border: 1px solid ${e=>{let{theme:t}=e;return t.colors.C300}};
      padding: 5.6px 12px 10px 12px;
      legend {
        color: ${e=>{let{theme:t}=e;return t.colors.C800}};
        font-size: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text1.fontSize||"16px"}};
        font-family: ${e=>{let{theme:t}=e;return t.cssStyles&&t.cssStyles.code.fontFamily||"monospace"}};

        font-weight: 500;
        text-transform: none;
      }
    }
  }
  .rjsf-form-group {
    margin-bottom: 10px;
    label,
    p {
      color: ${e=>{let{theme:t}=e;return t.colors.C800}};
      font-size: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text3.fontSize||"13px"}};
      line-height: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text3.lineHeight||"1.5"}};
      margin: 0;
    }

    label {
      font-size: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text1.fontSize||"16px"}};
      font-family: ${e=>{let{theme:t}=e;return t.cssStyles&&t.cssStyles.code.fontFamily||"monospace"}};
      font-weight: 600;
      line-height: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text1.lineHeight||"1.5"}};
    }

    textarea {
      ${Wi};
    }
    input,
    textarea,
    select {
      height: 32px;
      border: 1px solid ${e=>{let{theme:t}=e;return t.colors.C300}};
      margin-top: 5px;
      padding: 0px 12px;
      color: ${e=>{let{theme:t}=e;return t.colors.C800}};
      font-size: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text3.fontSize||"11.85px"}};
      line-height: normal;
      &:hover,
      &:focus {
        outline: none;
        border: 1px solid ${e=>e.theme.primaryColor||"#0058a9"};
      }
    }

    select[multiple] {
      height: 80px;
    }

    input[type='checkbox'] {
      display: none;
    }

    input[type='checkbox'],
    input[type='radio'] {
      height: auto;
      position: relative;
      top: 3px;
      margin: 3px;
    }
    pre {
      color: ${e=>{let{theme:t}=e;return t.colors.C800}};
    }
    .rjsf-field {
      legend {
        color: ${e=>{let{theme:t}=e;return t.colors.C900}};
        font-size: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text1.fontSize||"16px"}};
        font-weight: 600;
        width: auto;
        padding: 0 2px;
        margin-bottom: 0;
        border-bottom: none;
      }
      label {
        font-weight: 600;
        font-size: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text1.fontSize||"16px"}};
        margin: 0;
      }
      .rjsf-field-description {
        margin: 0px;
        padding: 5px 0;
        overflow-wrap: break-word;

        * {
          font-size: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text2.fontSize||"14px"}};
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
        }

        p {
          word-break: break-word;
          margin-bottom: 12px;
          > strong {
            font-weight: 500;
          }
        }

        ${Rr} {
          word-break: break-word;
        }

        p:last-child,
        div:last-child {
          margin-bottom: 0px;
        }
      }
    }

    textarea {
      ${Wi};
    }
    input,
    textarea,
    select {
      max-width: 250px;
      height: 32px;
      border: 1px solid ${e=>{let{theme:t}=e;return t.colors.C300}};
      border-radius: 8px;
      /* margin-top: 11px; */
      padding: 0px 12px;
      color: ${e=>{let{theme:t}=e;return t.colors.C800}};
      &:hover,
      &:focus {
        outline: none;
        border: 1px solid ${e=>e.theme.primaryColor||"#0058a9"};
      }
    }

    select:disabled,
    textarea:disabled,
    input:disabled {
      background: ${e=>{let{theme:t}=e;return t.colors.C300}} !important;
      color: ${e=>{let{theme:t}=e;return t.colors.C600}};
      border: 1px solid ${e=>{let{theme:t}=e;return t.colors.C400}};
    }

    select[multiple] {
      height: 80px;
    }
    input[type='file'] {
      border: none;
      max-width: 300px;
    }
    textarea:nth-child(1),
    input:nth-child(1) {
      margin-left: -1px;
    }
    .rjsf-file-info {
      font-size: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text1.fontSize||"16px"}};
    }
  }
  .rjsf-array-item-list {
    .rjsf-array-item {
      float: none;
      clear: both;

      [class*='col-'] {
        float: left;
      }
      .rjsf-col-xs-9 {
        width: 80%;
      }
      .rjsf-field {
        label {
          font-weight: 600;
        }
        .rjsf-field-description {
          margin: 0px;
        }
      }
      textarea {
        ${Wi};
      }
      input,
      textarea,
      select {
        max-width: 250px;
        height: 32px;
        border: 1px solid ${e=>{let{theme:t}=e;return t.colors.C300}};
        /* margin-top: 11px; */
        padding: 0px 12px;
        color: ${e=>{let{theme:t}=e;return t.colors.C800}};
        &:hover,
        &:focus {
          outline: none;
          border: 1px solid ${e=>e.theme.primaryColor||"#0058a9"};
        }
      }
      select[multiple] {
        height: 80px;
      }
      textarea:nth-child(1),
      input:nth-child(1) {
        margin-left: -1px;
      }
      ${Fi}
      .rjsf-array-item-remove {
        margin: 10px 0 0 10px;
        i {
          color: ${e=>{let{theme:t}=e;return t.colors.C800}};
          font-size: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text3.fontSize||"13px"}};
          line-height: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text3.lineHeight||"1.5"}};
          -webkit-text-stroke: 1px #fff;
        }
      }
      .rjsf-array-item-toolbox {
        i {
          color: ${e=>{let{theme:t}=e;return t.colors.C800}};
          font-size: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text3.fontSize||"13px"}};
          line-height: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text3.lineHeight||"1.5"}};
          -webkit-text-stroke: 1px #fff;
        }
        .rjsf-array-item-move-up {
          margin: 0 0 0 3px;
        }
        .rjsf-array-item-move-down {
          margin: 0 0 0 3px;
        }
        .rjsf-array-item-remove {
          margin: 0 0 0 3px;
        }
      }
    }
  }
  .rjsf-array-item-add,
  .rjsf-map-item-add {
    float: none;
    clear: both;
    display: flex;

    button {
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: auto;
      border: 1px solid ${e=>{let{theme:t}=e;return t.primaryColor}};
      border-radius: 8px;
      padding: 0 24px;
      font-weight: 400;
      background-color: #fff;
      color: ${e=>{let{theme:t}=e;return t.primaryColor}};
      font-size: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text3.fontSize||"13px"}};
      line-height: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text3.lineHeight||"1.5"}};
      & .rjsf-icon > path {
        fill: ${e=>{let{theme:t}=e;return t.primaryColor}};
      }
      svg {
        margin-right: 4px;
      }
    }
  }
  .rjsf-map-item > .rjsf-array-item-list .rjsf-array-item [class*='col-'] {
    float: none;
  }
  .rjsf-map-item > .rjsf-col-xs-3,
  .rjsf-map-item > .rjsf-col-xs-8,
  .rjsf-map-item > .rjsf-col-xs-9,
  .rjsf-map-item > .rjsf-col-xs-1 {
    float: left;
  }
  .rjsf-map-item {
    clear: both;
  }

  .rjsf-map-item .rjsf-col-xs-12 {
    clear: both;
  }

  .rjsf-map-item > .rjsf-col-xs-3 {
    padding-top: 7px;
    margin-right: 4px;
  }
  .rjsf-field-array-of-object
    > .rjsf-map-item-list
    > .rjsf-map-item
    > .rjsf-col-xs-3 {
    max-width: 25%;
  }
  .rjsf-field-array-of-object
    > .rjsf-map-item-list
    > .rjsf-map-item
    > .rjsf-col-xs-3
    > input[type='text'] {
    width: 100%;
  }
  .rjsf-field-array-of-object
    > .rjsf-map-item-list
    > .rjsf-map-item
    > .rjsf-col-xs-8 {
    width: 64%;
  }
  .rjsf-field-array-of-object
    > .rjsf-map-item-list
    > .rjsf-map-item
    > .rjsf-col-xs-8
    > .rjsf-field-object {
    padding-top: 14px;
  }
  .rjsf-field-array-of-object
    > .rjsf-map-item-list
    > .rjsf-map-item
    > .rjsf-col-xs-1 {
    width: 5%;
  }
  .rjsf-map-item > .rjsf-map-item-toolbox {
    padding-left: 10px;
    line-height: 56px;
  }
  /* .rjsf-map-item-add {
     padding-top: 8px;
     margin-top: 13px;
   } */
  .rjsf-map-item > .rjsf-map-item-toolbox .rjsf-icon,
  .rjsf-map-item-add .rjsf-icon {
    color: ${e=>{let{theme:t}=e;return t.colors.C900}};
  }
  .rjsf-form-group p {
  }
  button.rjsf-btn.rjsf-toggle-button {
    padding-top: 0px;
    padding-bottom: 0px;
    @media screen and (max-width: 990px) {
      padding-right: 0px;
    }
  }
  .rjsf-btn-group {
    padding-top: 0;
  }
  .rjsf-map-item input[type='checkbox'] {
    margin-top: 10px;
  }
  .rjsf-editor-validation-errors {
    ul {
      font-size: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text3.fontSize||"13px"}};
      line-height: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text3.lineHeight||"1.5"}};
      margin: 0;
      background: rgba(242, 71, 34, 0.1);
      li {
        font-size: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text3.fontSize||"13px"}};
        line-height: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text3.lineHeight||"1.5"}};
        color: ${Mv};
      }
    }
  }
  .rjsf-field-object > fieldset > legend input[type='checkbox'] {
    height: 13px;
    margin: 0;
  }
  .react-datepicker__time-list {
    padding: 0;
  }

  .react-datepicker-popper {
    z-index: 10 !important;
  }

  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list {
    padding-right: 0;
  }
  .react-datepicker__close-icon {
    &::after {
      color: ${e=>{let{theme:t}=e;return t.colors.C800}};
      width: 13px;
      height: 13px;
      font-size: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text1.fontSize||"13.33px"}};
      line-height: 1.2;
      padding: 1px;
      font-weight: 500;
      background-color: transparent;
    }
    &:hover {
      &::after {
      }
    }
  }

  .react-datepicker__navigation {
    width: 10px;
    height: 10px;

    &.react-datepicker__navigation--next,
    &.react-datepicker__navigation--previous {
      &::before {
        border-style: solid;
        border-width: 2px 2px 0 0;
        border-color: #6a6a6a;
        content: '';
        display: inline-block;
        height: 7px;
        left: 2px;
        position: relative;
        top: 5px;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        vertical-align: top;
        width: 7px;
      }
    }

    &.react-datepicker__navigation--previous {
      &::before {
        -webkit-transform: rotate(-135deg);
        -ms-transform: rotate(-135deg);
        transform: rotate(-135deg);
      }
    }
  }

  .react-datepicker__navigation {
    width: 10px;
    height: 10px;

    &.react-datepicker__navigation--next,
    &.react-datepicker__navigation--previous {
      &::before {
        border-style: solid;
        border-width: 2px 2px 0 0;
        border-color: #6a6a6a;
        content: '';
        display: inline-block;
        height: 7px;
        left: 2px;
        position: relative;
        top: 5px;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        vertical-align: top;
        width: 7px;
      }
    }

    &.react-datepicker__navigation--previous {
      &::before {
        -webkit-transform: rotate(-135deg);
        -ms-transform: rotate(-135deg);
        transform: rotate(-135deg);
      }
    }
  }

  // NEW STYLING

  .rjsf-error-detail {
    li {
      color: ${Mv};
      //todo: Replace it with theme text variants
      font-size: 10.53px;
    }
  }

  .rjsf-icon {
    display: inline-block;
    width: 12px;
    height: 12px;

    & > path {
      fill: ${e=>{let{theme:t}=e;return t.colors.C800}};
    }
  }

  .rjsf-object-header {
    display: flex;
    position: relative;
    align-items: center;

    &.position-unset {
      position: initial;

      @media (max-width: 1024px) {
        .rjsf-toggle-button {
          top: 36px;
          left: 0px;
        }
      }
      @media only screen and (min-width: 1024px) {
        .rjsf-toggle-button {
          top: 25px;
          left: 0px;
        }
      }
    }

    .rjsf-btn-default {
      height: 14px;
    }
  }

  .rjsf-header-left,
  .rjsf-field-header {
    align-items: baseline;
    display: flex;
    flex: 1;
  }

  .rjsf-field-header {
    label {
      // font-style: italic;
      font-weight: normal;
    }
  }

  .rjsf-object-header legend,
  .rjsf-field-header label .label-text {
    margin-right: 8px;
  }

  .rjsf-hand {
    cursor: pointer;
  }

  .rjsf-element-required {
    color: ${Mv};
    //todo: Replace it with theme text variants
    font-size: 10px;
    line-height: 14px;
    font-weight: 400;
    display: flex;
    align-items: center;
    text-transform: uppercase;
  }

  fieldset {
    border: none !important;
    padding: 0px !important;
    margin: 0px !important;

    legend {
      padding: 0px !important;
      textarea,
      input {
        margin: 0px 4px 0px px !important;
        top: 0px !important;
        height: auto !important;
      }
    }
  }

  .rjsf-discriminator-field-child {
    border-radius: ${Dv};
    padding: 20px 25px !important;
    margin-top: 15px;
    transition: all 0.3s ease-in-out;
  }

  .rjsf-discriminator-field,
  .rjsf-element-properties,
  .rjsf-array-container,
  .rjsf-map-field-value-container,
  .rjsf-map-item-list-container {
    border-radius: ${Dv};
    padding: 20px 25px !important;
    position: relative;
    margin-top: 15px;
    transition: all 0.3s ease-in-out;
  }
  .rjsf-element-properties.rjsf-json-edit-view {
    padding: 10px 15px !important;
  }
  .rjsf-content {
    #root__object > .rjsf-element-properties {
      padding: 0px !important;
    }

    #root__object > .rjsf-element-properties > .rjsf-field {
      border-bottom: none;
    }

    > .rjsf-field {
      margin-bottom: 0px;
      padding-bottom: 0px;
    }

    .rjsf-depth_1 > .rjsf-element-properties > .rjsf-form-group:first-child {
      .rjsf-depth_2 {
        > .rjsf-object-header,
        > .rjsf-object-type,
        > .rjsf-array-container::before,
        > .rjsf-element-properties::before {
          display: none;
        }
      }
    }

    .rjsf-depth_1 {
      > .rjsf-object-header,
      > .rjsf-object-type,
      > .rjsf-array-container::before,
      > .rjsf-element-properties::before {
        display: none;
      }
    }

    .rjsf-depth_1,
    .rjsf-depth_2 {
      padding: 0px;
      margin: 0px;

      > .rjsf-element-properties {
        padding: 0px !important;
        margin: 0px !important;

        > .rjsf-field:last-child {
          margin-bottom: 0px;
        }
      }
    }
  }

  .rjsf-depth_1 {
    > .rjsf-object-header,
    > .rjsf-object-type,
    > .rjsf-array-container::before,
    > .rjsf-element-properties::before {
      display: none;
    }
  }

  .rjsf-discriminator-field::before,
  .rjsf-discriminator-field::before,
  .rjsf-element-properties::before,
  .rjsf-array-container::before,
  .rjsf-map-item-list-container::before,
  .rjsf-discriminator-field-child::before {
    content: ' ';
    position: absolute;
    top: 0px;
    left: 20px;
    margin-left: -7px;
    border-width: 7px;
    border-style: solid;
  }

  .rjsf-map-field-value-container::before {
    content: ' ';
    position: absolute;
    top: 0px;
    left: 20px;
    margin-top: -13px;
    border-width: 7px;
    border-style: solid;
    transform: rotate(180deg);
  }

  .rjsf-odd-bg,
  .rjsf-even-bg {
    &.rjsf-discriminator-field-child-empty {
      background: unset;
    }
  }

  .rjsf-odd-bg {
    background-color: ${e=>{let{theme:t}=e;return t.colors.C200}};

    &::before {
      border-color: #fff transparent transparent transparent;
    }

    &.rjsf-map-field-value-container {
      &::before {
        border-color: ${e=>{let{theme:t}=e;return t.colors.C200}} transparent
          transparent transparent;
      }
    }
  }

  .rjsf-even-bg {
    background-color: #fff;

    &::before {
      border-color: ${e=>{let{theme:t}=e;return t.colors.C200}} transparent transparent
        transparent;
    }

    &.rjsf-map-field-value-container {
      &::before {
        border-color: #fff transparent transparent transparent;
      }
    }
  }

  /* For  */
  .rjsf-depth_1 > .rjsf-element-properties > .rjsf-form-group:nth-child(2) {
    fieldset.rjsf-odd > .rjsf-map-item-list-container::before,
    fieldset.rjsf-odd
      > .rjsf-map-item-list-container
      > .rjsf-map-item-list
      > .rjsf-map-item
      > .rjsf-map-field-value-container::before {
      border-color: ${e=>{let{theme:t}=e;return t.colors.C200}} transparent transparent
        transparent;
    }
  }
  .rjsf-base-type,
  .rjsf-object-type,
  .rjsf-array-type,
  .rjsf-map-field-type {
    font-size: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text2.fontSize||"11.85px"}};
    font-family: ${e=>{let{theme:t}=e;return t.cssStyles&&t.cssStyles.code.fontFamily||"monospace"}};
    a {
      word-break: break-word;
      font-family: inherit;
      color: ${e=>{let{theme:t}=e;return t.linkColor}};
      transition: all 0.3s ease-in-out;
      font-size: inherit;
    }
    a:hover {
      text-decoration: underline;
    }
  }

  .rjsf-type-container {
    display: flex;
  }

  .rjsf-base-type {
    display: inline-block;
    color: ${e=>{let{theme:t}=e;return t.colors.C700}};
  }
  .rjsf-object-type {
    display: inline-block;
    color: ${e=>{let{theme:t}=e;return t.linkColor}};
  }
  .rjsf-array-type,
  .rjsf-map-field-type {
    display: inline-block;
    color: ${e=>{let{theme:t}=e;return t.colors.C700}};
    .rjsf-object-type {
      color: ${e=>{let{theme:t}=e;return t.linkColor}};
    }
  }
  .rjsf-param-type {
    font-size: ${e=>e.theme.cssStyles.body.text2.fontSize||"12.64px"};
    font-family: ${e=>{let{theme:t}=e;return t.cssStyles&&t.cssStyles.code.fontFamily||"monospace"}};
    color: ${e=>{let{theme:t}=e;return t.colors.C700}};
    display: inline-block;
    margin-left: 8px;
    padding-left: 9px;
    font-weight: 500;
    position: relative;

    &::before {
      position: absolute;
      width: 1px;
      height: 60%;
      background-color: rgb(125 125 125 / 0.5);
      content: '';
      display: block;
      left: 1px;
      top: 21%;
    }
  }
  .rjsf-view-json-button {
    background-color: transparent !important;
  }
  .rjsf-toggle-button {
    cursor: pointer;
    position: absolute;
    left: -22px;
    height: 14px;

    @media screen and (max-width: 990px) {
      left: -26px;
    }

    svg {
      width: 12px;
      height: 12px;
      stroke: ${e=>{let{theme:t}=e;return t.colors.C900}};
    }
  }
  fieldset .rjsf-field-description pre {
    display: grid !important;
    border-radius: ${Dv} !important;
    padding: 14px 20px 8px 20px !important;
    code {
      line-height: 1.2;
      padding-bottom: 10px;
      ${si};
    }
  }
  fieldset .react-codemirror2 {
    line-height: 22px;
    margin-top: 15px;

    ${e=>{let{theme:{cssStyles:t}}=e;return t&&Cr(t.code.blockCode)}};

    .CodeMirror-vscrollbar {
      &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      &::-webkit-scrollbar-track {
        background: transparent;
      }
      &::-webkit-scrollbar-thumb {
        background: ${e=>{let{theme:t}=e;return t.colors.C300}};
      }
      &:hover,
      &:focus {
        &::-webkit-scrollbar-thumb {
          background: ${e=>{let{theme:t}=e;return t.colors.C400}};
        }
      }
    }
  }

  .rjsf-field,
  .rjsf-map-item {
    border-bottom: 1px solid
      ${e=>{let{theme:t}=e;return Gi()(t.colors.C300).alpha(.6).toString()}};
    padding-bottom: 15px;
    margin-bottom: 15px;
  }

  .rjsf-array-item {
    border-bottom: 1px solid
      ${e=>{let{theme:t}=e;return Gi()(t.colors.C300).alpha(.6).toString()}};
    padding-bottom: 15px;
    margin-bottom: 15px;

    > div {
      > .rjsf-field-object,
      > .rjsf-field {
        border-bottom: none;
        padding-bottom: 0px;
        margin-bottom: 0px;
      }
    }
  }

  .rjsf-depth_2 {
    > .rjsf-element-properties,
    > .rjsf-array-container {
      > .rjsf-field {
      }
    }
  }
  form.rjsf > .rjsf-field {
    border-bottom: none;
  }
  .rjsf-element-properties {
    > .rjsf-field:last-child {
      border-bottom: none;
      padding: 0px;
      margin: 0;
    }
  }
  .rjsf-field-object > fieldset > div > div > legend,
  .rjsf-field-array-of-object > .rjsf-object-header legend {
    cursor: pointer;
  }
  .rjsf-array-item {
    position: relative;
    > div
      > .rjsf-field-object
      > fieldset
      > .rjsf-object-header
      > .rjsf-header-left
      > legend
      input {
      display: none;
      + span {
        margin: 0px;
        &::before,
        &::after {
          display: none;
        }
      }
    }
  }
  .rjsf-array-item-toolbox {
    position: absolute;
    z-index: 2;
    top: 2px;
    right: 30px;
    .rjsf-array-item-remove {
      svg {
        stroke: ${e=>{let{theme:t}=e;return t.colors.C900}};
      }
      &:hover {
        svg {
          stroke: ${Mv}!important;
        }
      }
    }
  }
  .rjsf-field {
    > input,
    > textarea,
    > select {
      transition: all 0.3s ease-in-out;
      border-radius: 8px;
      width: 100%;
    }
  }
  // button colors for normal & hover state

  fieldset > .rjsf-object-header {
    > .rjsf-btn.rjsf-json-button {
      svg {
        width: 14px;
        height: 14px;
        transition: all 0.3s ease-in-out;
      }
      svg path,
      svg rect,
      svg circle {
        fill: ${e=>{let{theme:t}=e;return t.colors.C900}};
      }
      &:disabled {
        svg path,
        svg rect,
        svg circle {
          fill: ${e=>{let{theme:t}=e;return t.colors.C500}};
        }
        svg {
          cursor: not-allowed;
        }
      }
    }
    > .rjsf-btn.rjsf-toggle-button {
      svg {
        transition: all 0.3s ease-in-out;
        stroke: ${e=>{let{theme:t}=e;return t.colors.C900}};
      }
      .chevron-icon-rotate-0 {
        ${$i(0)}
      }
      .chevron-icon-rotate-90 {
        ${$i(-90)}
      }
    }
  }
  /* fieldset:hover > .rjsf-object-header {
     > .rjsf-btn.rjsf-json-button {
       svg {
         fill: ${e=>{let{theme:t}=e;return t.colors.C900}};
       }
     }
     > .rjsf-btn.rjsf-toggle-button {
       svg {
         stroke: ${e=>{let{theme:t}=e;return t.colors.C900}};
       }
     }
   } */

  .rjsf-array-item .rjsf-array-item-toolbox {
    .rjsf-array-item-move-up,
    .rjsf-array-item-move-down,
    .rjsf-array-item-remove {
      svg {
        transition: all 0.3s ease-in-out;
        opacity: 0.6;
      }
      .arrow-icon-up {
        ${$i(0)}
      }
      .arrow-icon-down {
        ${$i(180)}
      }
    }
  }
  .rjsf-array-item:hover .rjsf-array-item-toolbox {
    .rjsf-array-item-move-up,
    .rjsf-array-item-move-down,
    .rjsf-array-item-remove {
      svg {
        stroke: ${e=>{let{theme:t}=e;return t.colors.C900}};
        opacity: 1;
      }
    }
  }
  .rjsf-expand-all {
    display: flex;
    flex: 1;
    button {
      margin-left: auto;
      color: ${e=>{let{theme:t}=e;return t.colors.C900}};
      font-size: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text3.fontSize||"11.85px"}};
      font-family: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text3.fontFamily||void 0}};
      font-weight: 500;
    }
  }

  .rjsf {
    input,
    textarea,
    select {
      font-family: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.fontFamily||"inherit"}} !important;
    }
    // CHECKBOX

    .rjsf-field-boolean {
      .rjsf-checkbox {
        margin-top: 11px;
      }
      .rjsf-checkbox,
      .rjsf-checkbox-title {
        display: flex;
        align-items: center;
        font-size: ${e=>{let{theme:{cssStyles:t}}=e;return t&&t.body.text2.fontSize||"13.33px"}};
        .rjsf-checkbox-text {
          padding-top: 1px;
        }
      }
    }

    .rjsf-checkbox,
    legend label {
      display: block;
      position: relative;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    .rjsf-checkbox,
    legend label {
      input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }
    }

    .rjsf-checkbox,
    legend label {
      span {
        position: absolute;
        top: 0;
        left: 0;
        height: 14px;
        width: 14px;
        margin-top: 2px;
        background-color: #fff;
        border: 1px solid gray;
        border-radius: 2px;
      }
    }
    .rjsf-checkbox,
    legend label {
      input.checked ~ span {
        background-color: #3784f7;
      }
    }
    .rjsf-checkbox,
    legend label {
      input.checked:hover ~ span {
        background-color: #005ce6;
      }
    }

    .rjsf-checkbox,
    legend label {
      input:disabled ~ span {
        border-color: ${e=>{let{theme:t}=e;return t.colors.C400}};
        background-color: ${e=>{let{theme:t}=e;return t.colors.C300}};
      }
    }
    .rjsf-checkbox,
    legend label {
      input.checked ~ span {
        width: 14px;
        height: 14px;
        border: none;
      }
    }

    .rjsf-checkbox,
    legend label {
      span:after {
        content: '';
        position: absolute;
        display: none;
        transition: all 0.3s ease-in-out;
      }
    }
    .rjsf-checkbox,
    legend label {
      input.checked ~ span:after {
        display: block;
      }
    }
    .rjsf-checkbox,
    legend label {
      span:after {
        left: 4.9px;
        top: 2px;
        width: 2px;
        height: 7px;
        border: solid #fff;
        border-width: 0 2px 2px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }
  }

  .rjsf-map-field-key {
    position: relative;

    .rjsf-form-control {
      margin: 0;
    }
    /* .rjsf-map-item-toolbox {
       padding-top: 11px;
     } */
  }

  .rjsf-form-control {
    width: 100%;
    &.rjsf-form-control-password {
      padding-right: 36px;
    }
  }

  .rjsf-form-control-parent {
    position: relative;
    max-width: 250px;
  }

  .rjsf-form-control-svg {
    display: inline-block;
    position: absolute;
    right: 12px;
    top: 11px;
    height: 18px;

    &:hover {
      cursor: pointer;
    }
  }

  .rjsf-map-item::last-child {
    .rjsf-map-field-value-container {
      border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.C300}};
      padding-bottom: 21px;
      margin-bottom: 21px;
    }
  }

  .rjsf-map-field-value-container {
    > div > div > .rjsf-field {
      border-bottom: 0px;
      margin-bottom: 0px;
      padding-bottom: 0px;
    }
  }

  // END
  // TOOLTIP
  .rjsf-tooltip {
    position: relative;
    display: none;
  }
  .rjsf-json-button .rjsf-tooltip::before {
    content: 'View JSON';
    width: 60px;
  }
  .rjsf-json-button.rjsf-form-view .rjsf-tooltip::before {
    content: 'View Form';
    width: 60px;
  }
  .rjsf-json-button:hover .rjsf-tooltip {
    display: block;
  }
  .rjsf-json-button-disabled .rjsf-tooltip::before {
    content: 'Please fix the validation errors before closing';
    width: 144px;
  }
  .rjsf-json-button:hover .rjsf-tooltip {
    display: block;
  }
  .rjsf-tooltip::before {
    font-size: 10.53px;
    min-width: 50px;
    max-width: 210px;
    position: absolute;
    display: block;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 8px;
    color: #fff;
    padding: 8px;
    text-align: center;
    bottom: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);
  }
  .rjsf-tooltip::after {
    content: '';
    position: absolute;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid rgba(0, 0, 0, 0.8);
    bottom: calc(100% + 5px);
    left: 50%;
    transform: translateX(-50%);
  }
  // TOOLTIP END

  ${Fi}
  // TOOLTIP END 
 
   // DATE PICKER
   .react-datepicker-popper {
    /* ${Ii} */
  }
  ${e=>{let{theme:t}=e;return function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;const n=[];for(let r=0;r<t;r++)r%2===0?n.push(`\n         .rjsf-depth_${r} {\n           .code-with-copy {\n             background: ${e};\n           }\n         }\n       `):n.push(`\n         .rjsf-depth_${r} {\n           .code-with-copy {\n             background: #fff;\n           }\n         }\n       `);return n.join(" ")}(t.colors.C200)}}

  ${zi}
   
   .rjsf-discriminator-field-child-empty > .rjsf-field,
   .rjsf-discriminator-field-child > .rjsf-field {
    border-bottom: none;
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
  }

  .rjsf-discriminator-field,
  .rjsf-discriminator-field-child {
    margin-top: 15px !important;
  }

  .rjsf-checkbox-text {
    margin-left: 20px;
    line-height: normal;
  }

  .rjsf-discriminator-field-child-object
    > .rjsf-field-array
    > fieldset
    > .rjsf-object-header
    > .rjsf-header-left
    > legend,
  .rjsf-discriminator-field-child-object
    > .rjsf-field-object
    > fieldset
    > .rjsf-object-header
    > .rjsf-header-left
    > legend {
    margin-top: 7px;
  }

  .rjsf-discriminator-field-child-object
    > .rjsf-field-array
    > fieldset
    > .rjsf-object-header
    > .rjsf-toggle-button,
  .rjsf-discriminator-field-child-object
    > .rjsf-field-object
    > fieldset
    > .rjsf-object-header
    > .rjsf-toggle-button {
    top: 15px;
  }

  .rjsf-field-object {
    &.rjsf-from-discriminator {
      padding-bottom: 0;
      margin-bottom: 0;
      border: none;
    }
  }
`,Pv=e=>Object(qi.jsx)(Ng,{source:e}),Rv=(e,t)=>Object(qi.jsx)(xs,{children:n=>Object(qi.jsx)(ov,{...n,source:e,label:t})}),Lv=(e,t)=>Object(qi.jsx)(nv,{text:t,parentRefranceId:"app-layout-docs-container",children:e}),Iv=e=>{const{message:t,icon:n="info"}=e;return Object(qi.jsx)(Fg,{icon:n,children:t})};function Fv(e){let{schema:t,data:n,onChange:r,disableFormJsonEdit:o=!1,expandAllLevel:i,className:a,levelReversal:s,isExpandable:l,definitions:c,isConsole:u}=e;const p=sr(),{payload:d}=Object(tn.useContext)(zw),f=Object(tn.useContext)(qh),{getSelectedWorkflow:h}=Object(tn.useContext)(Fw),{workflowName:m,workflowSteps:g}=h(f),{selectedStepValue:v}=Ww(g),b=Object(tn.useCallback)((e=>{r(e.formData)}),[r]),y=Object(tn.useContext)(Sv),x=Object(tn.useCallback)((e=>{p.push(e)}),[p]);return Object(tn.useEffect)((()=>{const e=d;u&&null!==e&&void 0!==e&&e.args&&r(e)}),[r,d,u]),Object(qi.jsx)(Nv,{children:Object(qi.jsx)(Ov.a,{disabled:!!m&&"complete"===(null===v||void 0===v?void 0:v.status),schema:t,liveValidate:!0,className:"rjsf "+(a||""),showErrorList:!0,uiSchema:{disableFieldJsonEdit:!0,args:{disableFieldJsonEdit:!0,"ui:title":"Parameters"},auth:{"ui:readonly":!0,"ui:disabled":!0},levelReversal:s,expandAllLevel:l?i:void 0},formData:n,onChange:b,dontAssignDefaults:!0,disableFormJsonEdit:o,dxInterface:{markdownRenderer:Pv,renderTypesPopover:Rv,renderToolTip:Lv,renderCallOutFallback:Iv,onRouteChange:x,definitions:c,structures:null===y||void 0===y?void 0:y.Structures,linkMapper:f}})})}Nv.displayName="StyledJSchemaForm";const Bv=Object(vr.c)(fo.Table)`
  & thead tr th,
  & tbody tr td {
    color: #ddd;
    font-size: 12px;
    padding: 10px;

    &:nth-child(2) {
      /* These are technically the same, but use both */
      overflow-wrap: break-word;
      word-wrap: break-word;

      -ms-word-break: break-all;
      /* This is the dangerous one in WebKit, as it breaks things wherever */
      word-break: break-all;
      /* Instead use this non-standard one: */
      word-break: break-word;

      /* Adds a hyphen where the word breaks, if supported (No Blink) */
      -ms-hyphens: auto;
      -moz-hyphens: auto;
      -webkit-hyphens: auto;
      hyphens: auto;
    }
  }

  & thead tr {
    font-weight: 500;
  }

  & > tbody > tr:nth-child(odd) > td,
  & > tbody > tr:nth-child(odd) > th {
    background-color: ${e=>e.theme.colors.C1000};
  }
`;function Hv(e){return Object(qi.jsxs)(Bv,{children:[Object(qi.jsx)(fo.Thead,{children:Object(qi.jsxs)(fo.Tr,{children:[Object(qi.jsx)(fo.Th,{children:"Header"}),Object(qi.jsx)(fo.Th,{children:"Value"})]})}),Object(qi.jsx)(fo.Tbody,{children:e.data.map((e=>Object(qi.jsxs)(fo.Tr,{children:[Object(qi.jsx)(fo.Td,{children:e.name}),Object(qi.jsx)(fo.Td,{children:e.value})]},e.name)))})]})}Bv.displayName="StripedTable";const zv=Object(vr.c)(Vr)`
  font-weight: bold;
  text-align: center;
  margin-top: 25px;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.3);
  letter-spacing: 0.01em;
`;class Uv extends tn.Component{render(){return Object(qi.jsx)(yr,{fallback:Object(qi.jsx)(zv,{children:"Could not show the response body."}),beforeCapture:e=>{e.setTag("apimaticAppReferance","Response Viewer Error Boundary")},children:this.props.children})}}const $v=Object(vr.c)(hi)`
  padding: 8px 14px;
  & pre,
  & > code {
    ${Nr};
    white-space: pre !important;
  }
`;function Wv(e){return Object(qi.jsx)(di,{type:"column",children:Object(qi.jsx)($v,{scrollWidth:"7px",invert:!0,children:Object(qi.jsx)(wg,{code:e.children,dark:!0,lang:e.lang})})})}let Vv;!function(e){e[e.JSON=0]="JSON",e[e.YAML=1]="YAML",e[e.HTML=2]="HTML",e[e.XML=3]="XML",e[e.Image=4]="Image",e[e.Markdown=5]="Markdown",e[e.Text=6]="Text",e[e.Binary=7]="Binary"}(Vv||(Vv={}));const Gv=function(e){if(!e)return Vv.Binary;const t=nm(e);if("image/jpeg"===e||"image/png"===e||"image/gif"===e||"image/svg+xml"===e)return Vv.Image;if("text/html"===t)return Vv.HTML;if("application/json"===t||t.endsWith("+json"))return Vv.JSON;if("application/xml"===t||"text/xml"===t||t.endsWith("+xml"))return Vv.XML;if("text/yaml"===t)return Vv.YAML;if("text/markdown"===t||"text/x-markdown"===t)return Vv.Markdown;if(t.startsWith("text/"))return Vv.Text;return Vv.Binary};const qv=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],Yv=(e,t)=>{let n=e.toString();return"string"===typeof t?n=e.toLocaleString(t):!0===t&&(n=e.toLocaleString()),n};function Kv(e,t){if(!Number.isFinite(e))throw new TypeError(`Expected a finite number, got ${typeof e}: ${e}`);if((t=Object.assign({},t)).signed&&0===e)return" 0 B";const n=e<0,r=n?"-":t.signed?"+":"";if(n&&(e=-e),e<1){return r+Yv(e,t.locale)+" B"}const o=Math.min(Math.floor(Math.log(e)*Math.LOG10E/3),qv.length-1);e=Number((e/Math.pow(1e3,o)).toPrecision(3));return r+Yv(e,t.locale)+" "+qv[o]}const Qv=Object(vr.c)(Tr)`
  text-align: center;
  margin-top: 20px;
  color: #dddddd;

  svg {
    display: inline-block;
    margin-bottom: 15px;
  }
`,Zv=Object(vr.c)(Wr)`
  background: transparent;
  border: 2px solid #cccccc;
  color: #dddddd;
  display: block;
  margin: 15px auto;

  &:hover {
    background: rgba(255, 255, 255, 0.07);
  }

  &:active {
    background: rgba(255, 255, 255, 0.2);
  }
`;function Xv(e){const t=Jh(e.response.Headers,"content-type"),n=Xh(Jh(e.response.Headers,"content-disposition")),r=Qh(atob(e.response.RawContent));return Object(qi.jsxs)(Qv,{children:[Object(qi.jsx)(Hs,{width:"84",fill:"#dddddd"}),n&&Object(qi.jsxs)("div",{children:[Object(qi.jsx)("strong",{children:"File"})," \u2192 \xa0",n]}),Object(qi.jsxs)("div",{children:[Object(qi.jsx)("strong",{children:"Type"})," \u2192 \xa0",t]}),Object(qi.jsxs)("div",{children:[Object(qi.jsx)("strong",{children:"Size"})," \u2192 \xa0",Kv(r.byteLength)]}),Object(qi.jsx)(Zv,{onClick:e.onDownload,children:"Download file"})]})}const Jv=Object(vr.c)(Br)`
  display: block;
  margin: 0 auto;
  margin-top: 60px;
  max-width: 95%;
`;function eb(e){const t=Jh(e.response.Headers,"content-type"),n=function(e,t){return`data:${t||""};base64,${e}`}(e.response.RawContent,t);return Object(qi.jsx)(Jv,{src:n,alt:"image body"})}var tb=n(375),nb=n.n(tb);const rb={backgroundColor:"transparent",fontFamily:"Consolas, 'Liberation Mono', Menlo, Courier, monospace",fontSize:"13px",lineHeight:"19px",padding:"10px 15px"},ob=e=>{const t=JSON.stringify(e.src);-1!==(null===t||void 0===t?void 0:t.indexOf("&times"))&&navigator.clipboard.writeText(t),"string"===typeof e.src&&navigator.clipboard.writeText(JSON.parse(t))};class ib extends tn.PureComponent{render(){const{children:e}=this.props;try{const t=JSON.parse(e);return"object"!==typeof t||null==t?Object(qi.jsx)(Wv,{lang:"json",children:e}):Object(qi.jsx)(nb.a,{src:t,style:rb,displayDataTypes:!1,collapsed:2,theme:"monokai",enableClipboard:ob})}catch(t){return Object(qi.jsx)(Wv,{lang:"json",children:e})}}}const ab=Object(vr.c)(Ir)`
  background: transparent;
  font-size: 13px;
  line-height: 19px;
  margin-left: 15px;
  margin-right: 15px;
`;function sb(e){return Object(qi.jsx)(ab,{children:Object(qi.jsx)(Rr,{children:e.children})})}var lb=n(140);const cb=Object(vr.c)(Ur)`
  position: absolute;
  right: 30px;
  top: 11px;
  border-radius: 4px;
  color: #cccccc;
  font-size: 13px;
  padding: 6px 10px;
`;function ub(e){let{response:t}=e;if(!t.RawContent)return{responseViewer:Object(qi.jsx)(zv,{children:"The response body was empty."})};const n=Jh(t.Headers,"content-type"),r=Gv(n),o=function(e,t){return()=>{const n=Jh(e.Headers,"content-disposition"),r=t&&tm(t),o="download"+(r?"."+r:""),i=Xh(n)||o,a=Qh(atob(e.RawContent));Object(lb.saveAs)(new Blob([a],{type:t}),i)}}(t,n);let i,a,s=Object(qi.jsx)(Xv,{response:t,onDownload:o});return r===Vv.Image?s=Object(qi.jsx)(eb,{response:t}):r!==Vv.Binary&&(i=kv.Base64.decode(t.RawContent),r===Vv.JSON?s=Object(qi.jsx)(ib,{children:i}):r===Vv.XML||r===Vv.HTML||r===Vv.YAML||r===Vv.Markdown?s=Object(qi.jsx)(Wv,{lang:Vv[r].toLowerCase(),children:i}):r===Vv.Text&&(s=Object(qi.jsx)(sb,{children:i}))),s=Object(qi.jsxs)(qi.Fragment,{children:[s,Object(qi.jsx)(cb,{title:"This response body is being shown as "+Vv[r]+".",children:Vv[r]})]}),i||r!==Vv.Binary||(a=function(e,t){const n=Jh(e.Headers,"content-disposition"),r=t&&tm(t),o="download"+(r?"."+r:""),i=Xh(n)||o,a=Qh(atob(e.RawContent)),s=new Blob([a],{type:t});return function(e){const t=new FileReader;return t.readAsDataURL(e),new Promise((e=>{t.onloadend=()=>{e(t.result)}}))}(s).then((e=>{return t=i,e.replace(";base64",`;name=${t};base64`);var t}))}(t,n)),{responseViewer:s,onDownload:o,textToCopy:i,file:a}}const pb=Object(vr.c)(Tr)`
  display: flex;
  justify-content: center;
  margin: 15px 0px 5px 0px;
`,db=Object(vr.c)(Tr)`
  display: flex;
  border: 1px solid ${e=>e.theme.colors.C200};
  border-radius: 8px;
  overflow: hidden;
`,fb=Object(vr.c)(Tr)`
  min-width: 90px;
  padding: 2px 0px;
  text-align: center;
  font-size: 12px;
  color: ${e=>e.theme.colors.C200};
  background: ${e=>e.isActive&&e.theme.colors.C200};
  color: ${e=>e.isActive&&e.theme.colors.C900};
  cursor: pointer;
`;function hb(e){const{defaultActiveIndex:t,children:n}=e,[r,o]=Object(tn.useState)(t||0);return Object(qi.jsxs)(nn.a.Fragment,{children:[Object(qi.jsx)(pb,{children:Object(qi.jsx)(db,{children:n&&n.map(((e,t)=>{const n=r===t;return Object(qi.jsx)(gb,{setSelectedTab:o,isActive:n,title:e.props.title,index:t},e.props.title+t)}))})}),n[r].props.children]})}function mb(e){let{children:t}=e;return Object(qi.jsx)("div",{children:t})}function gb(e){const{title:t,isActive:n,index:r,setSelectedTab:o}=e;return Object(qi.jsx)(fb,{isActive:n,onClick:()=>o(r),children:t},t+r)}const vb=Object(vr.c)(Tr)`
  flex: 1;
  overflow: hidden;
  pre {
    color: ${e=>e.theme.colors.C100};
  }
`;vb.displayName="HttpResponseViewerWrapper";const bb=Object(vr.c)(ci)`
  overflow: auto;
  padding: 0px 10px;
  height: calc(100% - 47px);
`;function yb(e){const{response:t,onRetry:n,onBack:r,isProxy:o}=e;if(!t.IsCalled)return e.children({responseViewer:Object(qi.jsx)(ul,{isProxy:o,response:t,onRetry:n,onBack:r})});let i;try{i=ub({response:t}),i={...i,responseViewer:Object(qi.jsx)(Uv,{children:i.responseViewer})}}catch(s){i={responseViewer:Object(qi.jsx)(zv,{children:"Could not show the response body."})}}const a=Object(qi.jsx)(vb,{children:Object(qi.jsxs)(hb,{defaultActiveIndex:0,children:[Object(qi.jsx)(mb,{title:"Body",children:Object(qi.jsx)(bb,{scrollWidth:"7px",invert:!0,children:i.responseViewer})}),Object(qi.jsx)(mb,{title:"Header",children:Object(qi.jsx)(bb,{scrollWidth:"7px",invert:!0,children:Object(qi.jsx)(Hv,{data:Object.keys(t.Headers).map((e=>({name:e,value:t.Headers[e]})))})})})]})});return e.children({...i,responseViewer:a})}bb.displayName="BodyResponseViewer";const xb=[{name:"HTTP",title:"HTTP",iconKey:"globe",noSDK:!0,templates:[{name:"HTTP",value:"HTTP_CURL_V1",svalue:"http_curl_v1"}]},{name:".Net",title:".NET",iconKey:"windows",templates:[{name:".Net Standard Library",value:"CS_NET_STANDARD_LIB",svalue:"cs_net_standard_lib"},{name:"Universal Windows Platform",value:"CS_UNIVERSAL_WINDOWS_PLATFORM_LIB",svalue:"cs_universal_windows_platform_lib"},{name:"Portable Class Library",value:"CS_PORTABLE_NET_LIB",svalue:"cs_portable_net_lib"}]},{name:"Android",title:"Android",iconKey:"android",templates:[{name:"Android",value:"JAVA_GRADLE_ANDROID_LIB",svalue:"java_gradle_android_lib"}]},{name:"iOS",title:"iOS",iconKey:"apple",templates:[{name:"Objective-C",value:"OBJC_COCOA_TOUCH_IOS_LIB",svalue:"objc_cocoa_touch_ios_lib"}]},{name:"Java",iconKey:"java",title:"Java",templates:[{name:"Java",value:"JAVA_ECLIPSE_JRE_LIB",svalue:"java_eclipse_jre_lib"}]},{name:"PHP",title:"PHP",iconKey:"php",templates:[{name:"PHP",value:"PHP_GENERIC_LIB_V2",svalue:"php_generic_lib_v2"}]},{name:"Python",title:"Python",iconKey:"python",templates:[{name:"Python",value:"PYTHON_GENERIC_LIB",svalue:"python_generic_lib"}]},{name:"Ruby",title:"Ruby",iconKey:"ruby",templates:[{name:"Ruby",value:"RUBY_GENERIC_LIB",svalue:"ruby_generic_lib"}]},{name:"Angular",title:"Angular",iconKey:"angular",templates:[{name:"AngularJS",value:"ANGULAR_JAVASCRIPT_LIB",svalue:"angular_javascript_lib"}]},{name:"TypeScript",iconKey:"typescript",title:"TypeScript",templates:[{name:"TypeScript",value:"TS_GENERIC_LIB",svalue:"ts_generic_lib"}]},{name:"Go",title:"Go",iconKey:"go",templates:[{name:"Go",value:"GO_GENERIC_LIB",svalue:"go_generic_lib"}]}];function Eb(e,t){const n=t,r=[];return e.forEach((e=>n.forEach(((t,o)=>{t.templates.some((t=>e===t.svalue))&&(r.push(t),n.splice(o,1))})))),r}function _b(e){return xb.map((t=>({...t,templates:t.templates.filter((t=>-1!==e.indexOf(t.svalue)))}))).filter((e=>0!==e.templates.length))}function Cb(e){return Yh(_b([e])[0].templates[0].name)}function wb(e,t){return t.reduce(((t,n)=>t.concat(e(n))),[])}function kb(e){return wb((e=>[e].concat(kb(e.SubItems.filter((e=>!e.Skip))))),e)}function Ab(e){return e.filter((e=>!e.IsExternal))}function Ob(e){return wb((e=>Ob(e.Nodes.filter((e=>"section"===e.Type&&!1===e.HideFromNavigation))).concat([e])),e)}function Sb(e){const t=[],n=[],r=e.Rows.map((e=>[])),o=e.Class;for(let i=0;i<e.Header.Data.length;i++)if(t[i]=e.Rows.every((e=>i>=e.Data.length||!e.Data[i])),!t[i]){n.push(e.Header.Data[i]);for(let t=e.Rows.length-1;t>=0;t--)r[t].push(e.Rows[t].Data[i])}return{Type:"table",Header:{Data:n},Rows:r.map((e=>({Data:e}))),Class:o}}function Tb(e){return e.Description&&"-"!==e.Description.trim()?e.Description:void 0}function jb(e){return e.DataType?e.DataType:void 0}function Db(e,t){const n=Mb(e,t);let r=[];return"Fields"in n?(n.BaseClassLink&&(r=Db(e,n.BaseClassLink)),[...r,...n.Fields]):r}function Mb(e,t){const n=e.filter((e=>e.SuggestedLink===t))[0];if("Fields"in n&&n.BaseClassLink){const t=Db(e,n.BaseClassLink);return{...n,Fields:[...t,...n.Fields]}}return n}function Nb(e,t){return e(t)}function Pb(e,t){const n=e.findIndex((e=>"string"===typeof e.GenericName&&e.GenericName.toLowerCase()===t.toLowerCase()));return-1===n?null:e[n]}function Rb(e){const t=e.indexOf("<");if(t&&-1!==t){const n=e.slice(t+1,-1);if(n.includes("<"))return n;if(n.includes(",")){const e=n.split(",").pop();return e||""}return n}return e}function Lb(e,t,n){let r,o;if(t){o=Mb(e.structure,t).Title}return n&&(r=Rb(n),o=o||Rb(r)),r===n&&(r=void 0),o===n&&(o=void 0),{type1:r,type2:o}}function Ib(e,t){return{description:Tb(e),dataTypeDisplayText:jb(e),dataTypeLink:e.LinkTo?Nb(t,e.LinkTo):void 0,dataTypeMarkdown:e.DataTypeMarkdown,paramType:e.ParamType,title:e.Name,typeCombinatorTypes:e.TypeCombinatorTypes,discriminator:e.Discriminator,discriminatorValue:e.DiscriminatorValue,readOnly:e.ReadOnly,writeOnly:e.WriteOnly}}function Fb(e,t,n,r,o){if("object"===typeof t&&t.properties){const r=o?{Fields:o}:Mb(e.structure,n);if(r&&"Fields"in r)for(const n in t.properties)if(t.properties[n]){const o=Pb(r.Fields,n);if(o){const r=Ib(o,e.linkMapper);t.properties[n]={...t.properties[n],...r};const i=o.LinkTo?o.LinkTo:"";Fb(e,t.properties[n],i,t.properties[n])}}}else if("object"===typeof t&&t.items){const r=Lb(e,n,t.dataTypeDisplayText);t.items.additionalProperties?t.items.dataTypeDisplayText=r.type1:t.items.dataTypeDisplayText=r.type2,t.items.dataTypeLink=t.dataTypeLink,(t.items.oneOf||t.items.anyOf||t.typeCombinatorTypes)&&(t.items.typeCombinatorTypes=t.typeCombinatorTypes),Fb(e,t.items,n,t)}else if("object"===typeof t&&t.additionalProperties){if(r){const o=Lb(e,n,r.dataTypeDisplayText);let i;t.additionalProperties.dataTypeLink=r.dataTypeLink,t.additionalProperties.items?(t.additionalProperties.dataTypeDisplayText=o.type1,t.additionalProperties.items.dataTypeDisplayText=o.type2,t.additionalProperties.items.dataTypeLink=r.dataTypeLink,i=t.additionalProperties.items,(i.oneOf||i.anyOf||t.typeCombinatorTypes)&&(i.typeCombinatorTypes=t.typeCombinatorTypes)):t.additionalProperties.properties&&(t.additionalProperties.dataTypeDisplayText=o.type2,i=t.additionalProperties),i&&Fb(e,i,n,r)}}else if("object"===typeof t&&(t.hasOwnProperty("oneOf")||t.hasOwnProperty("anyOf")||t.hasOwnProperty("allOf"))){const r=t.oneOf||t.anyOf||t.allOf;if(n){const i=o?{Fields:o}:Mb(e.structure,n);r.forEach(((r,o)=>{const a=i.ContainerTypes?i.ContainerTypes[o].LinkTo:n;Fb(e,r,a,t)}))}else r.forEach(((n,r)=>{const o=t.typeCombinatorTypes&&t.typeCombinatorTypes[r]||{LinkTo:void 0,DataType:void 0},i=o.LinkTo||"";"OneOf"!==o.DataType&&"AnyOf"!==o.DataType||(n.typeCombinatorTypes=o.SubTypes),Fb(e,n,i,t)}))}}function Bb(e,t,n){try{const r=JSON.parse(JSON.stringify(t)),o=r.properties.args;return n&&o&&Object.keys(o).forEach((t=>{o&&Fb(e,r.properties.args,"",r.properties.args,n)})),r}catch{return console.log("Team APIMATIC: Unable to merge data-types"),t}}function Hb(e){if(e.properties&&e.properties.args){const t=e.properties.args;if(t.properties)return-1!==Object.keys(t.properties).findIndex((e=>"object"===t.properties[e].type||"array"===t.properties[e].type))}return!1}function zb(e){let t=[];for(let n=0;n<e.Nodes.length;n++){const r=e.Nodes[n];"section"===r.Type&&(t=[...t,...zb(r)])}return[...e.Nodes.filter((e=>"structurereference"===e.Type||"enumreference"===e.Type||"containerreference"===e.Type)).map((t=>({...t,SuggestedLink:e.SuggestedLink}))),...t]}var Ub=n(376),$b=n.n(Ub);function Wb(e,t,n){const r={},{ModelSchemas:o={}}=e,i=e=>e&&e in r?r[e]:e;i.reverse=e=>e?Object.keys(r).find((t=>r[t]===e)):e,i.isDxDomLink=function(e){return t=>{if(null===t||void 0===t)return!1;if(t.startsWith("$"))return!0;if(e.KnownLinkPrefixes)for(const n of e.KnownLinkPrefixes)if(t.startsWith(n+":"))return!0;return!1}}(e);const a=function(e){try{let t=[];for(let n=0;n<e.Sections.length;n++)t=[...t,...zb(e.Sections[n])];return t}catch(t){return console.log("Team APIMATIC: Unable to extract model strcutures for merging data-types"),[]}}(e),s=ny(o);return[{...e,ModelSchemas:s,DataModelSchema:ny(e.DataModelSchema),NavItems:Vb(e.NavItems,r,t),Sections:Zb(e.Sections,a,i,s),ResponseHeaders:n,Structures:a},i]}function Vb(e,t,n){const r="/"+Yh(_b([n.toLowerCase()])[0].templates[0].name);return Kb(Gb(Yb(e)),t,r)}function Gb(e){const t={"$h/__api_reference":"API Endpoints","$h/__model_reference":"Models"};return e.map((e=>{const n=e.Link in t?t[e.Link]:e.Text;return{...e,Text:n,SubItems:Gb(e.SubItems)}}))}function qb(e){return-1!==e.indexOf("List%20of%20APIs")||-1!==e.indexOf("__list_of_apis")}function Yb(e){return e.map((e=>{return{...e,SubItems:e.SubItems.length?Yb((t=e.SubItems,t.filter((e=>!qb(e.Link))))):e.SubItems};var t}))}function Kb(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return e.map((e=>{if(e.IsExternal)return e;let o=n?n+"/"+Yh(e.Text):Yh(e.Text);return r.hasOwnProperty(o)?(r[o]++,o=o+"-"+r[o]):r[o]=0,t[e.Link]=o,{...e,Link:o,SubItems:Kb(e.SubItems,t,o,r)}}))}function Qb(e){return e.some((e=>"__getting_started"===e.PlaceholderId))}function Zb(e,t,n,r){return function(e){return e.map((e=>{if(null===e.PlaceholderId&&e.SuggestedLink&&-1!==e.SuggestedLink.indexOf("__model_reference")){const t=e.Nodes.slice(1);return{...e,Nodes:t}}return e}))}(Ob(e.map((o=>Xb({...o,hasStepByStepPage:Qb(e)},t,n,r))))).filter((e=>{const t=e.SuggestedLink&&qb(e.SuggestedLink);return!e.HideFromNavigation&&!t&&(e.Nodes.some((e=>"section"!==e.Type))||e.Nodes.every((e=>"section"===e.Type&&!0===e.HideFromNavigation)))}))}function Xb(e,t,n,r){return{...e,Nodes:Jb(e.Nodes,t,n,r,e.hasStepByStepPage)}}function Jb(e,t,n,r,o){return e.map((e=>{return"endpointreference"===e.Type?{...e,hasStepByStepPage:o,UsageExample:{...e.UsageExample,CallModel:(i=e.UsageExample.CallModel,ey(i)),CallModelSchema:Bb({structure:t,linkMapper:n,modelSchemas:r},ny(e.UsageExample.CallModelSchema),e.Parameters),isExpandable:Hb(e.UsageExample.CallModelSchema)}}:"section"===e.Type?Xb({...e,hasStepByStepPage:o},t,n,r):e;var i}))}function ey(e){return Object.keys(e).filter((t=>null!==e[t])).reduce(((t,n)=>(t[n]="object"===typeof e[n]?ey(e[n]):e[n],t)),e instanceof Array?[]:{})}function ty(e){if("int64"!==e.format&&"int32"!==e.format&&"integer"!==e.type&&"uuid"!==e.format&&"date-time-rfc1123"!==e.format&&"unix-timestamp"!==e.format||!e.format?"password"===e.format&&(e.isSecret=!0,delete e.format):delete e.format,e.hasOwnProperty("exclusiveMaximum")||e.hasOwnProperty("exclusiveMinimum"))return function(e){const t=e;"exclusiveMaximum"in t&&"boolean"===typeof t.exclusiveMaximum&&(t.exclusiveMaximum?(t.exclusiveMaximum=t.maximum,delete t.maximum):delete t.exclusiveMaximum),"exclusiveMinimum"in t&&"boolean"===typeof t.exclusiveMinimum&&(t.exclusiveMinimum?(t.exclusiveMinimum=t.minimum,delete t.minimum):delete t.exclusiveMinimum)}(e)}function ny(e){const t=JSON.parse(JSON.stringify(e));return $b()(t,{allKeys:!0,cb:ty}),t}const ry=200,oy=204,iy=300,ay="x-apimatic-proxy-header-",sy="X-Apimatic-Proxy-ResponseType",ly=["content-type","content-length"];function cy(e,t,n,r){try{const o=function(e){return{url:e.url,method:e.method,headers:dy(e.headers,e),mode:"cors",body:fy(e.body)}}(JSON.parse(e));return t?async function(e,t,n){const r=await async function(e,t,n){return gy({url:e,method:"POST",headers:hy(t,n),mode:"cors",body:t.body})}(t,e,n),o=await fetch(r);return async function(e){if(e.headers.has(sy)&&"Server"===e.headers.get(sy))return uy(function(e){const{status:t,statusText:n,body:r}=e;return new Response(t!==oy?r:null,{status:t,statusText:n,headers:my(e.headers)})}(e));const t=await e.json();return{IsCalled:!1,ReasonPhrase:t.detail,StatusCode:t.status}}(o)}(o,n,r):async function(e){const t=gy(e),n=await fetch(t);return uy(n)}(o)}catch(o){return ke("apimaticAppReferance","Template Parsing Error"),we(o),Promise.reject({IsCalled:!1,Error:"Could not create a request."})}}function uy(e){return e.blob().then(Zh).then((t=>({IsCalled:!0,StatusCode:e.status,ReasonPhrase:e.statusText,RawContent:t,Headers:py(e.headers)})))}function py(e){const t={};return e.forEach((function(n,r){const o=e.get(r);null!==o&&(t[r]=o)})),t}function dy(e,t){const n=new Headers(e);return n.has("content-type")?("form"===t.body.type&&n.set("content-type","application/x-www-form-urlencoded"),"multipart"===t.body.type&&n.delete("content-type"),n):("json"===t.body.type?n.set("content-type","application/json"):"file"===t.body.type&&n.set("content-type","application/octet-stream"),n)}function fy(e){switch(e.type){case"none":return null;case"json":return function(e){return JSON.stringify(e.data)}(e);case"multipart":return function(e){const t=new FormData;for(let n=0;n<e.data.length;n++){const r=e.data[n],o="object"===typeof r[1]?JSON.stringify(r[1]):r[1];t.append(r[0],o)}for(let n=0;n<e.files.length;n++){const r=e.files[n];t.append(r[0],Kh(r[1]))}return t}(e);case"form":return function(e){const t=new URLSearchParams;for(let n=0;n<e.data.length;n++){const r=e.data[n];t.append(r[0],r[1])}return t}(e);case"text":return function(e){return e.data}(e);case"file":return function(e){return Kh(e.data)}(e);default:return function(e){throw new Error("Unexpected object: "+e)}(e)}}function hy(e,t){const n=new Headers(e.headers),r=new Headers;n.forEach(((e,t)=>{r.append(ay+t,e)})),r.set("X-APIMatic-Proxy-URL",e.url),r.set("X-APIMatic-Proxy-Method",e.method),r.set("X-APIMatic-Proxy-SSL",t?"disable":"enable");for(const o of ly)n.has(o)&&(r.delete(ay+o),r.set(o,n.get(o)));return r}function my(e){const t=new Headers;e.forEach(((e,n)=>{0===n.toLowerCase().indexOf(ay)&&t.append(n.substring(ay.length),e)}));for(const n of ly)e.has(n)&&t.set(n,e.get(n));return t}function gy(e){const{url:t,...n}=e;return new Request(t,n)}function vy(e,t,n,r,o){return n=n||Number.MAX_VALUE,r=Math.max(r||0,0),fetch(e,o).then((i=>-1!==t.indexOf(i.status)&&r<n?vy(e,t,n,r+1,o):i))}var by=n(43);async function yy(e,t,n,r,o,i,a,s,l){if(!i.useProxyForConsoleCalls)return xy(r,o,!1,i.codegenApiRoutes.apiProxy2,l);try{return await xy(r,o,!0,i.codegenApiRoutes.apiProxy2,l)}catch(c){if(we(c),c.message||c.Error)return function(e,t,n,r){_l(e,"Legacy Proxy Failover",{Template:t,EndpointName:n,EndpointGroupName:r})}(i,s,e,t),function(e,t,n,r,o,i){return fetch(o.codegenApiRoutes.apiProxy,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:o.apiKey,authTypeV2ClientCreds:!1,checksum:i,endpointName:e,endpointGroupName:t,index:n,Data:r,descriptionUrl:"https://www.apimatic.io",encodeBody:!0})}).then((function(e){const t=e.headers.get("content-type");return e.status>=200&&e.status<300?Promise.resolve(e):t&&-1!==t.indexOf("application/json")?e.json().then((t=>Promise.reject({...t,StatusCode:e.status,IsCalled:!1}))):e.text().then((()=>Promise.reject({StatusCode:e.status,IsCalled:!1})))})).then((function(e){return e.json()})).catch((e=>{e.StatusCode||(ke("apimaticAppReferance","Console Call via Proxy"),we(e))}))}(e,t,n,r,i,a);throw c}}function xy(e,t,n,r,o){try{const i=o.parse(t);return o.render(i,e).then((t=>cy(t,n,r,e.skipSslCertVerification)))}catch(i){return ke("apimaticAppReferance","Console Call via Browser"),we(i),Promise.reject({...i})}}const Ey=Object(by.memoize)(((e,t)=>vy(t.codegenApiRoutes.docsgen.replace("{apikey}",t.apiKey).replace("{template}",e),[500],3,1,{headers:{Accept:"application/vnd.apimatic.dxDom.v3+json"}}).then((n=>(n.status>=200&&n.status<300?function(e,t,n,r){_l(e,"Docs Loading Success",{Template:t,StatusCode:n,StatusText:r})}(t,e,n.status,n.statusText):function(e,t,n,r,o){_l(e,"Docs Loading Failure",{Template:t,StatusCode:n,StatusText:r,ApiRoute:o})}(t,e,n.status,n.statusText,n.url),n.json().then((e=>{const t=n.headers.get("x-api-description-digest");return{responseHeaders:{apiDigest:t||"wowowowow1"},doc:e}})).then((t=>Wb(t.doc,e,t.responseHeaders))).catch((t=>(Ey.cache.delete(e),Promise.reject({...t,statusCode:n.status})))))))));async function _y(e,t){const n=t.codegenApiRoutes.codegen.replace("{template}",e).replace("{apikey}",t.apiKey),r=await fetch(n,{headers:{sdk_generation:"SDKGenerated_WIDGET"}});if(200!==r.status)return function(e,t,n,r,o){_l(e,"Docs SDK Download Failure",{Template:t,StatusCode:n,StatusText:r,ApiRoute:o})}(t,e,r.status,r.statusText,n),Promise.reject();!function(e,t,n,r,o){_l(e,"Docs SDK Download Success",{Template:t,StatusCode:n,StatusText:r,ApiRoute:o})}(t,e,r.status,r.statusText,n);const o=function(e,t,n){return Xh(e)||function(e){return e.endsWith(".zip")||e.endsWith(".ZIP")?function(e){return e.substring(e.lastIndexOf("/")+1)}(e):void 0}(t)||n}(r.headers.get("content-disposition"),n,e);return Object(lb.saveAs)(await r.blob(),o),r}function Cy(e,t,n){return n.codegenApiRoutes.transform.replace("{format}",e).replace("{apikey}",n.apiKey).replace("{ext}",t)}const wy=Object(tn.createContext)(void 0),ky=e=>{const{doc:t,liquidInstance:n}=e,[r,o]=Object(tn.useState)(),i=Object(tn.useCallback)((e=>{o((t=>t?{...t,dataModel:e}:t))}),[]);return Object(tn.useEffect)((()=>{const e=cv(Object(by.cloneDeep)(t.DataModel)),r=Object(by.cloneDeep)(t.DataModelSchema),a=Object(by.cloneDeep)(t.ModelSchemas);o((t=>({dataModel:null!==t&&void 0!==t&&t.dataModel?{...t.dataModel,...e}:e,dataModelSchema:r,updateDataModel:i,definitions:a,liquidInstance:n})))}),[t,n,i]),Object(qi.jsx)(wy.Provider,{value:r,children:e.children})},Ay=wy.Consumer;function Oy(e){let t=!1;return{promise:new Promise(((n,r)=>{e.then((e=>t?r({isCancelled:!0}):n(e)),(e=>r(t?{isCancelled:!0}:e)))})),cancel(){t=!0}}}const Sy=tn.createContext(void 0);class Ty extends tn.Component{constructor(e){super(e),this.state={responseHeaders:e.responseHeaders}}render(){return Object(qi.jsx)(Sy.Provider,{value:this.state,children:this.props.children})}}const jy=Sy.Consumer;class Dy extends tn.Component{constructor(e){super(e),this.el=void 0,this.titleRoot=void 0,this.el=document.createElement("div"),this.setTitleRoot()}setTitleRoot(){this.titleRoot=document.getElementById("content-overlay")}componentDidMount(){this.setTitleRoot(),this.titleRoot&&this.titleRoot.appendChild(this.el)}render(){const{children:e}=this.props;return a.createPortal(e,this.el)}}const My=Object(vr.c)(Tr)`
  font-size: 10px;
  color: #f14f12;
`;class Ny extends tn.Component{constructor(e){super(e),this.timer=void 0,this.state=void 0,this.startTimer=()=>{0===this.timer&&this.state.seconds>0&&(this.timer=setInterval(this.countDown,1e3))},this.countDown=()=>{const e=this.state.seconds-1;this.setState({time:this.secondsToTime(e),seconds:e}),e<1&&(this.props.onStop&&this.props.onStop(),clearInterval(this.timer))},this.state={time:{},seconds:this.props.duration},this.timer=0,this.startTimer()}secondsToTime(e){const t=e%3600,n=t%60;return{h:Math.floor(e/3600),m:Math.floor(t/60),s:Math.ceil(n)}}componentDidMount(){const e=this.secondsToTime(this.state.seconds);this.setState({time:e})}componentWillUnmount(){clearInterval(this.timer)}render(){return Object(qi.jsxs)(My,{children:[this.state.time.m," : ",this.state.time.s]})}}const Py=Object(vr.c)(Tr)`
  width: 100%;
  background: #fff6d9;
  border-left: 4px solid #ffd550;
  border-radius: 6px;
  padding: 10px;
  margin-bottom: 21px;
`,Ry=Object(vr.c)(Tr)`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${Vr} {
    color: #455666;
    font-size: 10px;
    margin: 0 5px;
  }
`,Ly=Object(vr.c)(Tr)`
  margin-bottom: 5px;

  label,
  p {
    font-size: 13.33px;
  }

  label {
    color: #8e561d;
    font-weight: 600;
  }

  p {
    width: calc(100% - 21px);
    color: #455666;
    margin-top: 0;
    margin-bottom: 0;
    ${Bi};
  }

  ${Ti} {
    margin-left: 6px;
  }

  .copy-to-clip-board {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,Iy=Object(vr.c)(Xr)`
  margin: 10px 0;
`;function Fy(e){const{label:t,value:n="",copyEnabled:r}=e;return Object(qi.jsxs)(Ly,{children:[Object(qi.jsx)("label",{children:t}),Object(qi.jsxs)(ii,{children:[Object(qi.jsx)("p",{children:n}),r&&Object(qi.jsx)(dm,{iconButtonType:"light",text:n,tooltip:{adjustTop:30,adjustLeft:19},children:Object(qi.jsx)(Ti,{width:"15px",children:Object(qi.jsx)(Ls,{width:"10",height:"10",stroke:"#3e445d",fill:"none"})})})]})]})}function By(e){let t=0;const n=localStorage.getItem("token_stamp");if(n&&e){const r=Date.now()/1e3-JSON.parse(n);r>0&&(t=e-r)}return t}function Hy(e){const{onTokenExpiry:t,authToken:n}=e;return Object(qi.jsxs)(Py,{children:[Object(qi.jsx)(Iy,{children:"Authorization Token"}),n.access_token&&Object(qi.jsx)(Fy,{label:"Access Token",value:n.access_token,copyEnabled:!0}),n.refresh_token&&Object(qi.jsx)(Fy,{label:"Refresh Token",value:n.refresh_token,copyEnabled:!0}),n.token_type&&Object(qi.jsx)(Fy,{label:"Token Type",value:n.token_type}),n.expires_in&&Object(qi.jsxs)(Ry,{children:[Object(qi.jsx)(Rs,{}),Object(qi.jsx)(Vr,{children:"Token will expire in"}),Object(qi.jsx)(Ny,{onStop:t,duration:By(n.expires_in)})]})]})}const zy=Object(vr.c)(Tr)`
  width: 100%;
  min-height: 30px;
  border-radius: 0px 0px 7px 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  color: ${e=>e.theme.colors.C000};

  ${Ur} {
    margin-left: 5px;
    color: ${e=>e.theme.colors.C000};
    font-size: 10px;
  }

  &.success {
    background-color: #28c397;
  }

  &.error {
    background-color: #ff4451;
  }
`;class Uy extends tn.Component{constructor(){super(...arguments),this.notificationInterval=void 0,this.IconWrapper=()=>{switch(this.props.type){case"success":return Object(qi.jsx)(Ns,{fill:"#fff"});case"error":return Object(qi.jsx)(Ys,{fill:"#fff"});default:return Object(qi.jsx)(qi.Fragment,{})}}}componentDidUpdate(e){const{onDismiss:t,dismissible:n}=this.props;this.props!==e&&n&&(this.notificationInterval=setInterval((()=>{t&&t(),clearInterval(this.notificationInterval)}),1e4))}componentWillUnmount(){clearInterval(this.notificationInterval)}render(){const{message:e,type:t}=this.props;return Object(qi.jsx)(qi.Fragment,{children:this.props.show&&Object(qi.jsxs)(zy,{className:t,children:[this.IconWrapper(),Object(qi.jsx)(Ur,{children:e})]})})}}var $y;!function(e){e[e.dummy=0]="dummy",e[e.info=1]="info",e[e.success=2]="success",e[e.redirection=3]="redirection",e[e.error=4]="error"}($y||($y={}));const Wy=[$y.dummy,$y.info,$y.success,$y.redirection,$y.error,$y.error],Vy=Object(vr.c)(Tr)`
  font-size: 12px;
  margin: 8px 10px 0 0;
  position: absolute;
  right: 0;
  color: #fff;
  line-height: 1.6em;
  color: ${e=>e.theme.colors.C000};
  z-index: 1;
  .reason {
    font-size: 12px;
    color: ${e=>e.theme.colors.C000};
    margin-left: 5px;
  }

  @media screen and (max-width: 500px) {
    .hide-sm {
      display: none;
    }
  }
`;Vy.displayName="Status";const Gy={[$y.success]:"#49d560",[$y.error]:"#f01833",[$y.info]:"#00acee",[$y.redirection]:"#00acee"},qy=Object(vr.c)(Ur)`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-left: 20px;
  display: block;
  float: left;
  margin: 7px 7px 0 0;
  background: ${e=>{let{status:t}=e;return Gy[t]}};
`;function Yy(e){const t=Wy[Math.floor(e.code/100)];return Object(qi.jsxs)(Vy,{children:[Object(qi.jsx)(qy,{status:t}),e.code,Object(qi.jsx)(Ur,{className:"reason hide-sm",children:e.reason})]})}qy.displayName="StatusCircle";const Ky=Object(vr.c)(Tr)`
  position: relative;

  @media screen and (max-width: 500px) {
    padding: 0;
  }
`;Ky.displayName="TabsWrapper";const Qy=Object(vr.c)(Tr)`
  border-top-right-radius: ${e=>e.isScrollable?"0":"4px"} !important;

  @media screen and (max-width: 990px) {
    margin-bottom: 0;
  }

  @media screen and (max-width: 500px) {
    padding: 0;
  }
`;Qy.displayName="TabPanelWrapper";const Zy=Object(vr.c)(Tr)`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;Zy.displayName="TabListWrapper";const Xy=Object(vr.c)(Tr)`
  display: flex;

  &:after {
    display: ${e=>e.isScrollable?"block":"none"};
    top: 0;
    bottom: 0;
    width: 30px;
    height: 33px;
    position: absolute;
    margin-top: 2px;
    z-index: 5;
    -webkit-transition: opacity 0.3s;
    transition: opacity 0.3s;
    content: '';
    pointer-events: none;
    right: 23px;
    box-shadow: inset -10px 0 8px -8px #00000014;
  }

  &:before {
    display: ${e=>e.isScrollable?"block":"none"};
    top: 0;
    bottom: 0;
    width: 30px;
    height: 32px;
    position: absolute;
    margin-top: 3px;
    z-index: 5;
    -webkit-transition: opacity 0.3s;
    -webkit-transition: opacity 0.3s;
    transition: opacity 0.3s;
    content: '';
    pointer-events: none;
    left: 22px;
    box-shadow: inset 10px 0 11px -8px #0000002e;
  }
`;Xy.displayName="TabListActionWrapper";const Jy=Object(vr.c)(no)`
  width: 100%;
  padding: 0;
  display: flex;
  max-height: 35px;
  margin: 0;
`;Jy.displayName="TabList";const ex=vr.c.button`
  background-color: ${e=>e.theme.colors.C200};
  width: 25px;
  border: 1px solid #e2e5e7;
  border-radius: 5px 5px 0 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0;
  position: relative;
  z-index: 6;

  &.left {
    margin: 2px 5px 0 0;
  }
  &.right {
    margin-top: 2px;
  }
`;ex.displayName="ActionButton";const tx=Object(vr.c)(oo)`
  max-width: 150px;
  min-width: 80px;
  text-align: center;
  border: 1px solid transparent;
  border-bottom: none;
  bottom: -3px;
  position: relative;
  list-style: none;
  padding: 6px 12px;
  cursor: pointer;
  font-weight: bold;
  font-size: 11.85px;
  border-color: ${e=>e.selected?e.theme.colors.C100:"transparent"};
  border-bottom: ${e=>e.selected?`1px solid ${e.theme.colors.C100}`:"transparent"};
  border-radius: ${e=>e.selected?"5px 5px 0 0":0};
  cursor: ${e=>e.isDisable?"default":"pointer"};
  pointer-events: ${e=>e.isDisable?"none":"auto"};
  color: ${e=>e.isDisable?e.theme.colors.C600:e.theme.colors.C100};
  display: ${e=>!1===e.isHidden?"none":"list-item"};
  ${Bi};
`;tx.displayName="TabListItem";const nx={TabsWrapper:Ky,TabPanelWrapper:Qy,TabList:Jy,TabListItem:tx,TabListWrapper:Zy};function rx(e){return!!(e&&e.children[0].scrollWidth>e.children[0].clientWidth)}function ox(e){const t={...nx,...e};return{Tabs:e=>{const{getActiveTab:n}=e,[r,o]=Object(tn.useState)(!1),[i,a]=Object(tn.useState)({initialOpenKey:e.initialOpenKey,index:e.index||0}),s=Object(tn.useRef)(null),l=Object(tn.useCallback)((()=>{o(rx(s.current))}),[]);Object(tn.useEffect)((()=>(o(rx(s.current)),window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)})),[l]),Object(tn.useEffect)((()=>{a({initialOpenKey:e.initialOpenKey,index:e.index||0})}),[e.initialOpenKey,e.index]);return Object(qi.jsxs)(t.TabsWrapper,{className:e.className,children:[Object(qi.jsxs)(Xy,{isScrollable:r,children:[r&&Object(qi.jsx)(ex,{className:"left",onClick:()=>{const e=s.current;if(e){const t=e.scrollLeft;t>0&&e.scrollTo({top:0,left:Math.max(t-100,0),behavior:"smooth"})}},children:Object(qi.jsx)(Ps,{viewBox:"0 0 24 24",width:"12px",fill:"none",stroke:"#3E445D",transform:"rotate(90)"})}),Object(qi.jsx)(t.TabListWrapper,{ref:s,children:Object(qi.jsx)(t.TabList,{children:e.children.map(((e,r)=>{let{props:{title:o,tabListItemTemplate:s,isDisable:l,isHidden:c}}=e;return Object(qi.jsx)(t.TabListItem,{isHidden:c,isDisable:l,selected:!(i.initialOpenKey!==o),title:o,onClick:()=>{a({index:r,initialOpenKey:o}),n&&n({index:r,initialOpenKey:o})},children:s||o},o+r)}))})}),r&&Object(qi.jsx)(ex,{className:"right",onClick:()=>{const e=s.current;if(e){const t=e.scrollLeft;(e.scrollWidth-e.children[0].clientWidth||0)>t&&e.scrollTo({top:0,left:Math.max(t+100,e.children[0].clientWidth),behavior:"smooth"})}},children:Object(qi.jsx)(Ps,{viewBox:"0 0 24 24",width:"12px",fill:"none",stroke:"#3E445D",transform:"rotate(-90)"})})]}),Object(qi.jsx)(t.TabPanelWrapper,{isScrollable:r,children:e.children[i.index]})]})},TabPanel:e=>Object(qi.jsx)(qi.Fragment,{children:e.children})}}const{Tabs:ix,TabPanel:ax}=ox({}),sx=Object(vr.c)(nx.TabsWrapper)`
  ${oi};
  height: 100%;
  flex-direction: column;
`;sx.displayName="TabsWrapper";const lx=Object(vr.c)(nx.TabListItem)`
  font-size: 12px;
  border: none;
  border-bottom: ${e=>e.selected?"2px solid #fff":"none"};
  font-weight: normal;
  line-height: 16px;
  padding: 4px 12px 8px;
`;lx.displayName="TabListItem";const cx=Object(vr.c)(nx.TabList)`
  background-color: ${e=>e.theme.colors.C1000};
  border: 2px solid ${e=>e.theme.colors.C1000};
  margin: 0;
  padding: 0;
  height: 36px;
`;cx.displayName="TabList";const ux=Object(vr.c)(nx.TabPanelWrapper)`
  ${li};
  overflow-x: auto;
  flex: 1;
`;ux.displayName="TabPanelWrapper";const{Tabs:px,TabPanel:dx}=ox({TabListItem:lx,TabList:cx,TabsWrapper:sx,TabPanelWrapper:ux}),fx="code-config-button",hx=Object(vr.c)(ki)`
  height: 32px;
  line-height: 30px;
  font-weight: 400;

  color: ${e=>{var t;let{theme:n}=e;return null!==(t=null===n||void 0===n?void 0:n.secondaryColor)&&void 0!==t?t:""}};

  background: ${e=>{let{theme:t}=e;return null!==t&&void 0!==t&&t.secondaryColor?"transparent":""}};

  border-color: ${e=>{var t;let{theme:n}=e;return null!==(t=null===n||void 0===n?void 0:n.secondaryColor)&&void 0!==t?t:""}};

  &:disabled {
    cursor: ${e=>{let{calling:t}=e;return t?"wait":"default"}};
    opacity: 0.5;
  }

  &:hover,
  &:focus {
    color: ${e=>{var t;let{theme:n}=e;return null!==(t=null===n||void 0===n?void 0:n.secondaryColor)&&void 0!==t?t:""}};
  }
`;hx.displayName="RunButtonStyle";const mx=Object(vr.c)(Ai)`
  height: 32px;
  line-height: 30px;
  display: inline-flex;
  align-items: center;
  margin-right: 10px;
`;mx.displayName="ConfigButtonStyle";const gx=Object(vr.c)(Wr)`
  ${Si};

  display: inline-flex;
  margin-right: 10px;
  /* box-shadow: 8px 8px 10px -10px rgba(9, 24, 54, 1); */
`;gx.displayName="IconButton";const vx=Object(vr.c)(Wr)`
  ${Si};
  background: ${e=>e.theme.colors.C900} 0% 0% no-repeat padding-box;
  border: 1px solid ${e=>e.theme.colors.C900};
  border-radius: 8px;
  position: absolute;
  top: 45px;
  left: -25px;
  &:hover,
  &:focus {
    opacity: 1;
  }
  @media screen and (max-width: 990px) {
    display: none;
  }
`;vx.displayName="ExpandCodeBlockButton";const bx=Object(vr.c)(Tr)`
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  text-align: right;
  padding: 0 24px;

  @media screen and (max-width: 1100px) {
    padding: 0 10px;
  }
`;bx.displayName="CodeBlockTools";const yx=Object(vr.c)(Tr)`
  background: #fff;
  max-width: 500px;
  min-height: 240px;
  max-height: 500px;
  padding: 5px 0;
  position: absolute;
  bottom: 50px;
  border-radius: 8px;
  margin-right: 10px;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);

  @media (max-width: 521px) {
    width: 300px;
  }

  @media (max-height: 540px) {
    height: calc(100vh - 120px);
  }
`;yx.displayName="ModalWrapper";const xx=Object(vr.c)(Tr)`
  display: flex;
  flex-direction: column;

  @media (max-width: 521px) {
    width: 300px;
  }
  @media (max-height: 540px) {
    height: calc(100vh - 130px);
  }
`;xx.displayName="ModalBody";const Ex=Object(vr.c)(Tr)`
  height: 20px;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  position: absolute;
  right: 0;
`;Ex.displayName="ModelHeader";const _x=Object(vr.c)(Tr)`
  background: #fff;
  padding: 0 10px;
  font-size: 20px;
  line-height: 15px;
  font-weight: 500;
  text-align: end;
  cursor: pointer;
  z-index: 100;
`;_x.displayName="ModelCloseIcon";const Cx=Object(vr.c)(Tr)`
  display: flex;
  flex-direction: column;
  padding: 40px;
  padding-top: 0;
  margin-top: -21px;
`;Cx.displayName="AuthWrapper";const wx=Object(vr.c)(Tr)`
  display: flex;
`;wx.displayName="AuthActionItems";const kx=Object(vr.c)(Ai)`
  align-items: center;
  margin-right: 10px;

  svg {
    margin-right: 5px;
  }
`;kx.displayName="AuthorizeBtn";const Ax=Object(vr.c)(wi)`
  align-items: center;

  svg {
    margin-right: 5px;
  }
`;Ax.displayName="ResetAuthButton";const Ox=Object(vr.c)(Tr)`
  flex: 1;
  overflow: hidden;
  .rc-menu {
    outline: none;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
    color: #666;
    position: relative;
  }

  .rc-menu-hidden {
    display: none;
  }

  .rc-menu-collapse {
    overflow: hidden;
  }

  .rc-menu-collapse-active {
    -o-transition: height 0.3s ease-out;
    transition: height 0.3s ease-out;
  }

  .rc-menu-item-group-list {
    margin: 0;
    padding: 0;
  }

  .rc-menu-item-group-title {
    // color: #999;
    // line-height: 1.5;
  }

  .rc-menu-item-active,
  .rc-menu-item-selected,
  .rc-menu-submenu-active > .rc-menu-submenu-title {
    // background-color: #fafafa;
  }

  .rc-menu-item-selected {
    transform: translateZ(0);
  }

  .rc-menu-submenu-selected {
    // background-color: #eaf8fe;
  }

  .rc-menu > li.rc-menu-submenu {
    padding: 0;
  }

  .rc-menu-horizontal.rc-menu-sub,
  .rc-menu-vertical-left.rc-menu-sub,
  .rc-menu-vertical-right.rc-menu-sub,
  .rc-menu-vertical.rc-menu-sub {
    min-width: 143px;
    margin-top: 0;
  }

  .rc-menu-item,
  .rc-menu-item > a,
  .rc-menu-submenu-title {
    margin: 0;
    position: relative;
    display: block;
    padding: 7px 7px 7px 16px;
    color: ${e=>e.theme.colors.C800};
    /* overflow: hidden; */
    /* white-space: nowrap; */
    /* text-overflow: ellipsis; */
  }

  .rc-menu-item.rc-menu-item-disabled,
  .rc-menu-item.rc-menu-submenu-disabled,
  .rc-menu-submenu-title.rc-menu-item-disabled,
  .rc-menu-submenu-title.rc-menu-submenu-disabled {
    color: #777 !important;
  }

  .rc-menu > .rc-menu-item-divider {
    height: 1px;
    margin: 1px 0;
    overflow: hidden;
    padding: 0;
    line-height: 0;
    background-color: #e5e5e5;
  }

  .rc-menu-submenu-popup {
    position: absolute;
  }

  .rc-menu-submenu > .rc-menu {
    background-color: #fff;
  }

  .rc-menu .rc-menu-item .anticon,
  .rc-menu .rc-menu-submenu-title .anticon {
    width: 14px;
    height: 14px;
    margin-right: 8px;
    top: -1px;
  }

  .rc-menu-horizontal {
    background-color: #f3f5f7;
    border: none;
    box-shadow: none;
  }

  .rc-menu-horizontal > .rc-menu-item,
  .rc-menu-horizontal > .rc-menu-submenu > .rc-menu-submenu-title {
    padding: 15px 20px;
  }

  .rc-menu-horizontal > .rc-menu-item,
  .rc-menu-horizontal > .rc-menu-submenu {
    float: left;
    border-bottom: 2px solid transparent;
  }

  .rc-menu-horizontal > .rc-menu-item-active,
  .rc-menu-horizontal > .rc-menu-submenu-active {
    border-bottom: 2px solid #2db7f5;
    background-color: #fafafa;
    color: #2baee9;
  }

  .rc-menu-horizontal:after {
    content: ' ';
    display: block;
    height: 0;
    clear: both;
  }

  .rc-menu-inline,
  .rc-menu-vertical,
  .rc-menu-vertical-left,
  .rc-menu-vertical-right {
    padding: 12px 0;
  }

  .rc-menu-inline > .rc-menu-item,
  .rc-menu-inline > .rc-menu-submenu > .rc-menu-submenu-title,
  .rc-menu-vertical-left > .rc-menu-item,
  .rc-menu-vertical-left > .rc-menu-submenu > .rc-menu-submenu-title,
  .rc-menu-vertical-right > .rc-menu-item,
  .rc-menu-vertical-right > .rc-menu-submenu > .rc-menu-submenu-title,
  .rc-menu-vertical > .rc-menu-item,
  .rc-menu-vertical > .rc-menu-submenu > .rc-menu-submenu-title {
    padding: 12px 8px 12px 24px;
  }

  .rc-menu-inline .rc-menu-submenu-arrow,
  .rc-menu-vertical-left .rc-menu-submenu-arrow,
  .rc-menu-vertical-right .rc-menu-submenu-arrow,
  .rc-menu-vertical .rc-menu-submenu-arrow,
  .rc-menu-horizontal .rc-menu-submenu-arrow {
    display: inline-block;
    font-size: inherit;
    vertical-align: baseline;
    text-align: center;
    text-transform: none;
    text-rendering: auto;
    position: absolute;
    line-height: 24px;
  }

  .rc-menu-horizontal .rc-menu-submenu-arrow {
    // transform: rotate(0);
    // position: absolute;
    // top: 13px !important;
    // right: 16px;
  }

  .rc-menu-vertical-left .rc-menu-submenu-arrow:before,
  .rc-menu-vertical-right .rc-menu-submenu-arrow:before,
  .rc-menu-horizontal .rc-menu-submenu-arrow:before,
  .rc-menu-vertical .rc-menu-submenu-arrow:before {
    content: '';
    // width: 0;
    // height: 0;
    // border-left: 5px solid transparent;
    // border-right: 5px solid transparent;
    // border-radius: 2px;
    // border-top: 5px solid #314659;
  }

  .rc-menu-submenu-vertical .rc-menu-submenu-arrow {
    position: absolute;
    right: 0;
  }
  .rc-menu-submenu-popup .rc-menu-submenu-arrow,
  .rc-menu-inline .rc-menu-submenu-arrow {
    transform: rotate(-90deg);
  }
  //***************************
  // INLINE MENUE ARROW STYLES STARTS
  .rc-menu-horizontal .rc-menu-submenu-arrow,
  .rc-menu-inline .rc-menu-submenu-arrow {
    position: absolute;
    right: 15px;
  }

  .rc-menu-submenu-vertical .rc-menu-submenu-arrow,
  .rc-menu-horizontal .rc-menu-submenu-arrow,
  .rc-menu-inline .rc-menu-submenu-arrow {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }

  .rc-menu-submenu-vertical .rc-menu-submenu-arrow {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    position: absolute;
    right: 15px;
  }

  .rc-menu-submenu-vertical .rc-menu-submenu-arrow:before,
  .rc-menu-horizontal .rc-menu-submenu-arrow:before,
  .rc-menu-inline .rc-menu-submenu-arrow:before {
    content: '';
    width: 0;
    height: 0;
    border: solid ${e=>e.theme.colors.C900};
    border-width: 0 1px 1px 0;
    display: inline-block;
    padding: 3px;
  }

  .rc-menu-inline
    .rc-menu-submenu-open
    > .rc-menu-submenu-title
    .rc-menu-submenu-arrow {
    transform: rotate(-135deg);
    top: 5px;
  }
  // INLINE MENUE ARROW STYLES ENDS
  //***************************

  .rc-menu-vertical-left.rc-menu-sub,
  .rc-menu-vertical-right.rc-menu-sub,
  .rc-menu-vertical.rc-menu-sub {
    padding: 0;
  }

  .rc-menu-sub.rc-menu-inline {
    padding: 0;
    border: none;
    border-radius: 0;
    box-shadow: none;
  }

  .rc-menu-sub.rc-menu-inline > .rc-menu-item,
  .rc-menu-sub.rc-menu-inline > .rc-menu-submenu > .rc-menu-submenu-title {
    padding-top: 8px;
    padding-bottom: 8px;
    padding-right: 0;
  }

  .rc-menu-open-slide-up-appear,
  .rc-menu-open-slide-up-enter {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    transform-origin: 0 0;
    opacity: 0;
    animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
    animation-play-state: paused;
  }

  .rc-menu-open-slide-up-leave {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    transform-origin: 0 0;
    opacity: 1;
    animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
    animation-play-state: paused;
  }

  .rc-menu-open-slide-up-appear.rc-menu-open-slide-up-appear-active,
  .rc-menu-open-slide-up-enter.rc-menu-open-slide-up-enter-active {
    animation-name: rcMenuOpenSlideUpIn;
    animation-play-state: running;
  }

  .rc-menu-open-slide-up-leave.rc-menu-open-slide-up-leave-active {
    animation-name: rcMenuOpenSlideUpOut;
    animation-play-state: running;
  }

  @keyframes rcMenuOpenSlideUpIn {
    0% {
      opacity: 0;
      transform-origin: 0 0;
      transform: scaleY(0);
    }
    to {
      opacity: 1;
      transform-origin: 0 0;
      transform: scaleY(1);
    }
  }

  @keyframes rcMenuOpenSlideUpOut {
    0% {
      opacity: 1;
      transform-origin: 0 0;
      transform: scaleY(1);
    }
    to {
      opacity: 0;
      transform-origin: 0 0;
      transform: scaleY(0);
    }
  }

  .rc-menu-open-zoom-appear,
  .rc-menu-open-zoom-enter {
    opacity: 0;
    animation-duration: 0.3s;
    animation-fill-mode: both;
    transform-origin: 0 0;
    animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
    animation-play-state: paused;
  }

  .rc-menu-open-zoom-leave {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    transform-origin: 0 0;
    animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
    animation-play-state: paused;
  }

  .rc-menu-open-zoom-appear.rc-menu-open-zoom-appear-active,
  .rc-menu-open-zoom-enter.rc-menu-open-zoom-enter-active {
    animation-name: rcMenuOpenZoomIn;
    animation-play-state: running;
  }

  .rc-menu-open-zoom-leave.rc-menu-open-zoom-leave-active {
    animation-name: rcMenuOpenZoomOut;
    animation-play-state: running;
  }

  @keyframes rcMenuOpenZoomIn {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes rcMenuOpenZoomOut {
    0% {
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0);
    }
  }
`;IC.displayName="RcMenuWrapper";const FC={enter(e,t){let n=-1;return e.style.transition="height 0.2s ease-out",LC(e,"rc-menu-collapse",{start(){n=e.offsetHeight,e.style.height="0"},active(){e.style.height=`${n}px`},end(){e.style.height="",t()}})},appear(){return FC.enter.apply(this,arguments)},leave:(e,t)=>LC(e,"rc-menu-collapse",{start(){e.style.height=`${e.offsetHeight}px`},active(){e.style.height="0"},end(){e.style.height="",t()}})},BC=Object(vr.c)(IC)`
  height: 32px;
  margin-left: 5px;

  @media screen and (max-width: 1200px) {
    min-width: 100px;
  }

  .rc-menu-root.rc-menu-horizontal.rc-menu {
    background-color: ${e=>e.theme.colors.C000} !important;
    width: 100%;
    max-width: 155px;
    min-width: 105px;
    height: 32px;
    font-weight: 400 !important;
    overflow: hidden;
    border-radius: 8px;
    cursor: pointer;
    float: none;
    display: inline-block;
    vertical-align: middle;
    margin: 0;
    border: 1px solid ${e=>e.theme.colors.C300} !important;
    line-height: 30px;

    &:hover {
      border-color: ${e=>e.theme.colors.C400} !important;
    }

    @media screen and (max-width: 1200px) {
      min-width: 96px;
    }

    @media screen and (max-width: 500px) {
      background: transparent !important;
      color: ${e=>e.theme.colors.C800}!important;
      border-color: transparent !important;

      &:hover {
        border-color: transparent !important;
      }
    }
  }

  .rc-menu-root.rc-menu-horizontal.rc-menu
    > .rc-menu-submenu.rc-menu-submenu-horizontal
    > .rc-menu-submenu-title {
    padding: 0;
    background: no-repeat no-repeat left center;

    .rc-menu-submenu-arrow {
      display: none;
    }

    @media screen and (max-width: 500px) {
      background-position: 3%;
      transform: translate(8%);
    }
  }

  .rc-menu-horizontal > .rc-menu-submenu {
    width: 100%;
    border: none;
  }
  .rc-menu-submenu-title {
    width: 100%;
    padding: 0 12px !important;
    text-align: center;
    font-size: 14px;
    color: ${e=>e.theme.colors.C800} !important;
    text-align: left;
    font-weight: 400;
    text-decoration: none;

    @media screen and (max-width: 500px) {
      background: transparent !important;
      color: ${e=>e.theme.colors.C800}!important;
      border-color: transparent !important;
      padding: 0 12px !important;
      line-height: 50px;
    }
  }

  .rc-menu-submenu-selected {
    background-color: ${e=>e.theme.colors.C000};

    @media screen and (max-width: 500px) {
      background: transparent !important;
    }
  }

  .rc-menu-submenu {
    z-index: 1;
  }

  .rc-menu-submenu .rc-menu {
    border: 1px solid ${e=>e.theme.colors.C300};
    box-shadow: 0 0 4px ${e=>e.theme.colors.C300};
    border-radius: 4px;
  }

  .rc-menu-item-selected,
  .rc-menu-item-active {
    background-color: ${e=>e.theme.colors.C100};
    color: ${e=>e.theme.colors.C800};
  }

  .rc-menu-submenu-active > .rc-menu-submenu-title,
  .rc-menu-submenu-selected {
    background-color: ${e=>e.theme.colors.C100};

    &:hover {
      background-color: ${e=>e.theme.colors.C100};
      border-color: ${e=>e.theme.colors.C000};
    }
  }
  .rc-menu-item,
  .rc-menu-item > a,
  .rc-menu-vertical > .rc-menu-item,
  .rc-menu-submenu > .rc-menu > .rc-menu-submenu,
  .rc-menu-submenu > .rc-menu > .rc-menu-submenu > .rc-menu-submenu-title {
    padding: 2px 8px;
    font-weight: 400;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
  }
  /* .rc-menu-submenu > .rc-menu-submenu-title {
    padding: 10px 12px!important;
  } */
  .rc-menu-item > a {
    padding: 10px 12px !important;
  }
  .rc-menu-horizontal .rc-menu-submenu-arrow {
    right: 8px;
    top: -2px !important;
    @media screen and (max-width: 500px) {
      line-height: 50px;
    }
  }
  .rc-menu-horizontal .rc-menu-submenu-arrow:before {
    border-top-color: ${e=>e.theme.primaryColor};
  }

  .rc-menu-submenu-vertical
    > .rc-menu-submenu-title
    > .rc-menu-submenu-arrow:before {
  }
`;BC.displayName="MenuWrapper";const HC=Object(vr.c)(MC)`
  cursor: pointer;
`,zC=Object(vr.c)(Tr)`
  height: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  padding: '0 12px';

  span {
    color: ${e=>e.theme.colors.C900};
    font-size: 13.33px;
    line-height: 24px;
    font-weight: 400;
    margin-right: 6px;
    ${Bi};
  }

  @media screen and (max-width: 1200px) {
    padding: '0 24px';

    span {
      margin-left: 8px;
    }
  }
`;function UC(e){const{contentInfoList:t,onSelect:n,selected:r}=e,o=nn.a.createRef();return Object(qi.jsxs)(BC,{children:[Object(qi.jsx)("span",{ref:o}),Object(qi.jsx)(RC,{mode:"horizontal",triggerSubMenuAction:"click",openAnimation:FC,getPopupContainer:()=>o.current?o.current:document.body,onSelect:n,selectedKeys:[r],children:Object(qi.jsx)(jC,{title:Object(qi.jsxs)(zC,{children:[Object(qi.jsx)("span",{children:e.selected}),Object(qi.jsx)(Ps,{viewBox:"0 0 24 24",width:"12px",fill:"none",stroke:"#9CAAB8"})]}),children:t.map((e=>Object(qi.jsx)(HC,{children:e.ContentType},e.ContentType)))})})]})}zC.displayName="Title";const $C=Object(vr.c)(nx.TabListItem)`
  min-width: 60px;
  border: 1px solid ${e=>e.theme.colors.C300};
  border-bottom-color: ${e=>e.selected?e.theme.colors.C000:e.theme.colors.C300};
  color: ${e=>e.selected?e.theme.colors.C800:e.theme.colors.C600};
  border-radius: 4px 4px 0 0;
  background-color: ${e=>e.selected?e.theme.colors.C000:e.theme.colors.C200};
  font-weight: ${e=>e.selected?600:400};
  cursor: pointer;

  &,
  & > .tab-list-item-template-wrapper {
    color: ${e=>e.theme.colors.C800};
    opacity: ${e=>e.selected?1:.75};
  }
  &:not(:first-child) {
    margin-left: 5px;
  }

  &:hover,
  &:focus {
    opacity: 1;
  }
`;$C.displayName="TabListItem";const WC=Object(vr.c)($C)`
  min-width: 100px;
`,VC=Object(vr.c)(nx.TabList)`
  width: calc(100% - 60px);
  margin: 0;
  padding: 0;
  border-bottom: 0;
`;VC.displayName="TabList";const GC=Object(vr.c)(nx.TabPanelWrapper)`
  border: 1px solid ${e=>e.theme.colors.C300};
  border-radius: 0 4px 4px 4px;
  padding: 20px 20px;
`;GC.displayName="TabPanelWrapper";const{Tabs:qC,TabPanel:YC}=ox({TabListItem:$C,TabList:VC,TabPanelWrapper:GC}),{Tabs:KC}=ox({TabListItem:WC,TabList:VC,TabPanelWrapper:GC}),QC=Object(vr.c)(Tr)`
  ${Ir} {
    margin-bottom: 0px;
  }
`;function ZC(e){const{examples:t,renderNode:n}=e;return Object(qi.jsx)(KC,{initialOpenKey:t[0].Name,children:t.map((e=>Object(qi.jsx)(YC,{title:e.Name,children:Object(qi.jsxs)(QC,{children:[e.Description&&n({Type:"paragraph",Text:e.Description}),e.Text&&n({Type:"codeblock",Text:e.Text,Language:"json"})]})},e.Id)))})}const XC=Object(vr.c)(Tr)`
  margin-top: 20px;
`;XC.displayName="ContentTabWrapper";const JC=Object(vr.c)(Tr)`
  background-color: ${e=>e.theme.colors.C000};
  max-width: 400px;
  min-width: 190px;
  height: 42px;
  border: 1px solid ${e=>e.theme.colors.C300};
  border-radius: 4px 4px 0 0;
  display: inline-flex;
  align-items: center;
  padding: 0 10px 0 20px;
  ${Bi}

  label {
    color: ${e=>e.theme.colors.C600};
    margin-right: 10px;
  }
  ${Vr} {
    width: 100%;
    color: ${e=>e.theme.colors.C800};
    margin-right: 10px;
    ${Bi}
  }
`;JC.displayName="ContentTab";const ew=Object(vr.c)(Tr)`
  background-color: ${e=>e.theme.colors.C000};
  border: 1px solid ${e=>e.theme.colors.C300};
  border-radius: 0px 4px 4px 4px;
  padding: 20px;
  margin-top: -1px;
`;ew.displayName="ContentPanel";const tw=Object(vr.c)(Tr)`
  ${Xr} {
    margin-top: 0;
    margin-bottom: 5px;
  }

  ${Vr} {
    margin: 0 0 20px;
    font-size: ${e=>e.theme.cssStyles.body.text2.fontSize};

    ${Rr} {
      padding: 0;
    }
  }
`;tw.displayName="LabelWrapper";class nw extends nn.a.PureComponent{constructor(e){super(e),this.filteredContentType=e=>this.props.contentInfoList.find((t=>t.ContentType===e)),this.onSelect=e=>{const t=this.filteredContentType(e.key);this.setState({selectedContent:t||this.props.contentInfoList[0]})},this.renderSimpleExample=()=>this.state.selectedContent.Example?Object(qi.jsx)(QC,{children:this.props.renderNode(this.state.selectedContent.Example)}):Object(qi.jsx)(Fg,{icon:"info",children:"There is no example available for this content type."}),this.onSelect=this.onSelect.bind(this),this.state={selectedContent:this.props.contentInfoList[0]}}render(){const{contentInfoList:e,renderNode:t}=this.props;return Object(qi.jsxs)(XC,{children:[Object(qi.jsxs)(JC,{children:[Object(qi.jsx)("label",{children:"Content Type:"}),e.length>1?Object(qi.jsx)(qi.Fragment,{children:Object(qi.jsx)(UC,{onSelect:this.onSelect,selected:this.state.selectedContent.ContentType,contentInfoList:e})}):Object(qi.jsx)(Vr,{title:e[0].ContentType,children:e[0].ContentType})]}),Object(qi.jsxs)(ew,{children:[this.state.selectedContent&&Object(qi.jsxs)(tw,{children:[Object(qi.jsx)(Xr,{children:"Type"}),t({Type:"paragraph",Text:(n=this.state.selectedContent,n.LinkTo?"[`"+n.DataType+"`]("+n.LinkTo+")":"`"+n.DataType+"`")})]}),this.state.selectedContent.Examples&&this.state.selectedContent.Examples.length>1?Object(qi.jsx)(ZC,{examples:this.state.selectedContent.Examples,renderNode:t}):this.renderSimpleExample()]})]});var n}}function rw(e){let{headers:t}=e;return Object(qi.jsx)(Ni,{overflowX:!0,overflowY:!0,children:Object(qi.jsxs)(fo.Table,{children:[Object(qi.jsx)(fo.Thead,{children:Object(qi.jsxs)(fo.Tr,{children:[Object(qi.jsx)(fo.Th,{children:"Name"}),Object(qi.jsx)(fo.Th,{children:"Description"})]})}),Object(qi.jsx)(fo.Tbody,{children:t.map(((e,t)=>Object(qi.jsxs)(fo.Tr,{children:[Object(qi.jsxs)(fo.Td,{children:[Object(qi.jsx)(yi,{title:e.Name,children:e.Name}),Object(qi.jsx)(Tr,{children:e.Required&&Object(qi.jsx)(vi,{className:"required",children:"REQUIRED"})})]}),Object(qi.jsxs)(fo.Td,{children:[Object(qi.jsxs)(pi,{children:[e.LinkTo?Object(qi.jsx)(Ng,{className:"model-table-link",source:"[`"+e.DataType+"`]("+e.LinkTo+")",inline:!0}):Object(qi.jsx)(xi,{children:e.DataType}),e.Constant&&Object(qi.jsx)(xi,{marginLeft:"10px",children:"Constant"})]}),e.Description&&"-"!==e.Description&&Object(qi.jsx)(dv,{children:Object(qi.jsx)(Ng,{source:e.Description?e.Description.replace(/<br>/gi,"   \n"):e.Description})})]})]},e.Name+t)))})]})})}const ow=Object(vr.c)(Tr)`
  ${Xr} {
    margin-top: 30px;
    margin-bottom: 15px;
  }
`;ow.displayName="LabelWrapper";const iw=Object(vr.c)(Tr)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;iw.displayName="TabItemWrapper";const aw=Object(vr.c)(Tr)`
  background-color: ${e=>e.color};
  width: 7px;
  height: 7px;
  border-radius: 50%;
  margin-right: 5px;
`;function sw(e){let{statusCode:t}=e;return t<300?Object(qi.jsx)(aw,{color:"#28C397"}):t<400?Object(qi.jsx)(aw,{color:"#FF8A70"}):Object(qi.jsx)(aw,{color:"#FF4451"})}function lw(e){const{responses:t,renderNode:n}=e;return Object(qi.jsx)("div",{children:Object(qi.jsx)(qC,{initialOpenKey:t[0].StatusCode,children:t.map(((e,t)=>{return Object(qi.jsxs)(YC,{title:"0"===e.StatusCode?"Default":e.StatusCode,tabListItemTemplate:(r=e.StatusCode,"0"===r?"Default":Object(qi.jsxs)(iw,{className:"tab-list-item-template-wrapper",title:r,children:[Object(qi.jsx)(sw,{statusCode:parseInt(r,10)}),r]})),children:[e.Description&&n({Type:"paragraph",Text:e.Description}),e.Headers&&e.Headers.length>0&&Object(qi.jsxs)(ow,{children:[Object(qi.jsx)(Xr,{children:"Headers"}),Object(qi.jsx)(rw,{headers:e.Headers})]}),e.Content.length>0?Object(qi.jsx)(nw,{contentInfoList:e.Content,renderNode:n}):Object(qi.jsx)(Fg,{icon:"info",children:"There is no response body for this status code."})]},e.StatusCode+t);var r}))},"responses")})}aw.displayName="CircleIcon";Object(vr.c)(Tr)`
  width: calc(100% + 190px);
  height: 67px;
  background: ${e=>e.theme.colors.C200};
  margin: 0 -200px 0 -80px;
  border-top: 1px solid ${e=>e.theme.colors.C300};
`.displayName="StyledHr";const cw=Object(vr.c)(Tr)``;cw.displayName="EndpointNodeWrapper";Object(vr.c)(Qr)`
  display: none;
  margin: 0;
  @media screen and (max-width: 500px) {
    display: block;
  }
`.displayName="Parameters";const uw=Object(vr.c)(Tr)`
  ${Kr} {
    color: ${e=>e.theme.colors.C900};
    border-bottom: 1px solid ${e=>e.theme.colors.C300};
    border-width: 1px;
    font-weight: 500;
    padding-bottom: 15px;
    font-size: 20.25px;
    margin-right: -200px;
    margin-bottom: 0;
  }
  & > ${Tr} {
    padding: 30px 0;
  }

  ${Fr} {
    margin: 0 -80px;
  }
`;uw.displayName="ExplorerWrapper";class pw extends tn.Component{constructor(e){super(e),this.el=void 0,this.titleRoot=void 0,this.el=document.createElement("div"),this.setTitleRoot()}setTitleRoot(){this.titleRoot=document.getElementById("title-wrapper")}componentDidMount(){this.setTitleRoot(),this.titleRoot&&this.titleRoot.appendChild(this.el)}render(){const{children:e}=this.props;return a.createPortal(e,this.el)}}Object(vr.c)(Tr)`
  margin-top: 4px;
  margin-bottom: 4px;

  & ${Vr} {
    margin-bottom: 6px;
  }

  & ${Vr}:last-child {
    margin-bottom: 0;
  }
`;const dw=Object(vr.c)(Ni)`
  ${fo.Table} {
    width: 100%;

    & code {
      padding: 0;
    }

    & tr td:first-child ${Rr} {
      max-width: 280px;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-word;
    }

    & tr td:last-child {
      width: 70%;
    }
  }
`;function fw(e){let{params:t}=e;return Object(qi.jsx)(dw,{overflowX:!0,overflowY:!0,children:Object(qi.jsxs)(fo.Table,{children:[Object(qi.jsx)(fo.Thead,{children:Object(qi.jsxs)(fo.Tr,{children:[Object(qi.jsx)(fo.Th,{children:"Type"}),Object(qi.jsx)(fo.Th,{children:"Factory Method"})]})}),Object(qi.jsx)(fo.Tbody,{children:t.map(((e,t)=>Object(qi.jsxs)(fo.Tr,{children:[Object(qi.jsx)(fo.Td,{children:Object(qi.jsx)(Ng,{className:"model-table-link",source:"[`"+e.DataType+"`]("+e.LinkTo+")",inline:!0})}),Object(qi.jsx)(fo.Td,{children:Object(qi.jsx)(xi,{children:e.Method})})]},t)))})]})})}var hw=n(382);const mw=Object(vr.c)(Tr)`
  margin-left: ${e=>1===e.level?"20px":"35px"};
  line-height: 1.3;
  min-width: 250px;

  &:hover {
    color: ${e=>e.link?e.theme.primaryColor:e.theme.colors.C600};
    cursor: ${e=>e.link?"pointer":""};
  }
`,gw=Object(vr.c)(Ur)`
  margin: 0px;
  padding: 0px;
  color: ${e=>e.isActive&&e.link?e.theme.primaryColor:e.theme.colors.C600};
  line-height: 0.5;
  font-weight: 400;
  font-size: 14px;
  &:hover {
    color: ${e=>e.link?e.theme.primaryColor:e.theme.colors.C600};
    cursor: ${e=>e.link?"pointer":""};
  }
`,vw=Object(vr.c)(hr)`
  text-decoration: none;
`,bw=e=>{var t;const{linkMapper:n,Node:r,level:o,activeList:i}=e,{Title:a,Text:s,SuggestedLink:l}=r,c=xw(a||s||"");return Object(qi.jsx)(vw,{to:{pathname:n(l)||""},children:Object(qi.jsx)(mw,{level:o,link:l,children:Object(qi.jsx)(gw,{link:l,isActive:(null===(t=i[0])||void 0===t?void 0:t.href)===n(l),children:c.heading})})})},yw=Object(vr.c)(Tr)`
  border-left: 2px solid
    ${e=>e.isActive&&e.link?e.theme.primaryColor:e.theme.colors.C300};
  padding: 4px 0px;
  width: 285px;

  &:hover {
    border-left: ${e=>e.link?`2px solid ${e.theme.primaryColor}`:""};
    cursor: ${e=>e.link?"pointer":""};
  }
  @media screen and (max-width: 990px) {
    border-left: none;

    &:hover {
      border-left: none;
    }
  }
`,xw=e=>{const t=Object(hw.marked)(e),n=(new DOMParser).parseFromString(t,"text/html"),r=document.createTreeWalker(n,NodeFilter.SHOW_TEXT),o=[],i={heading:"",href:""};var a;let s=r.currentNode;for(;s;){if("\n"!==s.textContent&&"#"!==s.textContent&&o.push(s.textContent),"#"===s.textContent){var l;const e=null===(l=s)||void 0===l?void 0:l.parentElement;a=null===e||void 0===e?void 0:e.href}s=r.nextNode()}const c=o.filter((e=>null!==e&&" "!==e)).map((e=>null===e||void 0===e?void 0:e.trim())).join(" ");return i.heading=c,i.href=a?a.replace(/(.*)#(.*)/gim,"$2"):"",i};function Ew(e){let{Node:t,level:n,activeList:r}=e;const{Title:o,SuggestedLink:i,Nodes:a,Steps:s}=t,l=0!==(null===a||void 0===a?void 0:a.length)&&0!==n&&o,c=a||s;return Object(qi.jsxs)(qi.Fragment,{children:[l&&Object(qi.jsx)(qh.Consumer,{children:e=>{var o;return Object(qi.jsx)(yw,{link:i,isActive:(null===(o=r[0])||void 0===o?void 0:o.href)===e(i),children:Object(qi.jsx)(bw,{linkMapper:e,Node:t,level:n,activeList:r})})}}),null===c||void 0===c?void 0:c.map(((e,t)=>Object(qi.jsx)(Ew,{Node:e,level:n+1,activeList:r},`TOC_${t}`)))]})}const _w=()=>Object(qi.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"9.33",height:"9",viewBox:"0 0 9.33 9",children:Object(qi.jsxs)("g",{id:"arrow-up_1_","data-name":"arrow-up (1)",transform:"translate(-3.94 -4.024)",children:[Object(qi.jsx)("line",{id:"Line_402","data-name":"Line 402",y1:"7.274",transform:"translate(8.5 5)",fill:"none",stroke:"#9caab8",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"}),Object(qi.jsx)("path",{id:"Path_36241","data-name":"Path 36241",d:"M5,8.6l3.49-3.83L12.21,8.6",fill:"none",stroke:"#9caab8",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"})]})}),Cw=()=>Object(qi.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"21.5",viewBox:"0 0 17.5 21.5",children:Object(qi.jsxs)("g",{id:"file-text_1_","data-name":"document",transform:"translate(-3.25 -1.25)",children:[Object(qi.jsx)("path",{id:"Path_36739",d:"M14,2H6A2,2,0,0,0,4,4V20a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V8Z",fill:"none",stroke:"#455666",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"}),Object(qi.jsx)("path",{id:"Path_36740",d:"M14,2V8h6",fill:"none",stroke:"#455666",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"}),Object(qi.jsx)("line",{id:"Line_410",x1:"4.951",transform:"translate(11.549 13)",fill:"none",stroke:"#455666",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"}),Object(qi.jsx)("line",{id:"Line_411",x1:"4.951",transform:"translate(11.549 17)",fill:"none",stroke:"#455666",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"}),Object(qi.jsx)("circle",{id:"Ellipse_322",cx:"1.25",cy:"1.25",r:"1.25",transform:"translate(6.5 7.75)",fill:"#455666"}),Object(qi.jsx)("circle",{id:"Ellipse_323",cx:"1.25",cy:"1.25",r:"1.25",transform:"translate(6.5 11.75)",fill:"#455666"}),Object(qi.jsx)("circle",{id:"Ellipse_324",cx:"1.25",cy:"1.25",r:"1.25",transform:"translate(6.5 15.75)",fill:"#455666"})]})});class ww{constructor(){this._headingLevel=0}callout(e){let{node:t}=e;return Object(qi.jsx)(gi,{type:t.CalloutType===Sl.Danger?"Danger":t.CalloutType===Sl.Info?"Info":"Warning",children:Object(qi.jsx)(Ng,{source:t.Title?`**${t.Title}** ${t.Body}`:t.Body,inline:!0})})}codeblock(e){let{node:t}=e;const n=t.Language?t.Language in jl?jl[t.Language]:t.Language:"";return Object(qi.jsx)(Ag,{text:t.Text,lang:n,code:t.Text})}endpointreference(e){let{node:t}=e;return function(e,t){const n=[],r=e=>Tl(e,t);let o=0;const i=e=>n.push(Object(qi.jsx)(tn.Fragment,{children:Object(qi.jsx)(cw,{children:r(e)})},o++));if(e.Description&&i({Type:"paragraph",Text:e.Description}),e.RequiresAuthentication&&!e.PlaygroundTitle&&i({Type:"paragraph",Text:`*This endpoint requires ${e.hasStepByStepPage?"[authentication]($h/__authorize)":"authentication"}.*`}),e.PlaygroundTitle||n.push(Object(qi.jsx)(Tr,{children:r(e.MethodSignature)},o++)),n.push(Object(qi.jsxs)(uw,{children:[Object(qi.jsx)(Kr,{children:e.PlaygroundTitle||"API Code Playground"}),Object(qi.jsx)(Tr,{children:r(e.UsageExample)}),Object(qi.jsx)(Fr,{})]},"usage-example")),e.ServerName&&(i({Type:"heading",Text:"Server",Level:2}),i({Type:"paragraph",Text:"`"+e.ServerName+"`"})),e.Scopes&&e.Scopes.length>0&&(i({Type:"heading",Text:"Requires scope",Level:2}),i({Type:"paragraph",Text:e.Scopes.map((e=>"`"+e+"`")).join(", ")})),e.Response&&e.Response.length>0)i({Type:"heading",Text:"Responses",Level:2}),n.push(Object(qi.jsx)(lw,{responses:e.Response,renderNode:r}));else if(i({Type:"heading",Text:"Response Type",Level:2}),n.push(Object(qi.jsx)(pi,{children:r({Type:"paragraph",Text:e.ResponseText?e.ResponseText:e.ReturnTypeLink?"[`"+e.ReturnType+"`]("+e.ReturnTypeLink+")":"`"+e.ReturnType+"`"})},"response-type")),e.ReturnTypeExample&&(i({Type:"heading",Text:e.ReturnTypeExample.Language?"Example Response":"Example Response (as JSON)",Level:2}),i(e.ReturnTypeExample)),e.Errors&&e.Errors.length>0){i({Type:"heading",Text:"Errors",Level:2});const t=[];for(var a in e.Errors)if(e.Errors.hasOwnProperty(a)){const n=e.Errors[a],r={Type:"tablerow",Data:Array()},o=n.Name?`\`${n.Name}\``:"";r.Data=[n.StatusCode,n.Description,n.LinkTo?"[`"+n.Name+"`]("+n.LinkTo+")":o],t.push(r)}i({Type:"table",Header:{Data:["HTTP Status Code","Error Description","Exception Class"]},Rows:t})}return Object(qi.jsx)(tn.Fragment,{children:n})}(t,this)}compilablecodeblock(e){let{node:t}=e;return Object(qi.jsx)(Px,{node:t})}enumreference(e){let{node:t}=e;return wv(t,this)}structurereference(e){let{node:t}=e;return wv(t,this)}heading(e){let{node:t}=e;const{SuggestedLink:n="",Text:r="",Level:o}=t,i=/^#{1,6}\s/,a=function(e){switch(e){case 1:return qr;case 2:return Yr;case 3:return Kr;case 4:return Qr;case 5:return Zr;default:return Xr}}(0===n.indexOf("page:")?Math.max(1,this._headingLevel):Math.max(1,o+this._headingLevel)),s=e=>Object(qi.jsxs)(a,{onDoubleClick:()=>function(e){console.log("Heading permalink => ",e.SuggestedLink)}(t),children:[Object(qi.jsx)(Ng,{className:"heading-markdown",source:r.replace(i,""),inline:!0}),e&&Object(qi.jsx)(hr,{className:"heading-link",to:{pathname:e(t.SuggestedLink)||"",state:{fromSamePage:!0}},children:"#"})]});return n?Object(qi.jsx)(qh.Consumer,{children:e=>Object(qi.jsx)(yl,{name:e(n),children:s(e)})}):s()}image(e){let{node:t}=e;return Object(qi.jsx)(Vr,{children:rm(t.Url)?Object(qi.jsx)(Br,{src:t.Url,alt:t.AlternateText}):Object(qi.jsx)(gl,{children:e=>e&&Object(qi.jsx)(Br,{src:e.baseUrl+t.Url,alt:t.AlternateText})})})}link(e){let{node:t}=e;return Object(qi.jsx)(Dr,{href:t.Url,children:t.Url})}paragraph(e){let{node:t}=e;return Object(qi.jsx)(Ng,{source:t.Text})}steppedguide(e){let{node:t}=e;return Object(qi.jsx)(tn.Fragment,{children:t.Steps.map(((e,t)=>Object(qi.jsxs)(tn.Fragment,{children:[Object(qi.jsx)(Kr,{children:Object(qi.jsx)(Ng,{source:e.Title,inline:!0})}),this.renderNodeList(e.Nodes)]},t)))})}table(e){let{node:t}=e;const n=Sb(t);return Object(qi.jsx)(Ni,{overflowX:!0,overflowY:!0,children:Object(qi.jsxs)(ao,{children:[Object(qi.jsx)(lo,{children:Object(qi.jsx)(co,{children:n.Header.Data.map(((e,t)=>Object(qi.jsx)(uo,{children:e},t)))})}),Object(qi.jsx)(so,{children:n.Rows.map(((e,t)=>Object(qi.jsx)(co,{children:e.Data.map(((e,t)=>Object(qi.jsx)(po,{children:Object(qi.jsx)(Ng,{source:e?e.replace("<br>","  \n"):e,inline:!0})},t)))},t)))})]})})}enumtable(e){let{node:t}=e;const n=Sb(t);return Object(qi.jsx)(Ni,{className:n.Class,overflowX:!0,overflowY:!0,children:Object(qi.jsxs)(ao,{children:[Object(qi.jsx)(lo,{children:Object(qi.jsx)(co,{children:n.Header.Data.map(((e,t)=>Object(qi.jsx)(uo,{children:e},t)))})}),Object(qi.jsx)(so,{children:n.Rows.map(((e,t)=>Object(qi.jsx)(co,{children:e.Data.map(((e,t)=>Object(qi.jsx)(po,{children:0===t?Object(qi.jsx)(yi,{children:e}):Object(qi.jsx)(Ng,{source:e?e.replace("<br>","  \n"):e,inline:!0})},t)))},t)))})]})})}containerreference(e){let{node:t}=e;return function(e,t){const n=[],r=e=>Tl(e,t);let o=0;const i=e=>n.push(Object(qi.jsx)(tn.Fragment,{children:r(e)},o++));return e.StructureType&&(i({Type:"heading",Text:e.StructureType,Level:2}),n.push(Object(qi.jsx)(pi,{children:r({Type:"paragraph",Text:"`"+e.Name+"`"})},"class-name"))),i({Type:"heading",Text:"Cases",Level:2}),n.push(Object(qi.jsx)(fw,{params:e.ContainerTypes},"fields-table")),Object(qi.jsx)(tn.Fragment,{children:n})}(t,this)}section(e){let{node:t}=e;if(0===t.Nodes.length)return Object(qi.jsx)(tn.Fragment,{});const n=this.heading({node:{Type:"heading",Text:t.Title,Level:1,SuggestedLink:t.SuggestedLink}});t.Title&&this._headingLevel++;const r=1===this._headingLevel?Object(qi.jsxs)(qi.Fragment,{children:[n,this.renderNodeList(t.Nodes)]}):Object(qi.jsxs)("section",{className:"content-section",children:[n,this.renderNodeList(t.Nodes)]});return t.Title&&this._headingLevel--,r}renderNodeList(e){let t;return Object(qi.jsx)(tn.Fragment,{children:e.map(((n,r)=>("structurereference"===n.Type&&(0===r&&(t=n.ChildClassesLink),n={...n,Index:r,ChildClassesLink:r===e.length-1?t:void 0}),Object(qi.jsx)(tn.Fragment,{children:Tl(n,this)},"dx-"+r))))})}}const kw=Object(vr.c)(Tr)`
  position: relative;
  top: 23px;
  display: flex;
`,Aw=Object(vr.c)(Tr)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: ${e=>e.isOpen?"310px":"10px"};
  transition: right 0.3s;
  width: 40px;
  height: 40px;
  background-color: ${e=>e.isOpen?e.theme.colors.C700:e.theme.colors.C000};
  box-shadow: 0px 3px 6px ${e=>e.theme.colors.C400};
  border: ${e=>e.isOpen?"none":`1px solid ${e.theme.colors.C300}`};
  border-radius: 4px 0px 0px 4px;
  opacity: 1;

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 991px) {
    display: none;
  }
`,Ow=Object(vr.c)(Tr)`
  width: 15px;
  height: 17px;

  &:hover {
    cursor: pointer;
  }
`,Sw=Object(vr.c)(Tr)`
  position: fixed;
  right: 0px;
  width: 300px;
  height: fit-content;
  max-height: ${e=>e.docsHeight};
  padding: 20px 0px 0px 5px;
  margin-right: 10px;
  overflow: hidden;

  &:hover {
    overflow-y: scroll;
  }
  @media screen and (max-width: 990px) {
    overflow-y: auto;
    position: fixed;
    background-color: ${e=>e.theme.colors.C000};
    padding: 20px 0px 0px 0px;
    box-shadow: ${e=>e.isOpen?`0px 3px 6px ${e.theme.colors.C400}`:"none"};
    border: ${e=>e.isOpen?`1px solid ${e.theme.colors.C300}`:"none"};
    border-radius: 0px 0px 0px 8px;
    opacity: 1;
    width: ${e=>e.isOpen?"300px":"0px"};
    transition: width 0.3s;
  }
`,Tw=Object(vr.c)(Tr)`
  display: flex;
  justify-content: space-between;
`,jw=Object(vr.c)(Tr)`
  margin: 0px;
  padding: 0px 0px 10px 10px;
  border-left: 2px solid ${e=>e.theme.colors.C300};
  @media screen and (max-width: 990px) {
    border-left: none;
  }
`,Dw=Object(vr.c)(Ur)`
  color: ${e=>e.theme.colors.C900};
  font-size: 14px;
  font-weight: bold;
`,Mw=vr.b`
  color: ${e=>e.theme.colors.C600};
  width: fit-content;

  &:hover {
    cursor: pointer;
  }
`,Nw=Object(vr.c)(Vr)`
  ${Mw};
  padding: 0px 0px 0px 3px;
  margin: 0px;
`,Pw=Object(vr.c)(Tr)`
  ${Mw};
  display: flex;
  margin: 15px 0px 5px 20px;
  align-items: center;
  font-size: 14px;
`,Rw=Object(vr.c)(Tr)`
  padding: 0 60px 40px;
  width: ${e=>e.isSection?"calc(100% - 300px)":"100%"};
  max-width: 950px;
  & > div:first-child {
    padding-top: 40px;
    h1,
    h2 {
      display: none;
    }
  }

  @media only screen and (min-width: 1500px) {
    padding: 0 80px 40px;
  }
  @media only screen and (max-width: 1350px) {
    padding: 0 50px 40px 40px;
  }
  @media only screen and (max-width: 1100px) {
    padding: 0 50px 40px 20px;
  }
  @media only screen and (max-width: 990px) {
    padding: 0 80px 40px;
    width: 100%;
    margin-top: 0;

    & > div:first-child {
      h1,
      h2 {
        margin-top: 0;
        display: block;
      }
    }

    h2:first-child {
      display: block;
    }
  }
  /* a bad hack to correcting the padding on first element in content */
  & > div:first-child > p:first-child,
  & > div:first-child > table:first-child,
  & > div:first-child > ul:first-child,
  & > div:first-child > ol:first-child,
  & > div:first-child > blockquote:first-child,
  & > div:first-child > pre:first-child,
  & > div:first-child > img:first-child {
    margin-top: 0;
  }
  & > :nth-child(2) {
    &,
    *:not(${dv}) {
      margin-top: 0;
    }
  }
  & a {
    ${jr}
  }
  width: 100%;
  padding: 10px 0px;
  background-color: ${e=>e.theme.colors.C000};
  border: 1px solid ${e=>e.theme.colors.C300};
  border-bottom: none;
  border-radius: 8px 0px 0px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 990px) {
    position: fixed;
    bottom: 0px;
    max-width: 100%;
    border-radius: 0;
  }
`,Jw=vr.b`
  font-size: 14px;
  margin: 0px;
  padding-left: 2px 0px 0px 0px;

  &:hover {
    cursor: pointer;
  }
`,ek=Object(vr.c)(Wr)`
  ${Jw};
  margin-left: 20px;
  color: ${e=>e.theme.staticColors.Blue.C000};
  border: 1px solid ${e=>e.theme.staticColors.Blue.C000};
  :disabled {
    cursor: default;
    opacity: 0.2;
  }
`,tk=Object(vr.c)(Ur)`
  margin: 0px 5px 0px 0px;
  padding: 0px;
  font-size: 14px;
  color: ${e=>e.theme.colors.C000};
  font-weight: 300;
  cursor: inherit;
`,nk=Object(vr.c)(Tr)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`,rk=Object(vr.c)(Wr)`
  background-color: ${e=>e.theme.staticColors.Blue.C000};
  border-radius: 8px;
  min-width: 99px;
  height: 32px;
  margin: 0px 20px 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  color: ${e=>e.theme.colors.C000};
  cursor: pointer;
  &:not(:hover) {
    opacity: 1;
  }
  :disabled {
    cursor: default;
    background-color: ${e=>{let{isBlueDisabled:t,theme:n}=e;return t?n.staticColors.Blue.C000:n.staticColors.Red.C000}};
    opacity: 0.5;
  }
  svg {
    position: relative;
    top: -1px;
    margin-left: 2px;
  }
`,ok=Object(vr.c)(Tr)`
  padding: 15px 30px 15px 15px;

  }
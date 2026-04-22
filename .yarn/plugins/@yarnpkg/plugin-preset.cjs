/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-preset",
factory: function (require) {
var plugin=(()=>{var s=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var l=Object.prototype.hasOwnProperty;var f=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var y=(r,e)=>{for(var t in e)s(r,t,{get:e[t],enumerable:!0})},m=(r,e,t,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of p(e))!l.call(r,n)&&n!==t&&s(r,n,{get:()=>e[n],enumerable:!(o=c(e,n))||o.enumerable});return r};var P=r=>m(s({},"__esModule",{value:!0}),r);var d={};y(d,{default:()=>T});var i=f("@yarnpkg/shell"),g=async(r,e)=>{for(let t of r)if(await e(t))return!0;return!1},u=(r,{topLevelWorkspace:e})=>e.manifest.scripts.has(r)?(0,i.execute)(`yarn ${r}`):Promise.resolve(0),w={hooks:{afterAllInstalled:r=>{u("prepare",r)},wrapScriptExecution:async(r,e,t,o)=>/^p(re|ost)(?!pare).+/.test(o)?r:async()=>await g(["pre",void 0,"post"],async a=>a?await u(`${a}${o}`,e):await r())?1:0}},T=w;return P(d);})();
return plugin;
}
};

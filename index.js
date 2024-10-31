import{S as p,i as c}from"./assets/vendor-Dg3uDB0e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const h="46806547-3cbb9c5e78d8f101f788426f8",g="https://pixabay.com/api/";async function y(s){const o=`${g}?key=${h}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15`,r=await fetch(o);if(!r.ok)throw new Error("Failed to fetch images");return(await r.json()).hits.map(({webformatURL:e,largeImageURL:t,tags:a,likes:f,comments:u,views:d,downloads:m})=>({webformatURL:e,largeImageURL:t,tags:a,likes:f,comments:u,views:d,downloads:m}))}function w(s){const o=document.querySelector(".gallery");o.innerHTML=s.map(r=>`
        <div class="image-card">
            <a href="${r.largeImageURL}">
                <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
            </a>
            <div class="image-info">
                <span>👍 ${r.likes}</span>
                <span>💬 ${r.comments}</span>
                <span>👁 ${r.views}</span>
                <span>⬇ ${r.downloads}</span>
            </div>
        </div>
    `).join("")}function l(s){iziToast.error({title:"Error",message:s,position:"topRight",color:"red"})}const i=document.querySelector("#search-form"),b=document.querySelector(".gallery");let L=new p(".gallery a");i.addEventListener("submit",async s=>{var r;s.preventDefault();const o=(r=i.elements.searchQuery)==null?void 0:r.value.trim();if(!o){l("Please enter a valid search query");return}b.innerHTML="",c.show({title:"Searching...",message:"Fetching images from Pixabay",color:"blue"});try{const n=await y(o);n.length===0?c.show({title:"No results found",message:"Try a different search term",color:"red"}):(w(n),L.refresh())}catch{l("An error occurred while fetching images. Please try again.")}i.reset()});
//# sourceMappingURL=index.js.map

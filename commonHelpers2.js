import{S as d,N as l,A as a}from"./assets/vendor-ff0ac405.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();new d(".swiper",{direction:"horizontal",loop:!0,slidesPerView:1,spaceBetween:16,breakpoints:{1200:{slidesPerView:3,spaceBetween:24}},modules:[l],navigation:{nextEl:".reviews-next-btn",prevEl:".reviews-prev-btn"}});const i=document.querySelector(".cookies-modal"),u=document.querySelector(".cookies-accept-btn"),f=document.querySelector(".cookies-decline-btn");document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("cookieAccepted")||m(),u.addEventListener("click",c),f.addEventListener("click",c)});function m(){i.classList.add("cookies-modal-active"),document.body.classList.add("no-scroll")}function c(){i.classList.remove("cookies-modal-active"),document.body.classList.remove("no-scroll"),localStorage.setItem("cookieAccepted","true")}document.addEventListener("DOMContentLoaded",function(){new a(".accordion-container",{duration:400,showMultiple:!0})});
//# sourceMappingURL=commonHelpers2.js.map

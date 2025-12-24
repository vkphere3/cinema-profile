(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const l=[{title:"The Passenger",role:"Screenwriter/Director",image:"/assets/the-passenger.jpg",tags:["Film","Fiction","2023"],award:"Award Winner",link:"https://youtu.be/z920EHT4b60?si=28EeudXuT4WfGKGW"},{title:"The Khalbali Records",role:"Director's Assistant",image:"/assets/khalbali-records.jpg",tags:["OTT Series","JioCinema"],award:"Now Streaming",link:"https://www.sonyliv.com"},{title:"Saved by the bell",role:"Screenwriter/Director",image:"/assets/saved-by-the-bell.jpg",tags:["Film","IFP 50h Challenge"],award:"Award Winner",link:"https://youtu.be/CGNMDnrNrJU?si=k_jFlK3gVn7xZh6m"},{title:"Prachchhann",role:"Screenwriter/Director",image:"/assets/prachchhann.jpg",tags:["Film"],award:null,link:"https://youtu.be/QyYJ2eQmFCk?si=9JpumR2bxtwzATDa"}],c=document.getElementById("works-grid");l.forEach(t=>{const r=document.createElement("a");r.href=t.link,r.target="_blank",r.rel="noopener noreferrer",r.className="work-card",r.innerHTML=`
    <div class="card-image-container">
      <img src="${t.image}" alt="${t.title} Poster">
      <div class="card-overlay">
        <div class="card-text">
            <h3>${t.title}</h3>
            <p class="role">${t.role}</p>
        </div>
        <div class="card-meta">
            <div class="tags">
                ${t.tags.map(a=>`<span class="tag">${a}</span>`).join("")}
            </div>
            ${t.award?`<span class="award-badge">🏆 ${t.award}</span>`:""}
        </div>
      </div>
    </div>
  `,c.appendChild(r)});document.getElementById("hero-bg-target").style.backgroundImage="url('/assets/hero-bg.png')";const d=document.getElementById("about-img-target"),n=document.createElement("img");n.src="/assets/profile.png";n.alt="Vikash Kumar";d.appendChild(n);const g={threshold:.1,rootMargin:"0px 0px -50px 0px"},m=new IntersectionObserver(t=>{t.forEach(r=>{r.isIntersecting&&r.target.classList.add("visible")})},g);document.querySelectorAll(".fade-in, .fade-in-delay, .fade-in-delay-2, .fade-in-scroll").forEach(t=>{m.observe(t)});

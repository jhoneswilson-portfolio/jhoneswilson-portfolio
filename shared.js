/* shared.js */
(function(){
  // ── Cursor ────────────────────────────────
  const dot  = document.querySelector('.cur');
  const ring = document.querySelector('.cur-r');
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove',e=>{
    mx=e.clientX; my=e.clientY;
    dot.style.left=mx+'px'; dot.style.top=my+'px';
  });
  (function loop(){
    rx+=(mx-rx)*.1; ry+=(my-ry)*.1;
    ring.style.left=rx+'px'; ring.style.top=ry+'px';
    requestAnimationFrame(loop);
  })();
  document.querySelectorAll('a,button,.ci,.btn,.tag,.nav-a').forEach(el=>{
    el.addEventListener('mouseenter',()=>ring.classList.add('h'));
    el.addEventListener('mouseleave',()=>ring.classList.remove('h'));
  });

  // ── Nav sticky ────────────────────────────
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll',()=>nav.classList.toggle('stuck',scrollY>20));

  // ── Mobile menu ───────────────────────────
  window.toggleMob = function(){
    document.querySelector('.mob-nav').classList.toggle('open');
  };

  // ── Reveal on scroll ──────────────────────
  const ro = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('v'); });
  },{threshold:.06, rootMargin:'0px 0px -28px 0px'});
  document.querySelectorAll('.rv').forEach(el=>ro.observe(el));

  // ── Lightbox ──────────────────────────────
  window.openLB = function(src){
    const lb = document.getElementById('lb');
    lb.querySelector('img').src = src;
    lb.classList.add('open');
    document.body.style.overflow='hidden';
  };
  window.closeLB = function(){
    document.getElementById('lb').classList.remove('open');
    document.body.style.overflow='';
  };
  document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeLB(); });
})();

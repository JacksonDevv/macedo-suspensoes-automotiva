<<<<<<< HEAD
const elements = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0) scale(1)";
    }
  });
}, { threshold: 0.15 });

elements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(80px) scale(0.95)";
  el.style.transition = "all 0.8s ease";
  observer.observe(el);
=======
const elements = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0) scale(1)";
    }
  });
}, { threshold: 0.15 });

elements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(80px) scale(0.95)";
  el.style.transition = "all 0.8s ease";
  observer.observe(el);
>>>>>>> 25388c2d9683a0d9847f7afe194b49243fc2afbb
});
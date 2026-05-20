// COUNTER ANIMATION
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

  const update = () => {

    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const increment = target / 100;

    if(count < target){

      counter.innerText = Math.ceil(count + increment);

      setTimeout(update,20);

    }else{

      counter.innerText = target;

    }

  };

  update();

});

// TIMELINE EXPAND
document.querySelectorAll(".timeline-item").forEach(item => {

  item.addEventListener("click",()=>{

    item.querySelector("p").classList.toggle("hidden");

  });

});

// SCROLL ANIMATION
const observer = new IntersectionObserver(entries=>{

  entries.forEach(entry=>{

    if(entry.isIntersecting){

      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0px)";

    }

  });

});

document.querySelectorAll(".card,.timeline-item,.gallery img,.trophy-box").forEach(el=>{

  el.style.opacity = 0;
  el.style.transform = "translateY(100px)";
  el.style.transition = "1s";

  observer.observe(el);

});


// THEME TOGGLE// DARK/LIGHT MODE
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click",()=>{

  document.body.classList.toggle("light-mode");

  // CHANGE ICON
  if(document.body.classList.contains("light-mode")){

    themeToggle.innerHTML = "🌙";

  }else{

    themeToggle.innerHTML = "☀️";

  }

});
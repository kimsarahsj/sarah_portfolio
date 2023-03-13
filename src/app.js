var textWrapper = document.querySelector(".typing .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /([^\x00-\x90]|\w)/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".typing .line",
    scaleY: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 800,
  })
  .add({
    targets: ".typing .line",
    translateX: [
      0,
      document.querySelector(".typing .letters").getBoundingClientRect().width +
        10,
    ],
    easing: "easeOutExpo",
    duration: 800,
    delay: 100,
  })
  .add({
    targets: ".typing .letter",
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 700,
    offset: "-=775",
    delay: (el, i) => 34 * (i + 1),
  })
  .add({
    targets: ".typing",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

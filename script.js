let div = document.querySelector(".div");
div.addEventListener("mousemove", (e) => {
  let rect = e.target.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;
  div.style.setProperty("--x", x + "px");
  div.style.setProperty("--y", y + "px");
  console.log(x);
  console.log(y);
});

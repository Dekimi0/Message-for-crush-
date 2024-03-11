const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", function(e)
cursor.computedStyleMap.left = (e.x-10)+"px;
cursor.computedStyleMap.top = (e.x-10)+"px;"
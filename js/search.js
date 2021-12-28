const icon = document.querySelector(".icon");
const search = document.querySelector(".search-wrap");
icon.onclick = function () {
    search.classList.toggle('active');
}
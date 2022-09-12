document.querySelector(".form-control").addEventListener("click", function(event){
    document.querySelector(".data").style.display = "none"
    document.querySelector("#data2").style.display = "none"
});


document.querySelector(".result-grid").style.display = "none"
document.querySelector(".search-list").addEventListener("click", function(e){
    document.querySelector(".result-grid").style.display = "block"
});

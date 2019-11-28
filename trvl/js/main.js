"use strict"
const li=[...document.getElementsByClassName("group-li")]
const eur=document.getElementsByClassName("eur")[0];
li.forEach(function(Secilmis){
  
  Secilmis.addEventListener("click",function(e){
      e.preventDefault()
      const  preactive=document.querySelector(".group-li.active1");
      preactive.classList.remove("active1");
      Secilmis.classList.add("active1")
      
       let id= Secilmis.getAttribute("id")
       let  clasAdi = "." + id;
   
$(".divs.active").removeClass("active").addClass("d-none");

$(clasAdi).removeClass("d-none").addClass("active");
  })
})

eur.addEventListener("click",function(){
    document.getElementsByClassName("money-select")[0].classList.toggle("d-none")
})
//to close coupon on top
var closebar = document.getElementById("closebar")
var coupenoffer = document.getElementById("coupenoffer")

closebar.addEventListener("click",function(){
    coupenoffer.style.display="none"
})


// to move advertisement image

var adimg1 = document.getElementById("adimg1")
var adimg2 = document.getElementById("adimg2")
var rightarrow = document.getElementById("rightarrow")
var leftarrow = document.getElementById("leftarrow")

rightarrow.addEventListener("click",function(){
    adimg1.style.left="-100%"
    adimg2.style.right="0%"
})

leftarrow.addEventListener("click",function(){
    adimg1.style.left="0%"
    adimg2.style.right="-100%"
})
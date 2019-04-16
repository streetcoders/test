var checkerAnim = false;
function animatingMove(which,x,y){
	which.style.top = x;
	which.style.left = y;
}
$(document).ready(function(){
    $(".menu").click(function(){
        $(".keep").toggleClass("opacity");
        $(".contacts").toggleClass("opacity");
    });
    $(".keep").hover(function(){
        $(".keep").toggleClass("width");
    });
	$("article").click(function(){
		if ($(".keep").hasClass("opacity") == false){
			$(".keep").toggleClass("opacity");
			$(".contacts").toggleClass("opacity");
		}
	});
	
    $(".contacts").hover(function(){
    	if (!checkerAnim) {
    		checkerAnim = !checkerAnim;
    	setTimeout(function(){animatingMove(document.getElementById('first-developer'),"-70px","calc(50% - 25px)")}, 50);
    	setTimeout(function(){animatingMove(document.getElementById('second-developer'),"-60px","25px")}, 150);
    	setTimeout(function(){animatingMove(document.getElementById('third-developer'),"-30px","-20px")}, 350);
    	setTimeout(function(){animatingMove(document.getElementById('fourth-developer'),"-60px","125px")}, 250);
    	setTimeout(function(){animatingMove(document.getElementById('fifth-developer'),"-30px","170px")}, 450);
    }else{
    	checkerAnim = !checkerAnim;
    	setTimeout(function(){animatingMove(document.getElementById('first-developer'),"50px","calc(50% - 25px)")}, 50);
    	setTimeout(function(){animatingMove(document.getElementById('second-developer'),"50px","calc(50% - 25px)")}, 150);
    	setTimeout(function(){animatingMove(document.getElementById('third-developer'),"50px","calc(50% - 25px)")}, 350);
    	setTimeout(function(){animatingMove(document.getElementById('fourth-developer'),"50px","calc(50% - 25px)")}, 250);
    	setTimeout(function(){animatingMove(document.getElementById('fifth-developer'),"50px","calc(50% - 25px)")}, 450);
    }});
	
});
var mq = window.matchMedia("(min-width: 767px)");

function changeoptimusimg(){	
	$(".optimusThumbnail").attr("src","images/Optimus_569x240.png");
}

function resetoptimusimg(){
	$(".optimusThumbnail").attr("src","images/Optimus_569x240_bw.jpg");
}

function changetriffleimg(){	
	$(".triffleThumbnail").attr("src","images/Triffle_569x240.png");
}

function resettriffleimg(){
	$(".triffleThumbnail").attr("src","images/Triffle_569x240_bw.jpg");
}

function changevogueimg(){	
	$(".vogueThumbnail").attr("src","images/Vogue_569x240.png");
}

function resetvogueimg(){
	$(".vogueThumbnail").attr("src","images/Vogue_569x240_bw.jpg");
}

function changeairvitaminimg(){	
	$(".airvitaminThumbnail").attr("src","images/AirVitamin_569x240.png");
}

function resetairvitaminimg(){
	$(".airvitaminThumbnail").attr("src","images/AirVitamin_569x240_bw.jpg");
}

function changeoptimushrcolor(){	
	$(".optimushr").css("border-color","#000000");

}

function resetoptimushrcolor(){	
	$(".optimushr").css("border-color","#eee");
}

function changetrifflehrcolor(){	
	$(".trifflehr").css("border-color","#000000");
}

function resettrifflehrcolor(){	
	$(".trifflehr").css("border-color","#eee");
}

function changeairvitaminhrcolor(){	
	$(".airvitaminhr").css("border-color","#000000");
}

function resetairvitaminhrcolor(){	
	$(".airvitaminhr").css("border-color","#eee");
}

function changechiefhrcolor(){	
	$(".chiefhr").css("border-color","#000000");
}

function resetchiefhrcolor(){	
	$(".chiefhr").css("border-color","#eee");
}

function changevoguehrcolor(){	
	$(".voguehr").css("border-color","#000000");
}

function resetvoguehrcolor(){	
	$(".voguehr").css("border-color","#eee");
}

function displayoptimusbutton() {
	if(mq.matches){
		$(".optimusbutton").css("display","block");
		$(".trifflebutton").css("display","none");
		$(".voguebutton").css("display","none");
		$(".chiefbutton").css("display","none");
		$(".airvitaminbutton").css("display","none");
	}
	else
	{
		$(".optimusbutton").css("display","none");
		$(".trifflebutton").css("display","none");
		$(".voguebutton").css("display","none");
		$(".chiefbutton").css("display","none");
		$(".airvitaminbutton").css("display","none");	
	}
}

function displaytrifflebutton() {
	if(mq.matches){
		$(".optimusbutton").css("display","none");
		$(".trifflebutton").css("display","block");
		$(".voguebutton").css("display","none");
		$(".chiefbutton").css("display","none");
		$(".airvitaminbutton").css("display","none");
	}
	else
	{
		$(".optimusbutton").css("display","none");
		$(".trifflebutton").css("display","none");
		$(".voguebutton").css("display","none");
		$(".chiefbutton").css("display","none");
		$(".airvitaminbutton").css("display","none");	
	}
}

function displayvoguebutton() {
	if(mq.matches){
		$(".optimusbutton").css("display","none");
		$(".trifflebutton").css("display","none");
		$(".voguebutton").css("display","block");
		$(".chiefbutton").css("display","none");
		$(".airvitaminbutton").css("display","none");
	}
	else
	{
		$(".optimusbutton").css("display","none");
		$(".trifflebutton").css("display","none");
		$(".voguebutton").css("display","none");
		$(".chiefbutton").css("display","none");
		$(".airvitaminbutton").css("display","none");	
	}
}

function displaychiefbutton() {
	if(mq.matches){
		$(".optimusbutton").css("display","none");
		$(".trifflebutton").css("display","none");
		$(".voguebutton").css("display","none");
		$(".chiefbutton").css("display","block");
		$(".airvitaminbutton").css("display","none");
	}
	else
	{
		$(".optimusbutton").css("display","none");
		$(".trifflebutton").css("display","none");
		$(".voguebutton").css("display","none");
		$(".chiefbutton").css("display","none");
		$(".airvitaminbutton").css("display","none");	
	}
}

function displayairvitaminbutton() {
	if(mq.matches){
		$(".optimusbutton").css("display","none");
		$(".trifflebutton").css("display","none");
		$(".voguebutton").css("display","none");
		$(".chiefbutton").css("display","none");
		$(".airvitaminbutton").css("display","block");
	}
	else
	{
		$(".optimusbutton").css("display","none");
		$(".trifflebutton").css("display","none");
		$(".voguebutton").css("display","none");
		$(".chiefbutton").css("display","none");
		$(".airvitaminbutton").css("display","none");	
	}
}
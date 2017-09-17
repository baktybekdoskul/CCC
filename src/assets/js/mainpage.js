var prevPost;
var mostRecentPost;

$(document).ready(function(){
	window.onscroll = function(ev) {
		//console.log("scrolling");
        //console.log("scroll top: " + (window.innerHeight + window.scrollY));
        //console.log("inner Height " + $('#posts').position().top);		
        //console.log("offset " + $('#posts').innerHeight());		
	    if ((window.innerHeight + window.scrollY) >= $('#posts').position().top + $('#posts').innerHeight()) {
	        getPosts(offset, blocksize);
	    }
	};
});





function sendNewPostRequest(){
	var text =  $('#post').val().trim();
	if (text == ""){
		$('#postSuccessMsg').addClass('hidden');
		$('#postErrorMsg').html("Введите ваш прогноз.");
	}
	else if (text == prevPost){
		$('#postSuccessMsg').addClass('hidden');
		$('#postErrorMsg').html('Вы ранее публиковали такой же прогноз.');
	}
	else{
		$.ajax({
			type: "POST",
			url: base_url + "/main/addPost",
			data: {post: text},
			dataType: "html",
			success: function(msg){
				if(parseInt(msg) != 0){
					$('#postErrorMsg').html('');
					$('#forTest').append('sendNewPostRequest');
					$('#postSuccessMsg').removeClass('hidden');
					prevPost = text;
				}
			}
		});

	}
}


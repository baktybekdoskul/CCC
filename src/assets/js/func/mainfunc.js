var base_url = "http://test.ccclub.kz";
var offset = 0;
var blocksize = 10;
var prevPost;
var mostRecentPost;
function getHeader(_to_put){
	console.log("getHeader() - start: _to_put: " + _to_put);
	$.ajax({
		type: "GET",
		url: base_url + "/main/getHeader",
		data: {},
		dataType: "html",
		success: function(msg){
			if (parseInt(msg) != 0){
				$(_to_put).html(msg);
			}
		},
		error: function(msg1, msg2){
			console.log(msg1 + " " + msg2);
		}
	});
	console.log("getHeader() - end");
}
function getPosts(_offset, _blocksize, _to_put){
	console.log("getPosts() - start");
	$.ajax({
		type: "GET",
		url: base_url + "/main/getPosts",
		data: {offset: _offset, blocksize: _blocksize},
		dataType: "html",
		success: function(msg){
			offset += _blocksize;
			if (parseInt(msg) != 0){
				$(_to_put).append(msg);
			}
		},
		error: function(msg1, msg2){
			console.log(msg1 + " " + msg2);
		}
	});	
	console.log("getPosts() - end");
}

function getPostsOfUser(_offset, _blocksize, _to_put, _of_user){
	$.ajax({
		type: "GET",
		url: base_url + "/main/getPostsOfUser",
		data: {offset: _offset, blocksize: _blocksize, ofuser: _of_user},
		dataType: "html",
		success: function(msg){
			offset += _blocksize;
			if (parseInt(msg) != 0){
				$(_to_put).append(msg);
			}
		},
		error: function(msg1, msg2){
			console.log(msg1 + " " + msg2);
		}
	});	
	console.log("getPosts() - end");
}
function getSidebar(_to_put){
	console.log("getSideBar() - start");
	$.ajax({
		type: "GET",
		url: base_url + "/main/getSidebar",
		data: {},
		dataType: "html",
		success: function(msg){
			console.log(msg);
			if (parseInt(msg) != 0){
				$(_to_put).html(msg);
			}
		},
		error: function(msg1, msg2){
			console.log(msg1 + " " + msg2);
		}
	});	
	console.log("getSidebar() - end");
}
function getCities(_to_put, country_id, city_id = null){
	console.log("getCities - start: " + country_id + " - " +  city_id);
	$.ajax({
		type: "GET",
		url: base_url + "/profile/getCitiesOfCountry",
		data: {country_id: country_id, city_id: city_id},
		dataType: "html",
		success: function(msg){
			$(_to_put).html(msg);
		},
		error: function(msg1, msg2){
			console.log(msg1 + " " + msg2);
		}
	});
	console.log("getCities() - end")
}
function addPost(_text){

}


function like(id){
	if ($('#voteup'+id).hasClass('voice-active')){
		voice(id, 0);
		$('#voteup'+id).removeClass('voice-active');	
	}
	else{
		voice(id, 1);
		$('#votedown'+id).removeClass('voice-active');
		$('#voteup'+id).addClass('voice-active');
	}
}

function dislike(id){
	if ($('#votedown'+id).hasClass('voice-active')){
		voice(id, 0);
		$('#votedown'+id).removeClass('voice-active');	
	}
	else{
		voice(id, -1);
		$('#voteup'+id).removeClass('voice-active');
		$('#votedown'+id).addClass('voice-active');
	}
}

function voice(post_id, voice_value){
		$.ajax({
			type: "POST",
			url: base_url + "/main/vote/",
			data: {id: post_id, value:voice_value},
			dataType: "html",
			success: function(msg){
				$('#rating'+post_id).html(msg);		
			},
			error: function(msg1, msg2){
				console.log(msg1 + ' ' + msg2);
			}			
		});	
}

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
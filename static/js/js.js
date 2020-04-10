$(document).ready(function(){
	$(".villager").hover(function(){
		var x = $(this).position();
		var name = $(this).attr('class').split(' ')[1]
		var nameUpperCase = name.charAt(0).toUpperCase() + name.slice(1)
	 	$('<img class="chatBox" src="/static/chatBox.png">').appendTo("body");
	 	$('<div class="chatBoxText '+ name +'"></div>').appendTo("body");
	 	$('<div class="chatBoxName">' + nameUpperCase + '</div>').appendTo("body");
	 	$('<img class="chatBoxImg" src="/static/'+ nameUpperCase +'.png">').appendTo("body");
	  	$(".chatBox").css("left", x.left-30);
	  	$(".chatBox").css("top", x.top-300);
	  	$(".chatBoxText").css("left", x.left+50);
	  	$(".chatBoxText").css("top", x.top-130);
	  	$(".chatBoxName").css("left", x.left+310);
	  	$(".chatBoxName").css("top", x.top-45);
	  	$(".chatBoxImg").css("left", x.left+292);
	  	$(".chatBoxImg").css("top", x.top-127);
	  }, function(){
	  $(".chatBox").remove();
	  $(".chatBoxText").remove();
	  $(".chatBoxName").remove();
	  $(".chatBoxImg").remove();
	});

	$("#myRange").change(function(){
		$(".tmp").remove();
		$(".value").remove();
  		var value = document.getElementById("myRange").value;
		var hours = Math.floor(value/6)+6;
		var minutes = (value%6)
		$('<h1 class="tmp">' + hours + ':' + minutes + '0</h1>').appendTo("body");
		//$('<h1 class="value">'+ value +'</h1>').appendTo("body");
	});


	$(".villager").hover(function(){
	  George();
	  Wizard();
	  Willy();
	  Emily();
	  Clint();
	  Kent();
	  Marnie();
	  Pam();
	  Robin();
	  Caroline();
	}, function(){
	  $(".chatBox").remove();
	});

	$("#myRange").change(function(){
	  George();
	  Wizard();
	  Willy();
	  Emily();
	  Clint();
	  Kent();
	  Marnie();
	  Pam();
	  Robin();
	  Caroline();
	});


});


function George(){
	var time = document.getElementById("myRange").value;
		if (time <= 12){
			$(".george.villager").css({"top": "560px", "left": "625px"});
			$(".chatBoxText.george").html("In his room");
		}
		else if (time > 12 && time <= 54){
			$(".george.villager").css({"top": "560px", "left": "625px"});
			$(".chatBoxText.george").html("In the kitchen");
		}
		else if (time > 54 && time <= 84){
			$(".george.villager").css({"top": "560px", "left": "625px"});
			$(".chatBoxText.george").html("In the living room");
		}
		else{
			$(".george.villager").css({"top": "560px", "left": "625px"});
			$(".chatBoxText.george").html("In his room");
		}

		if($("#date").val()%7 == 0){
			if (time <= 36){
				$(".george.villager").css({"top": "560px", "left": "625px"});
				$(".chatBoxText.george").html("At home");
			}
			else if (time > 36 && time <= 54){
				$(".george.villager").css({"top": "520px", "left": "555px"});
				$(".chatBoxText.george").html("At the Statue of Yoba inside Pierre's home");
			}
			else if (time > 54 && time <= 60){
				$(".george.villager").css({"top": "560px", "left": "625px"});
				$(".chatBoxText.george").html("On the way home");
			}
			else if (time > 60 && time <= 90) {
				$(".george.villager").css({"top": "560px", "left": "625px"});
				$(".chatBoxText.george").html("Watching TV in living room");
			}
			else{
				$(".george.villager").css({"top": "560px", "left": "625px"});
				$(".chatBoxText.george").html("In his room");
			}
		}

		if($("#date").val()%7 == 5 && $('#season').find(":selected").text() == "Summer"){
			if (time <= 36){
				$(".george.villager").css({"top": "560px", "left": "625px"});
				$(".chatBoxText.george").html("At home");
			}
			else if (time > 36 && time <= 54){
				$(".george.villager").css({"top": "560px", "left": "600px"});
				$(".chatBoxText.george").html("Sits under the tree left of his house");
			}
			else{
				$(".george.villager").css({"top": "560px", "left": "625px"});
				$(".chatBoxText.george").html("At home for the rest of the day");
			}
		}

		if($("#date").val() == 17 && $('#season').find(":selected").text() == "Winter"){
			if (time <= 62){
				$(".george.villager").css({"top": "560px", "left": "625px"});
				$(".chatBoxText.george").html("At home");
			}
			else if (time > 62 && time <= 106){
				$(".george.villager").css({"top": "935px", "left": "555px"});
				$(".chatBoxText.george").html("Rolls to the Night Market");
			}
			else{
				$(".george.villager").css({"top": "560px", "left": "625px"});
				$(".chatBoxText.george").html("Leaves the Night Market to return home");
			}
		}

		if($("#date").val() == 27){
			if (time <= 28){
				$(".george.villager").css({"top": "560px", "left": "625px"});
				$(".chatBoxText.george").html("At home");
			}
			else if (time > 28 && time <= 46){
				$(".george.villager").css({"top": "520px", "left": "525px"});
				$(".chatBoxText.george").html("In Harvey's Clinic waiting room");
			}
			else if (time > 46 && time <= 62){
				$(".george.villager").css({"top": "520px", "left": "525px"});
				$(".chatBoxText.george").html("Moves to exam room inside Clinic");
			}
			else if (time > 62 && time <= 86){
				$(".george.villager").css({"top": "560px", "left": "625px"});
				$(".chatBoxText.george").html("Leaves Clinic for home");
			}
			else {
				$(".george.villager").css({"top": "560px", "left": "625px"});
				$(".chatBoxText.george").html("Goes to his bedroom for the night");
			}
		}
}

function Wizard(){
	$(".chatBoxText.wizard").html("This purple lad is always home");
}

function Willy(){
	var time = document.getElementById("myRange").value;
	if (time <= 18){
		$(".willy.villager").css({"top": "940px", "left": "620px"});
		$(".chatBoxText.willy").html("Wakes up, goes fishing outside his fish shop");
	}
	else if (time > 18 && time <= 66){
		$(".willy.villager").css({"top": "925px", "left": "575px"});
		$(".chatBoxText.willy").html("Starts working at the counter in the fish shop");
	}
	else if(time > 66 && time <= 96){
		$(".willy.villager").css({"top": "940px", "left": "555px"});
		$(".chatBoxText.willy").html("Leaves the fish shop, goes out to fish on the beach");
	}
	else{
		$(".willy.villager").css({"top": "925px", "left": "575px"});
		$(".chatBoxText.willy").html("Leaves the beach to head home");
	}

	if($("#date").val()%7 == 5 || $('#season').find(":selected").text() == "Winter"){
		if (time <= 18){
			$(".willy.villager").css({"top": "940px", "left": "620px"});
			$(".chatBoxText.willy").html("Wakes up, goes fishing outside his fish shop");
		}
		else if (time > 18 && time <= 66){
			$(".willy.villager").css({"top": "925px", "left": "575px"});
			$(".chatBoxText.willy").html("Starts working at the counter in the fish shop");
		}
		else if(time > 66 && time <= 104){
			$(".willy.villager").css({"top": "590px", "left": "550px"});
			$(".chatBoxText.willy").html("Leaves the fish shop, walks over to the saloon");
		}
		else{
			$(".willy.villager").css({"top": "925px", "left": "575px"});
			$(".chatBoxText.willy").html("Leaves the saloon to head home");
		}
	}

	if($("#date").val()%7 == 6){
		if (time <= 48){
			$(".willy.villager").css({"top": "735px", "left": "280px"});
			$(".chatBoxText.willy").html("Walks through town to go fishing at the river outside Leah's cottage");
		}
		else if (time > 48 && time <= 66){
			$(".willy.villager").css({"top": "733px", "left": "660px"});
			$(".chatBoxText.willy").html("Heads into Pelican Town for more river fishing");
		}
		else if(time > 66 && time <= 104){
			$(".willy.villager").css({"top": "590px", "left": "550px"});
			$(".chatBoxText.willy").html("Leaves the fish shop, walks over to the saloon");
		}
		else{
			$(".willy.villager").css({"top": "925px", "left": "575px"});
			$(".chatBoxText.willy").html("Leaves the saloon to head home");
		}
	}

	if($("#date").val() == 9 && $('#season').find(":selected").text() == "Spring"){
		if (time <= 18){
			$(".willy.villager").css({"top": "940px", "left": "620px"});
			$(".chatBoxText.willy").html("Wakes up, goes fishing outside his fish shop");
		}
		else if (time > 18 && time <= 24){
			$(".willy.villager").css({"top": "925px", "left": "575px"});
			$(".chatBoxText.willy").html("Starts working at the counter in the fish shop");
		}
		else if(time > 24 && time <= 66){
			$(".willy.villager").css({"top": "520px", "left": "525px"});
			$(".chatBoxText.willy").html("Walks over to the Harvey's Clinic");
		}
		else if(time > 66 && time <= 104){
			$(".willy.villager").css({"top": "590px", "left": "550px"});
			$(".chatBoxText.willy").html("Leaves the Harvey's Clinic, walks over to the saloon");
		}
		else{
			$(".willy.villager").css({"top": "925px", "left": "575px"});
			$(".chatBoxText.willy").html("Leaves the saloon to head home");
		}
	}


}

function Emily(){
	var time = document.getElementById("myRange").value;
	if (time <= 18){
		$(".emily.villager").css({"top": "680px", "left": "465px"});
		$(".chatBoxText.emily").html("In her bedroom");
	}
	else if (time > 18 && time <= 54){
		$(".emily.villager").css({"top": "680px", "left": "465px"});
		$(".chatBoxText.emily").html("Leaves bedroom to stand in living room");
	}
	else if (time > 54 && time <= 84){
		$(".emily.villager").css({"top": "580px", "left": "550px"});
		$(".chatBoxText.emily").html("Leaves home to work at The Stardrop Saloon");
	}
	else{
		$(".emily.villager").css({"top": "680px", "left": "465px"});
		$(".chatBoxText.emily").html("Goes home for the night");
	}

	if($("#date").val()%7 == 2){
		if (time <= 24){
			$(".emily.villager").css({"top": "680px", "left": "465px"});
			$(".chatBoxText.emily").html("In her bedroom");
		}
		else if (time > 24 && time <= 60){
			$(".emily.villager").css({"top": "520px", "left": "555px"});
			$(".chatBoxText.emily").html("Leaves home to attend aerobics at Pierre's Store");
		}
		else if (time > 60 && time <= 111){
			$(".emily.villager").css({"top": "580px", "left": "550px"});
			$(".chatBoxText.emily").html("Leaves Pierre's to work at The Stardrop Saloon");
		}
		else{
			$(".emily.villager").css({"top": "680px", "left": "465px"});
			$(".chatBoxText.emily").html("Goes home for the night");
		}
	}

	if($("#date").val() == 11 && $('#season').find(":selected").text() == "Winter"){
		if (time <= 18){
			$(".emily.villager").css({"top": "680px", "left": "465px"});
			$(".chatBoxText.emily").html("In her bedroom");
		}
		else if (time > 18 && time <= 27){
			$(".emily.villager").css({"top": "520px", "left": "555px"});
			$(".chatBoxText.emily").html("Leaves home for Harvey's Clinic");
		}
		else if (time > 60 && time <= 111){
			$(".emily.villager").css({"top": "580px", "left": "550px"});
			$(".chatBoxText.emily").html("Leaves clinic to work at The Stardrop Saloon");
		}
		else{
			$(".emily.villager").css({"top": "680px", "left": "465px"});
			$(".chatBoxText.emily").html("Goes home for the night");
		}
	}

	if($("#date").val()%7 == 15 && $('#season').find(":selected").text() == "Winter"){
		if (time <= 24){
			$(".emily.villager").css({"top": "680px", "left": "465px"});
			$(".chatBoxText.emily").html("In her bedroom");
		}
		else if (time > 24 && time <= 60){
			$(".emily.villager").css({"top": "935px", "left": "555px"});
			$(".chatBoxText.emily").html("Leaves home to attend the Night Market");
		}
		else{
			$(".emily.villager").css({"top": "680px", "left": "465px"});
			$(".chatBoxText.emily").html("Goes home for the night");
		}
	}
}

function Clint(){
	var time = document.getElementById("myRange").value;
	if (time <= 18){
		$(".clint.villager").css({"top": "640px", "left": "790px"});
		$(".chatBoxText.clint").html("In his bedroom");
	}
	else if (time > 18 && time <= 66){
		$(".clint.villager").css({"top": "640px", "left": "790px"});
		$(".chatBoxText.clint").html("Behind counter of Blacksmith");
	}
	else if (time > 66 && time <= 78){
		$(".clint.villager").css({"top": "640px", "left": "790px"});
		$(".chatBoxText.clint").html("Leaves counter and moves to anvil");
	}
	else if (time > 78 && time <= 108){
		$(".clint.villager").css({"top": "570px", "left": "550px"});
		$(".chatBoxText.clint").html("Leaves Blacksmith and heads to The Saloon");
	}
	else{
		$(".clint.villager").css({"top": "640px", "left": "790px"});
		$(".chatBoxText.clint").html("Leaves The Saloon and heads home");
	}

	if($("#date").val() == 15 && $('#season').find(":selected").text() == "Winter"){
		if (time <= 18){
			$(".clint.villager").css({"top": "640px", "left": "790px"});
			$(".chatBoxText.clint").html("In his bedroom");
		}
		else if (time > 18 && time <= 66){
			$(".clint.villager").css({"top": "640px", "left": "790px"});
			$(".chatBoxText.clint").html("Behind counter of Blacksmith");
		}
		else if (time > 66 && time <= 108){
			$(".clint.villager").css({"top": "935px", "left": "565px"});
			$(".chatBoxText.clint").html("Leaves Blacksmith to attend Night Market");
		}
		else{
			$(".clint.villager").css({"top": "640px", "left": "790px"});
			$(".chatBoxText.clint").html("Returns to Blacksmith");
		}
	}

	if($("#date").val() == 16 && $('#season').find(":selected").text() == "Winter"){
		if (time <= 18){
			$(".clint.villager").css({"top": "640px", "left": "790px"});
			$(".chatBoxText.clint").html("In his bedroom");
		}
		else if (time > 18 && time <= 27){
			$(".clint.villager").css({"top": "640px", "left": "790px"});
			$(".chatBoxText.clint").html("Behind counter of Blacksmith");
		}
		else if (time > 27 && time <= 60){
			$(".clint.villager").css({"top": "520px", "left": "525px"});
			$(".chatBoxText.clint").html("Leaves Blacksmith to go to Harvey's Clinic");
		}
		else if (time > 60 && time <= 108){
			$(".clint.villager").css({"top": "570px", "left": "550px"});
			$(".chatBoxText.clint").html("Leaves Clinic for The Saloon");
		}
		else{
			$(".clint.villager").css({"top": "640px", "left": "790px"});
			$(".chatBoxText.clint").html("Returns home");
		}
	}
}

function Kent(){
	var time = document.getElementById("myRange").value;
	if (time <= 6){
		$(".kent.villager").css({"top": "670px", "left": "410px"});
		$(".chatBoxText.kent").html("In his bedroom");
	}
	else if (time > 6 && time <= 27){
		$(".kent.villager").css({"top": "734px", "left": "550px"});
		$(".chatBoxText.kent").html("Stands under the tree");
	}
	else if (time > 27 && time <= 48){
		$(".kent.villager").css({"top": "670px", "left": "410px"});
		$(".chatBoxText.kent").html("Returns home");
	}
	else if (time > 48 && time <= 66){
		$(".kent.villager").css({"top": "610px", "left": "440px"});
		$(".chatBoxText.kent").html("Stands under another tree");
	}
	else if (time > 66 && time <= 78){
		$(".kent.villager").css({"top": "670px", "left": "410px"});
		$(".chatBoxText.kent").html("Returns home, stands in entryway");
	}
	else if (time > 78 && time <= 90){
		$(".kent.villager").css({"top": "670px", "left": "410px"});
		$(".chatBoxText.kent").html("Heads to kitchen");
	}
	else if (time > 90 && time <= 102){
		$(".kent.villager").css({"top": "690px", "left": "380px"});
		$(".chatBoxText.kent").html("Stands under yet another tree");
	}
	else{
		$(".kent.villager").css({"top": "670px", "left": "410px"});
		$(".chatBoxText.kent").html("Returns home");
	}

	if($("#date").val()%7 == 5 || $("#date").val()%7 == 6){
		if (time <= 6){
			$(".kent.villager").css({"top": "670px", "left": "410px"});
			$(".chatBoxText.kent").html("In his bedroom");
		}
		else if (time > 6 && time <= 27){
			$(".kent.villager").css({"top": "734px", "left": "550px"});
			$(".chatBoxText.kent").html("Stands under the tree");
		}
		else if (time > 27 && time <= 48){
			$(".kent.villager").css({"top": "670px", "left": "410px"});
			$(".chatBoxText.kent").html("Returns home");
		}
		else if (time > 48 && time <= 66){
			$(".kent.villager").css({"top": "610px", "left": "440px"});
			$(".chatBoxText.kent").html("Stands under another tree");
		}
		else if (time > 66 && time <= 107){
			$(".kent.villager").css({"top": "560px", "left": "550px"});
			$(".chatBoxText.kent").html("Goes to The Stardrop Saloon");
		}
		else{
			$(".kent.villager").css({"top": "670px", "left": "410px"});
			$(".chatBoxText.kent").html("Returns home");
		}
	}

	if($("#date").val()%7 == 0){
		if (time <= 25){
			$(".kent.villager").css({"top": "670px", "left": "410px"});
			$(".chatBoxText.kent").html("At home");
		}
		else if (time > 25 && time <= 48){
			$(".kent.villager").css({"top": "510px", "left": "555px"});
			$(".chatBoxText.kent").html("Heads to altar room inside Pierre's General Store");
		}
		else if (time > 48 && time <= 60){
			$(".kent.villager").css({"top": "510px", "left": "555px"});
			$(".chatBoxText.kent").html("Moves to Pierre's counter");
		}
		else if (time > 60 && time <= 78){
			$(".kent.villager").css({"top": "670px", "left": "410px"});
			$(".chatBoxText.kent").html("Returns home, stands in entryway");
		}
		else if (time > 78 && time <= 90){
			$(".kent.villager").css({"top": "670px", "left": "410px"});
			$(".chatBoxText.kent").html("Heads to kitchen");
		}
		else if (time > 90 && time <= 102){
			$(".kent.villager").css({"top": "690px", "left": "380px"});
			$(".chatBoxText.kent").html("Stands under yet another tree");
		}
		else{
			$(".kent.villager").css({"top": "670px", "left": "410px"});
			$(".chatBoxText.kent").html("Returns home");
		}
	}
}

function Marnie(){
	var time = document.getElementById("myRange").value;
	if (time <= 18){
		$(".marnie.villager").css({"top": "660px", "left": "275px"});
		$(".chatBoxText.marnie").html("In her bedroom");
	}
	else if (time > 6 && time <= 60){
		$(".marnie.villager").css({"top": "660px", "left": "275px"});
		$(".chatBoxText.marnie").html("Stands behind the counter of her shop");
	}
	else if (time > 60 && time <= 66){
		$(".marnie.villager").css({"top": "660px", "left": "275px"});
		$(".chatBoxText.marnie").html("Goes to her room");
	}
	else if (time > 66 && time <= 102){
		$(".marnie.villager").css({"top": "590px", "left": "570px"});
		$(".chatBoxText.marnie").html("Walks to The Stardrop Saloon");
	}
	else{
		$(".marnie.villager").css({"top": "660px", "left": "275px"});
		$(".chatBoxText.marnie").html("Walks back to her house");
	}

	if($("#date").val()%7 == 1){
		if (time <= 13){
			$(".marnie.villager").css({"top": "660px", "left": "275px"});
			$(".chatBoxText.marnie").html("In her bedroom");
		}
		else if (time > 13 && time <= 36){
			$(".marnie.villager").css({"top": "520px", "left": "555px"});
			$(".chatBoxText.marnie").html("Walks to Pierre's General Store");
		}
		else if (time > 36 && time <= 90){
			$(".marnie.villager").css({"top": "660px", "left": "275px"});
			$(".chatBoxText.marnie").html("Walks back to her house");
		}
		else{
			$(".marnie.villager").css({"top": "660px", "left": "275px"});
			$(".chatBoxText.marnie").html("Walks to her room and goes to bed");
		}
	}

	if($("#date").val()%7 == 2){
		if (time <= 24){
			$(".marnie.villager").css({"top": "660px", "left": "275px"});
			$(".chatBoxText.marnie").html("In her bedroom");
		}
		else if (time > 24 && time <= 60){
			$(".marnie.villager").css({"top": "510px", "left": "555px"});
			$(".chatBoxText.marnie").html("Attends aerobics at Pierre's store");
		}
		else if (time > 60 && time <= 90){
			$(".marnie.villager").css({"top": "660px", "left": "275px"});
			$(".chatBoxText.marnie").html("Walks back to her house");
		}
		else{
			$(".marnie.villager").css({"top": "660px", "left": "275px"});
			$(".chatBoxText.marnie").html("Walks to her room and goes to bed");
		}
	}

	if($("#date").val()%7 == 4){
		if (time <= 18){
			$(".marnie.villager").css({"top": "660px", "left": "275px"});
			$(".chatBoxText.marnie").html("In her bedroom");
		}
		else if (time > 18 && time <= 60){
			$(".marnie.villager").css({"top": "660px", "left": "275px"});
			$(".chatBoxText.marnie").html("Stands behind the counter of her shop");
		}
		else if (time > 60 && time <= 72){
			$(".marnie.villager").css({"top": "660px", "left": "275px"});
			$(".chatBoxText.marnie").html("Closes shop and goes to kitchen");
		}
		else if (time > 72 && time <= 90){
			$(".marnie.villager").css({"top": "660px", "left": "275px"});
			$(".chatBoxText.marnie").html("Leaves the kitchen and walks to her room");
		}
		else{
			$(".marnie.villager").css({"top": "660px", "left": "275px"});
			$(".chatBoxText.marnie").html("Goes to bed");
		}
	}

	if($("#date").val() == 18 && $('#season').find(":selected").text() == "Winter"){
		if (time <= 18){
			$(".marnie.villager").css({"top": "660px", "left": "275px"});
			$(".chatBoxText.marnie").html("In her bedroom");
		}
		else if (time > 18 && time <= 60){
			$(".marnie.villager").css({"top": "520px", "left": "525px"});
			$(".chatBoxText.marnie").html("Takes Jas to Harvey's Clinic");
		}
		else if (time > 60 && time <= 90){
			$(".marnie.villager").css({"top": "660px", "left": "275px"});
			$(".chatBoxText.marnie").html("Leaves clinic and walks back to her house");
		}
		else if (time > 72 && time <= 90){
			$(".marnie.villager").css({"top": "660px", "left": "275px"});
			$(".chatBoxText.marnie").html("Stands in the kitchen");
		}
		else{
			$(".marnie.villager").css({"top": "660px", "left": "275px"});
			$(".chatBoxText.marnie").html("Goes to bed");
		}
	}

	if($("#date").val() == 18 && $('#season').find(":selected").text() == "Autumn"){
		if (time <= 18){
			$(".marnie.villager").css({"top": "660px", "left": "275px"});
			$(".chatBoxText.marnie").html("In her bedroom");
		}
		else if (time > 18 && time <= 60){
			$(".marnie.villager").css({"top": "520px", "left": "525px"});
			$(".chatBoxText.marnie").html("Goes to Harvey's Clinic");
		}
		else if (time > 60 && time <= 90){
			$(".marnie.villager").css({"top": "660px", "left": "275px"});
			$(".chatBoxText.marnie").html("Leaves clinic and walks back to her house");
		}
		else if (time > 72 && time <= 90){
			$(".marnie.villager").css({"top": "660px", "left": "275px"});
			$(".chatBoxText.marnie").html("Stands in the kitchen");
		}
		else{
			$(".marnie.villager").css({"top": "660px", "left": "275px"});
			$(".chatBoxText.marnie").html("Goes to bed");
		}
	}

}

function Pam(){
	var time = document.getElementById("myRange").value;
	if (time <= 15){
		$(".pam.villager").css({"top": "590px", "left": "695px"});
		$(".chatBoxText.pam").html("Lounges on her couch");
	}
	else if (time > 15 && time <= 24){
		$(".pam.villager").css({"top": "450px", "left": "230px"});
		$(".chatBoxText.pam").html("Leaves house and heads to the bus stop");
	}
	else if (time > 24 && time <= 66){
		$(".pam.villager").css({"top": "450px", "left": "230px"});
		$(".chatBoxText.pam").html("Arrives at the bus stop for the afternoon");
	}
	else if (time > 66 && time <= 108){
		$(".pam.villager").css({"top": "580px", "left": "570px"});
		$(".chatBoxText.pam").html("Leaves the bus stop and heads to the saloon");
	}
	else{
		$(".pam.villager").css({"top": "590px", "left": "695px"});
		$(".chatBoxText.pam").html("Leaves saloon and goes home");
	}

	if($("#date").val() == 25 && $('#season').find(":selected").text() == "Spring"){
		if (time <= 33){
			$(".pam.villager").css({"top": "590px", "left": "695px"});
			$(".chatBoxText.pam").html("In her bedroom");
		}
		else if (time > 33 && time <= 60){
			$(".pam.villager").css({"top": "520px", "left": "525px"});
			$(".chatBoxText.pam").html("Heads to the medical clinic");
		}
		else if (time > 60 && time <= 90){
			$(".pam.villager").css({"top": "580px", "left": "570px"});
			$(".chatBoxText.pam").html("Leaves the clinic and heads to the saloon");
		}
		else{
			$(".pam.villager").css({"top": "590px", "left": "695px"});
			$(".chatBoxText.pam").html("Leaves the saloon and heads home for the night");
		}
	}

}

function Robin(){
	var time = document.getElementById("myRange").value;
	if (time <= 18){
		$(".robin.villager").css({"top": "210px", "left": "720px"});
		$(".chatBoxText.robin").html("At home");
	}
	else if (time > 18 && time <= 66){
		$(".robin.villager").css({"top": "210px", "left": "720px"});
		$(".chatBoxText.robin").html("Stands behind the counter of her shop at home");
	}
	else if (time > 66 && time <= 81){
		$(".robin.villager").css({"top": "250px", "left": "780px"});
		$(".chatBoxText.robin").html("Leaves her shop and heads outside to the Mountain area");
	}
	else if (time > 81 && time <= 90){
		$(".robin.villager").css({"top": "210px", "left": "720px"});
		$(".chatBoxText.robin").html("Leaves the Mountain and walks home");
	}
	else{
		$(".robin.villager").css({"top": "210px", "left": "720px"});
		$(".chatBoxText.robin").html("Goes to bed");
	}

	if($("#date").val()%7 == 5){
		if (time <= 18){
			$(".robin.villager").css({"top": "210px", "left": "720px"});
			$(".chatBoxText.robin").html("At home");
		}
		else if (time > 18 && time <= 60){
			$(".robin.villager").css({"top": "210px", "left": "720px"});
			$(".chatBoxText.robin").html("Stands behind the counter of her shop at home");
		}
		else if (time > 60 && time <= 80){
			$(".robin.villager").css({"top": "570px", "left": "570px"});
			$(".chatBoxText.robin").html("Leaves her shop and walks to the Stardrop Saloon");
		}
		else if (time > 80 && time <= 90){
			$(".robin.villager").css({"top": "570px", "left": "570px"});
			$(".chatBoxText.robin").html("At the Stardrop Saloon, dancing with Demetrius");
		}
		else{
			$(".robin.villager").css({"top": "210px", "left": "720px"});
			$(".chatBoxText.robin").html("Leaves the Stardrop Saloon and walks home to go to bed");
		}
	}

	if($("#date").val()%7 == 2){
		if (time <= 21){
			$(".robin.villager").css({"top": "210px", "left": "720px"});
			$(".chatBoxText.robin").html("At home");
		}
		else if (time > 21 && time <= 42){
			$(".robin.villager").css({"top": "500px", "left": "555px"});
			$(".chatBoxText.robin").html("Walks to Pierre's General Store to exercise with Jodi, Caroline, Emily, and Marnie");
		}
		else if (time > 42 && time <= 72){
			$(".robin.villager").css({"top": "500px", "left": "555px"});
			$(".chatBoxText.robin").html("At Pierre's General Store");
		}
		else if (time > 72 && time <= 90){
			$(".robin.villager").css({"top": "210px", "left": "720px"});
			$(".chatBoxText.robin").html("Leaves Pierre's General Store and walks back home");
		}
		else{
			$(".robin.villager").css({"top": "210px", "left": "720px"});
			$(".chatBoxText.robin").html("Goes to bed");
		}
	}

	if($("#date").val() == 18 && $('#season').find(":selected").text() == "Summer"){
		if (time <= 12){
			$(".robin.villager").css({"top": "210px", "left": "720px"});
			$(".chatBoxText.robin").html("At home");
		}
		else if (time > 12 && time <= 60){
			$(".robin.villager").css({"top": "520px", "left": "525px"});
			$(".chatBoxText.robin").html("Leaves home and walks to Harvey's Clinic");
		}
		else if (time > 60 && time <= 90){
			$(".robin.villager").css({"top": "210px", "left": "720px"});
			$(".chatBoxText.robin").html("Leaves Harvey's Clinic and walks home");
		}
		else{
			$(".robin.villager").css({"top": "210px", "left": "720px"});
			$(".chatBoxText.robin").html("Goes to bed at home");
		}
	}

	if($("#date").val() == 16 && $('#season').find(":selected").text() == "Winter"){
		if (time <= 18){
			$(".robin.villager").css({"top": "210px", "left": "720px"});
			$(".chatBoxText.robin").html("At home");
		}
		else if (time > 18 && time <= 66){
			$(".robin.villager").css({"top": "210px", "left": "720px"});
			$(".chatBoxText.robin").html("Stands behind the counter of her shop at home");
		}
		else if (time > 66 && time <= 105){
			$(".robin.villager").css({"top": "920px", "left": "480px"});
			$(".chatBoxText.robin").html("Leaves her shop to attend Night Market");
		}
		else{
			$(".robin.villager").css({"top": "210px", "left": "720px"});
			$(".chatBoxText.robin").html("Goes to bed at home");
		}
	}
}

function Caroline(){
	var time = document.getElementById("myRange").value;
	if (time <= 12){
		$(".caroline.villager").css({"top": "530px", "left": "565px"});
		$(".chatBoxText.caroline").html("In her room");
	}
	else if (time > 12 && time <= 36){
		$(".caroline.villager").css({"top": "530px", "left": "565px"});
		$(".chatBoxText.caroline").html("In kitchen of Pierre's General Store");
	}
	else if (time > 36 && time <= 45){
		$(".caroline.villager").css({"top": "530px", "left": "565px"});
		$(".chatBoxText.caroline").html("Leaves kitchen to stand in aisle of store");
	}
	else if (time > 45 && time <= 60){
		$(".caroline.villager").css({"top": "600px", "left": "470px"});
		$(".chatBoxText.caroline").html("Leaves home to stand in town square with Jodi");
	}
	else if (time > 60 && time <= 90){
		$(".caroline.villager").css({"top": "530px", "left": "565px"});
		$(".chatBoxText.caroline").html("Returns home to living room");
	}
	else{
		$(".caroline.villager").css({"top": "530px", "left": "565px"});
		$(".chatBoxText.caroline").html("Goes to bed");
	}

	if($("#date").val()%7 == 2){
		if (time <= 12){
			$(".caroline.villager").css({"top": "530px", "left": "565px"});
			$(".chatBoxText.caroline").html("In her room");
		}
		else if (time > 12 && time <= 42){
			$(".caroline.villager").css({"top": "530px", "left": "565px"});
			$(".chatBoxText.caroline").html("In the living room");
		}
		else if (time > 42 && time <= 60){
			$(".caroline.villager").css({"top": "530px", "left": "565px"});
			$(".chatBoxText.caroline").html("Aerobics class begins in living room");
		}
		else if (time > 60 && time <= 73){
			$(".caroline.villager").css({"top": "530px", "left": "565px"});
			$(".chatBoxText.caroline").html("Aerobics ends, stands in living room chatting");
		}
		else if (time > 73 && time <= 90){
			$(".caroline.villager").css({"top": "530px", "left": "565px"});
			$(".chatBoxText.caroline").html("Walks to Kitchen");
		}
		else{
			$(".caroline.villager").css({"top": "530px", "left": "565px"});
			$(".chatBoxText.caroline").html("Goes to bed");
		}
	}

	if($("#date").val()%7 == 3){
		if (time <= 12){
			$(".caroline.villager").css({"top": "530px", "left": "565px"});
			$(".chatBoxText.caroline").html("In her room");
		}
		else if (time <= 36){
			$(".caroline.villager").css({"top": "530px", "left": "565px"});
			$(".chatBoxText.caroline").html("Kitchen of Pierre's General Store");
		}
		else if (time <= 66){
			$(".caroline.villager").css({"top": "420px", "left": "490px"});
			$(".chatBoxText.caroline").html("Leaves home to walk to fountain");
		}
		else if (time <= 90){
			$(".caroline.villager").css({"top": "530px", "left": "565px"});
			$(".chatBoxText.caroline").html("Returns home, stands in living room");
		}
		else{
			$(".caroline.villager").css({"top": "530px", "left": "565px"});
			$(".chatBoxText.caroline").html("Goes to bed");
		}
	}

	if($("#date").val()%7 == 5){
		if (time <= 12){
			$(".caroline.villager").css({"top": "530px", "left": "565px"});
			$(".chatBoxText.caroline").html("In her room");
		}
		else if (time <= 36){
			$(".caroline.villager").css({"top": "530px", "left": "565px"});
			$(".chatBoxText.caroline").html("Kitchen of Pierre's General Store");
		}
		else if (time <= 66){
			$(".caroline.villager").css({"top": "685px", "left": "835px"});
			$(".chatBoxText.caroline").html("Leaves home to go to Museum to read");
		}
		else if (time <= 90){
			$(".caroline.villager").css({"top": "530px", "left": "565px"});
			$(".chatBoxText.caroline").html("Returns home, stands in living room");
		}
		else{
			$(".caroline.villager").css({"top": "530px", "left": "565px"});
			$(".chatBoxText.caroline").html("Goes to bed");
		}
	}

	if($("#date").val()%7 == 0){
		if (time <= 18){
			$(".caroline.villager").css({"top": "530px", "left": "565px"});
			$(".chatBoxText.caroline").html("In her room");
		}
		else if (time <= 45){
			$(".caroline.villager").css({"top": "530px", "left": "565px"});
			$(".chatBoxText.caroline").html("Leaves her room, walks to aisle of store");
		}
		else if (time <= 52){
			$(".caroline.villager").css({"top": "430px", "left": "580px"});
			$(".chatBoxText.caroline").html("Leaves store to stand below tree south of Community Center");
		}
		else if (time <= 63){
			$(".caroline.villager").css({"top": "530px", "left": "565px"});
			$(".chatBoxText.caroline").html("Returns home, stands in living room");
		}
		else{
			$(".caroline.villager").css({"top": "530px", "left": "565px"});
			$(".chatBoxText.caroline").html("Goes to bed");
		}
	}

	if($("#date").val() == 16 && $('#season').find(":selected").text() == "Winter"){
		if (time <= 12){
			$(".caroline.villager").css({"top": "530px", "left": "565px"});
			$(".chatBoxText.caroline").html("In her room");
		}
		else if (time <= 36){
			$(".caroline.villager").css({"top": "530px", "left": "565px"});
			$(".chatBoxText.caroline").html("In kitchen of Pierre's General Store");
		}
		else if (time <= 45){
			$(".caroline.villager").css({"top": "530px", "left": "565px"});
			$(".chatBoxText.caroline").html("Leaves kitchen to stand in aisle of store");
		}
		else if (time <= 60){
			$(".caroline.villager").css({"top": "600px", "left": "470px"});
			$(".chatBoxText.caroline").html("Leaves home to stand in town square with Jodi");
		}
		else if (time <= 105){
			$(".caroline.villager").css({"top": "935px", "left": "555px"});
			$(".chatBoxText.caroline").html("Leaves town square to attend Night Market");
		}
		else{
			$(".caroline.villager").css({"top": "530px", "left": "565px"});
			$(".chatBoxText.caroline").html("Goes to bed");
		}
	}

	if($("#date").val() == 25 && $('#season').find(":selected").text() == "Autumn"){
		if (time <= 12){
			$(".caroline.villager").css({"top": "530px", "left": "565px"});
			$(".chatBoxText.caroline").html("In her room");
		}
		else if (time <= 24){
			$(".caroline.villager").css({"top": "530px", "left": "565px"});
			$(".chatBoxText.caroline").html("In kitchen of Pierre's General Store");
		}
		else if (time <= 36){
			$(".caroline.villager").css({"top": "530px", "left": "565px"});
			$(".chatBoxText.caroline").html("Leaves kitchen, walks to bedroom");
		}
		else if (time <= 60){
			$(".caroline.villager").css({"top": "520px", "left": "525px"});
			$(".chatBoxText.caroline").html("Leaves bedroom, walks to Harvey's Clinic");
		}
		else if (time <= 90){
			$(".caroline.villager").css({"top": "530px", "left": "565px"});
			$(".chatBoxText.caroline").html("Returns home, stands in living room");
		}
		else{
			$(".caroline.villager").css({"top": "530px", "left": "565px"});
			$(".chatBoxText.caroline").html("Goes to bed");
		}
	}

}
















































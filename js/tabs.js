var courseTabStrOne = ["Owned media is media you own (the clue’s in the name!). It’s media that you have complete control over. These channels are great for sustaining longer-term relationships with customers.", "Examples include: company websites, customer databases, social media channels (Instagram, Facebook, Snapchat, Twitter, Pinterest, LinkedIn) and retail stores (window displays, point of sale displays and staff uniforms)."];
var courseTabStrTwo = ["Earned media is basically all the word-of-mouth stuff, and comes as a result of brand behaviour.", "It’s usually seen in the form of 'viral’ media – things like mentions, shares, reposts, reviews and recommendations. Public relations (PR) activity also fits in this category and includes any free coverage and reporting that you get on radio, television, magazines and newspapers.", "Paid media is a good way to promote content that will drive earned media – it’s also a great way to direct traffic to owned media. "];
var courseTabStrThree = ["Paid media is what you might think of as the more traditional advertising channels – like print, radio, television, bus displays and billboards (and yes, it’s the stuff you pay for!).", "It also includes newer social channels like Facebook, Twitter or Instagram (which you can also pay to be on)."];
var courseTabStrFour = ["Borrowed media is all about leveraging partners or industry channels to communicate brand messaging.", "Examples include: supplier channels (website, social sites, customer databases or advertising), industry channels (publications, conferences) and even empowering internal staff to be brand ambassadors (word of mouth)."];



$(document).ready(function(){
	$('#courseTab1').click(function(){
		$(this).children('h2').removeClass('rectangle-visited');
		$('.tab-content-1, .tab-content-2').fadeOut(500, function(){
			$('.tab-content-1').empty();
			$('.tab-content-2').empty();
			$('.tab-content-1').append(courseTabStrOne[0]);
			$('.tab-content-2').append(courseTabStrOne[1]);
			$('.tab-content-1, .tab-content-2').fadeIn(500);
		});
	});

	$('#courseTab2').click(function(){
		$(this).children('h2').removeClass('rectangle-visited');
		$('.tab-content-1, .tab-content-2').fadeOut(500, function(){
			$('.tab-content-1').empty();
			$('.tab-content-2').empty();
			$('.tab-content-1').append(courseTabStrTwo[0]);
			$('.tab-content-2').append(courseTabStrTwo[1]);
			$('.tab-content-1, .tab-content-2').fadeIn(500);
		});
	});

	$('#courseTab3').click(function(){
		$(this).children('h2').removeClass('rectangle-visited');
		$('.tab-content-1, .tab-content-2').fadeOut(500, function(){
			$('.tab-content-1').empty();
			$('.tab-content-2').empty();
			$('.tab-content-1').append(courseTabStrThree[0]);
			$('.tab-content-2').append(courseTabStrThree[1]);
			$('.tab-content-1, .tab-content-2').fadeIn(500);
		});
	});

	$('#courseTab4').click(function(){
		$(this).children('h2').removeClass('rectangle-visited');
		$('.tab-content-1, .tab-content-2').fadeOut(500, function(){
			$('.tab-content-1').empty();
			$('.tab-content-2').empty();
			$('.tab-content-1').append(courseTabStrFour[0]);
			$('.tab-content-2').append(courseTabStrFour[1]);
			$('.tab-content-1, .tab-content-2').fadeIn(500);
		});
	});
});
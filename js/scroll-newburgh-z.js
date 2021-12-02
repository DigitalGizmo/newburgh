// Dropdown menu for chapters
$(document).ready(function(){
	// Chapter dropdown in top title banner
	$("#dropdown-parent").hover(function(){
		// console.log(' got to drop hover');
		$(".dropdown-menu").slideDown(100);
	}, function(){
		$(".dropdown-menu").stop().slideUp(100);
	});
	// Dot titles on hover
	$(".dots li").hover(function(event){
		console.log(' got to dot hover 3');
		$(".dot-title").html($(event.target).html());
		$(".dot-title").css('display', 'block');
	}, function(){
		$(".dot-title").css('display', 'none');
	});
})

// Midway on shifting element objects and names to arrays in order to 
// create multi-chapter loops for each task.

let ctrl = new ScrollMagic.Controller();

// Define arrays for image sequence elements
// These are for gallery image dissolves, not for maps
const imageSeqElems = [$("#image-sequence1"), $("#image-sequence5")];
const imageSeqNames = ["#image-sequence1", "#image-sequence5"];
const captionSeqElems = [$("#caption-sequence1"), $("#caption-sequence5")];

// ----- HIDE IMAGES ----

// Hide all but title and first image
// loop through imageSeqElems
for (let i = 0; i < imageSeqElems.length; i++) {
	imageSeqElems[i].children().each(function(i) {
	// imageSeqElems[0].children().each(i => {
		// Skip fist child, the title, and first image -- it's a pin, not a transition
		if (i > 0) {
			// console.log(" - this arrow: " + $(this).prop('nodeName'))
			TweenMax.set(this, {autoAlpha:0});
		}
	});
}

// --- PIN CHAPTER TITLES ---

const ChapTitleElems = [$("#chapter1"), $("#chapter5")];
const ChapTitleElemNames = ["#chapter1-title", "#chapter5-title"];

let titleScene = null;
// Loop through titles
for (let i = 0; i < ChapTitleElems.length; i++) {
	titleScene = new ScrollMagic.Scene({
		triggerElement: ChapTitleElemNames[i], // point of execution
		duration: ChapTitleElems[i].height(),
		triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
	})
	.setPin(ChapTitleElemNames[i], {pushFollowers: false})
	// .addIndicators()
	.addTo(ctrl);
}

// --- PIN GALLERY IMAGES -----

// Set pin for first GALLERY Image container
// Chapter 1 - zoom
var containerScene = new ScrollMagic.Scene({
	triggerElement: imageSeqNames[0], // point of execution
	duration: captionSeqElems[0].height(),
	triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
	offset: -60 // still tucks under title bar a little
})
.setPin(imageSeqNames[0], {pushFollowers: false})
// .addIndicators()
.addTo(ctrl);

// Set pin for Image container
// Chapter 5 - Designing South Mall
var containerScene = new ScrollMagic.Scene({
	triggerElement: imageSeqNames[1], // point of execution
	duration: captionSeqElems[1].height(),
	triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
	offset: -60 
})
.setPin(imageSeqNames[1], {pushFollowers: false})
// .addIndicators()
.addTo(ctrl);

// ----- CREATE DISSOLVE SEQUENCES ----

// Loop through all divs in text-panel
// Trying separate sequence just for the first trans
// which will be a zoom.
captionSeqElems[0].children().each(function(i) {
	// try to zoom 1st image
	if (i === 0) {
		// Current target is +1 because 1st div in image panel is title
		// var targetPrev = imageSeqElems[0].children().eq(i -1);
		let target = imageSeqElems[0].children().eq(i);

		var tl = new TimelineMax();
		// Base transitin condition class name
		// "this" is not a jQuery object, so need straight JS
		tl.to(target, 2, {scale:3});			

		new ScrollMagic.Scene({
			triggerElement: this,
			duration: 350, // pin the element for a total of 400px
			triggerHook: .8, // trigger low in the viewport
		})
		.setTween(tl)
		// .on('start', function() {
		// 	console.log("-- targPrev: " + i + " target: " + (i+1));
		// })
		// .addIndicators()
		.addTo(ctrl);
	} // end if i > 0
});


// Loop through all divs in text-panel
// Trying separate sequence just for the first trans
// which will be a zoom.
captionSeqElems[0].children().each(function(i) {
	// Skip first image -- it's a pin, not a transition
	if (i > 1) {
		// Current target is +1 because 1st div in image panel is title
		var targetPrev = imageSeqElems[0].children().eq(i -1);
		let target = imageSeqElems[0].children().eq(i);

		var tl = new TimelineMax();
		// Base transitin condition class name
		// "this" is not a jQuery object, so need straight JS
		tl.to(target, 2, {autoAlpha:1})
			.to(targetPrev, 1, {autoAlpha:0});			

		new ScrollMagic.Scene({
			triggerElement: this,
			duration: 350, // pin the element for a total of 400px
			triggerHook: .8, // trigger low in the viewport
		})
		.setTween(tl)
		// .on('start', function() {
		// 	console.log("-- targPrev: " + i + " target: " + (i+1));
		// })
		// .addIndicators()
		.addTo(ctrl);
	} // end if i > 0
});





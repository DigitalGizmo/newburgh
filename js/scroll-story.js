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
const imageSeqElems = [$("#image-sequence1"), $("#image-sequence4"), $("#image-sequence5")];
const imageSeqNames = ["#image-sequence1", "#image-sequence4", "#image-sequence5"];
const captionSeqElems = [$("#caption-sequence1"), $("#caption-sequence4"), $("#caption-sequence5")];

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

const ChapTitleElems = [$("#chapter1"), $("#chapter2"), $("#chapter3"), 
	$("#chapter4"), $("#chapter5"), $("#chapter6"), $("#chapter7")];
const ChapTitleElemNames = ["#chapter1-title", "#chapter2-title", "#chapter3-title", 
	"#chapter4-title", "#chapter5-title", "#chapter6-title", "#chapter7-title"];

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
// Chapter 1 - Immediate Response
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
// Chapter 4 - Designing South Mall
var containerScene = new ScrollMagic.Scene({
	triggerElement: imageSeqNames[1], // point of execution
	duration: captionSeqElems[1].height(),
	triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
	offset: -60 
})
.setPin(imageSeqNames[1], {pushFollowers: false})
// .addIndicators()
.addTo(ctrl);


// Set pin for Image container
// Chapter 4 - Designing South Mall
var containerScene = new ScrollMagic.Scene({
	triggerElement: imageSeqNames[2], // point of execution
	duration: captionSeqElems[2].height(),
	triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
	offset: -60 
})
.setPin(imageSeqNames[2], {pushFollowers: false})
// .addIndicators()
.addTo(ctrl);



// ----- CREATE DISSOLVE SEQUENCES ----

// Loop through all divs in text-panel
// Chapter 1 Immediate Response
captionSeqElems[0].children().each(function(i) {
	// Skip first image -- it's a pin, not a transition
	if (i > 0) {
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



// Create scenes
// Loop through all divs in text-panel
// ----- Chapter 4 Designing South Mall ----
captionSeqElems[1].children().each(function(i) {
	// Skip first image -- it's a pin, not a transition
	if (i > 0) {
		// Current target is +1 because 1st div in image panel is title
		var targetPrev = imageSeqElems[1].children().eq(i - 1);
		let target = imageSeqElems[1].children().eq(i);

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
		// 	console.log("-- Chap2 targPrev: " + i + " target: " + (i+1));
		// })
		// .addIndicators()
		.addTo(ctrl);
	} // end if i > 0
});

// Create scenes
// Loop through all divs in text-panel
// ----- Chapter 4 Designing South Mall ----
captionSeqElems[2].children().each(function(i) {
	// Skip first image -- it's a pin, not a transition
	if (i > 0) {
		// Current target is +1 because 1st div in image panel is title
		var targetPrev = imageSeqElems[2].children().eq(i - 1);
		let target = imageSeqElems[2].children().eq(i);

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
		// 	console.log("-- Chap2 targPrev: " + i + " target: " + (i+1));
		// })
		// .addIndicators()
		.addTo(ctrl);
	} // end if i > 0
});

// --------- MAP -------------

// Set pin for  map
var containerScene = new ScrollMagic.Scene({
    // triggerElement: '.container0',
    triggerElement: '#image-sequence3',
	duration: $("#caption-sequence3").height(),
	triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
	offset: -50 // was 320
})
.setPin("#image-sequence3", {pushFollowers: false})
.on('start', function () {
    // console.log("passed trigger");
    // setPoint defined in simpl-map.js
    setPoint(42.6503, -73.76, 15, 'none');
	// Remove Sanborn
	removeSanborn();
})
// .addIndicators()
.addTo(ctrl);


// Add Sanborn map
var mapScene = new ScrollMagic.Scene({
    triggerElement: '#thing2'
})
.on('start', function () {
    // setPoint defined in simpl-map.js
    addSanborn();
    setPoint(42.6487, -73.76, 16); // -73.763
})
// .addIndicators()
.addTo(ctrl);

// Add State
var mapScene = new ScrollMagic.Scene({
    triggerElement: '#thing3'
})
.on('start', function () {
    // setPoint defined in simpl-map.js
    showDistrict(42.6515, -73.760, 17, 0);
})
// .addIndicators()
.addTo(ctrl);

// Show Boarding
var mapScene = new ScrollMagic.Scene({
    triggerElement: '#thing4'
})
.on('start', function () {
    showDistrict(42.6505, -73.761, 17, 1);
})
// .addIndicators()
.addTo(ctrl);

// Show Hudson
var mapScene = new ScrollMagic.Scene({
    triggerElement: '#thing5'
})
.on('start', function () {
    showDistrict(42.6505, -73.761, 17, 2);
})
// .addIndicators()
.addTo(ctrl);

// Show Cathedral
var mapScene = new ScrollMagic.Scene({
    triggerElement: '#thing6'
})
.on('start', function () {
    showDistrict(42.648, -73.763, 17, 3);
})
// .addIndicators()
.addTo(ctrl);

// Show Market
var mapScene = new ScrollMagic.Scene({
    triggerElement: '#thing7'
})
.on('start', function () {
    showDistrict(42.648, -73.757, 17, 4);
})
// .addIndicators()
.addTo(ctrl);

// Show Pearl
var mapScene = new ScrollMagic.Scene({
    triggerElement: '#thing8'
})
.on('start', function () {
    showDistrict(42.6471, -73.755, 18, 5);
})
// .addIndicators()
.addTo(ctrl);

// Show Gut
var mapScene = new ScrollMagic.Scene({
    triggerElement: '#thing9'
})
.on('start', function () {
    showDistrict(42.6465, -73.755, 17, 6);
})
// .addIndicators()
.addTo(ctrl);


// Wrapup
var mapScene = new ScrollMagic.Scene({
    triggerElement: '#thing10'
})
.on('start', function () {
    showAllDistricts(42.6487, -73.76, 16);
})
// .addIndicators()
.addTo(ctrl);


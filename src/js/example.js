var controller = new ScrollMagic.Controller();

var timeline1 = new TimelineMax();
var timeline2 = new TimelineMax();
var timeline3 = new TimelineMax();

var enabled = true;

var width = window.innerWidth;

if(width <= 640) window.location.replace('./about.html');

if(enabled) {

var scene1 = new ScrollMagic.Scene({

  duration:1100,
  offset:100

});

Mousetrap.bind('p', function() {console.log($(window).scrollTop())});

var tween1 = TweenMax.to('#ball', 1.5, {
  top: 1550,
  ease: Linear.easeNone
});
var tween1b = TweenMax.to('#ball', 1.5, {
  left: 0.7*width,
  ease: Quad.easeIn
});
var tween2 = new TweenMax.to('#ball', 1.5, {
  top: 2750,
  ease: Linear.easeNone
});
var tween2b = new TweenMax.to('#ball', 1.5, {

  left: 0.1*width,
  ease: Quad.easeIn

});
var tween3 = new TweenMax.to('#ball', 1.5, {

  top: 3950,
  ease:Linear.easeNone,

});
var tween3b = new TweenMax.to('#ball', 1.5, {

  left:0.7*width,
  ease:Quad.easeIn

});
var tween1Hold = new TweenMax.to('#ball', 1, {

  top: 2020,
  ease: Linear.easeNone

});
var tweenScene1 = new TweenMax.to('#scene1', 1, {

  top: 300,
  ease: Linear.easeNone

});
var tweenScene2 = new TweenMax.to('#scene2', 1, {

  top: 1500,
  ease: Linear.easeNone

});
var tweenScene3 = new TweenMax.to('#scene3', 1, {

  top: 2700,
  ease: Linear.easeNone

});
var tween3Hold = new TweenMax.to('#ball', 1, {

  top: 3220,
  ease: Linear.easeNone

});
var textTween1 = new TweenMax.to('#textbox1', .4, {

  opacity:1,
  delay:.2

});
var textTween1b = new TweenMax.to('#textbox1', 2, {

  opacity: 0,
  top: 360,
  ease: Linear.easeNone

});
var textTween2 = new TweenMax.to('#textbox2', 2, {

  top: 1700,
  ease: SlowMo.ease.config(0.7, 0.7, false)

});
var textTween2b = new TweenMax.to('#textbox2', 2, {

  opacity:1

});
var textTween3 = new TweenMax.to('#textbox3', 1.5, {

  top: 2900,
  ease: SlowMo.ease.config(0.7, 0.7, false)

});
var textTween3b = new TweenMax.to('#textbox3', 1.5, {

  opacity:1

});

var tween1Opacity = new TweenMax.to('#img2', 1.5, {

  opacity:1,
  ease: Linear.easeNone

});
var tween1Opacityb = new TweenMax('#img1', 1.5, {

  opacity:0,
  ease: Linear.easeNone

});
var tween2Opacity = new TweenMax.to('#img3', 1.5, {

  opacity:1,
  ease: Linear.easeNone

});
var tween2Opacityb = new TweenMax.to('#img2', 1.5, {

  opacity:0,
  ease: Linear.easeNone

});
var tween3Opacity = new TweenMax.to('#img4', 1.5, {

  opacity:1,
  ease: Linear.easeNone

});
var tween3Opacityb = new TweenMax.to('#img3', 1.5, {

  opacity:0,
  ease: Linear.easeNone

});

timeline1.add(tween1, '0');
timeline1.add(tween1b, '0');
timeline1.add(tween1Opacity, '0');
timeline1.add(tween1Opacityb, '0');

timeline2.add(tween2, '0');
timeline2.add(tween2b, '0');
timeline2.add(tween2Opacity, '0');
timeline2.add(tween2Opacityb, '0');

timeline3.add(tween3, '0');
timeline3.add(tween3b, '0');
timeline3.add(tween3Opacity, '0');
timeline3.add(tween3Opacityb, '0');

scene1.setTween(timeline1);
scene1.addIndicators();

var scene2 = new ScrollMagic.Scene({

  duration:600,
  offset:1800

});

scene2.setTween(timeline2);
scene2.addIndicators();

var scene3 = new ScrollMagic.Scene({

  duration: 600,
  offset: 3000

}).setTween(timeline3).addIndicators();

var scene1Hold = new ScrollMagic.Scene({

  duration:600,
  offset: 1200

}).setTween(tween1Hold).addIndicators();

var scene3Hold = new ScrollMagic.Scene({

  duration:600,
  offset: 2400

}).setTween(tween3Hold).addIndicators();

var bgScene2 = new ScrollMagic.Scene({

  duration:750,
  offset:1200

}).setTween(tweenScene2).addIndicators();

var bgScene3 = new ScrollMagic.Scene({

  duration:750,
  offset:2400

}).setTween(tweenScene3).addIndicators();

var textScene1 = new ScrollMagic.Scene({

  offset: 0,
  duration: 100

}).setTween(textTween1b).addIndicators();

var textScene2 = new ScrollMagic.Scene({

  offset: 1200,
  duration: 600

}).setTween(textTween2).addIndicators();

var textScene2b = new ScrollMagic.Scene({

  offset:1200,
  duration:150

}).setTween(textTween2b).addIndicators();

var textScene3 = new ScrollMagic.Scene({

  offset:2400,
  duration:600

}).setTween(textTween3).addIndicators();

var textScene3b = new ScrollMagic.Scene({

  offset:2400,
  duration:150

}).setTween(textTween3b).addIndicators();

var bgScene1 = new ScrollMagic.Scene({

  offset:0,
  duration:750

}).setTween(tweenScene1).addIndicators();

controller.addScene(bgScene1);
controller.addScene(scene1);
controller.addScene(scene1Hold);
controller.addScene(textScene1);
controller.addScene(bgScene2);
controller.addScene(scene2);
controller.addScene(textScene2);
controller.addScene(bgScene3);
controller.addScene(scene3Hold);
controller.addScene(scene3);
controller.addScene(textScene2b);
controller.addScene(textScene3);
controller.addScene(textScene3b);

}

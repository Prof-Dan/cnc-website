var controller = new ScrollMagic.Controller();

var timeline1 = new TimelineMax();
var timeline2 = new TimelineMax();

var scene1 = new ScrollMagic.Scene({

  duration:1100,
  offset:100

});

Mousetrap.bind('p', function() {console.log($(window).scrollTop())});

var tween1 = TweenMax.to('#ball', 1.5, {
  backgroundColor: 'blue',
  top: 1550,
  ease: Linear.easeNone
});
var tween1b = TweenMax.to('#ball', 1.5, {
  left: 750,
  ease: Quad.easeIn
});
var tween2 = new TweenMax.to('#ball', 1.5, {
  backgroundColor: 'green',
  top: 2800,
  ease: Linear.easeNone
});
var tween2b = new TweenMax.to('#ball', 1.5, {

  left: 50,
  ease: Quad.easeIn

});
var tween1Hold = new TweenMax.to('#ball', 1, {

  top: 2020,
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

timeline1.add(tween1, '0');
timeline1.add(tween1b, '0');

timeline2.add(tween2, '0');
timeline2.add(tween2b, '0');

scene1.setTween(timeline1);
scene1.addIndicators();

var scene2 = new ScrollMagic.Scene({

  duration:600,
  offset:1800

});

scene2.setTween(timeline2);
scene2.addIndicators();

var scene1Hold = new ScrollMagic.Scene({

  duration:600,
  offset: 1200

}).setTween(tween1Hold).addIndicators();

var scene3Hold = new ScrollMagic.Scene({

  duration:600,
  offset: 2400

}).setTween(tween3Hold).addIndicators();

var bgScene2 = new ScrollMagic.Scene({

  duration:600,
  offset:1200

}).setTween(tweenScene2).addIndicators();

var bgScene3 = new ScrollMagic.Scene({

  duration:600,
  offset:2400

}).setTween(tweenScene3).addIndicators();

controller.addScene(scene1);
controller.addScene(scene1Hold);
controller.addScene(bgScene2);
controller.addScene(scene2);
controller.addScene(bgScene3);
controller.addScene(scene3Hold);

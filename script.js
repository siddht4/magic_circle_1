var rotateloop = function(){
  anime({
    targets: ".clockwise",
    rotate: ["0deg", "360deg"],
    loop: true,
    duration: 5000,
    easing: "linear",
    offset: 0
  })
  anime({
    targets: '.counterclockwise',
    rotate: ['360deg','0deg'],
    loop: true,
    duration: 10000,
    easing: 'linear',
    offset: 0
  })
  anime({
    targets: '.counterclockwise-long',
    rotate: ['360deg','0deg'],
    loop: true,
    duration: 10000,
    easing: 'linear',
    offset: 0
  })
  anime({
    targets: '.clockwise-long',
    rotate: ['0deg','360deg'],
    loop: true,
    duration: 20000,
    easing: 'linear',
    offset: 0
  })
  anime({
    targets: '.sc',
    rotate: ['0deg','360deg'],
    scale: [1.3,1.3],
    loop: true,
    duration: 5000,
    easing: 'linear',
    offset: 0
  })
}
$(document).ready(function(){
  document.getElementById('demo').style.display = 'block'
  var timeline = anime.timeline()
  timeline.add({
    targets: '.counterclockwise',
    strokeDasharray: {
      value: [(el) => `0 ${anime.setDashoffset(el)/8}`, (el) => `${anime.setDashoffset(el)/8} ${0}`],
      duration: 2000
    },
    // scale: [0,1],
    scale: {
      value: [0,1],
      duration: 500
    },
    rotate: ['360deg','-360deg'],
    duration: 10000,
    easing: 'linear',
    offset: 0
  }).add({
    targets: '.scale0',
    scale: [0.001,1],
    duration: 3500,
    // easing: 'easeInOutSine',
    elasticity: 20,
    offset: 500
  }).add({
    targets: '.clockwise,.sc',
    scale: {
      value: [0.001, 1],
      duration: 2000,
      elasticity: 20
    },
    rotate: {
      value: ['-576deg','0deg'],
      duration: 8000,
      easing: 'linear'
    },
    duration: 1000,
    offset: 2000
  }).add({
    targets: '.sc',
    scale: {
      value: [1, 1.3],
      duration: 1000
    },
    rotate: {
      value: ['-432deg','0deg'],
      duration: 6000
    },
    offset: 4000,
    easing: 'linear'
  }).add({
    targets: '.scale1',
    scale: [0.001, 1],
    duration: 2000,
    easing: 'linear',
    offset: 4000
  }).add({
    targets: '.counterclockwise-long',
    scale: {
      value: [0.01, 1],
      duration: 1500,
      // elasticity: 200
      easing: 'easeInOutSine'
    },
    rotate: {
      value: ['216deg','0deg'],
      duration: 6000,
      easing: 'linear'
    },
    offset: 4000
  }).add({
    targets: '.clockwise-long',
    scale: {
      value: [0.01, 1],
      duration: 2000,
      // elasticity: 100
      easing: 'easeInOutSine'
    },
    rotate: {
      value: ['-90deg','0deg'],
      duration: 5000,
      easing: 'linear'
    },
    offset: 5000,
    complete: rotateloop
  })
})
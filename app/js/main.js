import hello from './lib/hello.js';
import $ from 'jquery';
import '../libs/bootstrap/dist/js/bootstrap.bundle.js';
import svg4everybody from '../libs/svg4everybody/dist/svg4everybody.legacy.js';
import '../libs/slick-carousel/slick/slick.js';
import Waypoint from '../libs/waypoints/lib/jquery.waypoints.js';
import {TimelineMax} from 'gsap';
import mixitup from 'mixitup';

var hero = $('.hero__bg');
var tl = new TimelineMax();

hello();
svg4everybody({
  polyfill: true 
});

$(window).on('load', function() {

  $('.s').css('opacity', 0);

  $.when($('.loader').addClass('loader--hidden').delay(1000).queue(function(hideloader) { 
    $(this).css({
      display: 'none'
    });
    hideloader(); 

    tl
      .to(hero, 0.8, {css:{scale: 1}, ease:Quad.easeIn})
      .add(mouse);


  })).done(function() {

    $.when($('.loader_inner').fadeOut());

  });
});


$(document).ready(function() {

  $('.s').each(function() {
    var self = $(this);
    $(this).waypoint({
      handler: function() {
        self.addClass('animated fade').css('opacity', 1);
      }, offset: '80%'
    });
  });

  var mixer = mixitup('.portfolio__shuffle');

  $('.portfolio__pagination a').click(function(event) {
    event.preventDefault();
  });

  $('.hero__mobile').on('click', function() {
    $(this).toggleClass('is-active');
    $('.hero__menu').toggleClass('is-active');
  });

});

$('.testimonials__slider').slick({
  nextArrow: '.arrow__next',
  prevArrow: '.arrow__prev',
  fade: true,
});

function mouse() {
  $('.hero__mouse a').addClass('mouse__anim');
}

let $header_top = $('.header-top');
let $nav = $('nav');

$header_top.find('a').on('click', function() {
    $(this).parent().toggleClass('open-menu');
});

$('#fullpage').fullpage({
    sectionsColor: ['#1aaa82', '#1f7889', '#03262f', '#081634', '#ffd03c'],
    sectionSelector: '.vertical-scrolling',
    navigation: true,
    slidesNavigation: true,
    controlArrows: false,
    anchors: ['home', 'games', 'gallery', 'contacts'],
    menu: '#menu',

    afterLoad: function(anchorLink, index) {
        $header_top.css('background', 'rgba(0, 47, 77, .3)');
        $nav.css('background', 'rgba(0, 47, 77, .25)');
        if (index == 5) {
            $('#fp-nav').hide();
        }
    },

    onLeave: function(index, nextIndex, direction) {
        if(index == 4) {
            $('#fp-nav').show();
        }
    },


});
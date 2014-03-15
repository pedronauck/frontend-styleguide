;(function (window, document, undefined) {
  var $tocNav = document.querySelector('.toc-nav'),
      $tocNavMenu = document.querySelector('#tocNavMenu'),
      $menuLink = document.querySelector('#tocNavMenu .menu-link a');
      $buttonShowToc = document.querySelector('#buttonShowToc'),
      $header = document.querySelector('.header'),
      $navigation = document.querySelector('.navigation'),
      topHeight = $header.clientHeight + $navigation.clientHeight,
      windowHeight = window.innerHeight;

  // paralax on header
  $('.header').stellar();

  if ($buttonShowToc) {
    $tocNavMenu.addEventListener('click', function (event) {
      var menuAnchor = event.target.getAttribute('href'),
          anchorOffset = $(menuAnchor).offset();

      $('html, body').animate({
        scrollTop: anchorOffset.top
      }, 500);

      event.preventDefault();
    });

    $buttonShowToc.addEventListener('click', function (event) {
      event.preventDefault();

      if (!$tocNav.classList.contains('is-visible')) {
        $tocNav.classList.remove('is-hidden');
        $tocNav.classList.add('is-visible');
      }
      else {
        $tocNav.classList.remove('is-visible');
        $tocNav.classList.add('is-hidden');
      }
    });

    window.addEventListener('scroll', function (event) {
      var scrollY = this.scrollY;

      if (scrollY >= topHeight) {
        $tocNav.classList.add('is-fixed')
      }
      else if (scrollY <= topHeight && $tocNav.classList.contains('is-fixed')) {
        $tocNav.classList.remove('is-fixed');
      }
    });
  }
})(window, document);

!function () {
   var href = location.href;
   var pgurl = href.substr(href.lastIndexOf('/') + 1);
   // match all the anchors on the page with the html file name
   $('a[href="' + pgurl + '"]').addClass('activePage');
}();

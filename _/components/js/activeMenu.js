$(function(){
    $('a.show_hide').click(function(){
        $('a.activeMenu').removeClass('activeMenu');
        $(this).addClass('activeMenu');
    });
});

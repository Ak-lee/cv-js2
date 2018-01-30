 !function(){
 // 等待所有加载
    $(window).load(function(){
        $('body').addClass('loaded');
        $('#loader-wrapper .load_title').remove();
    });
 }.call()


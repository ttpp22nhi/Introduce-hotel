     $(document).ready(function () {
    // lấy vị trí header cách top 
    // debugger;
    var pos=$('#header').position();
    console.log(pos);
    $(window).scroll(function(){
    // vị trí băt đầu cuộn chuột 
     var posScroll= $(document).scrollTop();
        // kiểm tra 
     
        if(parseInt(posScroll) > parseInt(pos.top))
        {
            $('#header').addClass('fixed');
        }
        else $('#header').removeClass('fixed');
    })
     console.log( posScroll);
});

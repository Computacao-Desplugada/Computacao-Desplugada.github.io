(function(){
    $(document).ready(function(){
        $(".btn_menu").click(function(e){
            e.preventDefault();
            var filtro = $(this).attr("data-filtro");

            if (filtro == "todos") {
                $(".col-md-4").show(500);
            } else {
                $(".col-md-4").not("."+filtro).hide(500);
                $(".col-md-4").filter("."+filtro).show(500);
            }
        });
        $("ul li").click(function(){
            $(this).addClass("active").siblings().removeClass("active");
        });
    });
}())
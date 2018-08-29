(function(){
    $(document).ready(function(){
        $(".btn_menu").click(function(e){
            e.preventDefault();
            var filtro = $(this).attr("data-filtro");

            if (filtro == "todos") {
                $(".escola").show(500);
            } else {
                $(".escola").not("."+filtro).hide(500);
                $(".escola").filter("."+filtro).show(500);
            }
        });
        $("ul li").click(function(){
            $(this).addClass("active").siblings().removeClass("active");
        });
    });
}())
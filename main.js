$(document).ready(function(){


      // 上方圖片變換str

            $("#slides img:first").addClass("top");

            var change = function(){

                var curr = $("#slides img.top");
                var next = curr.next();

                if( next.length == true){


                    curr.removeClass("top");
                    next.addClass("top");



                }else{

                    var next =$("#slides img:first");
                    curr.removeClass("top");
                    next.addClass("top");


                }
            }

            setInterval(change,3000);

        // 上方圖片變換end


      

        // 螢幕下滑右側邊欄顯示str

            $(window).scroll(function(){

                if($(window).scrollTop()>200 ){

                $(".slide-bar").show(500);
                }else{

                    $(".slide-bar").hide(500);
                }

             
            });

         

       // 螢幕下滑右側邊欄顯end

      //  點擊小圖示到對應段落str

            $(".view > ul > li").click(function(){

                var to = $(this).attr("title");

                

                if( to ==1){

                    $("html,body").animate({scrollTop:$("#a").position().top + 2500 + "px"},1000)

                }else if(to ==2){

                    $("html,body").animate({scrollTop:$("#b").position().top  + 2500 + "px" },1000)


                }else if(to ==3){
                    
                    $("html,body").animate({scrollTop:$("#c").position().top  +2500 + "px"},1000)


                }else {

                    $("html,body").animate({scrollTop:$("#d").position().top  + 2500 + "px"},1000)


                }
   
    });

     //  點擊小圖示到對應段落end

     //  送出str



            $("#submit").click(function(){

                var way = $('select option:selected').val();

            

            alert("出發! 去" + way +"吧!");

         
            });

    
    //  送出end
});
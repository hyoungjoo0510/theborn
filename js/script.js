$(function(){
    //브라우저의 너비값
    let wWidth = $(window).outerWidth();
    // console.log(wWidth)

    //backboyBanner의 banner이미지의 높이값을 저장하는 변수
    let imgHeight = $(".banner>li:eq(0)>img").height();
    // console.log("이미지 높이: "+imgHeight);

    $(window).on("resize", function(){

        wWidth = $(this).outerWidth();
        // console.log(wWidth)
        
        // pWidth = $(".pizzaList>ul>li").width();
        // pHeight = pWidth * 0.3602620087336245;

        imgHeight = $(".banner>li:eq(0)>img").height();
        pHeight = imgHeight / 6;

        // console.log(pHeight);
        liWidth = $(".thumnailWrap>li").width();

        if(wWidth> 1080){
            $(".pizzaList>ul>li").height(pHeight);
        }else{
            $(".pizzaList>ul>li").height("auto");
        }

        showthumbnail=0;
        showYoutube=0;
        $(".mainYoutube>ul>li").eq(showYoutube).addClass("active").siblings().removeClass("active");
        $(".thumnailWrap").css("left", 0)
        $(".thumnailWrap>li").eq(showthumbnail+2).addClass("active").siblings().removeClass("active")
        $(".thumnailWrap>li").eq(count-3).addClass("active2").siblings().removeClass("active2")
    })

    //#nav ///////////////////////////////////////////

    $("header").on({
        "mouseover": function(){
            if(wWidth > 1280){
                $(this).addClass("over")
            }
        },
        "mouseout": function(){
            if(wWidth > 1280){
                $(this).removeClass("over")
            }
        }
    })
    $("#nav>li").on({
        "mouseover": function(){
            let navIndex = $(this).index();
            
            if(wWidth> 1280){
                $(this).addClass("active")
                if(navIndex == 0 || navIndex == 4){
                    $("header").css("padding-bottom", 47)
                }
            }

            
        },
        "mouseout": function(){
            if(wWidth> 1280){
                $(this).removeClass("active")
            }
            
            $("header").css("padding-bottom", 0)
        },

        "click": function(){
            if(wWidth<=1280){
                $(this).addClass("active").siblings().removeClass("active")
                console.log("클릭")
            }
        }

    })

    $(".ham").on("click", function(){
        $("#nav").toggleClass("active");
        $(this).children().toggleClass("active")

        if ($("#nav").hasClass("active")) {
            $(this).find(".hamText").children().text("CLOSE");
            $(".bg").css("visibility", "visible").stop().animate({
                opacity: 1
            }, 300)
        } else {
            $(this).find(".hamText").children().text("MENU");
            $("#nav>li").removeClass("active")
            $(".bg").stop().animate({
                opacity: 0
            }, 300, function(){
                $(this).css("visibility", "hidden")
            })
        }
    })

    // 메인배너 //////////////////////////////////////
    let mbannerShow = 0;
    let mPager = 0;

    let fbannerClone = $(".mainBanner>li").eq(0).clone();
    $(".mainBanner").append(fbannerClone);

    let mbannerLength = $(".mainBanner>li").length;
    // console.log(mbannerLength)
    $(".mainBanner").width(mbannerLength* 100+"%");

    let mbannerMove = () =>{
        $(".mainBanner").stop().animate({
            "margin-left": -mbannerShow * 100+"%"
        }, 500)
        if(mPager > 2){
            mPager = 0;
        }else if(mPager < 0){
            mPager = 2;
        }
        $(".mainPager>li").eq(mPager).addClass("active").siblings().removeClass("active");
    }
    $(".mainbannerBtn>.rightBtn").on("click", function(){

        if(mbannerShow >= 3){
            $(".mainBanner").css("margin-left", 0);
            mbannerShow = 0;
        }
        mbannerShow++;
        mPager++;
        mbannerMove();
    })

    $(".mainbannerBtn>.leftBtn").on("click", function(){
        if(mbannerShow ==0){
            $(".mainBanner").css("margin-left", -(mbannerLength-1)*100+"%");
            mbannerShow = 3;
        }
        mbannerShow--;
        mPager--;
        mbannerMove();
    })

    var timer = setInterval(autoBanner, 5000)
    function autoBanner() {
        $(".mainbannerBtn>.rightBtn").trigger("click");
    }

    // newBrandWrap //////////////////////////////////

    let showPizza = 0;

    // let pWidth = $(".pizzaList>ul>li").width();
    let pHeight = imgHeight / 6;

    // console.log(pWidth)
    // console.log(pHeight)

    if(wWidth> 1080){
        $(".pizzaList>ul>li").height(pHeight);
    }else{
        $(".pizzaList>ul>li").height("auto");
    }

    $(".pizzaList>ul>li").on({
        "mouseover": function(){
            $(this).addClass("over")
            // console.log("오버")
        },

        "mouseout": function(){
            $(this).removeClass("over")
        },

        "click": function(){
            $(this).addClass("active").siblings().removeClass("active");
            showPizza = $(this).index();
            // console.log(showPizza);
            $(".showPizza>li").eq(showPizza).addClass("active").siblings().removeClass("active")
        }
    })

    // startupWrap ////////////////////////////

    $(".interviewBox>ul>li").on({
        "mouseover": function(){
            $(this).addClass("active")
        },
        "mouseout": function(){
            $(this).removeClass("active")
        }
    })
    

    //brandWrap ///////////////////////////////
    let brandIndex = 0;
    $(".brandSelecotor>div").on("click", function(){
        $(this).addClass("active").siblings().removeClass("active");
        brandIndex = $(this).index();

        $(".brandBanner>ul>li").eq(brandIndex).addClass("active").siblings().removeClass("active")
    })


    // youtubeWrap /////////////////////////////

        //현재 보여지는 배너가 몇번인지를 보여주는 변수
        let showthumbnail = 0;
        let showYoutube = 0;
        //배너 한개의 너비값
        let liWidth = $(".thumnailWrap>li").width();
        //복사되기 전 배너의 개수
        let liCount = $(".thumnailWrap>li").length;
        
        //배너 복사
        let objLast = $(".thumnailWrap>li:gt(7)").clone();
        let objFirst = $(".thumnailWrap>li:lt(3)").clone();
    
        //복사한 배너 앞뒤로 붙이기
        $(".thumnailWrap").prepend(objLast);
        $(".thumnailWrap").append(objFirst);
    
        $(".thumnailWrap>li").eq(showthumbnail+2).addClass("active")
    
        //복사후 배너의 개수
        let count = $(".thumnailWrap>li").length;
        // console.log(count)
        //늘어난 배너의 개수 만큼 부모와 자식의 너비 재조정
        // $(".thumnailWrap").width(count*liWidth);
        // $(".thumnailWrap>li").width(liWidth);

        if(showthumbnail==0){
            $(".thumnailWrap>li").eq(count-3).addClass("active2")
        }
        
        function moveBanner(){
            $(".thumnailWrap").stop().animate({
                left: -showthumbnail*liWidth
            }, 500)
            // console.log(showthumbnail)
            if(showthumbnail == 0){
                $(".thumnailWrap>li").eq(12).addClass("active2")
            }else{
                $(".thumnailWrap>li").eq(12).removeClass("active2")
            }

            if(showthumbnail==10){
                $(".thumnailWrap>li").eq(2).addClass("active2")
            }else{
                $(".thumnailWrap>li").eq(2).removeClass("active2")
            }

            if(showYoutube > 9 ){
                showYoutube =0;
            }else if(showYoutube < 0){
                showYoutube = 9
            }
            $(".mainYoutube>ul>li").eq(showYoutube).addClass("active").siblings().removeClass("active");
            $(".thumnailWrap>li").eq(showthumbnail+2).addClass("active")

            .siblings().removeClass("active")
        }
        $(".youtubeBtn>.rightBtn").on("click", function(){
            // console.log("클릭")
            if(showthumbnail == liCount){
                showthumbnail=0;
                $(".thumnailWrap").css("left", 0);
            }
            showthumbnail++;
            showYoutube++;
            moveBanner();
        })
        $(".youtubeBtn>.leftBtn").on("click", function(){
            if(showthumbnail == 0){
                showthumbnail = liCount;
                $(".thumnailWrap").css("left", -showthumbnail*liWidth)
            }
            showthumbnail--;
            showYoutube--;
            moveBanner()
        })
})
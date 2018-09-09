var littermap = {};

littermap.init = function(){
    $(document).ready(function() {
        littermap.animation();
    });
};

littermap.animation = function(){
    $("#map").click(function() {
    $("#chipbag").css("visibility","visible");
    move();
        
    });
};

function move(){
    var imgtop1 = parseInt($("#chipbag").css("top"));
    if(imgtop1<514){
        $("#chipbag").animate({ top: "+=20px" }, 20);
        var newtop1 = imgtop1 + 20 +"px";
        $("#chipbag").css("top",newtop1);
        setTimeout(move(),100);
    }
    var imgtop2 = parseInt($("#coke").css("top"));
    if(imgtop2<280){
        $("#coke").css("visibility","visible");
        $("#coke").animate({ top: "+=20px" }, 20);
        var newtop2 = imgtop2 + 20 +"px";
        $("#coke").css("top",newtop2);
        setTimeout(move(),100);
    }
    var imgtop3 = parseInt($("#burger").css("top"));
    if(imgtop3<480){
        $("#burger").css("visibility","visible");
        $("#burger").animate({ top: "+=20px" }, 20);
        var newtop3 = imgtop3 + 20 +"px";
        $("#burger").css("top",newtop3);
        setTimeout(move(),100);
    }
    var imgtop4 = parseInt($("#pizza").css("top"));
    if(imgtop4<490){
        $("#pizza").css("visibility","visible");
        $("#pizza").animate({ top: "+=10px" }, 20);
        var newtop4 = imgtop4 + 10 +"px";
        $("#pizza").css("top",newtop4);
        setTimeout(move(),100);
    }
};

littermap.init();
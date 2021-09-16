var block_opj="";
var canvas=new fabric.Canvas("myCanvas");
var bimg_h=30;
var bimg_w=30;
px=10;
py=10;
var player_opj="";


function player_update(){

    fabric.Image.fromURL("player.png",function (img){

    player_opj=img;
    player_opj.scaleToWidth(150);
    player_opj.scaleToHeight(140);
    player_opj.set({
        left:px,
        top:py,
    });
                                            canvas.add(player_opj);
    })

}

function newimg(Image){

    fabric.Image.fromURL(Image,function (img){

    block_opj=img;
    block_opj.scaleToWidth(bimg_w);
    block_opj.scaleToHeight(bimg_h);
    block_opj.set({
        left:px,
        top:py,
    });
                                            canvas.add(block_opj);
    })

}

window.addEventListener("keydown",mykeydown);

function mykeydown(e){

    var keypress=e.keyCode;
    console.log(keypress);
    if(e.shiftKey==true && keypress=="80"){
        bimg_w +=10;
        bimg_h +=10;
        document.getElementById("current-width").innerHTML=bimg_w;
        document.getElementById("current-height").innerHTML=bimg_h;
    }

    if(e.shiftKey==true && keypress=="77"){
        bimg_w -=10;
        bimg_h -=10;
        document.getElementById("current-width").innerHTML=bimg_w;
        document.getElementById("current-height").innerHTML=bimg_h;
    }

    if(keypress=='38'){
        up();
    }

    if(keypress=='39'){
        right();
    }

    if(keypress=='40'){
        down();
    }

    if(keypress=='37'){
       left();
    }

    if(keypress=='87'){
        newimg("wall.jpg");
    }

    if(keypress=='71'){
        newimg("ground.png");
    }

    if(keypress=='76'){
        newimg("light_green.png");
    }

    if(keypress=='84'){
        newimg("trunk.jpg");
    }

    if(keypress=='82'){
        newimg("roof.jpg");
    }

    if(keypress=='89'){
        newimg("yellow_wall.png");
    }

    if(keypress=='68'){
        newimg("dark_green.png");
    }

    if(keypress=='85'){
        newimg("unique.png");
    }

    if(keypress=='67'){
        newimg("cloud.jpg");
    }

}
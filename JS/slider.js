let slider1=document.getElementById("slider1");
let slider2=document.getElementById("slider2");
let left=document.getElementById("leftbutton");
let right=document.getElementById("rightbutton");
let offset=0;

let offsetChecker = () => {
    return offset <= 0 && offset >=-300;
}

right.onclick = () =>  {
    offset=offset-100
    if(offsetChecker()===false){
        offset=0;
    }
    slider1.style.transform=`translateX(${offset}%)`;
    slider2.style.transform=`translateX(${offset}%)`;
}

left.onclick = () =>  {
    offset=offset+100
    if(offsetChecker()===false){
        offset= -300;
    }
    slider1.style.transform=`translateX(${offset}%)`;
    slider2.style.transform=`translateX(${offset}%)`;
}
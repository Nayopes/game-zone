

const burgerMenu = document.getElementById('burgerMenu');
const sideMenuMain = document.getElementById('sideMenuMain');
let isOpen = false
burgerMenu.onclick=()=>{
    if(!isOpen){
        isOpen = true;
        sideMenuMain.style.maxHeight = 100+'vh';
        sideMenuMain.style.fontSize = 14+'px';
    }else{
        sideMenuMain.style.maxHeight = 0;
        sideMenuMain.style.fontSize =0;
        isOpen = false;
    }
};

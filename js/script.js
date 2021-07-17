let mob = $('nav.mobile i');
let linksmobile = $('nav.mobile ul li a');
let abrirFechar = function(){
    $('nav.mobile ul').slideToggle();
    mob.toggleClass(["fa-bras","fa-times"]);
};
mob.click(abrirFechar);
linksmobile.click(abrirFechar);

let mob = $('nav.mobile i')
mob.click(function(){
    $('nav.mobile ul').slideToggle();
    mob.toggleClass(["fa-bras","fa-times"]);
})
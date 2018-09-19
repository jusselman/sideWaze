var pos=0;
$(window).bind('mousewheel DOMMouseScroll', function(event){
    if (event.originalEvent.wheelDelta < 0 || event.originalEvent.detail > 0) {
        pos=pos+50;
    }
    else {
    if (pos > 1){

    	pos=pos-50;
    }

    }
    $('#yscroll').scrollLeft( pos)

});

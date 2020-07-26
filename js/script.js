let percent=0;

function increasebar(newpercent) {
    percent=percent+newpercent;
    $("#my-progress-bar").width(percent);
}

function init() {
    $('.btn-plusone').click( function() {
            increasebar(1);
    });
    $('.btn-plustwo').click( function() {
            increasebar(2);
    });
    $('.btn-plusthree').click( function() {
            increasebar(3);
    });
}

$(document).ready(init);
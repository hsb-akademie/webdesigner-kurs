$(document).ready(function () {

    let show = false;
    $('.icon').click(function () {
        if (show) {
            $('.password').get(0).type = 'password';
            show = false;
        } else {
            $('.password').get(0).type = 'text';
            show = true;
        }
    })

});
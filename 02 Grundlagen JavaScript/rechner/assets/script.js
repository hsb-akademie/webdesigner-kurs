
const variable1 = "10";
const variable2 = "10";

const summe = variable1 + variable2;


$('.clickme').click(function () {
    const ergebnis = parseFloat($('.wert1').val()) + parseFloat($('.wert2').val());
    $('.ergebnis').text(ergebnis);
});
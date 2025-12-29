// Custom form dropdown
$(document).ready(function () {

  $('[data-select="option"]').on('click', function () {

    const $wrap = $(this).closest('[data-select="wrapper"]'); 
    const $dropdown = $wrap.find('[data-select="dropdown"]'); 

    const text = $(this).text();

    $dropdown.find('[data-select="toggle"]').trigger('w-close'); 
    $dropdown.find('[data-select="label"]').text(text); 
    $wrap.find('[data-select="input"]').val(text); 

  });

});
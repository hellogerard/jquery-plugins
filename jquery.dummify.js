/*!
 * Dummify for jQuery
 *
 * Pre-populates a text input with a default value, removes the value onFocus,
 * and re-populates the value if nothing was entered. Great for password, credit
 * card numbers, and URLs pre-populated with the "http://".
 *
 * Dual licensed under the MIT and GPL licenses.
 * Copyright (c) 2010 Gerard Sychay
 *
 * Examples:
 *
 * $('#myPassword').dummify("                ");
 * $('#myCreditCardNum').dummify("xxxx-xxxx-xxxx-1234");
 */
 
(function($){

    $.fn.dummify = function(defaultValue) {

        $(this).blur(function() {
            if (! $(this).val()) {
                $(this).val(defaultValue);
            }
        });

        $(this).focus(function() {
            if ($(this).val() == defaultValue) {
                $(this).val("");
            }
        });

        $(this).blur();
    };

})(jQuery);

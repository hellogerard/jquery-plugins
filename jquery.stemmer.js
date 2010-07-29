/*!
 * Word Stemmer for jQuery
 *
 * Takes the value of one text input and populates the value of another input
 * with the stemmed version of the value. This is nice for determining vanity
 * URLs for user names.
 *
 * Dual licensed under the MIT and GPL licenses.
 * Copyright (c) 2010 Gerard Sychay
 *
 * Examples:
 *
 * // if 'Gerard Sychay' is typed into 'name', 'slug' is set to 'gerard-sychay'
 * $('#slug').stemmer({'source': 'name'});
 */
 
(function($){

    $.fn.stemmer = function(options) {
        var target = $(this);

        $('#' + options.source).bind('keyup blur', function() {
            value = $('#' + options.source).val();

            value = value.toLowerCase();
            value = value.replace(/&.+?;/g, ''); // kill entities
            // officially, JS RegExp does not support unicode chars (though
            // libraries exist). let's at least handle &eacute;
            value = value.replace(/\u00E9/g, 'e'); // replace &eacute; with e
            value = value.replace(/[^a-z0-9 _-]/g, ''); // kill all but letters, digits, space, underscore, and dash
            value = value.replace(/[-|_|\s]+/g, '-'); // replace multiple dash, underscore, spaces with single dash
            value = $.trim(value);

            target.val(value);
        });
    };

})(jQuery);

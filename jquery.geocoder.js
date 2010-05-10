/*!
 * Geocoder for jQuery
 *
 * Wrapper for Google Maps JavaScript API V3 Client Geocoder
 * <http://code.google.com/apis/maps/documentation/v3/services.html>.
 *
 * Takes a form and a text input. Attempts to geocode the input. If successful,
 * calls a callback passing it a google.maps.GeocoderResult object
 * <http://code.google.com/apis/maps/documentation/v3/reference.html#GeocoderResult>.
 *
 * Dual licensed under the MIT and GPL licenses.
 * Copyright (c) 2010 Gerard Sychay
 *
 * Examples:
 *
 *  $('form').geocoder('#q', function(o) {
 *      $('#q').val(o.geometry.location.lat() + ' ' + o.geometry.location.lng());
 *      $('form').submit();
 *  });
 */
 
(function($){

    $.fn.geocoder = function(input, callback) {

        $(':submit').click(function(e) {
            e.preventDefault();
            geocoder = new google.maps.Geocoder();
            address = $(input).val();

            geocoder.geocode({ 'address': address}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    callback(results[0]);
                }
            });
        });
    };

})(jQuery);

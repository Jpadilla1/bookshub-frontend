Stripe.setPublishableKey('pk_test_0kdKRntcrHlYsL54QQsSjaXo');

var stripeResponseHandler = function(status, response) {
    var $form = $('#checkout-form');

    console.log(response);
    if (response.error) {
        // Show the errors on the form
        $form.find('.payment-errors').text(response.error.message);
        $form.find('.payment-errors').addClass('alert');
        $form.find('.payment-errors').addClass('alert-error');
        $form.find('button').prop('disabled', false);
    } else {
        // token contains id, last4, and card type
        var token = response.id;
        // Insert the token into the form so it gets submitted to the server
        $form.append($('<input type="hidden" name="stripe_token" />').val(token));
        // and re-submit
        // $form.get(0).submit();
        // For bookshub, call API and send data.
    }
};

jQuery(function($) {
    $('#checkout-form').submit(function(e) {
        var $form = $(this);

        // Disable the submit button to prevent repeated clicks
        $form.find('button').prop('disabled', true);

        Stripe.createToken($form, stripeResponseHandler);

        // Prevent the form from submitting with the default action
        return false;
    });
});
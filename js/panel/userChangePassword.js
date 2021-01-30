/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


$(function() {
    var old_password = $("#old_password"),
        new_password = $("#new_password"),
        new_password_repeat = $("#new_password_repeat"),
        allFields = $([]).add(old_password).add(new_password).add(new_password_repeat),
        tips = $("#validateTips");

    function updateTips(t) {
        tips.text(t).effect("highlight",{},1500);
    }

    function checkLength(o,n,min,max) {
        if ( o.val().length > max || o.val().length < min ) {
            o.addClass('ui-state-error');
            updateTips("Długość " + n + " musi być pomiędzy "+min+" a "+max+".");
            return false;
        } else {
            return true;
        }
    } // checkLength

    function checkRegexp(o,regexp,n) {
        if ( !( regexp.test( o.val() ) ) ) {
            o.addClass('ui-state-error');
            updateTips(n);
            return false;
        } else {
            return true;
        }
    } // checkRegexp

    $("#dialog").dialog({
        bgiframe: true,
        autoOpen: false,
        height: 300,
        modal: true,
        buttons: {
                'Zmień hasło': function() {
                        var bValid = true;
                        allFields.removeClass('ui-state-error');

                        bValid = bValid && checkLength(old_password,"old_password",6,20);
                        bValid = bValid && checkLength(new_password,"new_password",6,20);
                        bValid = bValid && checkLength(new_password_repeat,"new_password_repeat",6,20);

                        //bValid = bValid && new_password === new_password_repeat;

                        if (bValid) {
                                alert( 'valid' );
                                $(this).dialog('close');
                        }
                },
                'Anuluj': function() {
                        $(this).dialog('close');
                }
        },
        close: function() {
                allFields.val('').removeClass('ui-state-error');
        }
    });
});

function changePassword( intUserId )
{
    $('#dialog').dialog('open');
    /*$('#create-user').click(function() {
        $('#dialog').dialog('open');
    })
    .hover(
        function(){
            $(this).addClass("ui-state-hover");
        },
        function(){
            $(this).removeClass("ui-state-hover");
        }
    ).mousedown(function(){
        $(this).addClass("ui-state-active");
    })
    .mouseup(function(){
        $(this).removeClass("ui-state-active");
    });*/
} // changePassword

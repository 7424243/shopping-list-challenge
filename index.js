$(function() {

    /* adding a new <li> to the end of the current <ul> */

    $('#js-shopping-list-form button').on('click', function(e) {
        e.preventDefault();

        let toAdd = $('#shopping-list-entry').val();

        $('.shopping-list').append(
            '<li><span class="shopping-item">' + toAdd + '</span>'
        + '<div class="shopping-item-controls"><button class="shopping-item-toggle">'
        + '<span class="button-label">check</span></button><button class="shopping-item-delete">'
          + '<span class="button-label">delete</span></button></div></li>'
        );
    });


    /* deleting a <li> */
    $('.shopping-list').on('click', '.shopping-item-delete', function(e) {
        this.closest('li').remove();

    });


    /* toggling check/unchecked classes */
    $('.shopping-list').on('click', '.shopping-item-toggle', function(e) {
      $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
    


});
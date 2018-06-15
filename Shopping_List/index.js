'use strict';

$(function() {
  $('#js-shopping-list-form').on('submit', event => {
    event.preventDefault();
    
    const chosenItem = $('.js-shopping-list-entry').val();
    
    if (chosenItem === '') {
      throw new Error('Input cannot be empty.');
    }

    else {
      $('.shopping-list').append(
        `<li>
        <span class="shopping-item">${chosenItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
      );}
  });

  




});
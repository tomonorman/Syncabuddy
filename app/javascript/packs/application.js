// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";

// Internal imports, e.g:
import { initMapbox } from '../plugins/init_mapbox';
import { initSweetalert } from '../plugins/init_sweetalert';
import { initAutocomplete } from '../plugins/init_autocomplete';




// import { initSelect2 } from '../components/init_select2';

document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();
  initAutocomplete();
  initMapbox();
  initSweetalert('#sweet-alert-demo', {
  title: "Are you sure you can't make it?",
  text: "This action cannot be reversed",
  icon: "warning",
  buttons: ['Cancel', 'Yes'],
  dangerMode: true,
  showClass: {
    backdrop: 'swal-overlay'
  }
}, (value) => {
  if (value) {
    const link = document.querySelector('#delete-link');
    link.click();
  }
}
);

initSweetalert('#confirm', {
  title: "Do you want to confirm?",
  icon: "info",
  buttons: ['Cancel', 'Yes'],
  showClass: {
    backdrop: 'swal-overlay'
  }
}, (value) => {
  if (value) {
    const link = document.querySelector('#confirm-link');
    link.click();
  }
}
);

});

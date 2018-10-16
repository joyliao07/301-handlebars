'use strict';


function Dog (dog) {
  this.name = dog.name;
  this.picture = dog.image_url;
  this.hobbies = dog.hobbies;
  this.render();
}


Dog.prototype.render = function () {
  let $newdog = $('#dog-template').html();
  let compiled = Handlebars.compile($newdog);
  $('#dogs').append(compiled(this));

}


Dog.readjson = function () {
  $.get('data.json', 'json')
    .then( data => {
      data.forEach( each => {
        new Dog(each);
      });
    });
};


$(document).ready(function() {
  Dog.readjson();
});
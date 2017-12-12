const images = {
  dog: 'https://a-z-animals.com/media/animals/images/470x370/dingo1.jpg',
  cat: 'http://www.pets4homes.co.uk/images/articles/2355/large/burmese-cat-health-and-genetics-547d89dd3bffd.jpg',
  fish: 'https://cdn.petbarn.com.au/petspot/wp-content/uploads/2015/10/new-fish-to-tank-blog.jpg',
  elephant: 'https://d31j74p4lpxrfp.cloudfront.net/sites/default/files/styles/landscape_driver_block/public/us_files/adult_and_infant_elephant_hub_page_3_0.jpg?itok=UG47LpoM',
  squirrel: 'https://a-z-animals.com/images/blog/britishwinter3.jpg',
  bird: 'http://ingridkuhn.com/themes/petz/img/service1.jpg',
  gorilla: 'https://www.zoo.org.au/sites/default/files/styles/zv_aggregate_featured/public/gorilla2-MZ-animal-web460.jpg?itok=8NctJnfW',
  giraffe: 'https://www.australiazoo.com.au/our-animals/amazing-animals/images/profile_305_600.jpg',
  bear: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Kamchatka_Brown_Bear_near_Dvuhyurtochnoe_on_2015-07-23.png/1200px-Kamchatka_Brown_Bear_near_Dvuhyurtochnoe_on_2015-07-23.png'
};

//window.addEventListener('load', function() {
$(function() {
  //const gallery = document.querySelector('.gallery');
  const $gallery = $('.gallery');
  //const buttons = document.querySelectorAll('#animalsList li');
  const $buttons = $('#animalsList li');

  //buttons.forEach(function(listItem) {
  $buttons.each(function() {
  //  listItem.addEventListener('click', function(event) {
    $(this).on('click', function(event) {
      const animal = event.target.id;
      event.target.className = 'showing';
  //    const newTile = document.createElement('div');
      const $newTile = $('<div>');  
  //    newTile.className = 'image';
      $newTile.addClass('image');
  //    const newImage = document.createElement('img');
      const $newImage = $('<img>');
  //    newImage.src = images[animal];
      $newImage.attr('src', images[animal]);
  //    newImage.className = animal;
      $newImage.addClass('animal');
  //    const caption = document.createElement('p');
      const $caption = $('<p>');
  //    const captionText = document.createTextNode(animal);
      const $captionText = $caption.text(animal);
  //    caption.appendChild(captionText);
      $caption.append($captionText);
  //    newTile.appendChild(caption);
      $newTile.append($caption);
  //    newTile.appendChild(newImage);
      $newTile.append($newImage);
  //    gallery.appendChild(newTile);
      $gallery.append($newTile);
  //  }, false);
    });
  });
});
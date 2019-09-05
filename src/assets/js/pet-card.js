$(document).ready(function () {
  let activeSection = 'character';
  $('.character-pet-card .menu-selector').click(function(event) {
    let classList = $(this).attr("class").split(/\s+/);
    let section = null;
    for(let i=0;i<classList.length;i++) {
      if(classList[i].indexOf('character-selector') !== -1) {
        section = 'character-section';
        activeSection = 'character';
        break;
      }
      else if(classList[i].indexOf('pet-selector') !== -1) {
        section = 'pet-section';
        activeSection = 'pet';
        break;
      }
    }
    if(section === null) {
      console.log('Error happened, invalid section');
      return;
    }
    $(this).parent().children('.menu-selector').removeClass('active');
    $(this).parent().parent().children('.section').removeClass('active');
    $(this).parent().parent().children(`.${section}`).addClass('active');
    $(this).addClass('active');
    if(section === 'pet-section') {
      $(this).parent().parent().parent().children('.image-side').addClass('pet');
    }
    else {
      $(this).parent().parent().parent().children('.image-side').removeClass('pet');
    }

  });
  $(".character-pet-card .character-image").hover(function(){
    if(activeSection === 'pet') {
      return;
    }
    $(this).children('.overlay').addClass('hovered');
    $(this).children('.character-hover').css('opacity',1);
  }, function(){
    if(activeSection === 'pet') {
      return;
    }
    $(this).children('.overlay').removeClass('hovered');
    $(this).children('.character-hover').css('opacity',0);

  });
  $('textarea').each(function () {
    this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
  }).on('input', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
  });
});

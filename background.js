

  chrome.extension.onMessage.addListener(function(request, sender, myCallback){

  $.ajax({
    url: 'http://droboshok.github.io/01/sound.json',
    dataType: 'json',
    success: function (data) {
      console.log(data.id);
      
    }
    });


   myCallback("qwqqw");  
  });


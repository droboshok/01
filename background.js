

  chrome.extension.onMessage.addListener(function(request, sender, myCallback){

  $.ajax({
    url: '236633050.json',
    dataType: 'json',
    success: function (data) {
      console.log(data.id);
      
    }
    });


     
  });


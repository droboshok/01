var audioLink = document.querySelector('.my_audio_link_class');
var durationBlock = document.querySelector('.element_with_duration_in_text_class').innerText.split(':'); //it has string '1:36' for example and i create new array with minutes and seconds
var duration = durationBlock[0]*60 + +durationBlock[1]; //convert minutes into seconds and convert string with second into integer, then summarize them

function (audioLink, duration) {
var xmlhttp = new XMLHttpRequest();
xmlhttp.overrideMimeType('text/xml');

xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var size = xmlhttp.getResponseHeader('Content-Length');//get file size
        var kbit=size/128;//calculate bytes to kbit
    var kbps= Math.ceil(Math.round(kbit/duration)/16)*16;
    console.log(kbps);
    }
};
xmlhttp.open("HEAD", audioLink, true);
xmlhttp.send();
}
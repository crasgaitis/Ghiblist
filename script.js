$(document).ready(function(){
    var outerContent = $('.abc');
    var innerContent = $('.abc > div');

    outerContent.scrollLeft((innerContent.width() - outerContent.width()) / 2);        
});
var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

function retrieve (info) {
  $(".thequote").text(info.quoteText);
  $(".author").text(info.quoteAuthor);
  var twit ='https://twitter.com/intent/tweet?text='+ info.quoteText + ' - ' + info.quoteAuthor + ' @thegitahi';
  $("#tweet-button").attr("href", twit);
}


$(document).ready(function() {
  $.getJSON(url, retrieve, 'jsonp');
});
$("#newquote").click(function(){
  $.getJSON(url, retrieve, 'jsonp');
})

var clicks = 0;
$(function() {
  twttr.ready(
    function (twttr) {
$('#new-quote').on('click', function(e) {
    e.preventDefault();
    $.ajax( {
      url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        var author = post.title;
        var quoteContent = $(post.content).text();
        $('#quote-title').text(post.title);
        $('#quote-content').html(post.content);
        clicks +=1;
        $('#clickBadge').text(clicks);
        $('#tweet-container').empty();
        twttr.widgets.createShareButton(
          "",
          document.getElementById("tweet-container"),
          {
            size: "large",
            text: quoteContent + " - "+ author,
          }
        );

         
      },
      cache: false
    });
  });
  }
);

});
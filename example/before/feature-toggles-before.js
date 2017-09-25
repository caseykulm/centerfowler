(function(){

function initContents($){
  $(".contents ul ul").hide();
  $(".contents .contents-expand").click(function() {
    $(".frontMatter").addClass("tweak-while-sliding");
    $(".contents ul ul").slideToggle(400, function() {
      $(".frontMatter").removeClass("tweak-while-sliding");
    });
  });
}

function initSyntaxHighlighting($){
  $('pre.code').each( function(ix,el){
    hljs.highlightBlock(el);
  });
}

$(document).ready(function() {
  initSyntaxHighlighting($);
  initContents($);
});

}());



$(document).ready(function () //{alert("double toodles!");
{ $(".ball").click(function () {
	var originalmargin = $(this).css("margin-left");
	var marginNUM = originalmargin.slice(0, originalmargin.length -2);
	var newMargin = parseInt(marginNUM) + 20;
	$(this).css("margin-left", newMargin + "px");
	})
$(".tab").click(function () {
	$(".content").hide();
	var clickedTab = $(this).attr("data-contentid");
	console.log(clickedTab);
	$(clickedTab).show();
})function makePost(text) {
  var outterDiv = document.createElement("div");
  outterDiv.className = "col offset-l3 l6 offset-m2 m8 s12"
  var cardDiv = document.createElement("div");
  cardDiv.className = "card";
  var cardContentDiv = document.createElement("div");
  cardContentDiv.className = "card-content";
  var textNode = document.createTextNode(text);
  cardContentDiv.appendChild(textNode);
  cardDiv.appendChild(cardContentDiv);
  outterDiv.appendChild(cardDiv);
  return outterDiv
}

$(document).ready(function () {

});


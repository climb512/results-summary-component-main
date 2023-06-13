var xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", "data.json", true);
xmlHttp.addEventListener("load", ajaxCallback, false);
xmlHttp.send(null);
function ajaxCallback(event){
  var json = JSON.parse(event.target.responseText);
  json.forEach(e => {
    const elem = document.getElementById(e.category);
    const elemIcon = elem.getElementsByTagName("img")[0];
    elemIcon.setAttribute('src', e.icon);
    const elemMode = elem.getElementsByClassName("mode")[0];
    elemMode.innerHTML = e.category;
    const elemScore = elem.getElementsByClassName("score")[0];
    elemScore.innerHTML = e.score + '<span class="grey"> / 100</span>';
    })
  }
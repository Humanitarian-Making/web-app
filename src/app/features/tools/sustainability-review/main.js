


  
var texts = {}
var cols = {} //0 is off, 1 is red, 2 is amber, 3 is green

window.onload = function() {
  loadAll()
  currentSelection = 0
  loadSidebar(1)
  //var boxes = document.getElementById("wrapper").getElementsByTagName("div");
  $(".b").click(function() {
    loadSidebar(this.id);
  });
  //$(".b").addClass("lev0");
  for (i = 1; i < 17; i++) { 
  	$("#"+i).prepend("<h1 class=\"num\">"+titles[i]+"</h1>")
	}
}

window.onbeforeunload = closingCode;
function closingCode(){
   texts[currentSelection] = $("#t").val();
   saveAll();
   console.log("AHHHH")
   return null;
}
currentSelection = 0

getGroup = function(idnum) {
	if (idnum==15) {
  	return $(".topright")
  } else {
  	return $("#"+idnum)
  }
}

loadSidebar = function(idnum) {
	if (idnum=="15a" || idnum=="15b") {idnum = 15}
  texts[currentSelection] = $("#t").val();
  if (idnum in texts) {
    $("#t").val(texts[idnum])
  } else {
    $("#t").val("")
  }
	$("#boxtitle").text(idnum + ": " + titles[idnum])
	$("#desc").text(descs[idnum])

  $(".b").removeClass("selected")
  getGroup(idnum).addClass("selected")
  currentSelection = idnum
  saveAll()
}

redPressed = function() {
	getGroup(currentSelection).removeClass("lev0 lev1 lev2 lev3")
  getGroup(currentSelection).addClass("lev1")
  cols[currentSelection] = 1
  //$(".layer1").get(0).style.setProperty('--box-size','800px')
  saveAll()
}

orangePressed = function() {
	getGroup(currentSelection).removeClass("lev0 lev1 lev2 lev3")
  getGroup(currentSelection).addClass("lev2")
  cols[currentSelection] = 2
  saveAll()
}

greenPressed = function() {
	getGroup(currentSelection).removeClass("lev0 lev1 lev2 lev3")
  getGroup(currentSelection).addClass("lev3")
  cols[currentSelection] = 3
  saveAll()
}

greyPressed = function() {
	getGroup(currentSelection).removeClass("lev0 lev1 lev2 lev3")
  cols[currentSelection] = 0
  saveAll()
}

saveAll = function() {
  localStorage.setItem("texts",JSON.stringify(texts))
  localStorage.setItem("cols",JSON.stringify(cols))
}

loadAll = function() {
  t = localStorage.getItem("texts")
  c = localStorage.getItem("cols")
  if (t != null) {
    texts = JSON.parse(t)
  }
  if (c != null) {
    cols = JSON.parse(c)
  }
  for (j in cols) {
    console.log(cols)
    getGroup(j).removeClass("lev0 lev1 lev2 lev3")
    if (cols[j]==1) {
      getGroup(j).addClass("lev1")
    }
    if (cols[j]==2) {
      getGroup(j).addClass("lev2")
    }
    if (cols[j]==3) {
      getGroup(j).addClass("lev3")
      console.log("yo")
    }

  }
  console.log(texts)
}


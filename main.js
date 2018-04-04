function loadJSON(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState ===4 && xhr.status =="200"){
      callback(xhr.responseText);
    }
  };
  xhr.send();
}
loadJSON("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  career(data);
  education(data.education);
  skill(data.skills);
})



var right=document.querySelector(".content");
function career(car){
  var h=document.createElement("h3");
  h.textContent="career Objective";
  right.appendChild(h);

  var hr=document.createElement("hr");
  right.appendChild(hr);

  var p=document.createElement("p");
  p.textContent=car.carrier.info;
  right.appendChild(p);

  console.log(car.education);


}
function education(edu){
  var h=document.createElement("h3");
  h.textContent="EDUCATION DETAILS";
  right.appendChild(h);

  var hr=document.createElement("hr");
  right.appendChild(hr);

  var ul=document.createElement("ul");
  right.appendChild(ul);

  for(var i=edu.length-1;i>=0;i--){
    var li=document.createElement("li");
    li.textContent=edu[i].Degree;
    ul.appendChild(li);

    var p1=document.createElement("p");
    p1.textContent=edu[i].School;
    li.appendChild(p1);

    var ul1=document.createElement("ul");
    li.appendChild(ul1);

    for(var j=0;j<edu[i].Data.length;j++){
      var li1=document.createElement("li");
      li1.textContent=edu[i].Data[j];
      ul1.appendChild(li1);
    }
  }
}
function skill(skill){
  var h=document.createElement("h3");
  h.textContent="Skill";
  right.appendChild(h);

  var hr=document.createElement("hr");
  right.appendChild(hr);

  var table=document.createElement("table");
  table.border="1";
  right.appendChild(table);
  let row="";
  for(var i=0;i<skill.length;i++){
    row+="<tr><td>"+skill[i].name+"</td><td>"+skill[i].info+"</td></tr>"
  }
  table.innerHTML=row;
}

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
})
var right=document.querySelector(".content");
function career(car){
  console.log(car.info);
  var h3=document.createElement("h3");
  h3.textContent="career Objective";
  right.appendChild(h3);
  var hr=document.createElement("hr");
    right.appendChild(hr);
  var p=document.createElement("p");
      p.textContent=car.carrier.info;
      right.appendChild(p);
    console.log(car.education);

}

if (localStorage.length!=0){
  var ud=JSON.parse(localStorage.getItem("userdata"));
  var dynamic=document.querySelector(".cards");
  for(var i=0;i<ud.length;i++){
    dynamic.innerHTML+=`
    <div class="cardi" id="id${i+1}" onclick="cardpop('id${i+1}')">
      <div class="row cardbg">
        <div class="col-3">
          <div class="eimg">
            <img src="./images/emp${i+1}.jpg" class="img-fluid" alt="user" id="eim">
          </div>
        </div>
        <div class="col-9 exmp">
          <div class="edet">
            <p class="ant">${ud[i].name}</p>
            <p class="nant">${ud[i].role}</p>
            <p class="nants">${ud[i].dep} Department, ${ud[i].con}</p>
            <div class="imgs">
              <div class="img1">
                <a href="#"><img src="./images/call.png" alt="c" class="xx"></a>
              </div>
              <div class="img2">
                <a href="#"><img src="./images/mail.png" alt="c" class="xx"></a>
              </div>
              <div class="img3">
                <a href="#"><img src="./images/chat.png" alt="c" class="xx"></a>
              </div>
              <div class="img4">
                <a href="#"><img src="./images/star.png" alt="c" class="xx"></a>
              </div>
              <div class="img5">
                <a href="#"><img src="./images/like.png" alt="c" class="xx"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }

  var fd=JSON.parse(localStorage.getItem("filterdata"));
  var obj=document.querySelector(".rx");
  let code;
  for(var i=0;i<fd.deps.length;i++){
    code=`
      <a href="#" class="filterfont" onclick="filterd('${fd.deps[i]}')">${fd.deps[i]}</a>
    `;
    obj.innerHTML+=code;
  }
  var obj=document.querySelector(".ro");
  for(var i=0;i<fd.cons.length;i++){
    code=`
      <a href="#" class="filterfont" onclick="filterl('${fd.cons[i]}')">${fd.cons[i]}</a>
    `;
    obj.innerHTML+=code;
  }
  var obj=document.querySelector(".ff");
  for(var i=0;i<fd.roles.length;i++){
    code=`
      <a href="#" class="filterfont" onclick="filtert('${fd.roles[i]}')">${fd.roles[i]}</a>
    `;
    obj.innerHTML+=code;
  }
}

var dynamalpha=document.querySelector(".alpha");
for(var i=0;i<26;i++){
  dynamalpha.innerHTML+=`
  <button type="button" name="${String.fromCharCode(65+i)}" class="btns" onclick="cardFilter('${String.fromCharCode(65+i)}')">${String.fromCharCode(65+i)}</button>
  `
}

var filnums=document.querySelectorAll(".filterfont");
var id;
if(localStorage.length==0){
  id=0;
}
else{
  id=JSON.parse(localStorage.getItem("userdata")).length;
}

for(var i=0;i<filnums.length;i++){
  var filtext=filnums[i].textContent;
  var count=0;
  if (filtext=="IT"||filtext=="HR"||filtext=="UX"){
    var cardarray=document.querySelectorAll(".cardi");
    for(var n=0;n<cardarray.length;n++){
      var txt=cardarray[n].querySelector(".cardbg .exmp .edet .nants").textContent.split(" ")[0];
      if(filtext==txt){
        count+=1;
      }
    }
  }
  else if(filtext=="Seattle"||filtext=="India"){
    var cardarray=document.querySelectorAll(".cardi");
    for(var n=0;n<cardarray.length;n++){
      var txt=cardarray[n].querySelector(".cardbg .exmp .edet .nants").textContent.split(" ")[2];
      if(filtext==txt){
        count+=1;
      }
    }
  }
  else{
    var cardarray=document.querySelectorAll(".cardi");
    for(var n=0;n<cardarray.length;n++){
      var txt=cardarray[n].querySelector(".cardbg .exmp .edet .nant").textContent;
      if(filtext==txt){
        count+=1;
      }
    }
  }
  filnums[i].innerHTML+="("+count+")";
}
function cardFilter(alphab){
  var cardarray=document.querySelectorAll(".cardi");
  var fil=document.getElementById("prename");
  if(fil.value=="preferredName"){
    fil.style.border="2.5px solid red";
    setInterval(function(){
      fil.style.border="1px solid #767676";
    },1*500);
  }
  else if(alphab=="#"){
    for(var i=0;i<cardarray.length;i++){
      cardarray[i].setAttribute("id","id");
    }
  }
  else{
    for(var i=0;i<cardarray.length;i++){
      var arr=[];
      if(fil.value=="name"){
        var x=cardarray[i].querySelector(".cardbg .exmp .edet .ant").textContent.split(" ");
        for(var j=0;j<x.length;j++){
          arr.push(x[j]);
        }
      }
      else if(fil.value=="role"){
        var x=cardarray[i].querySelector(".cardbg .exmp .edet .nant").textContent.split(" ");
        for(var j=0;j<x.length;j++){
          arr.push(x[j]);
        }
      }
      else if(fil.value=="dept"){
        arr.push(cardarray[i].querySelector(".cardbg .exmp .edet .nants").textContent.split(" ")[0]);
      }
      else if(fil.value=="coun"){
        arr.push(cardarray[i].querySelector(".cardbg .exmp .edet .nants").textContent.split(" ")[2]);
      }
      for(var j=0;j<arr.length;j++){
        if(alphab.toLowerCase()==arr[j][0].toLowerCase()){
          cardarray[i].setAttribute("id","id");
          break;
        }
        else{
          cardarray[i].setAttribute("id","idpl");
        }
      }
    }

  }
}

function searchbarc(event){
  var sdata=document.getElementById("searchspac").value.toLowerCase();
  var fil=document.getElementById("prename");
  if(fil.value=="preferredName"){
    fil.style.border="2.5px solid red";
    setInterval(function(){
      fil.style.border="1px solid #767676";
    },1*500);

  }
  else{
    var cardarray=document.querySelectorAll(".cardi");
    for(var i=0;i<cardarray.length;i++){
      var arr=[];
      if(fil.value=="name"){
        var x=cardarray[i].querySelector(".cardbg .exmp .edet .ant").textContent.split(" ");
        for(var j=0;j<x.length;j++){
          arr.push(x[j]);
        }
      }
      else if(fil.value=="role"){
        var x=cardarray[i].querySelector(".cardbg .exmp .edet .nant").textContent.split(" ");
        for(var j=0;j<x.length;j++){
          arr.push(x[j]);
        }
      }
      else if(fil.value=="dept"){
        arr.push(cardarray[i].querySelector(".cardbg .exmp .edet .nants").textContent.split(" ")[0]);
      }
      else if(fil.value=="coun"){
        arr.push(cardarray[i].querySelector(".cardbg .exmp .edet .nants").textContent.split(" ")[2]);
      }
      for(var j=0;j<arr.length;j++){
        if(sdata==arr[j].toLowerCase()){
          cardarray[i].setAttribute("id","id");
          break;
        }
        else{
          cardarray[i].setAttribute("id","idpl");
        }
      }
    }
  }
}

function clears(){
  document.getElementById("filterby").reset();
  var form=document.getElementById("myform");
  form.reset();
  var cardarray=document.querySelectorAll(".cardi");
  for(var i=0;i<cardarray.length;i++){
    cardarray[i].setAttribute("id","id");
  }
}

function filterd(data){
  var cardarray=document.querySelectorAll(".cardi");
  for(var i=0;i<cardarray.length;i++){
    var x=cardarray[i].querySelector(".cardbg .exmp .edet .nants").textContent.split(" ")[0];
    if(x.toLowerCase()===data.toLowerCase()){
      cardarray[i].setAttribute("id","id");
    }
    else{
      cardarray[i].setAttribute("id","idpl");
    }
  }
}
function filterl(data){
  var cardarray=document.querySelectorAll(".cardi");
  for(var i=0;i<cardarray.length;i++){
    var x=cardarray[i].querySelector(".cardbg .exmp .edet .nants").textContent.split(" ")[2];
    if(x.toLowerCase()===data.toLowerCase()){
      cardarray[i].setAttribute("id","id");
    }
    else{
      cardarray[i].setAttribute("id","idpl");
    }
  }
}

function filtert(data){
  var cardarray=document.querySelectorAll(".cardi");
  for(var i=0;i<cardarray.length;i++){
    var x=cardarray[i].querySelector(".cardbg .exmp .edet .nant").textContent;
    if(x.toLowerCase()===data.toLowerCase()){
      cardarray[i].setAttribute("id","id");
    }
    else{
      cardarray[i].setAttribute("id","idpl");
    }
  }
}

function popups(){
  var blur=document.getElementById("bd");
  blur.classList.toggle('active');
  var pop=document.getElementById("addform");
  pop.style.display='block';
}

function empdatas(){
  var blur=document.getElementById("bd");
  blur.classList.toggle('active');
  var pops=document.getElementById("addform");
  pops.style.display='none';
  var nam=document.getElementById("addtn");
  var rol=document.getElementById("addtr");
  var depp=document.getElementById("addtd");
  var conn=document.getElementById("addtc");
  var flag1=0;
  var flag2=0;
  var flag3=0;
  var flag4=0;
  if(nam.value==""){
    document.getElementById("nosub1").style.display='block';
    flag1=1;
  }
  else{
    document.getElementById("nosub1").style.display='none';
    flag1=0;
  }
  if(rol.value==""){
    document.getElementById("nosub2").style.display='block';
    flag2=1;
  }
  else{
    document.getElementById("nosub2").style.display='none';
    flag2=0;
  }
  if(depp.value=="default"){
    document.getElementById("nosub3").style.display='block';
    flag3=1;
  }
  else{
    document.getElementById("nosub3").style.display='none';
    flag3=0;
  }
  if(conn.value=="default"){
    document.getElementById("nosub4").style.display='block';
    flag4=1;
  }
  else{
    document.getElementById("nosub4").style.display='none';
    flag4=0;
  }
  if(flag1==1 || flag2==1 ||flag3==1||flag4==1){
    popups();
    return;
  }
  const ncard=document.querySelector(".cards");
  var id=localStorage.getItem("id");
  id+=1;
  let code=`
  <div class="cardi" id="id${id}" onclick="cardpop('id${id}')">
      <div class="row cardbg">
          <div class="col-3">
            <div class="eimg">
                <img src="./images/emp${id}.jpg" class="img-fluid" alt="user" id="eim">
            </div>
          </div>
          <div class="col-9 exmp">
            <div class="edet">
              <p class="ant">${nam.value}</p>
              <p class="nant">${rol.value}</p>
              <p class="nants">${depp.value} Department, ${conn.value}</p>
              <div class="imgs">
                  <div class="img1">

                    <a href="#"><img src="./images/call.png" alt="c" class="xx"></a>

                  </div>
                  <div class="img2">
                    <a href="#"><img src="./images/mail.png" alt="c" class="xx"></a>
                  </div>
                  <div class="img3">
                    <a href="#"><img src="./images/chat.png" alt="c" class="xx"></a>
                  </div>
                  <div class="img4">
                  <a href="#"><img src="./images/star.png" alt="c" class="xx"></a>
                  </div>
                  <div class="img5">
                    <a href="#"><img src="./images/like.png" alt="c" class="xx"></a>
                  </div>
              </div>
            </div>
          </div>
      </div>
  </div>
  `;
  if (localStorage.length==0){
    var arr=[{name:nam.value,role:rol.value,dep:depp.value,con:conn.value}];
    localStorage.setItem("userdata",JSON.stringify(arr));

    var arr2={deps:[depp.value],cons:[conn.value],roles:[rol.value]};
    localStorage.setItem("filterdata",JSON.stringify(arr2));

    var obj=document.querySelector(".rx");
    let code=`
      <a href="#" class="filterfont" onclick="filterd('${depp.value}')">${depp.value}</a>
    `;
    obj.innerHTML+=code;

    var obj=document.querySelector(".ro");
    code=`
      <a href="#" class="filterfont" onclick="filterl('${conn.value}')">${conn.value}</a>
    `;
    obj.innerHTML+=code;

    var obj=document.querySelector(".ff");
    code=`
      <a href="#" class="filterfont f1" onclick="filtert('${rol.value}')">${rol.value}</a>
    `;
    obj.innerHTML+=code;
  }
  else{
    var arr={name:nam.value,role:rol.value,dep:depp.value,con:conn.value};
    var usr=JSON.parse(localStorage.getItem("userdata"));
    usr.push(arr);
    localStorage.setItem("userdata",JSON.stringify(usr));

    var arr2=JSON.parse(localStorage.getItem("filterdata"));
    if (arr2.deps.indexOf(depp.value)==-1){
      arr2.deps.push(depp.value);
      var obj=document.querySelector(".rx");
      let code=`
        <a href="#" class="filterfont" onclick="filterd('${depp.value}')">${depp.value}</a>
      `;
      obj.innerHTML+=code;
    }
    if (arr2.cons.indexOf(conn.value)==-1){
      arr2.cons.push(conn.value);
      var obj=document.querySelector(".ro");
      let code=`
        <a href="#" class="filterfont" onclick="filterl('${conn.value}')">${conn.value}</a>
      `;
      obj.innerHTML+=code;
    }
    if (arr2.roles.indexOf(rol.value)==-1){
      arr2.roles.push(rol.value);
      var obj=document.querySelector(".rf");
      let code=`
        <a href="#" class="filterfont" onclick="filtert('${rol.value}')">${rol.value}</a>
      `;
      obj.innerHTML+=code;
    }
    localStorage.setItem("filterdata",JSON.stringify(arr2));
  }
  ncard.innerHTML+=code;
  pops.reset();
  document.location.reload();
}

function cardpop(str){
  var item=document.getElementById(str);
  var name=item.querySelector(".ant").textContent;
  var role=item.querySelector(".nant").textContent;
  var dep=item.querySelector(".nants").textContent.split(" ")[0];
  var con=item.querySelector(".nants").textContent.split(" ")[2];
  var box=document.querySelector(".popbox");
  box.classList.add('active');
  var close=document.querySelector(".fclose");
  close.addEventListener("click"  ,function(){
    box.classList.remove('active');
  });
  var content=document.querySelector(".popcontent");
  let code=`
    <br>
    <h3>Name : <span class="bedit">${name}</span> <span><input type="text" class="edit edit1" placeholder="${name}" style="display:none"></span> </h3>
    <h3>Role : <span class="bedit">${role}</span> <span><input type="text" class="edit edit2" placeholder="${role}" style="display:none"></span> </h3>
    <h3>Dept : <span class="bedit">${dep}</span> <span><input type="text" class="edit edit3" placeholder="${dep}" style="display:none"></span> </h3>
    <h3>Country : <span class="bedit">${con}</span> <span><input type="text" class="edit edit4" placeholder="${con}" style="display:none"></span> </h3>
    <br>
  `;
  content.innerHTML=code;
  var ed=document.getElementById("edits");
  ed.addEventListener("click",function(){
    var x=document.querySelectorAll(".bedit");
    var y=document.querySelectorAll(".edit");
    for(var i=0;i<x.length;i++){
      x[i].style.display="none";
    }
    for(var i=0;i<y.length;i++){
      y[i].style.display="inline-flex";
    }
    var sub=document.getElementById("csc");
    csc.addEventListener("click",function(){
      var x1=document.querySelector(".edit1").value;
      var x2=document.querySelector(".edit2").value;
      var x3=document.querySelector(".edit3").value;
      var x4=document.querySelector(".edit4").value;
      var us=JSON.parse(localStorage.getItem("userdata"));
      var num=parseInt(str.slice(2,3))-1;
      if(x1!=""){
        us[num].name=x1;
      }
      if(x2!=""){
        us[num].role=x2;
      }
      if(x3!=""){
        us[num].dep=x3;
      }
      if(x4!=""){
        us[num].con=x4;
      }
      localStorage.setItem("userdata",JSON.stringify(us));
      document.location.reload();
      box.classList.remove('active');
      return;
    });
  });
}

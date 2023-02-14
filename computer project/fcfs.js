const txt = document.getElementById('$p1');
const sqr = document.getElementById('sqr');
function move(){
    sqr.innerHTML = txt.textContent;
}

 btn1.addEventListener('click',forwardClock);

let entry = document.getElementById("entry");
 entry.addEventListener('click', displayDetails);

 let lastChild= document.getElementById("$p1");
    let p2 = document.getElementById("p2");
    let p3 = document.getElementById("p3");
    let p4 = document.getElementById("p4");
    let p5 = document.getElementById("p5");
 
function closeForm() {
    document.getElementById("popupForm").style.display = "none";
  }

  function openForm() {
    document.getElementById("popupForm").style.display = "block";
  }

function displayDetails(){
    let burstTime = document.getElementById("$BT");

    if (document.getElementById('$p1').textContent == "") {
        lastChild.innerHTML = burstTime.value;
        document.getElementById('btn1').style.display= 'initial';

    } else if (document.getElementById('p2').textContent == "") {
        p2.innerHTML= burstTime.value;
    } else if (document.getElementById('p3').textContent == "") {
        p3.innerHTML= burstTime.value;
    } else if(document.getElementById('p4').textContent == "") {
        p4.innerHTML=burstTime.value;
    } else {
        p5.innerHTML=burstTime.value;
        hideAddButton();
    }
       closeForm();
}
if (document.getElementById("$p1").innerHTML  == "") {
    hideButton();
}


function hideButton(){
    document.getElementById('btn1').style.display= 'none';
    
    }

function moveProcess(){
    lastChild.textContent = p2.textContent;
    p2.textContent = p3.textContent;
    p3.textContent = p4.textContent;
    p4.textContent = p5.textContent;
    p5.textContent = "";
    unhide();

}

function forwardClock(){
    
    if (sqr.textContent == "0" || sqr.textContent == "CPU") {
        move();
        moveProcess();
        
    } else {
        sqr.textContent = Number(sqr.textContent) - 1;

    }
}

function hideAddButton(){
    document.getElementById('add').style.display='none';
}

function unhide(){
    document.getElementById('add').style.display='initial';

}













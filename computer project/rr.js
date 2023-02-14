const txt = document.querySelectorAll(".button");
const sqr = document.getElementById('sqr');
const numbers = [...txt];

function move(){
    
    counter = Number(p6.textContent);
    sqr.innerHTML = lastChild.textContent;

   
}

 btn1.addEventListener('click',forwardClock);

let entry = document.getElementById("entry");
 entry.addEventListener('click', displayDetails);

 let entry1 = document.getElementById("entry1");
 entry1.addEventListener('click', displayTimeSlice);

 let lastChild= document.getElementById("$p1");
    let p2 = document.getElementById("p2");
    let p3 = document.getElementById("p3");
    let p4 = document.getElementById("p4");
    let p5 = document.getElementById("p5");
    let p6 = document.getElementById("p6");
    let timeSlice = document.getElementById("ts");


 
function closeForm() {
    document.getElementById("popupForm").style.display = "none";
  }

  function closeForm1() {
    document.getElementById("popupForm1").style.display = "none";
  }



  function openForm() {
    document.getElementById("popupForm").style.display = "block";
  }

  function openForm1() {
    document.getElementById("popupForm1").style.display = "block";
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

let counter = 0;
function forwardClock(){

    if (p6.textContent == "" || p6.textContent == 0) {
        alert("Please input the appropriate time slice first!");
    }
    
    
    if (counter == 0 || sqr.textContent == "CPU") {
        returnProcess();
        move();
        moveProcess();

        
    } else {
        sqr.textContent = Number(sqr.textContent) - 1;
        counter --;
    }
}

function hideAddButton(){
    document.getElementById('add').style.display='none';
}

function unhide(){
    document.getElementById('add').style.display='initial';

}

function displayTimeSlice(){
    p6.innerHTML = timeSlice.value;
    closeForm1();
}

function returnProcess(){
    if(sqr.textContent == "CPU" || sqr.textContent == 0 || sqr.textContent < 0 ){
        return;
    }
    if (document.getElementById('$p1').textContent == "") {
        lastChild.innerHTML = sqr.textContent;
        document.getElementById('btn1').style.display= 'initial';

    } else if (document.getElementById('p2').textContent == "") {
        p2.innerHTML= sqr.textContent;
    } else if (document.getElementById('p3').textContent == "") {
        p3.innerHTML= sqr.textContent;
    } else if(document.getElementById('p4').textContent == "") {
        p4.innerHTML=sqr.textContent;
    } else {
        p5.innerHTML=sqr.textContent;

}
}













const txt = document.querySelectorAll(".button");
const sqr = document.getElementById('sqr');
const numbers = [...txt];
//let res = Object.values(result);

function move(){
    let smallest = Number(numbers[4].textContent);
 for (let i = 0;i<numbers.length; i++ ) {
    if (numbers[i].textContent == "") {
        continue;
    }
    if (smallest >  Number((numbers[i].textContent))) 
     {
        smallest = numbers[i].textContent;
    }
}
 console.log(smallest);
 sqr.innerHTML = smallest;
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
    let smallest = Number(numbers[4].textContent);
 for (let i = 0;i<numbers.length; i++ ) {
    if (numbers[i].textContent == "") {
        continue;
    }
    if (smallest >  Number((numbers[i].textContent))) 
     {
        smallest = numbers[i].textContent;
    }
}
   for (let i = 0; i < numbers.length; i++) {
    if (smallest == Number((numbers[i].textContent))) {
         sjf();   }
   }
    
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

function sjf(){
    let smallest = Number(numbers[4].textContent);
 for (let i = 0;i<numbers.length; i++ ) {
    if (numbers[i].textContent == "") {
        continue;
    }
    if (smallest >  Number((numbers[i].textContent))) 
     {
        smallest = numbers[i].textContent;
    }
}
    if (Number((document.getElementById('$p1').textContent)) == smallest) {
        lastChild.textContent = p2.textContent;
        p2.textContent = p3.textContent;
        p3.textContent = p4.textContent;
        p4.textContent = p5.textContent;
        p5.textContent = "";
        // document.getElementById('btn1').style.display= 'initial';

    } else if (document.getElementById('p2').textContent == smallest) {
        p2.textContent = p3.textContent;
        p3.textContent = p4.textContent;
        p4.textContent = p5.textContent;
        p5.textContent = "";
    } else if (document.getElementById('p3').textContent == smallest) {
        p3.textContent = p4.textContent;
        p4.textContent = p5.textContent;
        p5.textContent = "";
    } else if(document.getElementById('p4').textContent == smallest) {
        p4.textContent = p5.textContent;
        p5.textContent = "";    
    } else {
        p5.textContent = "";
        move();
}
}











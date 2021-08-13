"use strict";

function init() {
    // ready code
    listeners();
  }

//class
class Employe {
    constructor(firstname, lastname, phone, adress) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.adress = adress;
    }

}


class UI {
    addEmploye(employeValue, count) {


        if (count == 1) {
            var add = document.querySelector('#text');
            var html = `
        
                 <div class="card-text">
                 <p>Name: ${employeValue.firstname}</p>
                 <p> Lastname: ${employeValue.lastname}</p>
                 <p>Phone: ${employeValue.phone}</p>
                 <p>Adress: ${employeValue.adress}</p>
                </div>
            
            `;
            add.innerHTML = "";

        } else {
            var add = document.querySelector('#add');
            var html = `
           <div id="${count}"class="card">
             <div class="card-body">
                <div class="card-title">Form ${count}</div>
                <div class="card-text">
                <p>Name: ${employeValue.firstname}</p>
                <p> Lastname: ${employeValue.lastname} </p> 
                <p>Phone: ${employeValue.phone}</p>
                <p>Adress: ${employeValue.adress}</p>
               </div>
            </div>
            </div>
           `;

     //add item
        var a= document.createElement("a");
        var atext = document.createTextNode("item"+count);
        a.setAttribute('href', "#"+count);
        a.appendChild(atext);

        var li = document.createElement("li");
        li.appendChild(a);
        document.getElementById("item").appendChild(li);
        }
        add.innerHTML += html;
       
    }
}


function listeners() {
    let count = document.querySelector('#add').children.length-1;
    document.querySelector('#btn').addEventListener('click', function (e) {
     const firstname = document.getElementById('firstname').value;
     const lastname = document.getElementById('lastname').value;
     const phone = document.getElementById('phone').value;
     const adress = document.getElementById('adress').value;

     const employeValue = new Employe(firstname, lastname, phone, adress);


    //Create
    const ui = new UI();
    if (firstname === '' || lastname === '' || phone === '') {
        alert('Please complate the form', 'warning');
    } else {
        //add to card
        count++
        ui.addEmploye(employeValue, count);
    }

    
    //arrow for up
    var upbutton = document.getElementById("up");
    document.addEventListener('scroll', function(){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        upbutton.style.display = "inline-block";
    } else {
        upbutton.style.display = "none";
    }

    upbutton.addEventListener("click",function(e){
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    });
});

    e.preventDefault();
});




 
}

// Dom Content Ready
document.addEventListener('DOMContentLoaded', init());
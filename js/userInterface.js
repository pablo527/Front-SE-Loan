document.querySelector('#calcular').addEventListener('click', sendCredit);

function sendCredit(){
    var name = document.querySelector('#name').value;
    var surname = document.querySelector('#surname').value;
    var cc = document.querySelector('#cc').value;
    var age = document.querySelector('#age').value;
    var salary = document.querySelector('#salary').value; 
    var contact = document.querySelector('#contact').value;
    var credit = document.querySelector('#credit').value;
    var quota = document.querySelector('#quota').value;
    var amount = document.querySelector('#amount').value;
    var term = document.querySelector('#term').value;
    var initial = document.querySelector('#initial').value;
    var typeCredit = document.querySelector('#typeCredit').value;

    createJson(name, surname, cc, age, salary,contact,credit,quota,amount,term,initial,typeCredit);
}
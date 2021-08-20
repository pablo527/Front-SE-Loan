
function createJson(name, surname, cc, age, salary,contact,credit,quota,amount,term,initial,typeCredit){
    var credit = {
        name: name,
        surname: surname,
        cc: cc,
        age: age,
        salary: salary, 
        contact: contact,
        credit: credit,
        quota: quota,
        amount: amount,
        term: term,
        initial: initial,
        typeCredit: typeCredit
    };

    var jsonString = JSON.stringify(credit);
    var url='';

    fetch('url', {
        method: 'POST',
        body: jsonString
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    console.log(jsonString);
}
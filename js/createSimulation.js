
function createJson(name, surname, cc, age,card, activity,typeContract,month,typeProperty,value,contact,quota,amount,term,initial,typeCredit,income,expenses){
    
    var credit = {
        name: name,
        surname: surname,
        cc: cc,
        age: age,
        card: card,
        activity:activity,
        typeContract: typeContract,
        month: month,
        typeProperty: typeProperty,
        value:value,
        contact: contact,
        quota: quota,
        amount: amount,
        term: term,
        initial: initial,
        typeCredit: typeCredit,
        income:income,
        expenses: expenses
    };

    var jsonString = JSON.stringify(credit);
    var url='';
    console.log(credit);

    
    axios.post("http://localhost:8080/sendCredit", credit).then((result) => {
      console.log(result.data);
      if (result.data == false){
        alert("Su crédito ha sido rechazado");
      } else {
        alert("Su crédito ha sido Aprovado");
      }
    })
}
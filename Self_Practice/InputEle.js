function submitForm(){
    let firstName = document.getElementById("FN").value;
    let lastName = document.getElementById("LN").value ;
    const person = {
        firstName: firstName,
        lastName: lastName,
    }
    document.write(JSON.stringify(person));
    
}
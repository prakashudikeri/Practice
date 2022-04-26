const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input',function(){
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if (nameRegex.test(text.value)) textError.textContent="";
    else textError.textContent = "Name is Incorrect"
});

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
    output.textContent - salary.value;
    salary.addEventListener('input', function(){
        output.textContent = salary.value;
});






function submitForm() {
    let name = document.getElementById("text").value;
    let password = document.getElementById("pwd").value;
    let email = document.getElementById("email").value;
    let web = document.getElementById("url").value;
    let serial = document.getElementById("serial").value;
    let contact = document.getElementById("contact").value;
    let search = document.getElementById("search").value;
    let schedule = document.getElementById("schedule").value;
    let salary = document.getElementById("salary").value;

    const person = {
        name: name, password: password, email: email, web: web, serial: serial,
        contact: contact, search : search, schedule: schedule, salary: salary  
    } 
    document.write(JSON.stringify(person))

}
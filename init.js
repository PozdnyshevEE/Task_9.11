
document.querySelector('#btnStart').addEventListener('click', () => {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('patronymicOutput').innerText = initPerson.patronomic;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.yearOfBirth;
    document.getElementById('professionOutput').innerText = initPerson.profession;
})

document.querySelector('#btnReset').addEventListener('click', () => {
    location.reload();
})


// "use strict";
const contactNameInput = document.getElementById('addContactName');
const contactSurnameInput = document.getElementById('addContactSurname');
const contactNumberInput = document.getElementById('addContactNumber');
const contactsList = document.getElementById('contactsList');
const rowContactTemplate = document.getElementById('tdTemplate').innerHTML;

document.getElementById('addContactsForm').addEventListener('submit', onAddContactFormSubmit);
document.getElementById('contactsList').addEventListener('click', onRowContactList);
document.getElementById('addContactsForm').addEventListener('blur', validationBlur, true);

function onAddContactFormSubmit(event) {
    event.preventDefault();
    valitadionFormAddContact();
}

function validationBlur(event) {
    switch(true) {
        case (event.target.value.trim() !== ""):
        event.target.classList.remove('error');
        console.log("test1");
        break;
        case (event.target.classList.contains('input')):
        event.target.classList.add('error');
        console.log("test2");
        break;   
    }
}

function valitadionFormAddContact() {
    if(contactNameInput.value.trim() !== "" && contactSurnameInput.value.trim() !== "" &&
    contactNumberInput.value.trim() !== ""){
    submitForm();
    }
}
function onRowContactList(e) {
    // if(e.target.classList.contains('delete-btn')) { //other variant
    //     deleteContact(e.target.parentNode.parentNode);
    // }
    switch(true) {//for  future
        case event.target.classList.contains('delete-btn'):
            deleteContact(e.target.parentNode.parentNode);
            break;
    }
}
function deleteContact(element) {
    element.remove();
}

function submitForm() {
    const contact = { 
        name: contactNameInput.value,
        surname: contactSurnameInput.value,
        phone: contactNumberInput.value};

    newContacts(contact);
}

function newContacts(contact) {
    const dataNewContact = rowContactTemplate
    .replace('{{name}}', contact.name)
    .replace('{{surname}}', contact.surname)
    .replace('{{numberPhone}}', contact.phone);
     const createTrTag = document.createElement('tr');
     createTrTag.className = 'contacts-item';
     createTrTag.innerHTML = dataNewContact;
     contactsList.appendChild(createTrTag);
    clear();
}

function clear() {
    addContactName.value = '';
    addContactSurname.value = '';
    addContactNumber.value = '';
}

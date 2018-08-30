$(document).ready(function(){
let save=$('#save-contact');
save.click(function(){
  let contact={};
  contact.first_name=document.getElementById('first-name').value;
  contact.last_name=document.getElementById('last-name').value;
  contact.email=document.getElementById('Email').value;
  contact.address=document.getElementById('address').value;
  contact.mobile=document.getElementById('contact-number').value;
  console.log(contact);
})

})

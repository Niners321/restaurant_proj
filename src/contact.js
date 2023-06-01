function createContact() {
    const contact = document.createElement('div')
    contact.classList.add('contact')

    const phoneNumber = document.createElement('p')
    phoneNumber.textContent = '123-456-7890'

    const address = document.createElement('p')
    address.textContent = '123 Main St, Everytown, TX USA'

    contact.appendChild(phoneNumber)
    contact.appendChild(address)

    return contact
}

function loadContact() {
    const main = document.getElementById('main');
    main.appendChild(createContact());
  }
  
  export default loadContact
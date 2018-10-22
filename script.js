"use strict"

//AddressBook class
class AddressBook {
    constructor() {
        this.contacts = [{ name: "John", email: "johnQpublic@gmail.com", phone: "(313) 565-0958", relation: "brother" }];
    }
    // Methods
    add(info) {
        this.contacts.push(info)
    }
    deleteAt(index) {
        this.contacts.splice(index, 1)
    }
    print() {
        for (let i = 0; i < this.contacts.length; i++) {
        console.log(this.contacts[i]);
        }
    }
    display() {
        
    }
}
//Contact class
class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}
let addressBook = new AddressBook();
// while (true) {
//     const choice = prompt("Would you like to Add, Remove, Print or Quit?");
//     if (choice === "add") {
//         addressBook.add(new Contact(
//             this.name = prompt("What is your name?"),
//             this.email = prompt("What is your E-mail address?"),
//             this.phone = prompt("What is your phone number?"),
//             this.relation = prompt("What is your relation?"),
//         ))
//         console.log(addressBook);
//     } else if (choice === "quit") {
//         break;
//     } else if (choice === "remove") {
//         let index = prompt("What index would you like to remove?")
//         addressBook.deleteAt(index);
//         console.log(addressBook);
//     } else if (choice === "print") {
//         addressBook.print();
//     }

}


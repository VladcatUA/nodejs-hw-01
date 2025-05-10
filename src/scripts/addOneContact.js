import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const addOneContact = async () => {
  try {
    const oldContacts = await readContacts();
    const newContacts = [...oldContacts, createFakeContact()];
    await writeContacts(newContacts);
    console.log('Contact added successfully');
  } catch (error) {
    console.error('Error adding contact:', error);
  }
};

addOneContact();




//import { createFakeContact } from '../utils/createFakeContact.js';
//import { readContacts } from '../utils/readContacts.js';

//export const addOneContact = async () => {
 // try {
 //   const oldContacts = await readContacts();
//    const newContact = createFakeContact();

//    oldContacts.push(newContact);
 // } catch (error) {
 //   console.log(error.message);
 // }
//};

//addOneContact();



import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';

export const addOneContact = async () => {
  try {
    const oldContacts = await readContacts();
    const newContact = createFakeContact();

    oldContacts.push(newContact);
  } catch (error) {
    console.log(error.message);
  }
};

addOneContact();


//mport { generateContacts } from './generateContacts.js';

//export const addOneContact = async () => {
//  await generateContacts(1);
//};

//addOneContact();


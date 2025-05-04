import { readFile } from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const contents = await readFile(PATH_DB, { encoding: 'utf8' });
    return JSON.parse(contents);
  } catch (err) {
    console.error(err.message);
  }
};

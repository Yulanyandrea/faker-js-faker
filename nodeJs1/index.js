import { faker } from '@faker-js/faker';
import fs from 'fs';

const USERS = [];

function createRandomUser() {
  return faker.name.firstName();
}

Array.from({ length: 1000 }).forEach(() => {
  USERS.push(createRandomUser());
});

let users = USERS.toString();

users = users.replaceAll(",",",\n");

fs.writeFile("names.txt", users, function(err) {
    if (err) {
      return console.log(err);
    }
  
    console.log("El archivo fue creado correctamente");
});

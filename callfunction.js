const { name } = require('ejs');
const fs = require('fs')

// membuat direktori data jika belum ada
const dirPath = './data';
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

//membuat file dengan nama contact.json didalam folder data jika belum ada
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath,'[]','utf-8');
}

//fungsi untuk membaca file dari json dan kemudian di pharsing supaya bisa dibaca selain di file json
const readJSON = () => {
    const file = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(file);
    return contacts;
}

//fungsi untuk menemukan nama yang sesuai dengan key yang ada di json
const findContact = (name) => {
  const cont = readJSON()
  const contact = cont.find((contact) => contact.name === name)
  return contact;
}

//fungsi untuk tambah data
const data_add = (name, email, phone) => {
    const cont = readJSON()
    const contact = {name, email, phone}
    cont.push(contact)
    fs.writeFileSync('data/contacts.json', JSON.stringify(cont));
}

//cek apakah ada duplikasi data
const duplicate_data = () => {
    const cont = readJSON()
    const duplicate = cont.find((data) => data.name === name)
    return duplicate;
}
//export modules
module.exports = { readJSON, findContact, data_add, duplicate_data };
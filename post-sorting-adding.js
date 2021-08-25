const users = [
  { name: 'Ali', surname: 'Kaya' },
  { name: 'Cem', surname: 'Selvi' },
  { name: 'Murat', surname: 'Boncuk' },
];

const userList = function () {
  users.map((data) => {
    console.log(data.name);
  });
};
userList();
const addUser = function (data) {
  const promise = new Promise((resolve, reject) => {
    users.push(data);
    resolve();
  });
  return promise;
};

async function getData() {
  console.log('----- New List -----');
  try {
    await addUser({ name: 'Burak', surname: 'Yılmaz' });
    userList();
  } catch (err) {
    console.log(err);
  }
}
getData();
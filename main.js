const _ = require('lodash');

let users = [
    { id: 1, name: 'Alice', age: 25, active: true },
    { id: 2, name: 'Bob', age: 30, active: false },
    { id: 3, name: 'Charlie', age: 35, active: true },
    { id: 4, name: 'David', age: 40, active: false }
  ];

  function getActiveUsers(users) {
    return _.filter(users, [active=_.true])
  }
  
  function getSortedUsersByAge(users) {
    return _.sortBy(users, "age" )
  }

  function getUserNames(users) {
    return _.map(users, 'name');
  }

  function getUserById(users, id) {
    return _.find(users, { id }) || null;
  }

  function addUser(users, newUser) {
    return [...users, newUser];
  }

  function removeUserById(users, id) {
    return _.reject(users, { id });
  }

  function updateUser(users, updatedUser) {
    return users.map(user => user.id === updatedUser.id ? { ...user, ...updatedUser } : user);
  }



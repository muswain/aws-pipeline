
const users = [
  {
    id: 1,
    name: 'mj',
    location: 'Perth',
  },
  {
    id: 2,
    name: 'manojit',
    location: 'Sydney',
  },
];

// Display list of all Authors.
const userlist = (req, res) => {
  res.send('hello');
  // res.json(users);
};

// Display detail page for a specific Author.
const getUserById = (req, res) => {
  res.json(users.find(req.params.id));
};

module.exports.userController = {
  userlist,
  getUserById,
};

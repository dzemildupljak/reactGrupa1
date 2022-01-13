export const greatesId = (users) => {
  let maxid = users[0].id;
  users.forEach((u) => {
    if (u.id > maxid) {
      maxid = u.id;
    }
  });
  return maxid;
};

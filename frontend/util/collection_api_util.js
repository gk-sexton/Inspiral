export const grabCollections = (user) => {
  return $.ajax({
    method: 'get',
    url: '/api/collections',
    data: { user }
  });
};

export const addCollection = (collection) => {
  return $.ajax({
    method: 'post',
    url: '/api/collections',
    data: { collection }
  });
};

export const removeCollection = (collection) => {
  return $.ajax({
    method: 'delete',
    url: `/api/collections/${collection.id}`,
    data: { collection }
  });
};

export const updateCollection = (collection) => {
  return $.ajax({
    method: 'patch',
    url: `/api/collections/${collection.id}`,
    data: { collection }
  });
};

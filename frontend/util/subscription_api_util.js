export const grabSubscriptions = (user) => {
  return $.ajax({
    method: 'get',
    url: '/api/subscriptions',
    data: { user }
  });
};

export const addSubscription = (subscription) => {
  return $.ajax({
    method: 'post',
    url: '/api/subscriptions',
    data: { subscription }
  });
};

export const removeSubscription = (subscription) => {
  return $.ajax({
    method: 'delete',
    url: `/api/subscriptions/${subscription.id}`,
    data: { subscription }
  });
};

export const updateSubscription = (subscription) => {
  return $.ajax({
    method: 'patch',
    url: `/api/subscriptions/${subscription.id}`,
    data: { subscription }
  });
};

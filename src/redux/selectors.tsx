export interface UserinfoStore {
  userinfo: object;
}

export interface SelectedUserStore {
  selectedUser: object;
}

export const getUserinfo = (store: UserinfoStore) => {
  return store.userinfo;
};

export const getSelectedUser = (store: SelectedUserStore) => {
  return store.selectedUser;
};

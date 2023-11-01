// Simple account storage
const registeredUsers = [
    { username: 'isaquehg', password: 'inatel' },
    { username: 'larry', password: 'darry' },
];
  
export const login = (username: string, password: string): boolean => {
    const user = registeredUsers.find((u) => u.username === username && u.password === password);
    return !!user;
};

export const register = (username: string, password: string): void => {
    registeredUsers.push({ username, password });
};
  
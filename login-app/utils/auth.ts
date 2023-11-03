// Function to register a user
export const register = (username: string, password: string): void => {
    const registeredUsers = getRegisteredUsers();
  
    // Check if the username already exists
    if (registeredUsers.some((user) => user.username === username)) {
        console.error('Username already exists.');
        return;
    }
  
    const newUser = { username, password };
    registeredUsers.push(newUser);
    setRegisteredUsers(registeredUsers);
};
  
// Function to log in a user
export const login = (username: string, password: string): boolean => {
    const registeredUsers = getRegisteredUsers();
    const user = registeredUsers.find((u) => u.username === username && u.password === password);
    return !!user;
};
  
// Helper function to get registered users from local storage
function getRegisteredUsers(): { username: string, password: string }[] {
    const usersJSON = localStorage.getItem('registeredUsers');
    return usersJSON ? JSON.parse(usersJSON) : [];
}
  
// Helper function to set registered users in local storage
function setRegisteredUsers(users: { username: string, password: string }[]): void {
    const usersJSON = JSON.stringify(users);
    localStorage.setItem('registeredUsers', usersJSON);
}
  
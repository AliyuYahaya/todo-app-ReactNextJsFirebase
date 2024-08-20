import bcrypt from 'bcryptjs';

const users = [];

export async function findUserByUsername(username) {
    return users.find(user => user.username === username);
}

export async function createUser(username, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { username, password: hashedPassword };
    users.push(user);
    return user;
}

export async function validatePassword(user, inputPassword) {
    return bcrypt.compare(inputPassword, user.password);
}

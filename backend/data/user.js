import bcrypt from 'bcryptjs'
const users = [
    {
        name: "Aayush",
        email: "aayush@jain.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true
    },
    {
        name: "chhavi",
        email: "chhavi@jain.com",
        password: bcrypt.hashSync("123456", 10),

    },
    {
        name: "ravi",
        email: "ravi@jain.com",
        password: bcrypt.hashSync("123456", 10),

    }
]

export default users
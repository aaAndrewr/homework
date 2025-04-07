const user = {
    name: 'Andrew',
    age: 19,
    status: 'student',
    work: 'frontend',
    helloName(name) {
        console.log(`Hello, ${name}!`)
    }
}
console.log(user)
console.log(user.helloName('Curator'))

console.log('///////////////////////////////////////////////')

let simpleUsers = 0

const users = [
    {
        name: 'John',
        age: 19,
        isAdmin: true
    },
    {
        name: 'Alex',
        age: 20,
        isAdmin: false
    },
    {
        name: 'Ivan',
        age: 24,
        isAdmin: true
    },
    {
        name: 'Joe',
        age: 23,
        isAdmin: false
    },
    {
        name: 'Peter',
        age: 20,
        isAdmin: false
    },
    {
        name: 'Alexey',
        age: 21,
        isAdmin: true
    }
]

for(let i = 0; i < users.length; i++) {
    console.log(users[i])
    if(users[i].isAdmin === false) {
        simpleUsers = simpleUsers + 1
    }
}
console.log(simpleUsers)

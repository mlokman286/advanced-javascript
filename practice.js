const myFriend = [
    { roll: 1, name: "Shanhin Mahmud" },
    { roll: 2, name: "Mossarof" },
    { roll: 3, name: 'Tuhin Rahman' },
    { roll: 4, name: 'Lokman' },
    { roll: 6, name: 'Sujon' },
    { roll: 17, name: 'Nadim' },
    { roll: 10, name: 'Joynal Abedin' }
]
const allRoll = myFriend.map(x => x.roll);
const allName = myFriend.map(x => x.name)
const bigger = myFriend.filter(x => x.roll > 3)
const biggerOne = myFriend.find(x => x.roll > 3)
console.log(allName)
const {add,sub} = require('./util')

test("add 1+2",()=>{
    expect(add(1,2)).toBe(3)
})

// test("add 10, 2",()=>{
//     expect(add(10,2)).toBe(12)
// })

// test("add 10, 20 should return 30",()=>{
//     expect(add(10,30)).toBe(40)
// })


// test("sub 20,10 should return 10",()=>{
//     expect(sub(20,10)).toBe(10)
// })
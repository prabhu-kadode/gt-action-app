const add = require('./index')

test("add 1+2",()=>{
    expect(add(1,2)).toBe(3)
})

test("add 10, 2",()=>{
    expect(add(10,2)).toBe(12)
})
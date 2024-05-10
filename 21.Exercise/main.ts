interface items {
Names:string
Price:number}

//create two objects
const book:items =(
    names: "Essential Typescript"
    price:450
)
const apple: items ={ name:'apple' price:200}

console.log(`book.name: ${book.name}, price:$${book.price}`)
console.log(`apple.name: ${apple.name}, price:$${apple.price}`)

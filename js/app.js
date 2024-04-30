(()=>{

    console.log("hello javascript")
    const version = 8.2
    let nom = new String("javascript")

    let phone = 20.00
    const bool =true
    const x = null
     console.log (typeof nom)
    console.log (nom)
    const langs =["html", "css","js", true]
    console.table(langs)
    const User = {
         nom: "Romero",
         prenom: "John",
         age: 43,
         ville: "NY",
         pays: "USA",
 }
console.log(User) 
console.log(`${User.nom} : ${User.prenom}`)
console.log(langs.length)
/*for(let i= 0; i < langs.length;  i++){
     console.log(langs[i])
} */

let i =0;
while(i <langs.length){
console.log (`${i} : ${langs [i]}`)
i++
}
for(let index in User){
 console.log (`${index}) : ${User[index]}`)
langs.forEach((element) => {
    
});
const persons ={
       {
          nom : "Romero" 
         prenom: "John"
       },
       {
        nom : "Each",
        prenom: "Branden"
    },
    {
        nom : "Doe",
        prenom: "John"
    }

console.log(Object.values(persons));
console.table(persons)
persons.map((cle) =>{
    console.log(cle.nom+' '+cle.prenom)
})

//opérateurs



})()



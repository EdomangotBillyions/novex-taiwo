const randomUserApis = async()=> {
    let val1= await fetch('https://randomuser.me/api')
    console.log(val1)
    let val2= await val1.json();
    let finalval= val2.results
    let finalResult= finalval.map( code=> `<center><img src= "${user.picture.large}"><br><br><strong>title: ${code.name.title}<br>first Name: ${code.name.firstname}<br>last Name: ${code.name.lastname}<br>country: ${code.location.country}<br>state: ${code.location.state}</strong></center>`)

return document.body.innerHTML= finalResult
}
getrandomUserApis()
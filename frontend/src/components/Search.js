fetch("http://127.0.0.1:8000/?format=json")
.then(res=>res.json())
.then(data=>{
    const card = userCardTemplate.content.cloneNode(true)
    console.log(card)
})
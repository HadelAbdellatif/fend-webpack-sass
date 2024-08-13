function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8083/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })

    let 
    function sayHi(){
        console.log("::: Another fetch :::")
        fetch('http://localhost:8083/test2')
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('results').innerHTML += "               Hello World!"
        })
    }

}

export { handleSubmit }

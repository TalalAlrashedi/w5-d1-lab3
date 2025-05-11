fetch("https://http.cat/status/")
.then((response) => response.json())
.then((data) => {
    console.log(data);
    
})
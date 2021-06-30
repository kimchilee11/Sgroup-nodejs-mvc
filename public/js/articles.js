document.querySelector("#btnDel").addEventListener('click', async function(event) {
    event.preventDefault();
    const id = document.getElementById("square");
    const slug = document.getElementById("title").attributes[1].nodeValue.split(`/`)[4];
    console.log(slug);
    const url = `http://localhost:3000/articles/${slug}/delete`;
    const response = await fetch(url,{
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }) 
    if(!response.ok) alert("ERR");
    else {
        location.href = '/';
        id.remove();
        return;
    }
})

document.querySelector("#btnUpdate").addEventListener('click', async function(event) {
    event.preventDefault();
    const slug = document.getElementById("title").attributes[1].nodeValue.split(`/`)[4];
    const url = `http://localhost:3000/articles/${slug}/update`;
    const response = await fetch(url,{
        method: 'GET',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }) 
    if(!response.ok) alert("ERR");
    else {
        location.href = `/articles/${slug}/update`;
        return;
    }
})

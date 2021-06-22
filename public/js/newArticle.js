
document.querySelector("#btn").addEventListener('click', async function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const file = document.getElementById('thumbnail').value;
    // console.log("kimchilee");
    // console.log("file"+file);
    try {
        const response = await fetch('http://localhost:3000/articles/new', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                content,
                file
            }),
        });
        if (!response.ok) {
            alert('Error huhu');
        } else {
            location.href = '/';
            console.log(response.body);
            return;
        }
        
    } catch (error) {
        console.log("huhuhuhuhuh"+ error);
    }
})
document.querySelector("#postArticle").addEventListener('submit', async function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const urlImg = document.getElementById('previewImg').src;
    var file = document.getElementById('file').files[0].name;
    try {
        var response = await fetch('http://localhost:3000/articles/new', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                content,
                file,
                urlImg
            }),
        });
        console.log(response);
        if (!response.ok) {
            alert('Error huhuhuhuhuhuuhuhu');
        } else {
            location.href = '/';
            alert('Register success')
            return;
        }
        
    } catch (error) {
        console.log("huhuhuhuhuh"+ error);
    }
})
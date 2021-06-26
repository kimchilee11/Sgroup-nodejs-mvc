
document.getElementById('file').addEventListener('change', async function(event) {
    event.preventDefault();
    const file = document.getElementById('file').files[0];
    console.log(file);
    var data = new FormData();
    data.append('file', file);
    try {
        var response = await fetch('http://localhost:3000/images', {
            method: 'POST',
            body : data,
        });

        console.log(response);
        if (response.ok) {
            console.log('ok kc le')
        }
        return;
    } catch (error) {
        console.log("huhuhuhuhuh"+ error);
        return;
    }
})
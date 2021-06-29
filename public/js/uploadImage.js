
document.getElementById('file').addEventListener('change', async function(event) {
    event.preventDefault();
    const previewImg = document.getElementById('previewImg');
    const file = document.getElementById('file');
    var data = new FormData();
    data.append('file', file.files[0]);
    try {
        var response = await fetch('http://localhost:3000/images', {
            method: 'POST',
            body : data,
        });
        const {src} = await response.json();
        previewImg.src = await src;
        console.log(src);
        return;
    } catch (error) {
        console.log("huhuhuhuhuh"+ error);
        return;
    }
})
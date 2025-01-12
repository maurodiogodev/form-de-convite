function showFileName() {
    const input = document.getElementById('cover');
    const file = input.files[0];

    if (file) {
        const fileName = file.name;
        const fileType = file.type;

        if (fileType === 'image/jpeg' || fileType === 'image/png') {
            document.querySelector('#fileName').textContent = fileName;
            document.querySelector('.invitation-cover #errorMessage').style.display = 'none';
        } else {
            document.querySelector('.invitation-cover #errorMessage').style.display = 'flex';
        }
    } else {
        console.log('Nenhum arquivo selecionado.');
    }
}
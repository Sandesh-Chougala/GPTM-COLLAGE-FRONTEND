function change() {
    const selection = document.getElementById('selection');
    if (selection.style.display === 'none' || selection.style.display === '') {
        selection.style.display = 'block';
    }
    else {
        selection.style.display = 'none';
    }

}
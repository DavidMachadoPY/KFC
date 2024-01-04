if (typeof (Storage) != 'undefined') {
    console.log(Storage)
    let names = ['juan', 'salomon', 'david', 'jhon']
    localStorage.setItem('nombres', names)
    localStorage.lastNm = "perez"
} else {
    alert('STORAGE NO ES COMPATIBLE')
}


function cambioTema(){
    let choise = document.getElementById('theme').value;
    let body = document.getElementById('body');

    if (choise == 1) {
        body.classList.toggle('theme-light')
        body.classList.remove('theme-dark', 'theme-free')
    
    } else if (choise == 2) {
        body.classList.toggle('theme-dark')
        body.classList.remove('theme-light', 'theme-free')
        
    } else {
        body.classList.toggle('theme-free')
        body.classList.remove('theme-light', 'theme-dark')
        
    }
    document.getElementById('theme').value = ' '
        
}
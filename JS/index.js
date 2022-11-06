

const funcionResumen = () => {

    let cantidad = document.getElementById('cantidad').value;
    let categoria = document.getElementById('categoria').value;
    let mostrarResultado = document.getElementById('totalAPagar');
    let error = document.getElementById('error');
    let ticket = 200;
    let total;

    if (cantidad > 0 || !cantidad == Number) {
        switch (categoria) {
            case 'Sin Categoria':
                total = ticket * cantidad;
                mostrarResultado.innerHTML = `Total a pagar: $ ${total}`;
                break;
            case 'Estudiante':
                total = (ticket - (ticket * 80) / 100) * cantidad;
                mostrarResultado.innerHTML = `Total a pagar: $ ${total}`;
                break;
            case 'Trainee':
                total = (ticket - (ticket * 50) / 100) * cantidad;
                mostrarResultado.innerHTML = `Total a pagar: $ ${total}`;
                break;
            case 'Junior':
                total = (ticket - (ticket * 15) / 100) * cantidad;
                mostrarResultado.innerHTML = `Total a pagar: $ ${total}`;
                break;
        }
    } else {
        error.classList.toggle('visible');
    }
};

const funcionBorrar = () => {
    cantidad.value = ' ';
    categoria.value = 'Sin Categoria';
    document.getElementById('totalAPagar').innerHTML = 'Total a pagar: $';
    error.classList.remove('visible');
};
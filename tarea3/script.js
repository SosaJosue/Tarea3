document.addEventListener('DOMContentLoaded', function () {
    const clienteForm = document.getElementById('clienteForm');

    clienteForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;

        console.log('Nombre:', nombre);
        console.log('Email:', email);
        console.log('Teléfono:', telefono);
    });
});

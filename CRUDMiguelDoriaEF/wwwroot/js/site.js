
//Js pagina de Inicio
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})


//alerts

function alertRegistro() {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: '¡Autor creado exitosamente!',
        showConfirmButton: false,
        timer: 10000
    })
}

function alertActualizar() {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "¡Actualización Exitosa!",
        showConfirmButton: false,
        timer: 3000
    });
}   


//Alert para la eliminación
function alertConfirmacion(deleteUrl) {
    Swal.fire({
        title: "¿Estás seguro de eliminar el registro?",
        text: "¡Esta acción es irreversible!",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#28a745",
        cancelButtonColor: "#9BC1BC",
        confirmButtonText: "Sí, estoy seguro",
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        if (result.isConfirmed) {
            // Realizamos la solicitud para eliminar el recurso usando el deleteUrl
            fetch(deleteUrl, {
                method: 'POST', // Usamos POST en lugar de DELETE
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'RequestVerificationToken': document.querySelector('[name="__RequestVerificationToken"]').value // Token antifalsificación
                },
                body: new URLSearchParams({
                    __RequestVerificationToken: document.querySelector('[name="__RequestVerificationToken"]').value,
                    _method: 'DELETE' // Indicamos explícitamente que el método debe ser DELETE
                })
            })
                .then(response => {
                    if (response.ok) {
                        const Toast = Swal.mixin({
                            toast: true,
                            position: "top-end",
                            showConfirmButton: false,
                            timer: 1200,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                                toast.onmouseenter = Swal.stopTimer;
                                toast.onmouseleave = Swal.resumeTimer;
                            }
                        });
                        Toast.fire({
                            icon: "success",
                            title: "¡Eliminación Exitosa!"
                        }).then(() => {
                            // Recargamos la página actual para reflejar los cambios
                            location.reload(); // Recarga la página actual para reflejar los cambios
                        });
                    } else {
                        Swal.fire({
                            title: "¡Error en la Eliminación!",
                            text: "Registro referenciado en otro.",
                            icon: "warning"
                        });
                    }
                })
                .catch(error => {
                    Swal.fire({
                        title: "Error",
                        text: "Hubo un problema al intentar eliminar el registro.",
                        icon: "warning"
                    });
                });
        }
    });
}

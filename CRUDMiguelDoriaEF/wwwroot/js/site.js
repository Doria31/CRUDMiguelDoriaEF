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
        position: "center",
        icon: "success",
        title: "¡Registro Exitoso!",
        showConfirmButton: false,
        timer: 3000
    });
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

function alertConfirmacion(IdAutor) {

    Swal.fire({
        title: "¿Estás seguro de eliminar el registro?",
        text: "¡Esta acción es irreversible!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, estoy seguro"
    }).then((result) => {
        if (result.isConfirmed) {
            // Realizamos la solicitud para eliminar el autor
            fetch(`/Autors/Delete/${IdAutor}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'RequestVerificationToken': document.querySelector('[name="__RequestVerificationToken"]').value // Token antifalsificación
                },
                body: new URLSearchParams({
                    __RequestVerificationToken: document.querySelector('[name="__RequestVerificationToken"]').value
                })
            })
                .then(response => {
                    if (response.ok) {
                        Swal.fire({
                            title: "Eliminación Exitosa!",
                            text: "El registro ha sido eliminado correctamente.",
                            icon: "success"
                        }).then(() => {
                            // Opcionalmente puedes redirigir a la lista de autores, por ejemplo:
                            window.location.href = '/Autors'; // Redirige a la página de índice
                        });
                    } else {
                        Swal.fire({
                            title: "Error",
                            text: "No se pudo eliminar el registro.",
                            icon: "error"
                        });
                    }
                })
                .catch(error => {
                    Swal.fire({
                        title: "Error",
                        text: "Hubo un problema al intentar eliminar el registro.",
                        icon: "error"
                    });
                });
        }
    });
}

//categorias
function alertConfirmacion1(IdCategoria) {
    Swal.fire({
        title: "¿Estás seguro de eliminar el registro?",
        text: "¡Esta acción es irreversible!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, estoy seguro"
    }).then((result) => {
        if (result.isConfirmed) {
            // Realizamos la solicitud para eliminar la categoría
            fetch(`/Categorias/Delete/${IdCategoria}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'RequestVerificationToken': document.querySelector('[name="__RequestVerificationToken"]').value // Token antifalsificación
                },
                body: new URLSearchParams({
                    __RequestVerificationToken: document.querySelector('[name="__RequestVerificationToken"]').value
                })
            })
                .then(response => {
                    if (response.ok) {
                        Swal.fire({
                            title: "Eliminación Exitosa!",
                            text: "El registro ha sido eliminado correctamente.",
                            icon: "success"
                        }).then(() => {
                            // Redirige a la página de Categorías después de la eliminación exitosa
                            window.location.href = '/Categorias'; // Redirige a la página de índice de categorías
                        });
                    } else {
                        Swal.fire({
                            title: "Error",
                            text: "No se pudo eliminar el registro.",
                            icon: "error"
                        });
                    }
                })
                .catch(error => {
                    Swal.fire({
                        title: "Error",
                        text: "Hubo un problema al intentar eliminar el registro.",
                        icon: "error"
                    });
                });
        }
    });
}


//

//Editoriales

function alertConfirmacion2(IdEditoriale) {
    Swal.fire({
        title: "¿Estás seguro de eliminar el registro?",
        text: "¡Esta acción es irreversible!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, estoy seguro"
    }).then((result) => {
        if (result.isConfirmed) {
            // Realizamos la solicitud para eliminar la editorial
            fetch(`/Editoriales/Delete/${IdEditoriale}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'RequestVerificationToken': document.querySelector('[name="__RequestVerificationToken"]').value // Token antifalsificación
                },
                body: new URLSearchParams({
                    __RequestVerificationToken: document.querySelector('[name="__RequestVerificationToken"]').value
                })
            })
                .then(response => {
                    if (response.ok) {
                        Swal.fire({
                            title: "Eliminación Exitosa!",
                            text: "El registro ha sido eliminado correctamente.",
                            icon: "success"
                        }).then(() => {
                            // Redirige a la página de Editoriales después de la eliminación exitosa
                            window.location.href = '/Editoriales'; // Redirige a la página de índice de editoriales
                        });
                    } else {
                        Swal.fire({
                            title: "Error",
                            text: "Este registro está ligado a otro",
                            icon: "error"
                        });
                    }
                })
                .catch(error => {
                    Swal.fire({
                        title: "Error",
                        text: "Hubo un problema al intentar eliminar el registro.",
                        icon: "error"
                    });
                });
        }
    });
}


//Libros
function alertConfirmacion3(Isbn) {
    Swal.fire({
        title: "¿Estás seguro de eliminar el registro?",
        text: "¡Esta acción es irreversible!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, estoy seguro"
    }).then((result) => {
        if (result.isConfirmed) {
            // Obtener el token CSRF desde el DOM
            const token = document.querySelector('[name="__RequestVerificationToken"]').value;

            // Mostrar una alerta mientras se realiza la solicitud
            Swal.fire({
                title: 'Eliminando...',
                text: 'Estamos eliminando el libro...',
                showConfirmButton: false,
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            // Realizar la solicitud para eliminar el libro
            fetch(`/Libros/Delete/${Isbn}`, {
                method: 'POST', // Método POST para enviar la solicitud de eliminación
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded', // Tipo de contenido adecuado
                    'RequestVerificationToken': token // Incluir el token CSRF en el header
                },
                body: new URLSearchParams({
                    __RequestVerificationToken: token,  // Pasar el token CSRF
                })
            })
                .then(response => {
                    if (response.ok) {
                        Swal.fire({
                            title: "¡Eliminación Exitosa!",
                            text: "El registro ha sido eliminado correctamente.",
                            icon: "success"
                        }).then(() => {
                            // Después de la eliminación exitosa, redirigimos a la página de libros
                            window.location.href = '/Libros'; // Asegúrate de redirigir a la página correcta
                        });
                    } else {
                        Swal.fire({
                            title: "Error",
                            text: "No se pudo eliminar el registro.",
                            icon: "error"
                        });
                    }
                })
                .catch(error => {
                    console.error('Error en la solicitud:', error);
                    Swal.fire({
                        title: "Error",
                        text: "Hubo un problema al intentar eliminar el registro.",
                        icon: "error"
                    });
                });
        }
    });
}

//Libros Autoes
function alertConfirmacion4(IdLibrosAutor) {
    Swal.fire({
        title: "¿Estás seguro de eliminar el registro?",
        text: "¡Esta acción es irreversible!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, estoy seguro"
    }).then((result) => {
        if (result.isConfirmed) {
            // Obtener el token CSRF desde el DOM
            const token = document.querySelector('[name="__RequestVerificationToken"]').value;

            // Mostrar una alerta mientras se realiza la solicitud
            Swal.fire({
                title: 'Eliminando...',
                text: 'Estamos eliminando el libro...',
                showConfirmButton: false,
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            // Realizar la solicitud para eliminar el libro
            fetch(`/librosAutor/Delete/${IdLibrosAutor}`, {
                method: 'POST', // Método POST para enviar la solicitud de eliminación
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded', // Tipo de contenido adecuado
                    'RequestVerificationToken': token // Incluir el token CSRF en el header
                },
                body: new URLSearchParams({
                    __RequestVerificationToken: token,  // Pasar el token CSRF
                })
            })
                .then(response => {
                    if (response.ok) {
                        Swal.fire({
                            title: "¡Eliminación Exitosa!",
                            text: "El registro ha sido eliminado correctamente.",
                            icon: "success"
                        }).then(() => {
                            // Después de la eliminación exitosa, redirigimos a la página de libros
                            window.location.href = '/librosAutor'; // Asegúrate de redirigir a la página correcta
                        });
                    } else {
                        Swal.fire({
                            title: "Error",
                            text: "No se pudo eliminar el registro.",
                            icon: "error"
                        });
                    }
                })
                .catch(error => {
                    console.error('Error en la solicitud:', error);
                    Swal.fire({
                        title: "Error",
                        text: "Hubo un problema al intentar eliminar el registro.",
                        icon: "error"
                    });
                });
        }
    });
}

//modals

window.addEventListener('DOMContentLoaded', function () {
    // Verifica si la URL tiene el parámetro 'openModal=true'
    const params = new URLSearchParams(window.location.search);
    if (params.get('openModal') === 'true') {
        // Abre el modal cuando la página se carga
        const modal = new bootstrap.Modal(document.getElementById('registroAutorModal'));
        modal.show();
    }
});
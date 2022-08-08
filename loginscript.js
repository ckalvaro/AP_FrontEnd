let lista_de_usuarios = [];
let id_usuario = 0;
function add_user() {
    ev.preventDefault();
    //id_usuario++;
    let usuario = {
        //id: id_usuario,
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    }

    lista_de_usuarios.push(usuario);
    document.forms[0].reset();

    localStorage.setItem('Usuarios ', JSON.stringify(lista_de_usuarios));

    /* for (let i = 0; i < length(lista_de_usuarios); i++) {
        if (usuario.id == lista_de_usuarios[i].id && usuario.username == lista_de_usuarios && usuario.password == lista_de_usuarios[i].password) 
        {
            console.warn("login correcto!");
        }
        else 
        {
            console.warn("datos incorrectos / no existentes");
        }
    } */
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submit-button').addEventListener('click', add_user);
});
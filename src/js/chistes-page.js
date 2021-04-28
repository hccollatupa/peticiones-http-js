import { obtenerChiste } from './http-provider';

const body = document.body;
let btnOtroChiste, olChiste;

const crearChisteHtml = () => {
    const html = `
    <h1 class="mt-5">Chistes</h1>
    <hr>
    <button class="btn btn-primary">Otro chiste</button>

    <ol class="mt-2 list-group">
    </ol>
    `;

    const divChiste = document.createElement('div');
    divChiste.innerHTML = html;

    body.append(divChiste);
}

const eventos = () => {
    olChiste = document.querySelector('ol');
    btnOtroChiste = document.querySelector('button');

    btnOtroChiste.addEventListener('click', async() => {
        btnOtroChiste.disabled = true;
        dibujarChiste(await obtenerChiste());
        btnOtroChiste.disabled = false;
    });
}

const dibujarChiste = (chiste) => {
    const olItem = document.createElement('li');
    olItem.innerHTML = `<b>${chiste.id}</b>: ${chiste.value}`;
    olItem.classList.add('list-group-item');

    olChiste.append(olItem);
}

export const init = () => {
    crearChisteHtml();
    eventos();
}
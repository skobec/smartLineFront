import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.css'
import '../scss/main.scss';
import IMask from 'imask';


const form = document.getElementById('requestForm');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Пример работы формы отправки
        // вначале открывается окно,если все поля заполнены,то первый контент должен закрываться и покзаывтаься успех
        // когда закрываем модалку в след раз должна открывться опять первая модалка
        document.querySelector('.modal-form').classList.add('d-none');
        document.querySelector('.modal-success').classList.remove('d-none');
    });
}


const phoneInput = document.getElementById('phone');

let phoneMask;

if (phoneInput) {
    phoneMask = IMask(phoneInput, {
        mask: '+{7} (000) 00 00 000'
    });
}



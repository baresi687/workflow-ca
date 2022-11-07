import '../style.css';
import { clearStorage } from './utils/clearStorage';
import createHeaderBar from './components/createHeaderBar';

createHeaderBar();
const logOutBtn = document.querySelector('#logout-btn');

if (logOutBtn) {
    logOutBtn.addEventListener('click', () => {
        logoutUser();
    });

    function logoutUser() {
        clearStorage();
        window.location.replace('/login.html');
    }
}

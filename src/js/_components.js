import fixedHeader from "./components/fixed-header";
import hamburgerMenu from "./components/hamburger";
import progressBar from "./components/progress-bar";
import tabs from "./components/tabs";
import customSelect from "./components/custom-select";
import validateForm from "./components/validate";

document.addEventListener('DOMContentLoaded', () => {
    fixedHeader();
    hamburgerMenu();
    customSelect('.header__lang', '.header__lang-selected', '.header__lang-list');
    progressBar();
    tabs('.gallery__tab', '.gallery__content', '.gallery__tabs');
    customSelect('.contact__custom-select', '.contact__selected-item', '.contact__dropdown');
    validateForm();
});

import BaseComponent from '../types/baseComponent';

class Burger {
  private label: BaseComponent<HTMLLabelElement>;
  private checkbox: BaseComponent<HTMLInputElement>;

  private toggleNavMenu = (): void => {
    const navMenu: Element | null = document.querySelector('.header__nav');
    const transformClass: string = 'header__burger_transformed';
    const bodyClass: string = 'body_locked';
    const navClass: string = 'nav_open';
    if (navMenu && navMenu instanceof HTMLElement) {
      if (this.label.containClass(transformClass)) {
        this.label.removeClass(transformClass);
        navMenu.classList.remove(navClass);
        document.body.classList.remove(bodyClass);
      } else {
        this.label.addClass(transformClass);
        navMenu.classList.add(navClass);
        document.body.classList.add(bodyClass);
      }
    }
  }

  constructor(headerWrapper: HTMLDivElement) {
    this.label = new BaseComponent(headerWrapper, 'label', ['header__burger']);
    this.checkbox = new BaseComponent(this.label.element, 'input', ['header__burger-checkbox']);
    this.checkbox.element.type = 'checkbox';
    this.checkbox.element.addEventListener('change', this.toggleNavMenu);
  }
}

export default Burger;

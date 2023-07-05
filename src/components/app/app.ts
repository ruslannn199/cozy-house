import Burger from '../burger/burger';

class App {
  private instance: App | undefined;
  private readonly burger: Burger | undefined;

  constructor() {
    if (this.instance) return this;
    const headerWrapper: Element | null = document.querySelector('.header__wrapper');
    if (headerWrapper && headerWrapper instanceof HTMLDivElement) {
      this.burger = new Burger(headerWrapper);
    }
    this.instance = this;
  }
}

export default App;

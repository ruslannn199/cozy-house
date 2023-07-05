export interface IComponent<T extends HTMLElement> {
  element: T;
  addClass(classStyle: string): void;
  removeClass(classStyle: string): void;
  append(child: Element, position: InsertPosition): void;
}
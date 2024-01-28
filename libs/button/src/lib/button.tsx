import { component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './button.css?inline';

export type ButtonProps = {
  /**
   * @default "button"
   */
  type?: 'button' | 'submit' | 'reset';
};

export const Button = component$<ButtonProps>((props) => {
  useStylesScoped$(styles);

  return <button {...props}></button>;
});

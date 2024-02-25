import { initialise } from './lib/common';

/**
 * Highlight alike table cells.
 *
 * https://github.com/bezborodow/alike
 */
import TableCellsAlike from 'table-cells-alike';
const alike = new TableCellsAlike();
alike.attach(document);

/**
 * Disable autocomplete everywhere except for the login form.
 *
 * Absolute nonsense; piles of junk data. Completely distraction.
 * 
 * The user should think about what is being entered, not rely on
 * autocomplete, regardless of how poorly implemented this feature
 * is in browsers.
 */
initialise('input', input => {
  if (!(input.form && input.form.classList.contains('form-login'))) {
    input.setAttribute('autocomplete', 'off');
    input.setAttribute('aria-autocomplete', 'none');
  }
});

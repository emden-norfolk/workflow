/**
 * Set up initialisers.
 *
 * Initialisers use the mutation event framework to initialise
 * elements on the page, such as setting up event listeners.
 *
 * https://github.com/bezborodow/mutation-initialiser
 * https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/MutationObserver
 */
import { defaultInitialiser } from 'mutation-initialiser';
export const initialise = defaultInitialiser(document, {
  childList: true,
  subtree: true,
  many: true,
  attributes: true,
  watch: true
});

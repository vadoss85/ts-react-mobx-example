import Store from '../store';

declare global {
  interface Window {
    mobxStore: typeof Store;
  }
}
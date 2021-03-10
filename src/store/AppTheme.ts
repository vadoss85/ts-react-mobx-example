import { action, makeObservable, observable } from "mobx";

export type AppThemes = 'default' | 'dark';

export class AppTheme {
  current: AppThemes = 'default';
  _lsAppThemeAlias: string = '_appTheme';

  constructor() {
    const savedAppTheme = window.localStorage.getItem(this._lsAppThemeAlias) || 'default';
    this.current = savedAppTheme as AppThemes;

    makeObservable(this, {
      current: observable,
      changeTheme: action.bound,
      switchTheme: action.bound,
    })
  }

  switchTheme() {
    if(this.current === 'default') {
      this.changeTheme('dark')
      return;
    }

    this.changeTheme('default')
  }

  changeTheme(theme: AppThemes) {
    this.current = theme;
    window.localStorage.setItem(this._lsAppThemeAlias, theme);
  }
}
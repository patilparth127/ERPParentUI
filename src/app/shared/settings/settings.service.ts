import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  // Theme Mode
  public themeMode: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage.getItem('themeMode') || 'light_mode'
  );

  // Layout Mode
  public layoutMode: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage.getItem('layoutMode') || ''
  );

  // Navigation Color
  public navigationColor: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage.getItem('navigationColor') || 'light_mode'
  );

  // Font Color
  public fontColor: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage.getItem('fontColor') || 'primary_font_color'
  );

   // top Color
   public TopColor: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage.getItem('TopColor') || ''
  );

   // Font Color
   public backgroundMode: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage.getItem('backgroundMode') || ''
  );


  public changeThemeMode(theme: string): void {
    this.themeMode.next(theme);
    localStorage.setItem('themeMode', theme);
  }
  public changeLayoutMode(layout: string): void {
    this.layoutMode.next(layout);
    localStorage.setItem('layoutMode', layout);
  }
  public changeNavigationColor(color: string): void {
    this.navigationColor.next(color);
    localStorage.setItem('navigationColor', color);
  }
  public changeFontColor(color: string): void {
    this.fontColor.next(color);
    localStorage.setItem('fontColor', color);
  }
  public changeTopColor(top: string): void {
    this.TopColor.next(top);
    localStorage.setItem('TopColor', top);
  }
  public changeBackgroundMode(background: string): void {
    this.backgroundMode.next(background);
    localStorage.setItem('backgroundMode', background);
  }
}

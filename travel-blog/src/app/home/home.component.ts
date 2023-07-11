import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public isDisabled: boolean = true;
  public inputValue: string = 'TEST';

  onClick(): void {
    this.isDisabled = !this.isDisabled;
  }

  changeInputValue(): void {
    this.inputValue = '';
  }
}

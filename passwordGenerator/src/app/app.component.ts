import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  length = 0;
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  password: string = "";


  onChangeLength = (value: string) => {
    const parsedValue = parseInt(value); //

    // checks to make sure that the value is a number
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUseLetters = () => {
    this.includeLetters = !this.includeLetters;
    console.log(this.includeLetters);
  }

  onChangeUseNumbers = () => {
    this.includeNumbers = !this.includeNumbers;
    console.log(this.includeNumbers);
  }

  onChangeUseSymbols = () => {
    this.includeSymbols = !this.includeSymbols;
    console.log(this.includeSymbols);
  }

  onButtonClick = () => {
    const numbers = "1234567890"
    const letters = "abcdefghijklmnopqrstuvwxyz"
    const symbols = "!@#$%^&*()"

    let validChars = "";

    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }


    // loop to generate password
    let generatedPassword = "";
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;

    console.log(`
    About to generate a password with the following:
    Length of the password: ${this.password.valueOf().length}
    Includes letters: ${this.includeLetters}
    Includes numbers: ${this.includeNumbers}
    Includes symbols: ${this.includeSymbols}
    `);





  }







}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-exo';
posts=[
  
    {  
      title: 'Cupcake',
      content: 'Cupcake ipsum dolor sit. Amet pie jelly liquorice gummies lollipop sweet topping. Gummi bears carrot cake jelly lemon drops croissant jelly tootsie roll. Sesame snaps ice cream marzipan jelly candy canes. Sweet chocolate gummies caramels toffee jelly muffin.', 
      loveIts: 0, 
      postCreateDate : '23/09/85'
    } 
]}

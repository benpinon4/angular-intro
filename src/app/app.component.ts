import {Component} from '@angular/core';
import { HelloWorld } from './components/HelloWorld/hello-world';

@Component({
  selector: 'app-root',
  imports: [HelloWorld],
  template: `<hello-world />
  <p>Hello</p>  `
})
export class AppComponent {
  title = 'homes';
}

import { Component } from '@angular/core';

import { getAll } from 'openfin-notifications';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'openfin-error';

  async ngOnInit(): Promise<void> {
    const all = await getAll();
    console.log(all);
  }
}

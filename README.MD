# ion-dropdown

## Installation

To install this library, run:

```bash
$ npm install ion-dropdown --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install ion-dropdown
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { SampleModule } from 'ion-dropdown';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    LibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

[items] - object array of items to show in dropdown
value - object property name to bind to selectedItem, if not defined will bind whole object
display - object property name to show in input field after selection
[(selectedItem)] - variable to bind selected item,
showCount - number of items in dropdown that will be shown, if not set it will show all items

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<ion-dropdown placeholder="Select an item..." [items]="items" value="id" display="name" [(selectedItem)]="selectedItem" showCount="10"></ion-dropdown>

```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Adis Huremagić](mailto:adis.huremagic@comsoft.ba)

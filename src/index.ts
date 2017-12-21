import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

import { DropdownComponent } from './dropdown.component';
import { DropdownContentPage } from './dropdown-content/dropdown-content';

// export * from './sample.component';

export { DropdownComponent } from './dropdown.component';

@NgModule({
  declarations: [DropdownComponent, DropdownContentPage],
  imports: [IonicModule],
  exports: [DropdownComponent],
  entryComponents: [DropdownComponent, DropdownContentPage]
})
export class DropdownModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DropdownModule
    };
  }
}



import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  exports: [FontAwesomeModule],
})
export class IconsModule {
  // módulo criado para importar os ícones necessários do font awesome
  constructor(library: FaIconLibrary) {
    library.addIcons(faChevronDown, faChevronUp); // recupero apenas os ícones que a aplicação precisa
  }
 }

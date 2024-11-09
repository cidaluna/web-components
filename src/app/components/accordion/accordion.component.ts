import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgFor, NgClass, UpperCasePipe } from '@angular/common';

@Component({
    selector: 'app-accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.scss'],
    standalone: true,
    imports: [NgFor, FontAwesomeModule, NgClass, UpperCasePipe]
})
export class AccordionComponent {
  listCategories = ['html', 'css', 'js'];

  // estado de cada categoria é um objeto, onde a chave é o nome da categoria e o valor é booleano
  categoryState: { [key: string]: boolean } = {};

  constructor(){
    this.startCategories();
  }

  // inicia cada categoria com estado false
  startCategories(){
    this.listCategories.forEach(resp =>{
      this.categoryState[resp] = false;
      console.log("Inicia categoria = ",this.categoryState[resp]);
    });
  }

  // de acordo com o clique em details
  isDetailsOpen(typeItem: string){
    console.log("Função isDetailsOpen: typeItem = ",typeItem);
    if(typeof this.categoryState[typeItem] !== 'undefined'){
    this.categoryState[typeItem] = !this.categoryState[typeItem];
    console.log("Função isDetailsOpen: categoryState[typeItem] = ",this.categoryState[typeItem]);
    }
  }

}

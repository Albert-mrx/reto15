import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{

      titulo = 'Data Binding Interpolation';

    mostrar = true;
    valor = "Ocultar";
    texto = "";

    ver() {
    if (this.mostrar === true) {
    this.valor = "Mostrar"
    this.mostrar = false
    } else {
    this.valor = "Ocultar"
    this.mostrar = true
    }
}

}

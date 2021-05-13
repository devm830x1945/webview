import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  message = 'Click on a button';

  textConfig1 = {
    text: 'Click Here',
    attr: {
      placeholder: "Empresa"
    }
  };

  textConfig2 = {
    text: 'Click Here',
    attr: {
      placeholder: "Puesto"
    }
  };

  textAreaConfig = {
    styles: {
      position: 'relative',
      width: '100px',
      height: '100px'
    },
    src: '../../assets/images/icon/assets.png'
  };

  formulario: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void{

    this.crearFormulario()
    
  }

  crearFormulario() {
    this.formulario = this.fb.group({
      experienciaLaboral: this.fb.array([])
    });
  }

  get experienciaLaboral(): FormArray {
    return this.formulario.get('experienciaLaboral') as FormArray;
  }

  anadirExperienciaLaboral() {
    const trabajo = this.fb.group({
      empresa: new FormControl(''),
      puesto: new FormControl(''),
      descripcion: new FormControl('')
    });
  
    this.experienciaLaboral.push(trabajo);
  }

  borrarTrabajo(indice: number) {
    this.experienciaLaboral.removeAt(indice);
  }


  onClickEventReceived(event: string) {
    this.message = event;
  }
}
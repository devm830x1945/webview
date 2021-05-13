import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-service',
  templateUrl: './register-service.component.html',
  styleUrls: ['./register-service.component.css']
})
export class RegisterServiceComponent implements OnInit {

  @Input() message;
  @Output() close = new EventEmitter<void>();

  formulario: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.crearFormulario()
  }

  crearFormulario() {
    this.formulario = this.fb.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    });
  }

}

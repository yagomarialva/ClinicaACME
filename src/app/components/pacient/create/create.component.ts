import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pacient } from '../../model/pacient.model';
import { PacientService } from '../../services/pacient.service';


interface Status {
  value: string;
}

interface Gender {
  value: string;
}


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})


export class CreateComponent implements OnInit {

  status: Status[] = [
    {value: 'Ativo'},
    {value: 'Inativo'}
  ];
  selectedStatus = this.status[1].value;
  

  gender: Gender[] = [
    {value: 'Masculino'},
    {value: 'Feminino'},
    {value: 'Prefiro não declarar'}
  ];
  selectedGender = this.gender[1].value;
  
  pacient: Pacient = {
    name: "",
    date: "",
    cpf: "",
    gender:'',
    endereco:"",
    status:""
  }

  constructor(private pacientService: PacientService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createPacient(): void {
    this.pacientService.create(this.pacient).subscribe(() => {
      this.pacientService.showMessage('Produto criado!')
      this.router.navigate(['/pacients'])
    })

  }

  cancel(): void {
    this.router.navigate(['/pacients'])
  }

}

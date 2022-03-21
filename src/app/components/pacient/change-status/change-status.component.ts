import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pacient } from '../../model/pacient.model';
import { PacientService } from '../../services/pacient.service';

interface Status {
  value: string;
}

interface Gender {
  value: string;
}

@Component({
  selector: 'app-change-status',
  templateUrl: './change-status.component.html',
  styleUrls: ['./change-status.component.scss']
})
export class ChangeStatusComponent implements OnInit {

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
  pacient!: Pacient;

  constructor(
    private pacientService: PacientService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.pacientService.readById(id).subscribe((pacient) => {
      this.pacient = pacient;
    });
  }

  updateProduct(): void {
    this.pacientService.update(this.pacient).subscribe(() => {
      this.pacientService.showMessage("Paciente atualizado com sucesso!");
      this.router.navigate(["/pacients"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/pacients"]);
  }
}

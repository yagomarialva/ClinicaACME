import { Component, OnInit } from '@angular/core';
import { Pacient } from '../../model/pacient.model';
import { PacientService } from '../../services/pacient.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  pacients: Pacient[] = [];
  displayedColumns = ['id', 'name', 'date', 'cpf', 'endereco', 'gender', 'status', 'action']


  constructor(private pacientService: PacientService) { }

  ngOnInit(): void {
    this.pacientService.read().subscribe(pacients => {
      this.pacients = pacients
    })
  }
}

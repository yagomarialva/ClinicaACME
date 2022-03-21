import { Component, OnInit } from '@angular/core';
import { Pacient } from '../../model/pacient.model';
import { PacientService } from '../../services/pacient.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  pacients: Pacient[] = [];
  displayedColumns = ['id', 'name', 'date', 'cpf', 'endereco', 'gender', 'status', 'action']
  dataSource = new MatTableDataSource(this.pacients);

  constructor(private pacientService: PacientService) { }

  ngOnInit(): void {
    this.pacientService.read().subscribe(pacients => {
      // this.pacients = pacients
      this.dataSource.data = pacients;
      console.log(this.dataSource.data.length);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // console.log(filterValue)
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

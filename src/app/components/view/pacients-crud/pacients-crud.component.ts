import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-pacients-crud',
  templateUrl: './pacients-crud.component.html',
  styleUrls: ['./pacients-crud.component.scss']
})
export class PacientsCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl: '/pacients'
    }
  }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/pacients/create'])
  }

}

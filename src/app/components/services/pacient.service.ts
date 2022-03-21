import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Pacient } from "../model/pacient.model";

@Injectable({
  providedIn: 'root'
})
export class PacientService {
  baseUrl = "http://localhost:3001/pacients";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(pacient: Pacient): Observable<Pacient> {
    return this.http.post<Pacient>(this.baseUrl, pacient).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Pacient[]> {
    return this.http.get<Pacient[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Pacient> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Pacient>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(pacient: Pacient): Observable<Pacient> {
    const url = `${this.baseUrl}/${pacient.id}`;
    return this.http.put<Pacient>(url, pacient).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Pacient> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Pacient>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}

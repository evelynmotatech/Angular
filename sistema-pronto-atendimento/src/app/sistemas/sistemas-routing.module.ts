import { Routes } from '@angular/router';
import { ListarPacientesComponent } from './listar';

export const PacienteRoutes: Routes = [
    { 
        path:'pacientes',
        redirectTo: 'pacientes/listar'
    }, 
    { 
        path:'pacientes/listar',
        component: ListarPacientesComponent
    }
];
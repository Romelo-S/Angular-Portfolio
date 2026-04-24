import { Routes } from '@angular/router';
import { intro } from '../Intro/intro';
import { appConfig } from './app.config';
import { Experience } from '../Experience/Experience';
import { PageNotFound } from '../page-not-found/page-not-found';

export const routes: Routes = [
    {path: 'Experience', component: Experience},
    {path: ''   , component: intro},
    { path: '**', component: PageNotFound }   
    ];

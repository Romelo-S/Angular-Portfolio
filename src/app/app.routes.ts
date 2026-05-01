import { Routes } from '@angular/router';
import { intro } from '../Intro/intro';
import { appConfig } from './app.config';
import { Experience } from '../Experience/Experience';
import { PageNotFound } from '../page-not-found/page-not-found';
import { ContactPage } from '../Contact/Contact';
import { projectDoc } from '../Projects/projectDoc.component';

export const routes: Routes = [
    {path: 'Experience', component: Experience},
    {path: ''   , component: intro}, 
    {path: 'Contact', component: ContactPage },   
    { path: 'Projects' , component: projectDoc },
    { path: '**', component: PageNotFound },
    ];

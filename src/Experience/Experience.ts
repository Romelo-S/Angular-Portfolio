import { Directive, HostListener, Renderer2, ElementRef, AfterViewInit, ViewChild, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { simpleAngular ,simpleSpring, simpleSpringboot,simpleUnity,simpleJavascript, simpleMysql,simpleHtml5,simpleCss,simpleReact,simpleApachemaven,simpleGithubcopilot,simpleGithubactions,simpleDatadog,simpleDynatrace,simpleUnrealengine,simplePython,simpleC} from '@ng-icons/simple-icons';
import {octGitBranch} from '@ng-icons/octicons';



@Component({
    selector: 'Experience',
    templateUrl: './experience.html',
    styleUrl: './experience.css',
    imports: [NgIcon, CommonModule],
    providers: [provideIcons({
        simpleAngular,
        simpleSpring,
        simpleSpringboot,
        simpleUnity,
        simpleJavascript,
        simpleMysql,
        simpleHtml5,
        simpleCss,
        simpleReact,
        simpleApachemaven,
        simpleGithubactions,
        simpleGithubcopilot,
        simpleDynatrace,
        simpleDatadog,
        simpleUnrealengine,


        octGitBranch
        })]
    }) //TODO Create an icon/svg file utilizing the UI of Mario and Luigi with the good, great, Excellent Scale

export class Experience{
    icons = [{name: "simpleAngular", label: 'Angular'},
        {name: "simpleSpring", label: 'Spring'},
        {name: "simpleSpringboot", label: 'Springboot'},
        {name: "simpleUnity", label: 'Unity'},
        {name: "simpleJavascript", label: 'JS'},
        {name: "simpleMysql", label: 'MySQL'},
        {name: "simpleHtml5", label: 'HTML'},
        {name: "simpleCss", label: 'CSS'},
        {name: "simpleReact", label: 'React'},
        {name: "simpleApachemaven", label: 'Apache'},
        {name: "simpleGithubactions", label: 'Actions'},
        {name: "simpleGithubcopilot", label: 'Copilot'},
        {name: "simpleDynatrace", label: 'Dynatrace'},
        {name: "simpleDatadog", label: 'Datadog'},
        {name: "simpleUnrealengine", label: 'Unreal Engine'},
        {name: "octGitBranch", label: 'Git'}
     ] 
}

//Credit CC0-1.0 for the simpleIcons
//THis is for the experience box that andrew uses, create experience, create list to put the experience stuff. And make a folder for a bunch of symbols
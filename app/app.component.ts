import {Component, NgModule, ViewChild} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormControl, FormGroup, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular ng-select <small class="text-muted"><a target="_blank" href="https://github.com/ng-select/ng-select">Open in Github</a></small></h1>
        
        <hr />
        
        <label>Multiselect with custom bindings</label>
        <ng-select [items]="cities2"
                   bindLabel="name"
                   bindValue="name"
                   [multiple]="true"
                   placeholder="Select cities"
                   [(ngModel)]="selectedCityIds">
        </ng-select>
        <p>
            Selected cities: {{selectedCityIds}}
        </p>

        <div style="margin-top:300px"></div>
`
})
export class AppComponent {


    
    cities2 = [
        {id: 1, name: 'Vilnius'},
        {id: 2, name: 'Kaunas'},
        {id: 3, name: 'Pavilnys', disabled: true},
        {id: 4, name: 'Pabradė'},
        {id: 5, name: 'Klaipėda'}
    ];
    
    //cities4 = [];
    
    selectedCity: any;
    selectedCityIds: string[];
    selectedCityName = 'Vilnius';
    selectedCityId: number;
    selectedUserIds: number[];
    
   

 
}

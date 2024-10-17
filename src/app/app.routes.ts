import { Routes } from '@angular/router';
import { OneComponent } from './component/one/one.component';
import { TwoComponent } from './component/two/two.component';
import {  UserlistComponent } from './component/three/three.component';

export const routes: Routes = [
    {path: 'one', 
    component: OneComponent},

    {path: 'two', 
    component: TwoComponent},

    {path: 'three', 
    component: UserlistComponent}

];

import { Routes } from '@angular/router';
import { OneComponent } from './component/one/one.component';
import { TwoComponent } from './component/two/two.component';
import { ThreeComponent } from './component/three/three.component';
import { FourComponent } from './component/four/four.component';

export const routes: Routes = [
    {path: 'one', 
    component: OneComponent},

    {path: 'two', 
    component: TwoComponent},

    {path: 'three', 
    component: ThreeComponent},

    {path: 'four', 
    component: FourComponent}

];

import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from "./main/main.component";
import { ImprintComponent } from './legal/imprint/imprint.component';
import { PrivacyComponent } from './legal/privacy/privacy.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'imprint', component: ImprintComponent },
    { path: 'privacy', component: PrivacyComponent }
];

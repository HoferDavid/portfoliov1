import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from "./main/main.component";
import { ImprintComponent } from './legal/imprint/imprint.component';
import { PrivacyComponent } from './legal/privacy/privacy.component';
// import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'imprint', component: ImprintComponent },
    { path: 'privacy', component: PrivacyComponent }
];

// @NgModule({
//     imports: [
//         RouterModule.forRoot(routes, {
//             scrollPositionRestoration: 'enabled'
//         })
//     ],
//     exports: [RouterModule]
// })
// export class AppRoutingModule { }

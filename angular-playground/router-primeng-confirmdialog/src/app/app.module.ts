import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {ButtonModule} from 'primeng/components/button/button';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {ConfirmDialogModule} from 'primeng/components/confirmdialog/confirmdialog';
import {ConfirmationService} from 'primeng/components/common/api';

import {AppComponent}  from './app.component';
import {FirstViewComponent} from './first-view/first-view.component';
import {SecondViewComponent} from './second-view/second-view.component';
import {UnsavedChangesGuard} from './shared/unsaved-changes.guard';
import {routes} from './app-routing.module';

@NgModule({
    imports: [BrowserModule, routes, FormsModule, ButtonModule, InputTextModule, ConfirmDialogModule],
    declarations: [AppComponent, FirstViewComponent, SecondViewComponent],
    providers: [ConfirmationService, UnsavedChangesGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}

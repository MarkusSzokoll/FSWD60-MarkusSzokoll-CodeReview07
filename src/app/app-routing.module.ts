import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent} from './homepage/homepage.component';
import { ImportantComponent} from './important/important.component';
import { ContactComponent} from './contact/contact.component';

const routes: Routes = [
{
        path:"",component: HomepageComponent
},
{
        path:"important-contacts",component: ImportantComponent
},
{
        path:"my-phone-book",component: ContactComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

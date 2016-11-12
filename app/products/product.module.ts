//Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//Modules
import { SharedModule } from '../shared/shared.module';
//Services
import { ProductDetailGuard } from './product-guard.service';
import { ProductService } from './product.service';
//Pipes
import { ProductFilterPipe } from './product-filter.pipe';
//Components
import { ProductListComponent }  from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            {path: 'products', component: ProductListComponent},
            {path: 'product/:id', 
                canActivate: [ ProductDetailGuard ],
                component: ProductDetailComponent
            }
        ])
    ],
    providers: [
        ProductService,
        ProductDetailGuard
    ]
})
export class ProductModule { }
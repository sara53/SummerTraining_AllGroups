import { Component } from '@angular/core';
import { HeaderComponent } from './component/header/header.component';
import { ContentComponent } from './component/content/content.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SliderComponent } from './component/slider/slider.component';
import { ProductsComponent } from './component/products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, SliderComponent, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first';
}

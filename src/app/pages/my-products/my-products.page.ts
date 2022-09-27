import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { StorageService } from 'src/app/services/storage.service';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.page.html',
  styleUrls: ['./my-products.page.scss'],
})
export class MyProductsPage implements OnInit {

  title: string = 'Mis productos'
  dataLoaded: Promise<boolean>;
  constructor(private storageService: StorageService,
    private loadingCtrl: LoadingController) { }
    products:any
    
  ngOnInit () {
     this.getProducts()
    
  }


  getProducts = async () => {
      const userInfo = await this.storageService.getUserInfo()
        const loading = await this.loadingCtrl.create({
          message: 'Consultando tus productos',
        })

        loading.present()

         this.storageService.getUserProducts(userInfo.token).pipe(finalize(() => { loading.dismiss() })).subscribe(
           (data) => {
            this.products = data.products
            this.dataLoaded = Promise.resolve(true)
          },
          (error) => {

          }
        )
    }

}

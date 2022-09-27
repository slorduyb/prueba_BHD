import { Component, OnInit } from '@angular/core';
import months from 'src/app/utils/months';
import * as Yup from "yup";
import { AuthService } from 'src/app/services/auth.service';
import { finalize } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  currentDate: string = ''

  errors = {
    documentNumber: false,
    password: false
  }

  loginError: boolean = false
  formData = {
    documentNumber: '',
    password: ''
  }

  createSchema = Yup.object({
    documentNumber: Yup.string().required(),
    password: Yup.string().required(),
  });

  constructor(private authService: AuthService,
    private loadingCtrl : LoadingController,
    private storageService: StorageService,
    private router : Router) { }

  ngOnInit() {
    this.getCurrentDate()
  }


  getCurrentDate = () => {
    const date = new Date()

    const day = date.getDate() + 1

    const month = months[date.getMonth()]

    const hour = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

    this.currentDate = `${month} ${day} - ${hour}`

  }


  makeLogin = async () => {
    this.loginError = false
    const isValid = await this.createSchema.isValid(this.formData)
    if (!isValid) {
      this.createSchema.validate(this.formData, { abortEarly: false }).catch((err) => {
        const errorList = err.inner.reduce((acc, error) => {
          return {
            ...acc,
            [error.path]: error.message,
          }
        }, {})
        this.errors = errorList
      })
      return
    }
    this.errors = {documentNumber: false,
      password: false }
    const loading = await this.loadingCtrl.create({
      message: 'Validando tus credenciales',
    });

    loading.present()
    this.authService.login_api(this.formData).pipe(finalize(()=>{loading.dismiss()})).subscribe(
      async (data)=>{
        await this.storageService.saveUserInfo(data)
        this.router.navigate(['/'])
      },
      (error)=>{
        this.loginError = true
      }
    )

  }

}



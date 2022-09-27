import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import menuItems from 'src/app/utils/menuItems';
import { Router} from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  @Input() mainContent: string;
  menus = menuItems
  userName: string = ''

  constructor(private storageService: StorageService,private router : Router) { }

  ngOnInit() {
    this.getUserInfo()

  }

  logout = () => {
    this.storageService.logout().then(()=>{
          this.router.navigate(['/login'])
    })
  }

  getUserInfo = () => {
    this.storageService.getUserInfo().then((data) => {
      this.userName = data.userInfo.name + ' ' + data.userInfo.lastName
    })

  }
}

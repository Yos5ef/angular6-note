### 路由配置

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component:IndexComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'test', loadChildren: './test/test.module#TestModule'}
  ]},
  {path: '**', redirectTo: ''}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

### 路由守卫

#### 登录路由守卫

```typescript
import { CanActivate } from "@angular/router";

export class LoginGuard implements CanActivate {
  canActivate() {
    let loggedIn: boolean = Math.random() < 0.5;

    if (!loggedIn) {
      console.log("用户未登录");
    }
    return loggedIn;
  }
}
```

#### 离开路由守卫

```typescript
import { CanDeactivate } from "@angular/router";
import { ProductComponent } from "../product/product.component";

export class UnsavedGuard implements CanDeactivate<ProductComponent> {
  canDeactivate(component: ProductComponent) {
    return window.confirm("你还没有保存，确定要离开吗");
  }
}
```

#### 激活路由守卫

```typescript
import { Resolve } from "@angular/router";
import { Injectable } from "@angular/core";
import { PersonalInformationService } from "../personal-information.service";

@Injectable()
export class PersonalInformationResolve implements Resolve<any> {  

  constructor(private service: PersonalInformationService) {}

  resolve() {
    return this.service.info();
  }

}
```

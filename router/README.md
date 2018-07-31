### 路由配置

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component:IndexComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'test', loadChildren: './test/test.module#TestModule'}
  ]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

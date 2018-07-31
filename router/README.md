### 路由配置

```javascript
const routes: Routes = [
  {path: '', component:IndexComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'test', loadChildren: './test/test.module#TestModule'}
  ]}
]
```

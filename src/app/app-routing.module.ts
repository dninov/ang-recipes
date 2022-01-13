import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "/recipes",
    pathMatch: "full",
  },
  {
    path: "recipes",
    loadChildren: () =>
      import("./recipes/recipes.module").then((m) => m.RecipesModule),
    //loadChildren: "./recipes/recipes.module.ts#RecipesModule",
  },
  {
    path: "shopping-list",
    loadChildren: () =>
      import("./shopping-list/shopping-list.module").then(
        (m) => m.ShoppingListModule
      ),
    //loadChildren: "./recipes/recipes.module.ts#RecipesModule",
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
    //loadChildren: "./recipes/recipes.module.ts#RecipesModule",
  },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }), // !!!
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

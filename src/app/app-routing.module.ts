import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DefaultLayoutComponent } from "./containers";
import { NotFoundComponentComponent } from "./views/layout/not-found-component/not-found-component.component";

export const routes: Routes = [
    {
        path: "",
        loadChildren: () => import("./views/site/site.module")
            .then((m) => m.SiteModule
        )
    },
    {
        path: "",
        component: DefaultLayoutComponent,
        data: { title: "Inicio" },
        children: [
            {
                path: "dashboard",
                loadChildren: () =>
                    import("./views/dashboard/dashboard.module")
                    .then((m) => m.DashboardModule
                )
            },
            {
                path: "site",
                loadChildren: () => import("./views/site/site.module")
                    .then((m) => m.SiteModule
                )
            },
            {
                path: "managers",
                loadChildren: () => import("./views/managers/managers.module")
                    .then((m) => m.ManagersModule
                )
            }
        ]
    },
    {
        path: "**",
        redirectTo: "",
        pathMatch: "full",
        component: NotFoundComponentComponent,
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})

export class AppRoutingModule {}

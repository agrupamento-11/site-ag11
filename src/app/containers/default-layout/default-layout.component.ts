import { TranslateService } from "@ngx-translate/core";
import { AuthService } from "./../../views/auth/auth.service";
import { AfterViewInit, Component } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./default-layout.component.html",
})
export class DefaultLayoutComponent implements AfterViewInit {
  public sidebarMinimized = false;

  constructor(private authService: AuthService) {}

  current_user() {
    return this.authService.current_user;
  }

  logOut() {
    this.authService.removeTokenOfUser();
  }
  ngAfterViewInit(): void {
    let r = document?.getElementById("backdropM") as any;
    let app = document?.getElementById("app") as any;
    r.addEventListener("click", () => {
      console.log("app", app);

      app.classList.remove("app-sidebar-mobile-toggled");
    });
  }
}

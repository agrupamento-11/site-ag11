import { TranslateService } from "@ngx-translate/core";
import { AuthService } from "./../../../views/auth/auth.service";
import { AfterViewInit, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  currentUser: any;

  constructor(
    private _authService: AuthService,
    public translate: TranslateService
  ) {
    this.currentUser = this._authService.current_user();
  }
  ngAfterViewInit(): void {
    let r = document?.getElementById("buttonM") as any;
    let app = document?.getElementById("app") as any;
    r.addEventListener("click", () => {
      console.log("app", app);

      app.classList.add("app-sidebar-mobile-toggled");
    });
  }

  ngOnInit(): void {}

  logOut() {
    this._authService.removeTokenOfUser();
  }

  public translateLanguageTo(locale: string) {
    sessionStorage.setItem("locale", locale);
    this.translate.use(locale);
  }
}

import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  userIconUrl: SafeUrl;
  logoYourBook: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {
    const imageUserIconPath: string = 'assets/icons/user.png';
    const imageLogoYourBookPath: string = 'assets/imgs/logo-yourbook.png';
    this.userIconUrl = this.sanitizer.bypassSecurityTrustUrl(imageUserIconPath);
    this.logoYourBook = this.sanitizer.bypassSecurityTrustUrl(
      imageLogoYourBookPath
    );
  }
}

import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-section-hero',
  templateUrl: './section-hero.component.html',
  styleUrls: ['./section-hero.component.css'],
})
export class SectionHeroComponent {
  libraryImgUrl: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {
    const imageLibraryPath: string = 'assets/imgs/library.jpg';
    this.libraryImgUrl =
      this.sanitizer.bypassSecurityTrustUrl(imageLibraryPath);
  }
}

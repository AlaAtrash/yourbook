import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-section-hp-presentation',
  templateUrl: './section-hp-presentation.component.html',
  styleUrls: ['./section-hp-presentation.component.css'],
})
export class SectionHpPresentationComponent {
  titleSection = 'Les services proposés';
  illustrationHpImgUrl: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {
    const imageIllustrationPath = 'assets/imgs/illustration-hp.jpg';
    this.illustrationHpImgUrl = this.sanitizer.bypassSecurityTrustUrl(
      imageIllustrationPath
    );
  }
}

import {Component, ElementRef, OnChanges, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.css'],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  // @ts-ignore
  @ViewChild('toggleButton') toggleButton: ElementRef;
  // @ts-ignore
  @ViewChild('menu') menu: ElementRef;
  openSetting = false;
  constructor(
    private renderer: Renderer2
  ) {
    this.CheckOutSideSettingBtn();
  }
  ngOnInit(): void {
  }
  openSettingFn(){
    this.openSetting = !this.openSetting;
  }

  CheckOutSideSettingBtn() {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (this.menu !== undefined) {
        if (e.target !== this.toggleButton.nativeElement && e.target !== this.menu.nativeElement) {
          this.openSetting = false;
        }
      }
    });
  }
}

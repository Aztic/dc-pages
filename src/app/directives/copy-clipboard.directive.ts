/**
 * Original code By Dan Dohotaru (https://stackoverflow.com/users/2583579/dan-dohotaru)
 * Copied from here: https://stackoverflow.com/questions/49102724/angular-5-copy-to-clipboard
 */

import { Directive, Input, Output, EventEmitter, HostListener } from "@angular/core";

@Directive({ selector: '[copy-clipboard]' })
export class CopyClipboardDirective {

  @Input('copy-clipboard')
  public payload: string;

  @Input('context')
  public context: string;

  @Output('copied')
  public copied: EventEmitter<string> = new EventEmitter<string>();

  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent): void {
    event.preventDefault();
    if (!this.payload)
      return;

    const listener = (e: ClipboardEvent) => {
      const clipboard = e.clipboardData || window['clipboardData'];
      clipboard.setData('text', this.payload.toString());
      e.preventDefault();
      this.copied.emit(this.payload);
    };

    document.addEventListener('copy', listener, false);
    document.execCommand('copy');
    document.removeEventListener('copy', listener, false);
  }
}

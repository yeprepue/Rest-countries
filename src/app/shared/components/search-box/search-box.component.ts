import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime, pipe } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit {

  private debouncer: Subject<string> = new Subject<string>();

  @Input()
  placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();
  @Output()
  public OnDebounce = new EventEmitter<string>();

  ngOnInit(): void {

    this.debouncer.pipe(
      debounceTime(300)
    ).subscribe(value => {
      this.OnDebounce.emit(value)
    });
  }
  emitValue(value: string): void {
    this.onValue.emit(value);

  }


  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }

}

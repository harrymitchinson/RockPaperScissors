import { Component, Output, EventEmitter, Input } from '@angular/core';

export class BasePicker {
  @Output() selectedType = new EventEmitter<number>();
  select(type: number) {
    this.selectedType.next(type);
  }
}

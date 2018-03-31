import { Output, EventEmitter } from "@angular/core";

export class BasePicker {
  /**
   * The selected type output.
   * @memberof BasePicker
   */
  @Output() selectedType = new EventEmitter<number>();

  /**
   * Outputs the selected value.
   * @param {number} type
   * @memberof BasePicker
   */
  select(type: number): void {
    this.selectedType.next(type);
  }
}

import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  Input,
  Output,
  forwardRef,
  ElementRef,
  Renderer2,
  EventEmitter,
  ChangeDetectorRef,
  HostListener,
  TemplateRef,
  SimpleChanges
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { DatePickerConfigService as DatePickerConfig } from './date-picker.config.service';
import { DateConverter } from 'ng-devui/utils';
import { SelectDateChangeEventArgs, SelectDateChangeReason } from './date-change-event-args.model';
import { DefaultDateConverter } from 'ng-devui/utils';
import { I18nService, I18nInterface } from 'ng-devui/i18n';
import { Subscription } from 'rxjs';
@Component({
  selector: 'd-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DatepickerComponent),
    multi: true
  }]
})
export class DatepickerComponent implements OnInit, OnChanges, OnDestroy, ControlValueAccessor {
  static DAY_DURATION = 24 * 60 * 60 * 1000;
  protected _maxDate: Date;
  protected _minDate: Date;
  protected nowMinYear: number;
  protected nowMaxYear: number;
  protected _dateFormat: string;
  @Input() cssClass: string;
  @Input() dateConverter: DateConverter;
  @Input() locale: string;
  @Output() selectedDateChange = new EventEmitter<SelectDateChangeEventArgs>();
  @Input() disabled = false;
  @Input() customViewTemplate: TemplateRef<any>;
  @Input() selectedDate: Date;
  @Output() cmpClicking = new EventEmitter<boolean>();
  yearNumber = 12;
  _yearNumber = 12;
  _dateConfig: any;
  currentYear: number;
  currentMonth: number;
  _currentHour: number | string;
  _currentMinute: number | string;
  _currentSecond: number | string;
  _showTime: boolean;
  hourOptions: string[];
  minuteOptions: string[];
  displayWeeks: any[];
  yearOptions: any[];
  openChooseYear: boolean;
  openChooseMonth: boolean;
  hoverYear: number;
  hoverMonth: number;
  availableMonths: any[];
  i18nText: I18nInterface['datePicker'];
  i18nLocale: I18nInterface['locale'];
  i18nCommonText: I18nInterface['common'];
  i18nSubscription: Subscription;
  isClickingCmp = false;

  protected onChange = (_: any) => null;
  protected onTouched = () => null;

  constructor(
    protected elementRef: ElementRef,
    protected renderer2: Renderer2,
    protected datePickerConfig: DatePickerConfig,
    protected changeDetectorRef: ChangeDetectorRef,
    protected i18n: I18nService
  ) {
    this._dateConfig = datePickerConfig['dateConfig'];
    this.dateConverter = datePickerConfig['dateConfig'].dateConverter || new DefaultDateConverter();
    this.renderer2.setStyle(this.elementRef.nativeElement, 'display', 'inline-block');
  }

  ngOnInit() {
    this._minDate = this.minDate ? new Date(this.minDate) : new Date(this.dateConfig.min, 0, 1, 0, 0, 0);
    this._maxDate = this.maxDate ? new Date(this.maxDate) : new Date(this.dateConfig.max, 11, 31, 23, 59, 59);
    this._dateFormat = this.showTime ? this.dateConfig.format.time : this.dateConfig.format.date;

    this.hourOptions = new Array(24).fill(0).map((value, index) => this.fillLeft(index));
    this.minuteOptions = new Array(60).fill(0).map((value, index) => this.fillLeft(index));
    this.nowMinYear = (new Date()).getFullYear() - Math.floor(this._yearNumber / 2) < this.minDate.getFullYear() ?
      this.minDate.getFullYear() : (new Date()).getFullYear() - Math.floor(this._yearNumber / 2);
    this.nowMaxYear = (new Date()).getFullYear() + Math.floor(this._yearNumber / 2) > this.maxDate.getFullYear() ?
      this.maxDate.getFullYear() : (new Date()).getFullYear() + Math.floor(this._yearNumber / 2);
    this.setI18nText();
    this.onSelectDateChanged();
    this.onDisplayWeeksChange();
    this.onYearRangeChange();
    this.initDatePicker();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes['selectedDate'] && changes['selectedDate'].currentValue) {
      this.writeValue(this.selectedDate);
    }
  }

  @HostListener('document:mousedown', ['$event'])
  onMouseDown($event) {
    this.isClickingCmp = this.elementRef.nativeElement.contains($event.target);
    this.cmpClicking.emit(this.isClickingCmp);
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp($event) {
    this.isClickingCmp = false;
    this.cmpClicking.emit(this.isClickingCmp);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick($event) {
    if (!this.elementRef.nativeElement.contains($event.target)) {
      this.openChooseYear = this.openChooseMonth = false;
      this.resetYearOptions();
    }
  }

  @HostListener('click', ['$event'])
  onClick($event) {
    $event.stopPropagation();
  }

  @Input() set showTime(showTime: boolean) {
    this._showTime = showTime;
  }

  get showTime() {
    return typeof this._showTime === 'boolean' ? this._showTime : this.dateConfig.timePicker;
  }

  @Input() set dateConfig(dateConfig: any) {
    if (this.checkDateConfig(dateConfig)) {
      this._dateConfig = dateConfig;
    } else {
      this._dateConfig = this.datePickerConfig.dateConfig;
    }
    this._dateFormat = this.showTime ? this._dateConfig.format.time : this._dateConfig.format.date;
  }

  get dateConfig() {
    return this._dateConfig;
  }

  checkDateConfig(dateConfig: any) {
    if (!dateConfig) { return false; }
    if (typeof(dateConfig.timePicker) !== 'boolean' || !dateConfig.max || !dateConfig.min || !dateConfig.format) {
      return false;
    }
    return true;
  }

  @Input() set minDate(date: Date | any) {
    const parseDate = this.dateConverter.parse(date, this.dateFormat, this.locale || this.i18nLocale);
    if (parseDate) {
      this._minDate = parseDate;
      this.onYearRangeChange();
    }
  }

  @Input() set maxDate(date: Date | any) {
    const parseDate = this.dateConverter.parse(date, this.dateFormat, this.locale || this.i18nLocale);
    if (parseDate) {
      this._maxDate = parseDate;
      this.onYearRangeChange();
    }
  }

  get maxDate() {
    return this._maxDate;
  }

  get minDate() {
    return this._minDate;
  }

  @Input() set dateFormat(dateFormat: string) {
    if (dateFormat && this._dateFormat !== dateFormat) {
      this._dateFormat = dateFormat;
    }
  }

  get dateFormat() {
    return this._dateFormat;
  }

  set currentHour(hour: number | string) {
    this._currentHour = hour;
  }

  get currentHour() {
    return (this._currentHour + '').padStart(2, '0');
  }

  set currentMinute(min: number | string) {
    this._currentMinute = min;
  }

  get currentMinute() {
    return (this._currentMinute + '').padStart(2, '0');
  }

  set currentSecond(sec: number | string) {
    this._currentSecond = sec;
  }

  get currentSecond() {
    return (this._currentSecond + '').padStart(2, '0');
  }

  protected resetYearOptions() {
    const baseYear = this.selectedDate ? this.selectedDate.getFullYear() : (new Date()).getFullYear();
    this.currentYear = baseYear;
    this.nowMinYear = baseYear - Math.floor(this._yearNumber / 2) < this.minDate.getFullYear() ?
      this.minDate.getFullYear() : baseYear - Math.floor(this._yearNumber / 2);
    this.nowMaxYear = baseYear + Math.floor(this._yearNumber / 2) > this.maxDate.getFullYear() ?
      this.maxDate.getFullYear() : baseYear + Math.floor(this._yearNumber / 2);
    this.onYearRangeChange();
  }

  onYearRangeChange() {
    if (!this.nowMinYear || !this.nowMaxYear) {
      return;
    }
    const baseYear = this.selectedDate ? this.selectedDate.getFullYear() : (new Date()).getFullYear();
    this.yearOptions = new Array(this._yearNumber).fill(0).map((value, index) => {
      const title = baseYear - this._yearNumber / 2 + index;
      return {
        title: title,
        disabled: false
      };
    });
    if (this._yearNumber > this.nowMaxYear - this.nowMinYear + 1) {
      this.yearOptions.forEach((value, index) => {
        if (index < 6) {
          value.disabled = value.title < this.nowMinYear;
        } else {
          value.disabled = value.title > this.nowMaxYear;
        }
      });
    }
  }

  writeValue(obj: any): void {
    if (!obj) {
      return;
    }
    this.selectedDate = obj ?
      this.dateConverter.parse(obj, this.dateFormat, this.locale || this.i18nLocale) : null;
    this.onSelectDateChanged();
    this.onDisplayWeeksChange();
    this.availableMonths = this.onDisplayMonthsChange();
    this.changeDetectorRef.markForCheck();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  hasPreMonth() {
    if (this.currentYear > this.minDate.getFullYear()) {
      return true;
    } else if (this.currentYear === this.minDate.getFullYear() && this.currentMonth > this.minDate.getMonth()) {
      return true;
    } else {
      return false;
    }
  }

  onPreMonth() {
    if (!this.hasPreMonth()) {
      return;
    }

    const date = new Date(this.currentYear, this.currentMonth);
    date.setMonth(date.getMonth() - 1);
    this.currentMonth = date.getMonth();
    this.currentYear = date.getFullYear();
    this.onDisplayWeeksChange();
  }

  hasNextMonth() {
    if (this.currentYear < this.maxDate.getFullYear()) {
      return true;
    } else if (this.currentYear === this.maxDate.getFullYear() && this.currentMonth < this.maxDate.getMonth()) {
      return true;
    } else {
      return false;
    }
  }

  onNextMonth(currentDate?: Date, invocation?: any) {
    if (!this.hasNextMonth() && invocation !== 'init') {
      return;
    }
    let date;
    if (currentDate) {
      date = new Date(currentDate.getTime());
    } else {
      date = new Date(this.currentYear, this.currentMonth);
    }
    date.setMonth(date.getMonth() + 1);
    this.currentMonth = date.getMonth();
    this.currentYear = date.getFullYear();
    this.onDisplayWeeksChange();
  }

  hasPreYearOption() {
    if (this.openChooseYear) {
      return this.yearOptions[0].title.toString() > this.minDate.getFullYear();
    } else {
      return Number(this.currentYear) > this.minDate.getFullYear();
    }
  }

  onPreYearOption() {
    if (!this.hasPreYearOption()) {
      return;
    }
    if (this.openChooseYear) {
      if (this.nowMinYear - this._yearNumber >= this.minDate.getFullYear()) {
        this.nowMaxYear = this.nowMinYear - 1;
        this.nowMinYear = this.nowMinYear - this._yearNumber;
      } else {
        this.nowMaxYear = this.nowMinYear - 1;
        this.nowMinYear = this.minDate.getFullYear();
      }
      this.onYearRangeChange();
    } else {
      this.onSelectYear(Number(this.currentYear) - 1);
    }
  }

  hasNextYearOption() {
    if (this.openChooseYear) {
      return this.yearOptions[11].title.toString() < this.maxDate.getFullYear();
    } else {
      return Number(this.currentYear) < this.maxDate.getFullYear();
    }
  }

  onNextYearOption() {
    if (!this.hasNextYearOption()) {
      return;
    }
    if (this.openChooseYear) {
      if (this.nowMaxYear + this._yearNumber <= this.maxDate.getFullYear()) {
        this.nowMinYear = this.nowMaxYear + 1;
        this.nowMaxYear = this.nowMaxYear + this._yearNumber;
      } else {
        this.nowMinYear = this.nowMaxYear + 1;
        this.nowMaxYear = this.maxDate.getFullYear();
      }
      this.onYearRangeChange();
    } else {
      this.onSelectYear(Number(this.currentYear) + 1);
    }
  }

  onSelectYear(year, $event?: Event) {
    if ($event) {
      $event.stopPropagation();
    }
    const yearDisabled = typeof year === 'object' ? year.disabled : false;
    const yearTitle = typeof year === 'object' ? year.title : year;
    if (yearDisabled) {
      return;
    }
    this.currentYear = yearTitle;
    this.onDisplayWeeksChange();
    this.availableMonths = this.onDisplayMonthsChange();
    this.openChooseYear = false;
  }

  protected onSelectDateChanged() {
    let date = this.selectedDate || new Date();
    if (date.getTime() < this.minDate.getTime()) {
      date = this.minDate;
    }
    if (date.getTime() > this.maxDate.getTime()) {
      date = this.maxDate;
    }
    this.currentYear = date.getFullYear();
    this.currentMonth = date.getMonth();
    this.currentHour = this.showTime ? date.getHours() : 0;
    this.currentMinute = this.showTime ? date.getMinutes() : 0;
    this.currentSecond = this.showTime ? date.getSeconds() : 0;
  }

  public onDisplayWeeksChange() {
    const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1);
    const weekOfDay = firstDayOfMonth.getDay();
    const startDate = new Date(firstDayOfMonth.getTime() - weekOfDay * DatepickerComponent.DAY_DURATION);
    const displayWeeks = [];
    for (let i = 0; i < 6; i++) {
      const startWeekDate = startDate.getTime() + i * 7 * DatepickerComponent.DAY_DURATION;
      const weekDays = new Array(7).fill(0).map((value, index) => {
        const currentDate = new Date(startWeekDate + index * DatepickerComponent.DAY_DURATION);
        return {
          day: this.fillLeft(currentDate.getDate()),
          date: currentDate,
          inMonth: currentDate.getMonth().toString() === this.currentMonth.toString()
        };
      });
      displayWeeks.push(weekDays);
    }
    this.displayWeeks = displayWeeks;
  }

  public onDisplayMonthsChange() {
    const all = new Array(12).fill(0).map((value, index) => {
      return {
        title: index,
        disabled: false
      };
    });

    if (this.currentYear < this.minDate.getFullYear() || this.currentYear > this.maxDate.getFullYear()) {
      all.map(month => month.disabled = true);
    }

    if (this.currentYear === this.minDate.getFullYear()) {
      all.map(month => month.disabled = month.title < this.minDate.getMonth());
    }

    if (this.currentYear === this.maxDate.getFullYear()) {
      all.map(month => month.disabled = month.title > this.maxDate.getMonth());
    }
    return all;
  }

  protected fillLeft(num: number) {
    return num < 10 ? `0${num}` : `${num}`;
  }

  isDisabledDay(date) {
    const minDate = new Date(this.minDate.getFullYear(), this.minDate.getMonth(), this.minDate.getDate());
    const maxDate = new Date(this.maxDate.getFullYear(), this.maxDate.getMonth(), this.maxDate.getDate(), 23, 59, 59);
    const dis = date.getTime() < minDate.getTime();
    return this.disabled || (date.getTime() < minDate.getTime() ||
      date.getTime() > maxDate.getTime());
  }

  isSelectDay(date) {
    if (!this.selectedDate || !date) {
      return false;
    }
    return (
      date.getFullYear() === this.selectedDate.getFullYear() &&
      date.getMonth() === this.selectedDate.getMonth() &&
      date.getDate() === this.selectedDate.getDate()
    );
  }

  /*
  **  @param invocation:调用时机
  */
  onSelectDate($event, date, invocation?: any, reason?: SelectDateChangeReason) {
    if ($event.stopPropagation) {
      $event.stopPropagation();
    }
    if (this.isDisabledDay(date)) {
      return;
    }
    this.selectedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(),
      Number(this.currentHour), Number(this.currentMinute), Number(this.currentSecond));
    const currentReason = typeof reason === 'number' ? reason : SelectDateChangeReason.date;
    const dateObj = {
      reason: currentReason,
      selectedDate: this.selectedDate
    };
    this.onTouched();
    this.writeValue(this.selectedDate);
    // 初始化的时候不触发emit和ngModelChange
    if (invocation !== 'init') {
      this.onChange(dateObj);
      this.selectedDateChange.emit(dateObj);
    }
    if (this.currentMonth !== this.selectedDate.getMonth() ||
      this.currentYear !== this.selectedDate.getFullYear()
    ) {
      this.currentYear = this.selectedDate.getFullYear();
      this.currentMonth = this.selectedDate.getMonth();
      this.onDisplayWeeksChange();
    }
  }

  fixTime(event, type) {
    // 由于keypress不监听微软输入法需要使用keydown
    // 而keydown中微软输入法的key是'Process'，且keydown没有charCode，所以需要用code判断
    // 故退格和输入使用同一个事件
    let timeType: string;
    const min = 0;
    let max = 59;
    switch (type) {
      case 'h': {
        timeType = 'currentHour';
        max = 23;
        break;
      }
      case 'm': {
        timeType = 'currentMinute';
        break;
      }
      case 's': {
        timeType = 'currentSecond';
        break;
      }
    }
    let value = event.target['value'];
    const selectionStart = event.target['selectionStart'];
    const selectionEnd = event.target['selectionEnd'];
    // 是数字的时候再处理，分为小键盘和数字键
    if (/^(Digit|Numpad)\d$/.test(event.code)) {
      event.preventDefault();
      let input;
      if (event['clipboardData']) {
        input = event['clipboardData'].getData('text');
      } else if (event['code']) {
        input = event['code'].slice(event['code'].length - 1);
      }
      value = value.substring(0, selectionStart) + input + value.substring(selectionEnd);
      if (value.length === 3 && value.indexOf('0') === 0) {
        value = value.slice(1);
      }
    } else if (event.keyCode === 8) {
      event.preventDefault();
      value = value.substring(0, selectionStart - 1) + value.substring(selectionEnd);
      if (value.length < 2) {
        value = '0' + value;
      }
    } else if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
      // 如果不是上下左右，就阻拦，执行自己的处理
      event.preventDefault();
    }
    if (/^(Digit|Numpad)\d$/.test(event.code) || event.keyCode === 8) {
      if (Number(value) >= min && Number(value) <= max) {
        this[timeType] = value;
        this.onTimeChange();
      }
    }
  }

  onTimeChange() {
    const date = this.selectedDate || new Date();
    this.selectedDate = new Date(date.getFullYear(),
      date.getMonth(), date.getDate(), Number(this.currentHour), Number(this.currentMinute), Number(this.currentSecond));
    const dateObj = {
      reason: SelectDateChangeReason.time,
      selectedDate: this.selectedDate
    };
    this.onTouched();
    this.writeValue(this.selectedDate);
    this.onChange(dateObj);
    this.selectedDateChange.emit(dateObj);
  }

  timeUp(type) {
    switch (type) {
      case 'h': {
        Number(this.currentHour) < 23 ? this.currentHour = (Number(this.currentHour) + 1) : this.currentHour = 0;
        break;
      }
      case 'm': {
        Number(this.currentMinute) < 59 ? this.currentMinute = (Number(this.currentMinute) + 1) : this.currentMinute = 0;
        break;
      }
      case 's': {
        Number(this.currentSecond) < 59 ? this.currentSecond = (Number(this.currentSecond) + 1) : this.currentSecond = 0;
        break;
      }
    }
    this.onTimeChange();
  }

  timeDown(type) {
    switch (type) {
      case 'h': {
        Number(this.currentHour) > 0 ? this.currentHour = (Number(this.currentHour) - 1) : this.currentHour = 23;
        break;
      }
      case 'm': {
        Number(this.currentMinute) > 0 ? this.currentMinute = (Number(this.currentMinute) - 1) : this.currentMinute = 59;
        break;
      }
      case 's': {
        Number(this.currentSecond) > 0 ? this.currentSecond = (Number(this.currentSecond) - 1) : this.currentSecond = 59;
        break;
      }
    }
    this.onTimeChange();
  }

  clearAll = (reason?: SelectDateChangeReason) => {
    this.writeValue(null);
    const currentReason = typeof reason === 'number' ? reason : SelectDateChangeReason.custom;
    const dateObj = {
      reason: currentReason,
      selectedDate: null
    };
    // 清空时将null作为ngModelChange参数传出
    this.onChange(dateObj);
    this.selectedDateChange.emit(dateObj);
  }

  toggle($event: Event, which) {
    $event.stopPropagation();
    if (which === 'year') {
      this.openChooseYear = !this.openChooseYear;
      this.openChooseMonth = false;
    } else {
      this.openChooseMonth = !this.openChooseMonth;
      this.openChooseYear = false;
    }
  }

  isTodayDisable() {
    return this.isDisabledDay(new Date());
  }

  isDisabledTime() {
    return this.isDisabledDay(this.selectedDate);
  }

  initDatePicker() {
    this.selectedDate = this.selectedDate ? this.selectedDate : new Date();
    if (this.isDisabledDay(this.selectedDate)) {
      return;
    }
    this.selectedDate = this.selectedDate ? this.selectedDate : new Date();
    this.onSelectDateChanged();
    this.onSelectDate({}, this.selectedDate, 'init');
  }

  confirmTime(event) {
    event.stopPropagation();
    const dateObj = {
      reason: SelectDateChangeReason.button,
      selectedDate: this.selectedDate
    };
    this.writeValue(this.selectedDate);
    this.onChange(dateObj);
    this.selectedDateChange.emit(dateObj);
  }

  chooseToday() {
    const today = new Date();
    if (this.isDisabledDay(today)) {
      return;
    }
    this.selectedDate = today;
    this.onSelectDateChanged();
    this.onSelectDate({}, today, undefined, SelectDateChangeReason.button);
  }

  onSelectMonth(month) {
    if (month.disabled) {
      return;
    }
    this.currentMonth = month.title;
    this.onDisplayWeeksChange();
    this.openChooseMonth = false;
  }

  changeHoverYear(item: number) {
    this.hoverYear = item;
  }

  changeHoverMonth(item: number) {
    this.hoverMonth = item;
  }

  chooseDate = (date: string, event = {}, reason = SelectDateChangeReason.custom) => {
    const parseDate = this.dateConverter.parse(date, this.dateFormat, this.locale || this.i18nLocale);
    this.selectedDate = parseDate || new Date();
    this.onSelectDateChanged();
    this.onSelectDate(event, parseDate, undefined, reason);
  }

  get minDateDefined() {
    return this.minDate.getTime() !== new Date(this.dateConfig.min, 0, 1, 0, 0, 0).getTime();
  }

  get maxDateDefined() {
    return this.maxDate.getTime() !== new Date(this.dateConfig.max, 11, 31, 23, 59, 59).getTime();
  }

  setI18nText() {
    this.i18nText = this.i18n.getI18nText().datePicker;
    this.i18nLocale = this.i18n.getI18nText().locale;
    this.i18nCommonText = this.i18n.getI18nText().common;
    this.i18nSubscription = this.i18n.langChange().subscribe((data) => {
      this.i18nText = data.datePicker;
      this.i18nLocale = data.locale;
      this.i18nCommonText = data.common;
    });
  }

  ngOnDestroy() {
    if (this.i18nSubscription) {
      this.i18nSubscription.unsubscribe();
    }
  }
}

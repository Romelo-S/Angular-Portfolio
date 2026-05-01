import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ClickerService {
  private _count = signal(0);
  private _clickPower = signal(1);
  private _autoClickers = signal(0);

  readonly count = computed(() => this._count());
  readonly clickPower = computed(() => this._clickPower());
  readonly autoClickers = computed(() => this._autoClickers());

  private upgradeCost = signal(50);
  private autoCost = signal(100);

  readonly upgradePrice = computed(() => this.upgradeCost());
  readonly autoPrice = computed(() => this.autoCost());

  clickClicker() {
    this._count.update(c => c + this._clickPower());
  }

  buyUpgrade() {
    if (this._count() >= this.upgradeCost()) {
      this._count.update(c => c - this.upgradeCost());
      this._clickPower.update(p => p + 1);
      this.upgradeCost.update(c => Math.floor(c * 1.5));
    }
  }

  buyAutoClicker() {
    if (this._count() >= this.autoCost()) {
      this._count.update(c => c - this.autoCost());
      this._autoClickers.update(a => a + 1);
      this.autoCost.update(c => Math.floor(c * 1.7));
    }
  }

  tickAuto() {
    if (this._autoClickers() > 0) {
      this._count.update(c => c + this._autoClickers());
    }
  }
}

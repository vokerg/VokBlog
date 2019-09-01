export class Alert {
  id: string;
  text: string;
  seen: boolean;

  constructor() {
    this.id = null;
    this.text = '';
    this.seen = false;
  }
}

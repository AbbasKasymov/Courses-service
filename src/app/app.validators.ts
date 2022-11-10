import { FormControl } from '@angular/forms';

export class MyValidators {
  static restrictedEmails(
    control: FormControl
  ): { [key: string]: boolean } | null {
    if (['test@mail.ru', 'abbas@mail.ru'].includes(control.value)) {
      return { restrictedEmails: true };
    }

    return null;
  }
}

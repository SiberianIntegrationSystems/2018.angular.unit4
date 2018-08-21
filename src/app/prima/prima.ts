export class Prima {
  readonly name: string;
  readonly birthDate: Date;
  readonly photoSource: string;

  constructor(name: string, birthDate: Date, photoSource: string) {
    this.name = name;
    this.birthDate = birthDate;
    this.photoSource = photoSource;
  }
}

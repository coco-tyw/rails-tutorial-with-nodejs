export class MicropostRepository {
  readonly client: () => void
  constructor() {
    this.client = () => {}
  } 
}
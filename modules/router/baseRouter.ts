export default class BaseRouter {
  private views: Map<string, object>;

  constructor() {
    this.views = new Map<string, object>();
  }

  public addView(url: string, view: object): void {
    this.views.set(url, view);
  }

  public getView(url: string): any {
    let meta = this.views.get(url);
    if (meta) {
      return this.processMeta(meta);
    }
  }

  private processMeta(meta: object): any {
    return meta;
  }
}

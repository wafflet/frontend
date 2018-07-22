export namespace Ref {
  export type Handler<IRef> = (ref: IRef[keyof IRef]) => void

  export type Readable<IRef> = Record<keyof IRef, IRef[keyof IRef]>

  export type Partialise<IRef> = Partial<IRef>

  export interface Method<IRef> {
    ref: Partialise<IRef>

    refHandler: (key: keyof IRef) => Handler<IRef>
  }
}

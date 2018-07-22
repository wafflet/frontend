import { ActionType } from '@/Store/User/ActionType'

export class Action {
  public static readonly clear = (): Action => ({
    type: ActionType.CLEAR
  })
}

import { AxiosRequestConfig } from 'axios'

export interface IConfig {
  readonly http: AxiosRequestConfig
  readonly websocket: SocketIOClient.ConnectOpts
}

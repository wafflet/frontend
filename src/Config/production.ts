import { AxiosRequestConfig } from 'axios'

import { IConfig } from '@/Config/interface'

const http: AxiosRequestConfig = {
  baseURL: 'http://localhost:3030'
}

const websocket: SocketIOClient.ConnectOpts = {
  host: 'http://localhost',
  port: '3060'
}

export const production: IConfig = {
  http,
  websocket
}

import { AxiosRequestConfig } from 'axios'

import { IConfig } from '@/Config/interface'

const timeout = 3000

const http: AxiosRequestConfig = {
  baseURL: 'http://localhost:3330',
  timeout
}

const websocket: SocketIOClient.ConnectOpts = {
  host: 'http://localhost',
  port: '3360',
  timeout
}

export const development: IConfig = {
  http,
  websocket
}

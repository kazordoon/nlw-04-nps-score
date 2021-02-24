declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      NODE_ENV: 'development' | 'test'
      HOST: string
      PORT: number
    }
  }
}

export {};

import axios from 'axios';

export abstract class Base {
  protected axiosV1 = axios.create({
    baseURL: "https://the-one-api.dev/v2",
  })

  constructor(token?: string) {
    this.axiosV1 = axios.create({
      baseURL: "https://the-one-api.dev/v2",
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
  }
}
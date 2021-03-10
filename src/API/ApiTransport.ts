export default class ApiTransport<RT> {
  async get(str: string): Promise<RT> {
    const response = await fetch(str);
    return response.json();
  }
}
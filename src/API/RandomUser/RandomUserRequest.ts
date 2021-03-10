import ApiTransport from "../ApiTransport";
import { RandomUserQueryBuilder, RandomUserQueryBuilderArgs } from "./RandomUserQueryBuilder";

interface RandomUserRequestArgs {
  seed?: string;
}

type RandomUserGender = 'male' | 'female';
type RandomUserName = {
  title: string;
  first: string;
  last: string;
}
type RandomUserLogin = {
  md5: string;
  password: string;
  salt: string;
  sha1: string;
  sha256: string;
  username: string;
  uuid: string;
}
type RandomUserPictures = {
  large: string;
  medium: string;
  thumbnail: string;
}
type RandomUserRegistration = {
  date: string;
  age: number;
}

type RandomUserLocation = {
  city: string;
  country: string;
  postcode: number;
  state: string;
  coordinates: RandomUserLocationCoords;
  street: RandomUserLocationStreet;
  timezone: RandomUserLocationTimezone;
}

type RandomUserLocationCoords = {
  latitude: string;
  longitude: string;
}

type RandomUserLocationStreet = {
  number: number;
  name: string;
}

type RandomUserLocationTimezone = {
  offset: string;
  description: string;
}

type RandomUserId = {
  name: string;
  value: string;
}

export interface RandomUser {
  gender: RandomUserGender;
  name: RandomUserName;
  login: RandomUserLogin;
  picture: RandomUserPictures;
  registered: RandomUserRegistration;
  dob: RandomUserRegistration;
  location: RandomUserLocation;
  id: RandomUserId
  phone: string;
  cell: string;
  email: string;
}

export interface RandomUserRequestResponse {
  results: RandomUser[];
  info: {
    seed: string,
    results: number;
    page: number;
    version: string;
  }
}

export class RandomUserRequest {
  readonly _path = 'https://randomuser.me/api/1.3/';
  private seed: string;

  constructor(args: RandomUserRequestArgs = {}) {
    this.seed = args.seed;
  }

  async fetch(params: RandomUserQueryBuilderArgs) {
    const provider = new ApiTransport<RandomUserRequestResponse>();
    const response = await provider.get(`${this._path}/${this.buildQuery(params)}`);
    
    return response;
  }

  buildQuery(params: RandomUserQueryBuilderArgs): string {
    const query = [
      new RandomUserQueryBuilder(params).getQuery(),
    ];
    
    if (typeof this.seed !== 'undefined' && this.seed) {
      query.push(`seed=${this.seed}`);
    }

    if (query.length > 0) {
      return `?${query.join('&')}`;
    }

    return '';
  }
}
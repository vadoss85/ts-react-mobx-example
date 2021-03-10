import { RandomUser } from "../../API/RandomUser/RandomUserRequest";
import { Model, ModelArgs } from "./Model";
import moment from 'moment';

export type RandomUserModelGender = 'male' | 'female';
export type RandomUserModelAvatars = {
  '128x128': string;
  '72x72': string;
  '48x48': string;
}
interface RandomUserModelCoords {
  latitude: number;
  longitude: number;
}

type RandomUserModelLogin = {
  md5: string;
  password: string;
  salt: string;
  sha1: string;
  sha256: string;
  username: string;
  uuid: string;
}

interface RandomUserModelArgs extends ModelArgs {
  firstName: string;
  lastName: string;
  gender: RandomUserModelGender;
  avatars: RandomUserModelAvatars;
  coords: RandomUserModelCoords;
  login: RandomUserModelLogin;
  registrationDate: string;
  birthDate: string;
  age: number;
  city: string;
  country: string;
  state: string;
  cell: string;
  phone: string;
  email: string;
  idName: string;
  idValue: string;
}

export class RandomUserModel extends Model {
  static fromApiResponse(args: RandomUser): RandomUserModel {
    return new RandomUserModel({
      firstName: args.name.first,
      lastName: args.name.last,
      gender: args.gender,
      id: args.login.uuid,
      avatars: {
        '128x128': args.picture.large,
        '72x72': args.picture.medium,
        '48x48': args.picture.thumbnail,
      },
      registrationDate: args.registered.date,
      birthDate: args.dob.date,
      age: args.dob.age,
      city: args.location.city,
      country: args.location.country,
      state: args.location.state,
      cell: args.cell,
      phone: args.phone,
      idName: args.id.name,
      idValue: args.id.value,
      email: args.email,
      coords: {
        longitude: Number(args.location.coordinates.longitude),
        latitude: Number(args.location.coordinates.latitude),
      },
      login: {
        ...args.login,
      }
    });
  }

  firstName: string;
  lastName: string;
  gender: RandomUserModelGender;
  avatars: RandomUserModelAvatars;
  registrationDate: moment.Moment;
  birthDate: moment.Moment;
  age: number;
  city: string;
  country: string;
  state: string;
  cell: string;
  phone: string;
  email: string;
  idName: string;
  idValue: string;
  coords: RandomUserModelCoords = {
    latitude: 0,
    longitude: 0,
  };
  login: RandomUserModelLogin;

  constructor(args: RandomUserModelArgs) {
    super({id: args.id})

    this.firstName = args.firstName;
    this.lastName = args.lastName;
    this.gender = args.gender;
    this.avatars = args.avatars;
    this.registrationDate = moment(args.registrationDate);
    this.birthDate = moment(args.birthDate);
    this.age = args.age;
    this.city = args.city;
    this.country = args.country;
    this.state = args.state;
    this.phone = args.phone;
    this.cell = args.cell;
    this.email = args.email;
    this.idName = args.idName;
    this.idValue = args.idValue;
    this.coords.latitude = args.coords.latitude;
    this.coords.longitude = args.coords.longitude;
    this.login = {
      ...args.login,
    }
  }

  get idToString(): { id: string; hasError: boolean } {
    const isIdNameExists = (): boolean => {
      return this.idName.length > 0;
    };
    const isIdValueExists = (): boolean => {
      return (this.idValue && this.idValue.length > 0);
    };

    return {
      id: `${isIdNameExists() ? this.idName : ''} ${isIdValueExists() ? ` - ${this.idValue}` : ''}`,
      hasError: !isIdNameExists() || !isIdValueExists(),
    }
  }
}
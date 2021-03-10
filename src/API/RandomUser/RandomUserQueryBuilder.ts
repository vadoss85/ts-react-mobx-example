export type RandomUserQueryBuilderGender = 'male' | 'female';
export type RandomUserQueryBuilderNationalities = 'AU' | 'BR' | 'CA' | 'CH' | 'DE' | 'DK' | 'ES' | 'FI' | 'FR' | 'GB' | 'IE' | 'IR' | 'NO' | 'NL' | 'NZ' | 'TR' | 'US';
type RandomUserQueryBuilderParamsKeys = 'page' | 'results' | 'gender' | 'nat';
export type GetNationalitiesListData = Record<RandomUserQueryBuilderNationalities, RandomUserQueryBuilderNationalities>;

export type RandomUserQueryBuilderFilterArgs = {
  gender?: RandomUserQueryBuilderGender;
  nationalities?: RandomUserQueryBuilderNationalities[]
}

export type RandomUserQueryBuilderArgs = RandomUserQueryBuilderFilterArgs & {
  page: number;
  limit: number;
}

export class RandomUserQueryBuilder {
  params: Partial<Record<RandomUserQueryBuilderParamsKeys, number | string>> = {};

  constructor(args: Partial<RandomUserQueryBuilderArgs> = {}) {
    this.params.page = args.page
    this.params.results = args.limit;
    this.params.gender = args.gender;
    this.params.nat = args.nationalities?.join(',').toLowerCase();
  }

  getQuery(): string {
    const keys: RandomUserQueryBuilderParamsKeys[] = ['page', 'results', 'gender', 'nat'];

    return keys.reduce<string[]>((acc, prop) => {
      const value = this.params[prop];
      if (typeof value !== 'undefined') {
        acc.push(`${prop}=${value}`);
      }

      return acc
    }, []).join('&');
  }
}

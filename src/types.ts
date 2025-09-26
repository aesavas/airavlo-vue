type Coordinate = {lat: number, lng: number}

export type Continent =
  | "Africa"
  | "Antarctica"
  | "Asia"
  | "Europe"
  | "North America"
  | "Oceania"
  | "South America";

export interface IAirport {
  code: string
  name: string
  city: string
  country: string
  type: "International" | "Domestic"
  continent: Continent
  timezone: string
  passengerVolume: string
  yearOpened: number
  majorAirlines: string[]
  coordinates: Coordinate
  website: string
}

export interface ICountry {
  countryCode: string
  continent: Continent
  flag: string
}

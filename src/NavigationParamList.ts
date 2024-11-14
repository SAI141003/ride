export type MainStackParamList = {
  Home: undefined;
  Services: undefined;
  Activity: undefined;
  Account: undefined;
  Comparison: {
    pickup: Location | null;
    dropoff: Location | null;
  };
};

export interface Location {
  latitude: number;
  longitude: number;
  address: string;
}
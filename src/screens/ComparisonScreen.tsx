import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { RouteProp } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { LocationInput } from "../components/LocationInput";
import { RideCard } from "../components/RideCard";
import { getRidePrices } from "../services/rideService";
import { Location, RidePrice } from "../types/RideTypes";

type ComparisonScreenProps = {
  route: RouteProp<MainStackParamList, "Comparison">;
  navigation: FrameNavigationProp<MainStackParamList, "Comparison">;
};

export function ComparisonScreen({ route, navigation }: ComparisonScreenProps) {
  const [pickup, setPickup] = React.useState<Location | null>(route.params?.pickup || null);
  const [dropoff, setDropoff] = React.useState<Location | null>(route.params?.dropoff || null);
  const [loading, setLoading] = React.useState(false);
  const [prices, setPrices] = React.useState<RidePrice[]>([]);

  React.useEffect(() => {
    if (pickup && dropoff) {
      loadPrices();
    }
  }, [pickup, dropoff]);

  const loadPrices = async () => {
    if (!pickup || !dropoff) return;
    try {
      setLoading(true);
      const results = await getRidePrices(pickup, dropoff);
      setPrices(results);
    } finally {
      setLoading(false);
    }
  };

  return (
    <flexboxLayout style={styles.container}>
      {/* Location Inputs */}
      <stackLayout style={styles.locationInputs}>
        <LocationInput
          placeholder="Enter pickup location"
          onLocationSelect={setPickup}
          initialValue={pickup?.address}
        />
        <label style={styles.divider}>|</label>
        <LocationInput
          placeholder="Enter destination"
          onLocationSelect={setDropoff}
          initialValue={dropoff?.address}
        />
      </stackLayout>

      {/* Ride Options */}
      {loading ? (
        <activityIndicator busy={true} style={styles.loading} />
      ) : (
        <scrollView style={styles.rideList}>
          {prices.map((ride, index) => (
            <RideCard
              key={index}
              ride={ride}
              onSelect={() => {}}
              style={styles.rideCard}
            />
          ))}
        </scrollView>
      )}
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#ffffff",
    flexDirection: "column"
  },
  locationInputs: {
    padding: 16,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#e2e2e2"
  },
  divider: {
    fontSize: 20,
    color: "#000000",
    textAlignment: "center",
    marginVertical: 8
  },
  loading: {
    flex: 1,
    alignSelf: "center"
  },
  rideList: {
    flex: 1,
    padding: 16
  },
  rideCard: {
    marginBottom: 16
  }
});
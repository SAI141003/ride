import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type ActivityScreenProps = {
  navigation: FrameNavigationProp<MainStackParamList, "Activity">;
};

export function ActivityScreen({ navigation }: ActivityScreenProps) {
  return (
    <scrollView style={styles.container}>
      <stackLayout style={styles.content}>
        {/* Past Rides */}
        <stackLayout style={styles.section}>
          <label style={styles.sectionTitle}>Recent Rides</label>
          
          <stackLayout style={styles.rideItem}>
            <flexboxLayout style={styles.rideHeader}>
              <label style={styles.rideDate}>Today, 2:30 PM</label>
              <label style={styles.ridePrice}>$24.50</label>
            </flexboxLayout>
            <stackLayout style={styles.rideDetails}>
              <flexboxLayout style={styles.locationItem}>
                <label style={styles.locationDot}>●</label>
                <label style={styles.locationText}>123 Main St</label>
              </flexboxLayout>
              <label style={styles.locationLine}>|</label>
              <flexboxLayout style={styles.locationItem}>
                <label style={styles.locationDot}>●</label>
                <label style={styles.locationText}>456 Market St</label>
              </flexboxLayout>
            </stackLayout>
          </stackLayout>

          <stackLayout style={styles.rideItem}>
            <flexboxLayout style={styles.rideHeader}>
              <label style={styles.rideDate}>Yesterday, 5:45 PM</label>
              <label style={styles.ridePrice}>$18.75</label>
            </flexboxLayout>
            <stackLayout style={styles.rideDetails}>
              <flexboxLayout style={styles.locationItem}>
                <label style={styles.locationDot}>●</label>
                <label style={styles.locationText}>789 Oak Ave</label>
              </flexboxLayout>
              <label style={styles.locationLine}>|</label>
              <flexboxLayout style={styles.locationItem}>
                <label style={styles.locationDot}>●</label>
                <label style={styles.locationText}>321 Pine St</label>
              </flexboxLayout>
            </stackLayout>
          </stackLayout>
        </stackLayout>

        {/* Upcoming Rides */}
        <stackLayout style={styles.section}>
          <label style={styles.sectionTitle}>Scheduled Rides</label>
          <flexboxLayout style={styles.emptyState}>
            <label style={styles.emptyIcon}>📅</label>
            <label style={styles.emptyText}>No upcoming rides scheduled</label>
            <button style={styles.scheduleButton} text="Schedule a Ride" />
          </flexboxLayout>
        </stackLayout>
      </stackLayout>
    </scrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff"
  },
  content: {
    padding: 16
  },
  section: {
    marginBottom: 32
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 16
  },
  rideItem: {
    padding: 16,
    backgroundColor: "#f8f8f8",
    borderRadius: 12,
    marginBottom: 16
  },
  rideHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12
  },
  rideDate: {
    fontSize: 16,
    color: "#000000",
    fontWeight: "bold"
  },
  ridePrice: {
    fontSize: 16,
    color: "#000000",
    fontWeight: "bold"
  },
  rideDetails: {
    marginLeft: 8
  },
  locationItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4
  },
  locationDot: {
    fontSize: 12,
    color: "#000000",
    marginRight: 8
  },
  locationLine: {
    fontSize: 16,
    color: "#666666",
    marginLeft: 4
  },
  locationText: {
    fontSize: 14,
    color: "#666666"
  },
  emptyState: {
    flexDirection: "column",
    alignItems: "center",
    padding: 32
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: 16
  },
  emptyText: {
    fontSize: 16,
    color: "#666666",
    marginBottom: 16
  },
  scheduleButton: {
    fontSize: 16,
    color: "#ffffff",
    backgroundColor: "#000000",
    padding: 12,
    borderRadius: 24,
    width: 200
  }
});
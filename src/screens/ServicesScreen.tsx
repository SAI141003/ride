import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type ServicesScreenProps = {
  navigation: FrameNavigationProp<MainStackParamList, "Services">;
};

export function ServicesScreen({ navigation }: ServicesScreenProps) {
  return (
    <scrollView style={styles.container}>
      <stackLayout style={styles.content}>
        {/* Ride Services */}
        <stackLayout style={styles.section}>
          <label style={styles.sectionTitle}>Ride Services</label>
          <gridLayout style={styles.servicesGrid} columns="*, *" rows="auto, auto">
            <stackLayout style={styles.serviceCard} row="0" col="0">
              <label style={styles.serviceIcon}>🚗</label>
              <label style={styles.serviceTitle}>Economy</label>
              <label style={styles.serviceDesc}>Affordable, everyday rides</label>
            </stackLayout>
            
            <stackLayout style={styles.serviceCard} row="0" col="1">
              <label style={styles.serviceIcon}>🏎️</label>
              <label style={styles.serviceTitle}>Premium</label>
              <label style={styles.serviceDesc}>Luxury vehicles, top-rated drivers</label>
            </stackLayout>
            
            <stackLayout style={styles.serviceCard} row="1" col="0">
              <label style={styles.serviceIcon}>🚐</label>
              <label style={styles.serviceTitle}>Family</label>
              <label style={styles.serviceDesc}>Vehicles for groups & luggage</label>
            </stackLayout>
            
            <stackLayout style={styles.serviceCard} row="1" col="1">
              <label style={styles.serviceIcon}>⚡</label>
              <label style={styles.serviceTitle}>Express</label>
              <label style={styles.serviceDesc}>Quick rides at busy hours</label>
            </stackLayout>
          </gridLayout>
        </stackLayout>

        {/* Additional Services */}
        <stackLayout style={styles.section}>
          <label style={styles.sectionTitle}>Additional Services</label>
          <stackLayout style={styles.servicesList}>
            <flexboxLayout style={styles.serviceItem}>
              <label style={styles.serviceItemIcon}>🛵</label>
              <stackLayout style={styles.serviceItemContent}>
                <label style={styles.serviceItemTitle}>Food Delivery</label>
                <label style={styles.serviceItemDesc}>Get food delivered to you</label>
              </stackLayout>
              <label style={styles.serviceItemArrow}>→</label>
            </flexboxLayout>

            <flexboxLayout style={styles.serviceItem}>
              <label style={styles.serviceItemIcon}>✈️</label>
              <stackLayout style={styles.serviceItemContent}>
                <label style={styles.serviceItemTitle}>Flight Booking</label>
                <label style={styles.serviceItemDesc}>Find and book flights</label>
              </stackLayout>
              <label style={styles.serviceItemArrow}>→</label>
            </flexboxLayout>
          </stackLayout>
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
  servicesGrid: {
    width: "100%"
  },
  serviceCard: {
    margin: 8,
    padding: 16,
    backgroundColor: "#f8f8f8",
    borderRadius: 12,
    alignItems: "center"
  },
  serviceIcon: {
    fontSize: 32,
    marginBottom: 8
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 4
  },
  serviceDesc: {
    fontSize: 12,
    color: "#666666",
    textAlignment: "center"
  },
  servicesList: {
    width: "100%"
  },
  serviceItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e2e2"
  },
  serviceItemIcon: {
    fontSize: 24,
    marginRight: 16
  },
  serviceItemContent: {
    flex: 1
  },
  serviceItemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000"
  },
  serviceItemDesc: {
    fontSize: 14,
    color: "#666666"
  },
  serviceItemArrow: {
    fontSize: 20,
    color: "#666666"
  }
});
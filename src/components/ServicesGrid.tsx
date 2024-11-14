import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function ServicesGrid() {
  return (
    <stackLayout style={styles.container}>
      <label style={styles.sectionTitle}>Available Rides</label>
      <stackLayout style={styles.servicesList}>
        <flexboxLayout style={styles.serviceItem}>
          <flexboxLayout style={styles.serviceInfo}>
            <label style={styles.serviceIcon}>🚗</label>
            <stackLayout style={styles.serviceDetails}>
              <label style={styles.serviceTitle}>UberX</label>
              <label style={styles.serviceTime}>4 min away</label>
            </stackLayout>
          </flexboxLayout>
          <label style={styles.servicePrice}>$15-20</label>
        </flexboxLayout>

        <flexboxLayout style={styles.serviceItem}>
          <flexboxLayout style={styles.serviceInfo}>
            <label style={styles.serviceIcon}>🏎️</label>
            <stackLayout style={styles.serviceDetails}>
              <label style={styles.serviceTitle}>Uber Black</label>
              <label style={styles.serviceTime}>8 min away</label>
            </stackLayout>
          </flexboxLayout>
          <label style={styles.servicePrice}>$25-30</label>
        </flexboxLayout>

        <flexboxLayout style={styles.serviceItem}>
          <flexboxLayout style={styles.serviceInfo}>
            <label style={styles.serviceIcon}>🚐</label>
            <stackLayout style={styles.serviceDetails}>
              <label style={styles.serviceTitle}>UberXL</label>
              <label style={styles.serviceTime}>6 min away</label>
            </stackLayout>
          </flexboxLayout>
          <label style={styles.servicePrice}>$22-28</label>
        </flexboxLayout>
      </stackLayout>
    </stackLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#ffffff"
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 16
  },
  servicesList: {
    width: "100%"
  },
  serviceItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e2e2"
  },
  serviceInfo: {
    flexDirection: "row",
    alignItems: "center"
  },
  serviceIcon: {
    fontSize: 24,
    marginRight: 16
  },
  serviceDetails: {
    flexDirection: "column"
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 4
  },
  serviceTime: {
    fontSize: 14,
    color: "#666666"
  },
  servicePrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000"
  }
});
import * as React from "react";
import { StyleSheet } from "react-nativescript";

interface SearchBarProps {
  onTap: () => void;
}

export function SearchBar({ onTap }: SearchBarProps) {
  return (
    <stackLayout style={styles.container}>
      <flexboxLayout style={styles.searchBox} onTap={onTap}>
        <stackLayout style={styles.locations}>
          <flexboxLayout style={styles.locationInput}>
            <label style={styles.dot}>●</label>
            <label style={styles.placeholder}>Enter pickup location</label>
          </flexboxLayout>
          <flexboxLayout style={styles.locationInput}>
            <label style={styles.dot}>●</label>
            <label style={styles.placeholder}>Enter drop-off location</label>
          </flexboxLayout>
        </stackLayout>
      </flexboxLayout>
    </stackLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    padding: 16
  },
  searchBox: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 12
  },
  locations: {
    width: "100%"
  },
  locationInput: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8
  },
  dot: {
    fontSize: 12,
    marginRight: 12,
    color: "#000000"
  },
  placeholder: {
    fontSize: 16,
    color: "#666666"
  }
});
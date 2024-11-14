import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { Location } from "../types/RideTypes";

interface LocationInputProps {
  placeholder: string;
  onLocationSelect: (location: Location) => void;
  initialValue?: string;
}

export function LocationInput({ placeholder, onLocationSelect, initialValue }: LocationInputProps) {
  const [address, setAddress] = React.useState(initialValue || "");

  const handleSubmit = () => {
    if (!address) return;
    
    // Mock location data for demo
    const mockLocation: Location = {
      latitude: 37.7749,
      longitude: -122.4194,
      address: address
    };
    onLocationSelect(mockLocation);
  };

  return (
    <flexboxLayout style={styles.container}>
      <textField
        style={styles.input}
        hint={placeholder}
        text={address}
        onTextChange={(args) => setAddress(args.value)}
        returnKeyType="done"
        onReturnPress={handleSubmit}
      />
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  input: {
    width: "100%",
    height: 48,
    fontSize: 16,
    color: "#000000",
    backgroundColor: "#ffffff",
    borderWidth: 0,
    placeholderColor: "#666666"
  }
});
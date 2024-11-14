import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { BottomNavigation } from "../components/BottomNavigation";
import { SearchBar } from "../components/SearchBar";

type HomeScreenProps = {
  navigation: FrameNavigationProp<MainStackParamList, "Home">;
};

export function HomeScreen({ navigation }: HomeScreenProps) {
  const [activeTab, setActiveTab] = React.useState('home');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    switch (tab) {
      case 'services':
        navigation.navigate('Services');
        break;
      case 'activity':
        navigation.navigate('Activity');
        break;
      case 'account':
        navigation.navigate('Account');
        break;
    }
  };

  const handleSearchTap = () => {
    navigation.navigate("Comparison", {
      pickup: null,
      dropoff: null
    });
  };

  return (
    <flexboxLayout style={styles.container}>
      <SearchBar onTap={handleSearchTap} />
      
      <scrollView style={styles.content}>
        <stackLayout style={styles.promoSection}>
          <label style={styles.promoTitle}>Welcome to RideCompare</label>
          <label style={styles.promoText}> Your One-Stop Solution for Comparing Rides, Food, Groceries, and Flights</label>
        </stackLayout>
      </scrollView>
      
      <BottomNavigation 
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#ffffff",
    flexDirection: "column"
  },
  content: {
    flex: 1
  },
  promoSection: {
    padding: 24,
    alignItems: "center"
  },
  promoTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 8,
    textAlignment: "center"
  },
  promoText: {
    fontSize: 16,
    color: "#666666",
    textAlignment: "center"
  }
});
import * as React from "react";
import { StyleSheet } from "react-nativescript";

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  return (
    <flexboxLayout style={styles.container}>
      <flexboxLayout 
        style={[styles.tab, activeTab === 'home' && styles.activeTab]} 
        onTap={() => onTabChange('home')}
      >
        <label style={styles.icon}>🏠</label>
        <label style={[styles.label, activeTab === 'home' && styles.activeLabel]}>Home</label>
      </flexboxLayout>

      <flexboxLayout 
        style={[styles.tab, activeTab === 'services' && styles.activeTab]} 
        onTap={() => onTabChange('services')}
      >
        <label style={styles.icon}>🚗</label>
        <label style={[styles.label, activeTab === 'services' && styles.activeLabel]}>Services</label>
      </flexboxLayout>

      <flexboxLayout 
        style={[styles.tab, activeTab === 'activity' && styles.activeTab]} 
        onTap={() => onTabChange('activity')}
      >
        <label style={styles.icon}>📋</label>
        <label style={[styles.label, activeTab === 'activity' && styles.activeLabel]}>Activity</label>
      </flexboxLayout>

      <flexboxLayout 
        style={[styles.tab, activeTab === 'account' && styles.activeTab]} 
        onTap={() => onTabChange('account')}
      >
        <label style={styles.icon}>👤</label>
        <label style={[styles.label, activeTab === 'account' && styles.activeLabel]}>Account</label>
      </flexboxLayout>
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#e2e2e2",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%"
  },
  tab: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  activeTab: {
    backgroundColor: "#f8f8f8"
  },
  icon: {
    fontSize: 20,
    marginBottom: 4
  },
  label: {
    fontSize: 12,
    color: "#666666"
  },
  activeLabel: {
    color: "#000000",
    fontWeight: "bold"
  }
});
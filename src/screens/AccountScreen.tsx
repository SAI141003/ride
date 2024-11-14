import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type AccountScreenProps = {
  navigation: FrameNavigationProp<MainStackParamList, "Account">;
};

export function AccountScreen({ navigation }: AccountScreenProps) {
  return (
    <scrollView style={styles.container}>
      <stackLayout style={styles.content}>
        {/* Profile Header */}
        <flexboxLayout style={styles.profileHeader}>
          <label style={styles.profileIcon}>👤</label>
          <stackLayout style={styles.profileInfo}>
            <label style={styles.profileName}>Sai Yaganti</label>
            <label style={styles.profileRating}>⭐ 4.85</label>
          </stackLayout>
          <button style={styles.editButton} text="Edit" />
        </flexboxLayout>

        {/* Quick Actions */}
        <gridLayout style={styles.quickActions} columns="*, *" rows="auto">
          <stackLayout style={styles.quickAction} row="0" col="0">
            <label style={styles.actionIcon}>💳</label>
            <label style={styles.actionText}>Payment</label>
          </stackLayout>
          <stackLayout style={styles.quickAction} row="0" col="1">
            <label style={styles.actionIcon}>🎁</label>
            <label style={styles.actionText}>Promotions</label>
          </stackLayout>
        </gridLayout>

        {/* Settings List */}
        <stackLayout style={styles.settingsList}>
          <flexboxLayout style={styles.settingItem}>
            <label style={styles.settingIcon}>🔔</label>
            <label style={styles.settingText}>Notifications</label>
            <label style={styles.settingArrow}>→</label>
          </flexboxLayout>

          <flexboxLayout style={styles.settingItem}>
            <label style={styles.settingIcon}>🔒</label>
            <label style={styles.settingText}>Privacy</label>
            <label style={styles.settingArrow}>→</label>
          </flexboxLayout>

          <flexboxLayout style={styles.settingItem}>
            <label style={styles.settingIcon}>⚙️</label>
            <label style={styles.settingText}>Settings</label>
            <label style={styles.settingArrow}>→</label>
          </flexboxLayout>

          <flexboxLayout style={styles.settingItem}>
            <label style={styles.settingIcon}>❓</label>
            <label style={styles.settingText}>Help Center</label>
            <label style={styles.settingArrow}>→</label>
          </flexboxLayout>
        </stackLayout>

        <button style={styles.logoutButton} text="Log Out" />
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
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f8f8f8",
    borderRadius: 12,
    marginBottom: 24
  },
  profileIcon: {
    fontSize: 48,
    marginRight: 16
  },
  profileInfo: {
    flex: 1
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 4
  },
  profileRating: {
    fontSize: 16,
    color: "#666666"
  },
  editButton: {
    fontSize: 16,
    color: "#000000",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 16,
    padding: 8,
    width: 80
  },
  quickActions: {
    marginBottom: 24
  },
  quickAction: {
    margin: 8,
    padding: 16,
    backgroundColor: "#f8f8f8",
    borderRadius: 12,
    alignItems: "center"
  },
  actionIcon: {
    fontSize: 24,
    marginBottom: 8
  },
  actionText: {
    fontSize: 14,
    color: "#000000"
  },
  settingsList: {
    marginBottom: 24
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e2e2"
  },
  settingIcon: {
    fontSize: 20,
    marginRight: 16
  },
  settingText: {
    flex: 1,
    fontSize: 16,
    color: "#000000"
  },
  settingArrow: {
    fontSize: 20,
    color: "#666666"
  },
  logoutButton: {
    fontSize: 16,
    color: "#ff0000",
    backgroundColor: "transparent",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ff0000"
  }
});
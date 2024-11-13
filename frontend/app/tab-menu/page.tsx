import TabMenu from "../_components/tab-menu";

const tabs = ["Account", "Security", "Plan"];
const panels = [
  "The Account Management section provides a comprehensive view of your personal information and settings. Here, you can update your profile details, manage contact information, and customize your preferences to enhance your user experience.",
  "The Security Settings section is dedicated to protecting your account and personal data. Here, you can manage various security features to ensure your information remains safe and secure.",
  "The Subscription Plan section provides details about your current plan and available upgrades. Here, you can review your plan’s benefits, manage billing information, and explore other subscription options to find the best fit for your needs.",
];

export default function TabMenuPage() {
  return <TabMenu tabs={tabs} panels={panels} />;
}

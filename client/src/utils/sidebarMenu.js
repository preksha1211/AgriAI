import {
  LayoutDashboard,
  Map,
  Sprout,
  CloudSun,
  FlaskConical,
  Bot,
  FileText,
  Bell,
  Settings,
} from "lucide-react";

const sidebarMenu = [
  {
    id: 1,
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    id: 2,
    name: "Fields",
    path: "/fields",
    icon: Map,
  },
  {
    id: 3,
    name: "Crops",
    path: "/crops",
    icon: Sprout,
  },
  {
    id: 4,
    name: "Weather",
    path: "/weather",
    icon: CloudSun,
  },
  {
    id: 5,
    name: "Soil Health",
    path: "/soil",
    icon: FlaskConical,
  },
  {
    id: 6,
    name: "AI Assistant",
    path: "/assistant",
    icon: Bot,
  },
  {
    id: 7,
    name: "Reports",
    path: "/reports",
    icon: FileText,
  },
  {
    id: 8,
    name: "Notifications",
    path: "/notifications",
    icon: Bell,
  },
  {
    id: 9,
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

export default sidebarMenu;
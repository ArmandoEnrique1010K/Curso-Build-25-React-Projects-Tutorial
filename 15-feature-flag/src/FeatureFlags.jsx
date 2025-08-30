import Accordian from "./components/Accordian/Accordian";
import LightDarkMode from "./components/LightDarkMode/LightDarkMode";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import RandomColor from "./components/RandomColor/RandomColor";
import TreeView from "./components/TreeView/TreeView";
import { menus } from "./components/TreeView/data/menus";
import CustomTabs from "./components/CustomTabs/CustomTabs";
import { useContext } from "react";
import { FeatureFlagContext } from "./context/FeatureFlagContext";

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={menus} />,
    },
    {
      key: "showTabs",
      component: <CustomTabs />,
    },
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  if (loading) return <h1>Loading data ! Please wait</h1>;

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}

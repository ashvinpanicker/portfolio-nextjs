import React, { FC, useState } from "react";
import { CirclePacking } from "@nivo/circle-packing";
import { skillsData } from "../lib/skills-circle-pack-data";
import { useTheme } from "@/context/theme-context";

const commonProperties = {
  width: 1000,
  height: 550,
  data: skillsData,
  padding: 2,
  id: "name",
  value: "loc",
  labelsSkipRadius: 16,
};

// TODO Fix theme colors
// TODO Cursor pointer on hover
// TODO add instructions on how to zoom in and out
// TODO Change Data
export const SkillsCirclePack: FC = () => {
  const [zoomedId, setZoomedId] = useState<string | null>(null);
  const { theme } = useTheme();

  return (
    <CirclePacking
      {...commonProperties}
      enableLabels
      labelsSkipRadius={16}
      labelsFilter={(label) => label.node.height === 0}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      theme={{
        tooltip: {
          container: {
            background: theme === "dark" ? "#333" : "#fff",
          },
        },
      }}
      zoomedId={zoomedId}
      motionConfig="slow"
      onClick={(node) => {
        setZoomedId(zoomedId === node.id ? null : node.id);
      }}
    />
  );
};

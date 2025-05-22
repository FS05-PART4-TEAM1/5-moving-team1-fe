"use client";

import { Box, Typography } from "@mui/material";
import { COLORS } from "@/public/theme/colors";

interface DropDownListProps {
  type: "region" | "service";
  items: readonly string[];
  selectedItem?: string;
  onSelect: (value: string) => void;
}

export default function DropDownList({
  type,
  items,
  selectedItem,
  onSelect,
}: DropDownListProps) {
  const isRegion = type === "region";

  return (
    <Box
      sx={{
        position: "absolute",
        width: 328,
        height: isRegion ? 320 : 256,
        backgroundColor: COLORS.White[100],
        boxShadow: "4px 4px 10px rgba(224, 224, 224, 0.25)",
        display: "flex",
        flexDirection: isRegion ? "row" : "column",
        flexWrap: isRegion ? "wrap" : "nowrap",
        padding: 0,
        overflowY: isRegion ? "auto" : "visible",
        zIndex: 10,
      }}
    >
      {items.map((item) => {
        const isSelected = selectedItem === item;

        return (
          <Box
            key={item}
            onClick={() => onSelect(item)}
            sx={{
              width: isRegion ? "50%" : "100%",
              padding: isRegion ? "12px 16px" : "14px 24px",
              cursor: "pointer",
              backgroundColor: isSelected
                ? COLORS.PrimaryBlue[50]
                : "transparent",
              "&:hover": {
                backgroundColor: COLORS.PrimaryBlue[50],
              },
            }}
          >
            <Typography variant="M_16">{item}</Typography>
          </Box>
        );
      })}
    </Box>
  );
}

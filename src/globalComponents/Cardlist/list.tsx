import React from "react";
import StrollerOutlinedIcon from "@mui/icons-material/StrollerOutlined";
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ChairAltIcon from "@mui/icons-material/ChairAlt";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import ComputerIcon from "@mui/icons-material/Computer";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import GavelIcon from "@mui/icons-material/Gavel";

export const categories = [
  {
    id: 1,
    name: "Lasten tarviker",
    icon: <StrollerOutlinedIcon />,
    hidden: false,
  },
  {
    id: 2,
    name: "Vaatteet ja kengät",
    icon: <CheckroomOutlinedIcon />,
    hidden: false,
  },
  {
    id: 3,
    name: "Musiikki",
    icon: <MusicNoteIcon />,
    hidden: false,
  },
  {
    id: 4,
    name: "Huonekalut ja sisustus",
    icon: <ChairAltIcon />,
    hidden: false,
  },
  {
    id: 5,
    name: "Polkupöyrät",
    icon: <PedalBikeIcon />,
    hidden: false,
  },
  {
    id: 6,
    name: "Elektroniikka",
    icon: <ComputerIcon />,
    hidden: false,
  },
  {
    id: 7,
    name: "Antikki ja taide",
    icon: <ColorLensOutlinedIcon />,
    hidden: false,
  },
  {
    id: 8,
    name: "Kirpputorit",
    icon: <StackedBarChartIcon />,
    hidden: true,
  },
  {
    id: 9,
    name: "Huutokaupat",
    icon: <GavelIcon />,
    hidden: true,
  },
];

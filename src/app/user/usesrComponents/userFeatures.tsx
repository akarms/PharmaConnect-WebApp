import React from "react";
import Grid from "@mui/material/Grid2";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";

const UserFeatures = () => {
  return (
    <Grid container spacing={3}>
      <Grid
        size={{ xs: 12, md: 3 }}
        sx={{ boxShadow: "12", borderRadius: "24px"  , transition: "transform 0.3s ease-in-out", "&:hover": { transform: "scale(1.05)" } , cursor: "pointer"  }}
      >
        <div className="flex flex-col justify-center items-center min-h-52 gap-2">
          <EventAvailableIcon sx={{ fontSize: 60, color: "#42C5E7" , }} />
          <text className="">Appointments</text>
        </div>
      </Grid>

      <Grid
        size={{ xs: 12, md: 3 }}
        sx={{ boxShadow: "12", borderRadius: "24px"  , transition: "transform 0.3s ease-in-out", "&:hover": { transform: "scale(1.05)" } , cursor: "pointer"    }}
      >
        <div className="flex flex-col justify-center items-center min-h-52 gap-2">
          <FolderSharedIcon sx={{ fontSize: 60, color: "#42C5E7" }} />
          <text className="">Records</text>
        </div>
      </Grid>

      <Grid
        size={{ xs: 12, md: 3 }}
        sx={{ boxShadow: "12", borderRadius: "24px" , transition: "transform 0.3s ease-in-out", "&:hover": { transform: "scale(1.05)" }  , cursor: "pointer"   }}
      >
        <div className="flex flex-col justify-center items-center min-h-52 gap-2">
          <Diversity1Icon sx={{ fontSize: 60, color: "#42C5E7" }} />
          <text className="">Members</text>
        </div>
      </Grid>

      <Grid
        size={{ xs: 12, md: 3 }}
        sx={{ boxShadow: "12", borderRadius: "24px" , transition: "transform 0.3s ease-in-out", "&:hover": { transform: "scale(1.05)" }  , cursor: "pointer"   }}
      >
        <div className="flex flex-col justify-center items-center min-h-52 gap-2">
          <LocalPharmacyIcon sx={{ fontSize: 60, color: "#42C5E7" }} />
          <text className="">Records</text>
        </div>
      </Grid>
    </Grid>
  );
};

export default UserFeatures;

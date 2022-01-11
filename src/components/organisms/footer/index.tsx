import { Grid } from "@mui/material";
import React from "react";
import FooterNavLists from "../../molecules/FooterNavLists";
import SiteMap from "../../molecules/sitemap";
import SloganLogo from "../../molecules/SloganLogo";

export const titles = ["Editorial", "Useful links", "Company"];
export const subtitlesList = [
  [
    "Book Lists",
    "What is nonFiction",
    "What to read next",
    "Benefits of reading",
  ],
  [
    "Pricing",
    "Blinkist Business",
    "Gift Cards",
    "Blinkist magazine",
    "Contact & help",
  ],
  ["About", "Careers", "Partners", "Code of Conduct"],
];
const slogan = `Big Ideas in small packages Start Learning now`;

const Footer: React.FC = () => {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "backgroundColors.background2",
      }}
      data-testid="footer"
    >
      <Grid
        container
        sx={{
          margin: "38px 18% 108px",
          height: "224px",
          backgroundColor: "backgroundColors.background2",
        }}
      >
        <Grid item>
          <Grid container>
            <Grid item sx={{ marginRight: "32px" }}>
              <SloganLogo title={slogan} />
            </Grid>
            <Grid item>
              <FooterNavLists titles={titles} itemLists={subtitlesList} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <SiteMap />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;

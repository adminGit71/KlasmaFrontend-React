import { Icon } from "@iconify/react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Container, Grid, Paper, Stack, Typography, Icon as MuiIcon, useTheme, Tab } from "@mui/material";
import { useState } from "react";
import { TCampaignTab } from "../../utils/types";
import DescriptionTab from "./tabs/DescriptionTab";

export default function Campaign() {
  const theme = useTheme()

  const [currentTab, setCurrentTab] = useState<TCampaignTab>('description')

  const handleCurrentTab = (value: TCampaignTab) => {
    setCurrentTab(value)
  }
  return (
    <Container maxWidth="lg" sx={{ mt: 6, pb: 6 }}>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Paper
              component="img"
              src="/assets/images/invest-card-sample-thumbnail.png"
              alt="image"
              width="100%"
              elevation={12}
            />
            <Typography
              variant="h4"
              fontWeight={700}
              sx={{ mt: 4 }}
            >
              On it differed repeated wandered required in
            </Typography>
            <Stack direction="row" alignItems="center" spacing={1} mt={1}>
              <MuiIcon sx={{ color: theme.palette.primary.main, height: 'auto', fontSize: 18 }}>
                <Icon icon="bi:clock-fill" />
              </MuiIcon>
              <Typography component="span" variant="body1">
                06/12/2018
              </Typography>
            </Stack>

            <Box mt={5}>
              <TabContext value={currentTab}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={(e, value) => handleCurrentTab(value)}>
                    <Tab label="Description" value="description" />
                    <Tab label="FAQ" value="faq" />
                    <Tab label="Comments" value="comments" />
                  </TabList>
                </Box>
                <TabPanel value="description"><DescriptionTab /></TabPanel>
                <TabPanel value="faq">Item Two</TabPanel>
                <TabPanel value="comments">Item Three</TabPanel>
              </TabContext>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}></Grid>
        </Grid>
      </Box>
    </Container>
  )
}
import { SimpleGrid, GridItem } from "@chakra-ui/react";
import { AnalyticsPage } from "./AnalyticsPage";
import { CampaignsPage } from "./CampaignsPage";
import { DashboardPage } from "./DashboardPage";
import { GoalsPage } from "./GoalsPage";
import { ResourcesPage } from "./ResourcesPage";

export function HomePage() {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
      <GridItem>
        <DashboardPage />
      </GridItem>
      <GridItem>
        <CampaignsPage />
      </GridItem>
      <GridItem>
        <AnalyticsPage />
      </GridItem>
      <GridItem>
        <GoalsPage />
      </GridItem>
      <GridItem>
        <ResourcesPage />
      </GridItem>
    </SimpleGrid>
  );
}

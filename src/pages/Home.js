// components
import Page from '../components/Page';
// sections
import {
  HomeHero
} from '../sections/home';

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="COMPANYNAME">
      <HomeHero />

      {/* <ContentStyle>
        <HomeMinimal />

        <HomeHugePackElements />

        <HomeDarkMode />

        <HomeColorPresets />

        <HomeCleanInterfaces />

        <HomePricingPlans />

        <HomeLookingFor />

        <HomeAdvertisement /> */}
      {/* </ContentStyle> */}
    </Page>
  );
}

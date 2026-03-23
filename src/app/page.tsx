import { PolaroidBanff, PolaroidSunset } from "@/components/decorations/Polaroid";
import { LandingContent } from "@/components/hero/LandingContent";
import {
  hasPolaroidBanff,
  hasPolaroidSunset,
} from "@/lib/polaroidAssets";

export default function HomePage() {
  const useSunset = hasPolaroidSunset();
  const useBanff = hasPolaroidBanff();

  return (
    <>
      <PolaroidSunset usePhoto={useSunset} />
      <PolaroidBanff usePhoto={useBanff} />
      <LandingContent />
    </>
  );
}

import { useEffect, useRef } from "react";

const DEFAULT_CENTER = { lat: -11.853787179970059, lng: -55.51033440657979 };
const DEFAULT_ZOOM = 4;

export const GoogleMaps = ({
  locations,
  useClusters = true,
  mapId,
  className,
}: {
  locations: ReadonlyArray<google.maps.LatLngLiteral>;
  useClusters?: boolean;
  mapId?: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Display the map
    if (ref.current) {
      const map = new window.google.maps.Map(ref.current, {
        center: DEFAULT_CENTER,
        zoom: DEFAULT_ZOOM,
        mapId,
      });
    }
  }, [ref, mapId, locations, useClusters]);

  return (
    <div
      className={className}
      ref={ref}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

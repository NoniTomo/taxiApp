import { useRef, useState } from "react";
import {
  DrivingInfo,
  Point,
  RoutesFoundEvent,
  YaMap,
} from "react-native-yamap";

export function useRoute() {
  const [points, setPoints] = useState<Array<Point>>([]);
  const mapRef = useRef<YaMap>(null); // ✅ Используем useRef для хранения ссылки

  const getRoutes = (pointA: Point, pointB: Point) => {
    if (mapRef.current && pointA && pointB) {
      mapRef.current.findDrivingRoutes(
        [pointA, pointB],
        (evt: RoutesFoundEvent<DrivingInfo>) => {
          console.log(evt);
          const arr: Array<Point> = [];
          evt.routes[0].sections.forEach((section) =>
            section.points.forEach((point) => arr.push(point))
          );
          setPoints(arr);
        }
      );
    }
  };

  return {
    state: { points },
    functions: { getRoutes },
    mapRef, // ✅ Возвращаем ref, чтобы его можно было передать в компонент <YaMap />
  };
}

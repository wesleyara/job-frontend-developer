import { classificationArray } from "~/lib/utils";
import { Classification } from "~/types";

import { Badge } from "../ui/badge";

interface ShowAttractionBadgesProps {
  classifications: Classification[];
}

export const ShowAttractionBadges = ({
  classifications,
}: ShowAttractionBadgesProps) => {
  return (
    <span className="flex gap-2 justify-center flex-wrap mt-5 px-2">
      {classificationArray(classifications[0]).map(item => (
        <Badge key={item.name} variant="outline">
          {item.name}
        </Badge>
      ))}
    </span>
  );
};

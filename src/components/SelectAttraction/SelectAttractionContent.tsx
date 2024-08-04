import { SearchAttraction } from "~/types";
import Image from "next/image";

interface SelectAttractionContentProps {
  item: SearchAttraction;
}

export const SelectAttractionContent = ({
  item,
}: SelectAttractionContentProps) => {
  return (
    <div className="flex rounded-t-md items-center">
      <Image
        src={item.images[0].url}
        alt={item.name}
        width={80}
        height={80}
        className="w-20 h-20 object-cover rounded-t-md"
      />
      <span className="px-4">
        <h6 className="font-semibold">
          {item.name.length > 30
            ? item.name.substring(0, 30) + "..."
            : item.name}
        </h6>
      </span>
    </div>
  );
};

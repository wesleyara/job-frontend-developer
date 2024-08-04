import { SearchAttraction } from "~/types";
import Image from "next/image";

interface SelectAttractionContentProps {
  item: SearchAttraction;
}

export const SelectAttractionContent = ({
  item,
}: SelectAttractionContentProps) => {
  return (
    <div className="flex rounded-t-md">
      <Image
        src={item.images[0].url}
        alt={item.name}
        width={80}
        height={80}
        className="w-20 h-20 object-cover rounded-t-md"
      />
      <div className="p-4">
        <h3 className="text-md md:text-lg font-semibold">
          {item.name.length > 30
            ? item.name.substring(0, 30) + "..."
            : item.name}
        </h3>
        <p className="text-sm text-gray-500">
          {item.classifications[0].genre.name.length > 20
            ? item.classifications[0].genre.name.substring(0, 20) + "..."
            : item.classifications[0].genre.name}
        </p>
      </div>
    </div>
  );
};

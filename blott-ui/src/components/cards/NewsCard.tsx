import React from "react";
import Image from "next/image";
import { NewsItem } from "@/api/finnhub";
import { formatTimestampToDateString } from "@/utils/dateUtils";
import { truncateString } from "@/utils/stringUtils";

interface NewsCardProps {
  item: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ item }) => {
  const placeholderImageUrl = `https://placehold.co/600x400/CCCCCC/333333.png?text=No+Image`;

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex md:flex-col gap-2 justify-center items-start md:items-center p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-gray-200 dark:hover:bg-gray-800"
    >
      <Image
        src={item.image || placeholderImageUrl}
        alt={item.headline || "News Image"}
        width={285}
        height={179}
        className="hidden md:block rounded-lg"
        priority={false}
      />

      <Image
        src={item.image || placeholderImageUrl}
        alt={item.headline || "News Image"}
        width={100}
        height={100}
        className="md:hidden h-[100px] w-[100px] rounded-sm object-cover"
        priority={false}
      />
      <div className="flex flex-col items-start justify-between w-full">
        <div className="flex items-center justify-between w-full">
          <h2 className="text-[12px] md:text-base uppercase font-normal text-nowrap text-gray-700 dark:text-gray-300">
            {item.source}
          </h2>
          <h2 className="text-[12px] md:text-base uppercase font-normal text-nowrap text-gray-700 dark:text-gray-300">
            {formatTimestampToDateString(item.datetime)}
          </h2>
        </div>
        <p className="text-gray-900 dark:text-white font-medium text-xl leading-[24px] w-full">
          {truncateString(item.headline, 67)}
        </p>
      </div>
    </a>
  );
};

export default NewsCard;

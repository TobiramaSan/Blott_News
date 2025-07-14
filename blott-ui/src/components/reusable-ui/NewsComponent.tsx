"use client";
import { fetchMarketNews, NewsItem } from "@/api/finnhub";
import React, { useState, useEffect, useMemo } from "react";
import { motion, easeOut } from "framer-motion";
import Loading from "../loading/Loading";
import ErrorMessage from "../error/ErrorMessage";
import NewsCard from "../cards/NewsCard";
import PaginationControls from "./PaginationControls";

const ITEMS_PER_PAGE = 12;

const NewsComponent: React.FC = () => {
  const [allNews, setAllNews] = useState<NewsItem[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getNews = async () => {
      try {
        setError(null);
        setLoading(true);
        const data = await fetchMarketNews();
        setAllNews(data);
      } catch (err: any) {
        console.error("Error in NewsComponent:", err);
        setError(
          err.message || "Something went wrong. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, []);

  const totalPages = useMemo(() => {
    return Math.ceil(allNews.length / ITEMS_PER_PAGE);
  }, [allNews]);

  const currentNewsPageItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return allNews.slice(startIndex, endIndex);
  }, [allNews, currentPage]);

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeOut,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.main
      className="flex flex-col items-start justify-center w-full max-w-screen-xl mx-auto py-10 lg:px-0 gap-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="font-rubik text-[1.75rem] md:text-[3rem] font-bold md:font-medium leading-[32px] tracking-normal uppercase align-middle proportional-nums text-gray-900 dark:text-white"
        variants={itemVariants}
      >
        News
      </motion.h1>

      {loading && (
        <div
          aria-live="polite"
          aria-busy="true"
          className="flex flex-col items-center justify-center w-full"
        >
          {" "}
          <Loading />
        </div>
      )}
      {error && (
        <div role="alert">
          {" "}
          <ErrorMessage message={error} />
        </div>
      )}

      {!loading && !error && (
        <>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-y-16 gap-y-6"
            variants={containerVariants}
          >
            {currentNewsPageItems.length > 0 ? (
              currentNewsPageItems.map((item) => (
                <motion.div key={item.id} variants={itemVariants}>
                  {" "}
                  <NewsCard item={item} />
                </motion.div>
              ))
            ) : (
              <p className="col-span-full text-center text-lg text-gray-600 dark:text-gray-400">
                No news available for this page.
              </p>
            )}
          </motion.div>

          {totalPages > 1 && (
            <motion.div
              variants={itemVariants}
              className="w-full flex justify-center items-center"
            >
              <nav aria-label="News Pagination">
                <PaginationControls
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                  onPreviousPage={handlePreviousPage}
                  onNextPage={handleNextPage}
                />
              </nav>
            </motion.div>
          )}
        </>
      )}
    </motion.main>
  );
};

export default NewsComponent;

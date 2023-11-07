import Categories from "@/components/categories";
import SearchInput from "@/components/search-input";
import prismadb from "@/lib/prismadb";
import { UserButton } from "@clerk/nextjs";
import React from "react";

const HomePage = async () => {
  const categories = await prismadb.category.findMany();
  console.log(categories);
  console.log("hello");

  return (
    <div className="h-full p-4 space-y-2">
      <SearchInput />
      <Categories data={categories} />
    </div>
  );
};

export default HomePage;

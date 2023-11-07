import prismadb from "@/lib/prismadb";
import React from "react";
import CompanionForm from "./components/companion-form";

interface CompanionIdPageProps {
  params: {
    companionId: string;
  };
}

const CompanionIdPage: React.FC<CompanionIdPageProps> = async ({ params }) => {
  const companion = await prismadb.companion.findUnique({
    where: {
      id: params.companionId,
    },
  });

  const categories = await prismadb.category.findMany();
  console.log(categories);

  console.log(companion);

  return <CompanionForm initialData={companion} categories={categories} />;
};

export default CompanionIdPage;

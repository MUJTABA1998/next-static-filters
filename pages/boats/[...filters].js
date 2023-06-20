import { useEffect } from "react";
import BlogController from "../../controllers/blogController";



export async function getStaticPaths() {
  try {
    const blogs = await BlogController.getAllBlogs();
    if (blogs?.data) {
      const filterValues = {
        category: [
          ...new Set(blogs?.data?.map((item) => item?.attributes?.category)),
        ],
        isFeatured: [
          ...new Set(blogs?.data?.map((item) => item?.attributes?.isFeatured)),
        ],
      };

      for (const category of filterValues.category) {
        for (const featured of filterValues.isFeatured) {
          paths.push({
            params: {
              filters: [category ?? "Data Science", featured ?? false],
            },
          });
        }
      }
      return { paths, fallback: true };
    }
  } catch (error) {
    return {paths:[], fallback: true };
  }
 
}

export async function getStaticProps(context) {
  const { filters } = context.params;

  try {
    const res = await BlogController.getFeaturedBlogs(filters[1], filters[0]);
    if (res) {
      return {
        props: {
          filteredData: res,
        },
      };
    }
  } catch (error) {
    return {
      props: {
        filteredData: "Not Found",
      },
    };
  }
}

export default function FilteredPage({ filteredData }) {

  console.log("Filters...", filteredData);

  return (
    <div>
      Filters
      Data Found : {filteredData?.length}
    </div>
  );
}

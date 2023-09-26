import React, { useEffect, useState } from "react";
import axios from "axios";

function CategoryList() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    // Fetch categories from your API or backend endpoint
    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL ?? "http://localhost:6005"
      }/api/categories`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error fetching categories: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  const getCategoryImage = async (categoryId) => {
    try {
      // Make an API request to fetch the image path based on categoryId
      const response = await axios.get(
        `http://localhost:6005/api/category/${categoryId}`
      );
      const imagePath = response.data.imagePath; // Replace with the actual key used in your API response
      return imagePath;
    } catch (error) {
      console.error("Error fetching image path:", error);
      return "/public/default.jpg"; // Provide a default image path or handle the error as needed
    }
  };

  const renderCategoryCards = () => {
    return categories.map((category) => (
      <div key={category.id} className="category-card">
        <h2>{category.name}</h2>
        <p>{category.description}</p>
        {/* Fetch the corresponding cloud image from the Cloud table */}
        <img
          src={getCategoryImage(category.id)} // Use the getCategoryImage function
          alt={`${category.name} Cloud`}
        />
      </div>
    ));
  };

  return <div className="category-list">{renderCategoryCards()}</div>;
}

export default CategoryList;

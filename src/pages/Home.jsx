import Search from "../components/Search";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");

  const handleFetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        `https://mcr-full-stack-backend.vercel.app/get/all/recipe`
      );

      setRecipe(response?.data || []);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  const handleDeletion = async (recipeId) => {
    try {
      await axios.delete(
        `https://mcr-full-stack-backend.vercel.app/delete/recipe/${recipeId}`
      );
    } catch (error) {
      console.log(error);
    } finally {
      handleFetchData();
    }
  };

  const filteredRecipes = recipe?.recipeDetails?.filter((recipe) => {
    return recipe.name.toLowerCase() === search.toLowerCase();
  });

  console.log(recipe.recipeDetails);

  return (
    <section className="container py-4">
      <Search setSearch={setSearch} />

      <div className="row">
        <h1 className="py-4">All Recipes</h1>
        {!isLoading ? (
          filteredRecipes?.length > 0 ? (
            filteredRecipes?.map((recipe) => {
              return (
                <div
                  className="col-sm-6 col-md-4 col-lg-3 mb-2"
                  key={recipe._id}
                  style={{ maxHeight: "25rem" }}
                >
                  <div className="card">
                    <img
                      src={recipe?.imageLink}
                      alt="recipe-image"
                      className="img-fluid"
                      style={{ objectFit: "cover", height: "15rem" }}
                    />
                    <div className="card-body">
                      <h2>{recipe?.name}</h2>
                      <p className="fw-medium">
                        Cusine Type: {recipe.cusineType}
                      </p>
                      <p className="fw-medium">
                        Ingredients:{" "}
                        <Link to={`/recipeDetails/${recipe._id}`}>
                          See Recipe
                        </Link>
                      </p>
                      <p className="fw-medium">
                        Instructions:{" "}
                        <Link to={`/recipeDetails/${recipe._id}`}>
                          See Recipe
                        </Link>
                      </p>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDeletion(recipe._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            recipe?.recipeDetails?.map((recipe) => {
              return (
                <div
                  className="col-sm-6 col-md-4 col-lg-3 mb-2"
                  key={recipe._id}
                  style={{ maxHeight: "25rem" }}
                >
                  <div className="card">
                    <img
                      src={recipe?.imageLink}
                      alt="recipe-image"
                      className="img-fluid"
                      style={{ objectFit: "cover", height: "15rem" }}
                    />
                    <div className="card-body">
                      <h2>{recipe?.name}</h2>
                      <p className="fw-medium">
                        Cusine Type: {recipe.cusineType}
                      </p>
                      <p className="fw-medium">
                        Ingredients:{" "}
                        <Link to={`/recipeDetails/${recipe._id}`}>
                          See Recipe
                        </Link>
                      </p>
                      <p className="fw-medium">
                        Instructions:{" "}
                        <Link to={`/recipeDetails/${recipe._id}`}>
                          See Recipe
                        </Link>
                      </p>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDeletion(recipe._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )
        ) : (
          <h1 className="text-center mt-5">LOADING...</h1>
        )}
      </div>
    </section>
  );
};

export default Home;

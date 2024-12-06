import { useState } from "react";
import axios from "axios";

const AddRecipe = () => {
  const [name, setName] = useState("");
  const [cusineType, setCuisineType] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const addRecipe = await axios.post(
        `https://mcr-full-stack-backend.vercel.app/add/recipe`,
        {
          name,
          cusineType,
          imageLink,
          ingredients,
          instructions,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h1 className="py-4 text-center mt-4">Add Recipe</h1>
        <form className="mx-auto w-50" onSubmit={handleSubmit}>
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <label className="form-label">Cuisine Type:</label>
          <input
            type="text"
            className="form-control"
            name="cusineType"
            onChange={(e) => setCuisineType(e.target.value)}
          />
          <label className="form-label">Image Link:</label>
          <input
            type="text"
            className="form-control"
            name="imageLink"
            onChange={(e) => setImageLink(e.target.value)}
          />
          <label className="form-label">Ingredients:</label>
          <input
            type="text"
            className="form-control"
            name="ingredients"
            onChange={(e) => setIngredients(e.target.value)}
          />
          <label className="form-label">Instructions:</label>
          <input
            type="text"
            className="form-control"
            name="instructions"
            onChange={(e) => setInstructions(e.target.value)}
          />
          <button type="submit" className="btn btn-primary my-4">
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default AddRecipe;

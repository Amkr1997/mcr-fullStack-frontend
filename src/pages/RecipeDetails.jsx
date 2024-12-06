import { useLocation } from "react-router-dom";

const RecipeDetails = () => {
  const { state } = useLocation();

  return (
    <section className="container py-4">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={state?.imageLink}
              className="img-fluid rounded-start"
              alt="recipe-image"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{state?.name}</h3>
              <h4>Ingredients</h4>
              <ul>
                {state?.ingredients.split(", ").map((ingredient, index) => {
                  return <li key={index}>{ingredient}</li>;
                })}
              </ul>
              <h4>Instructions</h4>
              <p className="card-text">{state?.instructions}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeDetails;

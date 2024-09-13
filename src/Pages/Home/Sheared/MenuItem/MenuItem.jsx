const MenuItem = ({ item }) => {
  const { image, price, recipe, name } = item;
  return (
    <div className="flex space-x-4">
      <img
        style={{ borderRadius: "0px 200px 200px 200px" }}
        className="w-[120px]"
        src={image}
        alt=""
      />
      <div className="flex items-center">
        <div>
          <h3 className="uppercase">{name} ------</h3>
          <p>{recipe}</p>
        </div>
        <p className="text-yellow-500">${price}</p>
      </div>
    </div>
  );
};

export default MenuItem;

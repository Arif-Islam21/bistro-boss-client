const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12 mx-auto my-8 text-center">
      <p className="text-yellow-600 my-2">---{subHeading}---</p>
      <p className="text-3xl uppercase border-y-4 py-4">{heading}</p>
    </div>
  );
};

export default SectionTitle;

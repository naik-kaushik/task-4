const MiniCard = ({ value, metric }) => {
  return (
    <div>
      <div className="text-center border rounded-lg px-4 py-4 mx-6 my-6 border-lime-600 ">
        <h6 className="text-4xl text-lime-500 font-bold lg:text-5xl xl:text-6xl ">
          {value}
        </h6>
        <p className="text-sm font-medium tracking-widest text-lime-500 uppercase lg:text-base">
          {metric}
        </p>
      </div>
    </div>
  );
};

export default MiniCard;

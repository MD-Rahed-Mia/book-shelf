const SubCategory = () => {
  return (
    <>
      <div>
        <ul className="w-full flex flex-wrap items-center gap-2 justify-center mt-12">
          <li className="px-3 border  cursor-pointer rounded-md min-w-32 text-center py-2 transition-all hover:bg-slate-300">
            Writer
          </li>
          <li className="px-3 border  cursor-pointer rounded-md min-w-32 text-center py-2 transition-all hover:bg-slate-300">
            Publication
          </li>
          <li className="px-3 border  cursor-pointer rounded-md min-w-32 text-center py-2 transition-all hover:bg-slate-300">
            Popularity{" "}
          </li>
          <li className="px-3 border  cursor-pointer rounded-md min-w-32 text-center py-2 transition-all hover:bg-slate-300">
            History
          </li>
          <li className="px-3 border  cursor-pointer rounded-md min-w-32 text-center py-2 transition-all hover:bg-slate-300">
            Thriller{" "}
          </li>
          <li className="px-3 border  cursor-pointer rounded-md min-w-32 text-center py-2 transition-all hover:bg-slate-300">
            Biographic
          </li>
        </ul>
      </div>
    </>
  );
};
export default SubCategory;
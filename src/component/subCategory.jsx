const SubCategory = () => {
  return (
    <>
      <ul className="w-[90%] md:w-[70%] mx-auto flex flex-wrap items-center justify-center gap-3 mt-5">
        <li className="bg-[#4e6c79] py-2 px-6 text-white rounded-lg cursor-pointer">Novels</li>
        <li className="bg-[#4e6c79] py-2 px-6 text-white rounded-lg cursor-pointer">Educations</li>
        <li className="bg-[#4e6c79] py-2 px-6 text-white rounded-lg cursor-pointer">Kids</li>
        <li className="bg-[#4e6c79] py-2 px-6 text-white rounded-lg cursor-pointer">Coding</li>
        <li className="bg-[#4e6c79] py-2 px-6 text-white rounded-lg cursor-pointer">History</li>
        <li className="bg-[#4e6c79] py-2 px-6 text-white rounded-lg cursor-pointer">Fiction</li>
      </ul>
    </>
  );
};
export default SubCategory;
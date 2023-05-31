import ChevronDown from "../assets/ChevronDown";
import SearchIcon from "../assets/SearchIcon";

const Search: React.FC<
  React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >
> = (props) => {
  return (
    <form
      className={`w-full md:w-4/5 flex mb-2 md:mb-0 justify-center px-4 ${props.className} md:gap-4 md:justify-end`}
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex justify-between w-9/12 md:w-9/12 border border-customGray rounded-s md:rounded border-e-0 md:border-e text-sm ">
        <input
          type="text"
          placeholder="Search..."
          className="p-1 px-2 bg-transparent md:w-full"
        />
        <button className="bg-gray-100 h-full hidden md:flex items-center px-2 text-xs font-normal rounded-e">
          <span className="mr-5">Categories</span>
          <ChevronDown />
        </button>
      </div>
      <button className="bg-brand border-0 rounded-e md:rounded w-3/12 md:w-2/12 flex justify-center items-center ">
        <SearchIcon />
      </button>
    </form>
  );
};

export default Search;

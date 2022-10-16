import GitHubIcon from "@mui/icons-material/GitHub";

const Header = () => {
  return (
    <nav className="sticky top-0 bg-[#4863FE] border-b-2 p-3 mb-5 shadow-2xl">
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <h1 className="text-white text-4xl font-bold">WHYS Articles</h1>
        <a
          href="https://github.com/mrtnprzk/whys-assignment"
          className="text-white"
        >
          <GitHubIcon fontSize="large" />
        </a>
      </div>
    </nav>
  );
};

export default Header;

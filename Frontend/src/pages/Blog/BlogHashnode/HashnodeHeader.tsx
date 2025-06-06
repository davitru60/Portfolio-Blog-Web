import backgroundImage from "../../../assets/header.webp";
import { SearchBar } from "../../../shared/components/ui/SearchBar/SearchBar";

interface HashnodeHeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const HashnodeHeader = (hashnodeHeaderProps:HashnodeHeaderProps) =>{
  const { searchTerm,setSearchTerm } = hashnodeHeaderProps;

    return(
    <div className="mx-auto flex w-full flex-col items-center px-4 pt-14 md:py-10 text-center">
      <div className="relative flex max-w-3xl flex-col items-center rounded-lg p-8">
        <div
          className="absolute inset-0 rounded-full bg-cover bg-center opacity-25 blur-3xl"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            zIndex: 50,
            pointerEvents: "none",
            transform: "scale(0.75)", // Reduce el tamaño visual de la imagen
            transformOrigin: "bottom", // Asegura que la imagen se reduzca desde el centro
          }}
        ></div>
        <h1 className="bg-gradient-text-1 mb-3 text-3xl font-extrabold leading-9 tracking-tight sm:leading-10 md:text-7xl md:leading-normal">
          Artículos
        </h1>
        <h2 className="text-xl font-semibold leading-7 text-gray-600 dark:text-gray-400 md:text-2xl">
          Artículos detallados sobre tecnología
        </h2>
      </div>
       <div className="mt-5 flex w-full max-w-md flex-col items-center gap-2 space-x-4 md:flex-row md:gap-0">
        <SearchBar
          type={"text"}
          placeholder={"Buscar ..."}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></SearchBar>   
      </div>
    </div>
  );
}

export { HashnodeHeader };
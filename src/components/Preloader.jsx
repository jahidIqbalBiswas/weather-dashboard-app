import initialLoadingImg from "../assets/loading.svg";
export default function Preloader({ loadingText }) {
  return (
    <div className="flex items-center justify-center md:justify-start">
      <div>
        <img
          className="w-20 md:w-50 mx-auto md:mx-0"
          src={initialLoadingImg}
          alt="Loading..."
        />
        <p className="text-xl md:text-2xl">{loadingText}</p>
      </div>
    </div>
  );
}

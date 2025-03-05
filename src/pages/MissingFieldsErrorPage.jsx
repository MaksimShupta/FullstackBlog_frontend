import { useNavigate } from "react-router";
const MissingFieldsErrorPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[10rem] font-extrabold lg:text-[16rem] text-transparent bg-gradient-to-r from-accent to-primary bg-clip-text">
        400
      </h1>
      <div className="w-full  ">
        <p className="text-2xl font-bold text-primary flex flex-row justify-center">
          All fields are required.Add a author, a title, a context and a category. 
          <span role="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 text-primary mb-12 ml-2 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.412 15.655 9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457 3 3m5.457 5.457 7.086 7.086m0 0L21 21"
              />
            </svg>
          </span>
        </p>
      </div>
      <button className="btn text-primary" onClick={handleGoBack}>
        Return to safety
      </button>
    </div>
  );
};

export default MissingFieldsErrorPage;

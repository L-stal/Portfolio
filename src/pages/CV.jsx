import pdf from "../assets/LeoStalenhag.pdf";

const CV = () => {
  return (
    <>
      <div className="main-cv" id="cv">
        <div className="shimmer">
          <a href={pdf} download="LeoStalenhag.pdf">
            &gt; Download CV
          </a>
        </div>
      </div>
    </>
  );
};
export default CV;

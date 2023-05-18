import pdf from "../assets/Leo_Stalenhag.pdf";

const CV = () => {
  return (
    <>
      <div className="main-cv">
        <div className="shimmer">
          <a href={pdf} download="Leo_Stalenhag.pdf">
            Download CV
          </a>
        </div>
      </div>
    </>
  );
};
export default CV;

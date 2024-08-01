import cvPdf from "/src/LeoStalenhag.pdf";

const CV = () => {
  return (
    <>
      <div className="main-cv" id="cv">
        <div className="shimmer">
          <a href={cvPdf} target="_blank">
            &gt; Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default CV;

import cvPdf from "/src/LeoStalenhag.pdf";
import OTSPdf from "/src/OptTheShop.pdf";
const CV = () => {
  return (
    <>
      <div className="main-cv" id="cv">
        <div className="shimmer">
          <a href={cvPdf} target="_blank">
            &gt; Resume
          </a>
          <a href={OTSPdf} target="_blank" rel="noopener noreferrer">
            &gt; OptTheShop
            <p>Graduation Project</p>
            /READ/
          </a>
        </div>
      </div>
    </>
  );
};

export default CV;

import OTSPdf from "/src/OptTheShop.pdf";
const Portfolio = () => {
  return (
    <>
      <div className="main-portfolio" id="portfolio">
        <div className="shimmer">
          <a>
            Currently working on:
            <br />
            Hobby Projects / Internship
          </a>
          <a href={OTSPdf} target="_blank" rel="noopener noreferrer">
            &gt; OptTheShop
            <br /> /READ/
          </a>
          <a
            href="https://github.com/lordstimpa/SPA-Game-Project"
            target="_blank"
          >
            &gt; SPA Game
          </a>
          <a href="https://github.com/L-stal/DynamicBonesFix" target="_blank">
            &gt; Unity Script Fix for Dynamic Bones
          </a>
        </div>
      </div>
    </>
  );
};

export default Portfolio;

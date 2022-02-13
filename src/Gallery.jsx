import React from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import "./styles/cart.scss";
import { useSelector } from "react-redux";

const Gallerys = React.memo(function Gallery() {
  const imagesUrl = useSelector((state) => state.getMovieByID.images);

  // const imagesArr = imagesUrl.slice(0, 10).map((item) => {
  //   return {
  //     src: `https://image.tmdb.org/t/p/original${item.file_path}`,
  //   };
  // });



  return (
    <div>
      <SimpleReactLightbox>
        <SRLWrapper>
          {imagesUrl.slice(0, 10).map((item) => (
            <a href={`https://image.tmdb.org/t/p/original${item.file_path}`}>
              <img
                className="images_url"
                src={`https://image.tmdb.org/t/p/original${item.file_path}`}
                alt=""
              />
            </a>
          ))}
        </SRLWrapper>
      </SimpleReactLightbox>
    </div>
  );
});

export default Gallerys;
